import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK) 


export default async function handler(req, res){
    if(req === 'POST'){
        res.json('should be a post request')
        return;
    }

    const {name,email,city,postalcode,country,adress,products} = req.body

    await mongooseConnect()

    let line_items = []
    for( const product of products ){
        const quantity = product.quantity
        if (quantity > 0 ) {
            line_items.push({
                quantity,
                price_data:{
                    currency: 'USD',
                    product_data: {
                        name: product[0].title,
                        },
                    unit_amount:  product[0].price * 100 ,
                } 
            })
        }
    }
    console.log(line_items);

    const orderDoc = await Order.create({
        line_items,name,email,city,postalcode,adress,country,paid:false,
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=true', 
        cancel_url: process.env.PUBLIC_URL + '/cart?canceled=true',
        metadata: {orderId:orderDoc._id.toString()} 
    })

    res.json({
        url:session.url,
    })
}
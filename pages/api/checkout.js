import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require('stripe') 


export default async function handler(req, res){
    if(req === 'POST'){
        res.json('should be a post request')
        return;
    }

    const {name,email,city,postalcode,country,adress,products} = req.body

    await mongooseConnect()
    console.log(products);
    const productsId = products.split(',')
    const uniqueIds = [...new Set(productsId)]
    const productsInfos = await Product.find({_id:uniqueIds})

    let line_items = []
    for( const productId of uniqueIds ){
        const productinfo = productsInfos.find(p => p._id.toString() === productId)
        const quantity = productsId.filter(id => id === productId)?.length || 0 
        if (quantity > 0 && productinfo) {
            line_items.push({
                quantity,
                price_data:{
                    currency: 'USD',
                    product_data: {name: productinfo.title },
                    unit_amount: quantity * productinfo.price,
                } 
            })
        }
    }

    const orderDoc = await Order.create({
        line_items,name,email,city,postalcode,adress,country,paid:false,
    })


}
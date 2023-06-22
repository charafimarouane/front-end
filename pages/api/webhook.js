import { mongooseConnect } from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK) 
import { buffer } from "micro/types/src/lib";

// If you are testing your webhook locally with the Stripe CLI, you can find the
// endpoint's secret by running `stripe listen`. Otherwise, find your
// endpoint's secret in your webhook settings in the Developer Dashboard
const endpointSecret = "whsec_123";

export default async function handler(req, res){
    await mongooseConnect()
    const sig = req.headers['stripe-signature'];

    let event;
  
    try {
      event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
}

export const config = {
    api: {bodyParser: false}
}
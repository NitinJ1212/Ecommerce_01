// routes/paymentRoutes.js
// const express = require("express");
// const stripe = require("../stripe");
import Stripe from "stripe";



// router.post("/create-payment-intent", async (req, res) => {

export const paymentIntent = async (req, res) => {
    console.log("333333333333333333333333333333 called", process.env.STRIPE_SECRET_KEY)
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const { products } = req.body;

        console.log(products)
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.name,
                },
                unit_amount: product.price * 100, // cents
            },
            quantity: product.quantity,
        }));
        console.log(process.env.CLIENT_URL, "client url ------------")

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });
        console.log(session, "session ---------eeeeeeee9999999999")
        res.json({ url: session.url });
    } catch (error) {
        console.log(error, "----------------------erorrrr")
        res.status(500).json({ error: error.message });
    }
}


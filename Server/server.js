import express from "express";
import dotenv from "dotenv";
import stripeConstructor from "stripe";
import cors from "cors";

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const stripe = stripeConstructor(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.items[0].quantity);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.price,
          product_data: {
            name: item.name,
            metadata: item.metaData,
          },
        },
      })),
      cancel_url: `${process.env.CLIENT_URL}`,
      success_url: `${process.env.CLIENT_URL}`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

app.get("/create-checkout-session", (req, res) => {
  res.json({ url: "http://localhost:3080" });
});

app.listen(PORT, () =>
  console.log(`Server runing on port: http://localhost:${process.env.PORT}`)
);

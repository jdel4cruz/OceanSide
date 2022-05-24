import express from "express";
import dotenv from "dotenv";
import stripeConstructor from "stripe";

dotenv.config();

const app = express();
const PORT = 3050;
app.use(express.json());

const stripe = stripeConstructor(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      /* 3 things are needed from each body item
          - Name
          - Price
          - Qty
      */
      // line_items: req.body.items.map(item =>)
    });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

app.get("/create-checkout-session", (req, res) => {
  res.json({ url: "localhost:3050" });
});

app.listen(PORT, () =>
  console.log(`Server runing on port: http://localhost:${PORT}`)
);

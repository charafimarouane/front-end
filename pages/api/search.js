import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  await mongooseConnect();
  const { term } = req.query;

  try {
    const products = await Product.find({
      $or: [
        { title: { $regex: term, $options: "i" } }, // Match products with a title containing the term (case-insensitive)
        { description: { $regex: term, $options: "i" } }, // Match products with a description containing the term (case-insensitive)
      ],
    });
    // console.log(res);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching search results." });
  }
}
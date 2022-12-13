import mongoose from "mongoose";

//for create Table into DB for product
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: {
      type: String,
      default:
        "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png",
    },
    sellerId: { type: String, required: false },
    seller: { type: String, required: true },
    sellerImage: { type: String, required: true },
    link: { type: String, required: true },
    city: { type: String, required: true },
    like: [
      {
        userId: { type: String },
      },
    ],
    whiteList: [
      {
        userId: { type: String },
      },
    ],
    comments: [
      {
        user: { ref: "User", type: mongoose.Schema.Types.ObjectId },
        comment: { type: String },
      },
    ],
  },
  {
    timestamps: true, //for date
  }
);
ProductSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("name")) {
      next();
      return;
    }
    this.slug = this.name.replace(/[^a-zA-Z0-9]/g, "-");
    next();
  } catch (error) {
    throw error;
  }
});
const Product = mongoose.model("Product", ProductSchema);
export default Product;

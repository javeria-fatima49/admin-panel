// import mongoose from "mongoose"

// const OrderSchema = new mongoose.Schema({
//   customerName: {
//     type: String,
//     required: true,
//   },
//   total: {
//     type: Number,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "delivered"],
//     default: "pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// export default mongoose.models.Order || mongoose.model("Order", OrderSchema)






// import { Schema, model, models } from "mongoose"

// const OrderSchema = new Schema({
//   customerName: {
//     type: String,
//     required: true,
//   },
//   total: {
//     type: Number,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "delivered"],
//     default: "pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// export default models.Order || model("Order", OrderSchema)






import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  customerName: String,
  userId: String, // Add this field
  email: String, // Add this field
  total: Number,
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)


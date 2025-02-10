// import { createClient } from "next-sanity"
// import { NextResponse } from "next/server"

// // Admin dashboard Sanity client - same project ID as e-commerce site
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: "2024-02-07",
//   useCdn: false,
// })

// export async function GET() {
//   try {
//     // Fetch all orders from Sanity
//     const query = `*[_type == "order"] | order(createdAt desc) {
//       _id,
//       customer,
//       email,
//       total,
//       status,
//       createdAt,
//       products[]{
//         quantity,
//         product->{
//           _id,
//           name,
//           price,
//           images
//         }
//       }
//     }`

//     const orders = await client.fetch(query)
//     return NextResponse.json(orders)
//   } catch (error) {
//     console.error("Error fetching orders:", error)
//     return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
//   }
// }








// import { connectDB } from '@/lib/mongodb'
// import { NextResponse } from 'next/server'
// import mongoose from 'mongoose'

// // Order Model
// const OrderSchema = new mongoose.Schema({
//   customerName: String,
//   total: Number,
//   status: {
//     type: String,
//     default: 'pending'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// })

// const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)

// export async function GET() {
//   try {
//     await connectDB()
//     const orders = await Order.find({}).sort({ createdAt: -1 })
//     return NextResponse.json({ orders })
//   } catch (error) {
//     return NextResponse.json({ error: 'Error fetching orders' }, { status: 500 })
//   }
// }

// export async function POST(req: Request) {
//   try {
//     await connectDB()
//     const data = await req.json()
//     const order = await Order.create(data)
//     return NextResponse.json({ order })
//   } catch (error) {
//     return NextResponse.json({ error: 'Error creating order' }, { status: 500 })
//   }
// }











// import { connectDB } from "@/lib/mongodb"
// import { NextResponse } from "next/server"
// import mongoose from "mongoose"

// const Order = mongoose.models.Order

// export async function GET() {
//   try {
//     await connectDB()

//     const orders = await Order.find({}).sort({ createdAt: -1 }).lean()

//     console.log("Orders fetched:", orders.length)
//     return NextResponse.json({ orders })
//   } catch (error) {
//     console.error("Error in GET /api/orders:", error)
//     return NextResponse.json({ error: "Failed to fetch orders", details: error.message }, { status: 500 })
//   }
// }

// export async function POST(req: Request) {
//   try {
//     await connectDB()

//     const data = await req.json()
//     console.log("Creating order with data:", data)

//     const order = await Order.create({
//       customerName: data.customerName,
//       total: data.total,
//       status: data.status || "pending",
//     })

//     console.log("Order created:", order)
//     return NextResponse.json({ order })
//   } catch (error) {
//     console.error("Error in POST /api/orders:", error)
//     return NextResponse.json({ error: "Failed to create order", details: error.message }, { status: 500 })
//   }
// }










// import { connectDB } from "@/lib/mongodb"
// import { NextResponse } from "next/server"
// import Order from "../../../models/Orders" // ✅ Ensure the model is imported

// export async function GET() {
//   try {
//     await connectDB()
//     const orders = await Order.find({}).sort({ createdAt: -1 }).lean()
//     console.log("Orders fetched:", orders.length)
//     return NextResponse.json({ orders })
//   } catch (error) {
//     console.error("Error in GET /api/order:", error)
//     return NextResponse.json(
//       { error: "Failed to fetch orders", details: (error as Error).message },
//       { status: 500 }
//     )
//   }
// }

// export async function POST(req: Request) {
//   try {
//     await connectDB()

//     const data = await req.json().catch(() => null)
//     if (!data) {
//       return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
//     }

//     console.log("Creating order with data:", data)

//     const order = await Order.create({
//       customerName: data.customerName,
//       total: data.total,
//       status: data.status || "pending",
//     })

//     console.log("Order created:", order)
//     return NextResponse.json({ order })
//   } catch (error) {
//     console.error("Error in POST /api/order:", error)
//     return NextResponse.json(
//       { error: "Failed to create order", details: (error as Error).message },
//       { status: 500 }
//     )
//   }
// }






// import { connectDB } from "@/lib/mongodb"
// import { NextResponse } from "next/server"
// import mongoose from "mongoose"

// // Define the Order Schema
// const OrderSchema = new mongoose.Schema({
//   customerName: String,
//   total: Number,
//   status: {
//     type: String,
//     default: "pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// // Get the Order model (creates it if it doesn't exist)
// const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema)

// export async function GET() {
//   try {
//     console.log("Connecting to MongoDB...")
//     await connectDB()
//     console.log("Connected! Fetching orders...")

//     const orders = await Order.find({}).sort({ createdAt: -1 })
//     console.log(`Found ${orders.length} orders`)

//     return NextResponse.json({ orders })
//   } catch (error) {
//     console.error("Error in GET /api/order:", error)
//     return NextResponse.json({ error: "Failed to fetch orders", details: error.message }, { status: 500 })
//   }
// }

// export async function POST(req: Request) {
//   try {
//     console.log("Connecting to MongoDB...")
//     await connectDB()
//     console.log("Connected! Creating order...")

//     const data = await req.json()
//     const order = await Order.create(data)
//     console.log("Order created:", order)

//     return NextResponse.json({ order })
//   } catch (error) {
//     console.error("Error in POST /api/orders:", error)
//     return NextResponse.json({ error: "Failed to create order", details: error.message }, { status: 500 })
//   }
// }








// import { connectDB } from "@/lib/mongodb"
// import { NextResponse } from "next/server"
// import mongoose from "mongoose"

// // Define the Order Schema
// const OrderSchema = new mongoose.Schema({
//   customerName: String,
//   total: Number,
//   status: {
//     type: String,
//     default: "pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// // Get the Order model (creates it if it doesn't exist)
// const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema)

// export async function GET() {
//   try {
//     console.log("Connecting to MongoDB...")
//     await connectDB()
//     console.log("Connected! Fetching orders...")

//     const orders = await Order.find({}).sort({ createdAt: -1 })
//     console.log(`Found ${orders.length} orders`)

//     return NextResponse.json({ orders })
//   } catch (error: any) {  // 👈 Fix applied here
//     console.error("Error in GET /api/order:", error)
//     return NextResponse.json({ 
//       error: "Failed to fetch orders", 
//       details: error instanceof Error ? error.message : String(error) 
//     }, { status: 500 })
//   }
// }

// export async function POST(req: Request) {
//   try {
//     console.log("Connecting to MongoDB...")
//     await connectDB()
//     console.log("Connected! Creating order...")

//     const data = await req.json()
//     const order = await Order.create(data)
//     console.log("Order created:", order)

//     return NextResponse.json({ order })
//   } catch (error: any) {  // 👈 Fix applied here
//     console.error("Error in POST /api/orders:", error)
//     return NextResponse.json({ 
//       error: "Failed to create order", 
//       details: error instanceof Error ? error.message : String(error) 
//     }, { status: 500 })
//   }
// }







// import { connectDB } from '@/lib/mongodb'
// import { NextResponse } from 'next/server'
// import mongoose from 'mongoose'

// // Define Order Schema
// const OrderSchema = new mongoose.Schema({
//   customerName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   total: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     default: 'pending'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// })

// // Get or create the Order model
// const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)

// export async function POST(req: Request) {
//   try {
//     // Connect to MongoDB
//     await connectDB()
    
//     // Parse the request body
//     const body = await req.json()
//     console.log('Received order data:', body)

//     // Validate required fields
//     if (!body.customerName || !body.email || !body.total) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       )
//     }

//     // Create the order
//     const order = await Order.create({
//       customerName: body.customerName,
//       email: body.email,
//       total: body.total,
//       status: 'pending'
//     })

//     console.log('Order created successfully:', order)

//     return NextResponse.json({ 
//       success: true, 
//       order 
//     })

//   } catch (error: any)  {
//     console.error('Error creating order:', error)
//     return NextResponse.json(
//       { error: 'Failed to create order', details: error.message },
//       { status: 500 }
//     )
//   }
// }

// export async function GET() {
//   try {
//     await connectDB()
//     const orders = await Order.find({}).sort({ createdAt: -1 })
//     return NextResponse.json({ orders })
//   } catch (error: any)  {
//     console.error('Error fetching orders:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch orders', details: error.message },
//       { status: 500 }
//     )
//   }
// }











import { connectDB } from "@/lib/mongodb"
import { NextResponse } from "next/server"
import mongoose from "mongoose"

// Define Order Schema
const OrderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
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

// Initialize Order model
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema)

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type")
  return response
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 200 }))
}

export async function POST(request: Request) {
  try {
    await connectDB()

    const data = await request.json()
    console.log("Received order data:", data)

    const order = await Order.create(data)
    console.log("Created order:", order)

    return corsResponse(NextResponse.json({ success: true, order }))
  } catch (error) {
    console.error("API Error:", error)
    return corsResponse(NextResponse.json({ error: "Failed to create order" }, { status: 500 }))
  }
}

export async function GET() {
  try {
    await connectDB()
    const orders = await Order.find().sort({ createdAt: -1 })
    return corsResponse(NextResponse.json({ orders }))
  } catch (error) {
    console.error("API Error:", error)
    return corsResponse(NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 }))
  }
}


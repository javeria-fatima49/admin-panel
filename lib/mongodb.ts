// import mongoose from "mongoose"

// const MONGODB_URI = process.env.MONGODB_URI

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable")
// }

// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI!).then((mongoose) => {
//       return mongoose
//     })
//   }

//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.conn
// }

// export default dbConnect




// import { MongoClient, ServerApiVersion } from "mongodb"

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:ZmJr2nULkiR2eLmP@shop-co.ddmu5.mongodb.net/Shop-co"

// let cached = global.mongo

// if (!cached) {
//   cached = global.mongo = { conn: null, promise: null }
// }

// export async function connectDB() {
//   if (cached.conn) return cached.conn

//   cached.promise = MongoClient.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   })
//   cached.conn = await cached.promise

//   return cached.conn
// }




// import { MongoClient, ServerApiVersion } from "mongodb";

// const MONGO_URI =
//   process.env.MONGO_URI ||
//   "mongodb+srv://admin:ZmJr2nULkiR2eLmP@shop-co.ddmu5.mongodb.net/Shop-co";

// // TypeScript global declaration
// declare global {
//   var mongo: { conn: MongoClient | null; promise: Promise<MongoClient> | null } | undefined;
// }

// let cached = global.mongo || { conn: null, promise: null };
// global.mongo = cached;

// export async function connectDB() {
//   if (cached.conn) return cached.conn;

//   cached.promise = MongoClient.connect(MONGO_URI, {
//     serverApi: ServerApiVersion.v1, // ✅ Only use this
//   });

//   cached.conn = await cached.promise;
//   return cached.conn;
// }




// import mongoose from "mongoose"

// if (!mongoose.models.Order) {
//   mongoose.model(
//     "Order",
//     new mongoose.Schema({
//       customerName: String,
//       total: Number,
//       status: {
//         type: String,
//         default: "pending",
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//       },
//     }),
//   )
// }

// export async function connectDB() {
//   try {
//     if (mongoose.connection.readyState >= 1) {
//       return
//     }

//     const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/admin-dashboard"
//     await mongoose.connect(uri)
//     console.log("MongoDB connected successfully")
//   } catch (error) {
//     console.error("MongoDB connection error:", error)
//     throw error
//   }
// }













// import mongoose from "mongoose"

// const MONGODB_URI = process.env.MONGO_URI

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable")
// }

// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// export async function connectDB() {
//   if (cached.conn) {
//     console.log("Using cached connection")
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }

//     console.log("Connecting to MongoDB...")
//     cached.promise = mongoose
//       .connect(MONGODB_URI!, opts)
//       .then((mongoose) => {
//         console.log("Connected to MongoDB!")
//         return mongoose
//       })
//       .catch((error) => {
//         console.error("MongoDB connection error:", error)
//         throw error
//       })
//   }

//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.conn
// }










// import mongoose from "mongoose"

// const MONGODB_URI = process.env.MONGO_URI

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable")
// }

// // 👇 TypeScript ko batana ke global.mongoose exist karega
// declare global {
//   var mongoose: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null }
// }

// global.mongoose = global.mongoose || { conn: null, promise: null }

// export async function connectDB() {
//   if (global.mongoose.conn) {
//     console.log("Using cached connection")
//     return global.mongoose.conn
//   }

//   if (!global.mongoose.promise) {
//     const opts = {
//       bufferCommands: false,
//     }

//     console.log("Connecting to MongoDB...")
//     global.mongoose.promise = mongoose
//       .connect(MONGODB_URI!, opts)
//       .then((mongoose) => {
//         console.log("Connected to MongoDB!")
//         return mongoose.connection
//       })
//       .catch((error) => {
//         console.error("MongoDB connection error:", error)
//         throw error
//       })
//   }

//   try {
//     global.mongoose.conn = await global.mongoose.promise
//   } catch (e) {
//     global.mongoose.promise = null
//     throw e
//   }

//   return global.mongoose.conn
// }







import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

interface GlobalWithMongoose {
  mongoose: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  } | null
}

declare const global: GlobalWithMongoose

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached?.conn) {
    console.log("Using existing MongoDB connection")
    return cached.conn
  }

  if (!cached?.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }

    console.log("Creating new MongoDB connection")
    cached!.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        console.log("MongoDB connected successfully")
        return mongoose
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error)
        cached!.promise = null
        throw error
      })
  }

  try {
    cached!.conn = await cached!.promise
  } catch (e) {
    cached!.promise = null
    throw e
  }

  return cached!.conn
}


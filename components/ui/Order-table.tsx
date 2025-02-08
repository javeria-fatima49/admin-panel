import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { connectDB } from "@/lib/mongodb"
import mongoose from "mongoose"

// Order Model (you can move this to a separate file)
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

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema)

async function getOrders() {
  try {
    await connectDB()
    return await Order.find({}).sort({ createdAt: -1 })
  } catch (error) {
    console.error("Failed to fetch orders:", error)
    return []
  }
}

export default async function Home() {
  const orders = await getOrders()

  return (
    <div className="p-4 w-full flx justify-center items-center">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{orders.length}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${orders.reduce((sum, order) => sum + (order.total || 0), 0)}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pending Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{orders.filter((order) => order.status === "pending").length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Orders Table */}
          <Card >
            <CardHeader>
              <CardTitle className="-mt-9">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              {orders.length === 0 ? (
                <div className="text-center py-4 text-gray-500">No orders yet. Be the first to place an order!</div>
              ) : (
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-gray-50">
                      <tr>
                        <th className="px-6 py-3">Order ID</th>
                        <th className="px-6 py-3">Customer</th>
                        <th className="px-6 py-3">Total</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order._id.toString()} className="bg-white border-b">
                          <td className="px-6 py-4">#{order._id.toString().slice(-4)}</td>
                          <td className="px-6 py-4">{order.customerName}</td>
                          <td className="px-6 py-4">${order.total}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                order.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}



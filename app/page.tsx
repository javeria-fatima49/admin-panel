import { client } from "../sanity/lib/client"
// import DashboardLayout from "../components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function fetchDashboardData() {
  const users = await client.fetch(`*[_type == "order"]`)
  const totalCustomers = users.length
  const totalOrders = users.reduce((sum: any, user: { orders: any }) => sum + (user.orders || 0), 0)
  const totalRevenue = users.reduce((sum: any, user: { totalSpent: any }) => sum + (user.totalSpent || 0), 0)
  const conversionRate = (totalOrders / totalCustomers) * 100

  return {
    totalRevenue,
    totalOrders,
    totalCustomers,
    conversionRate,
  }
}

export default async function DashboardPage() {
  const data = await fetchDashboardData()

  return (
    <div>
    {/* // <DashboardLayout> */}
      <h1 className="text-2xl font-semibold mb-4">E-commerce Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${data.totalRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalOrders}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalCustomers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.conversionRate.toFixed(2)}%</div>
          </CardContent>
        </Card>
      </div>
      </div>
  )
}

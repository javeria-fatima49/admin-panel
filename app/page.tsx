// import { client } from "../sanity/lib/client"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// // 1️⃣ Proper Order Interface Define Karain
// interface Order {
//   _id: string
//   orders: number
//   totalSpent: number
// }

// // 2️⃣ Function ke andar Types ka Use Karen
// async function fetchDashboardData(): Promise<{
//   totalRevenue: number
//   totalOrders: number
//   totalCustomers: number
//   conversionRate: number
// }> {
//   const users: Order[] = await client.fetch(`*[_type == "order"]`)

//   const totalCustomers = users.length
//   const totalOrders = users.reduce((sum, user) => sum + (user.orders || 0), 0)
//   const totalRevenue = users.reduce((sum, user) => sum + (user.totalSpent || 0), 0)
//   const conversionRate = totalCustomers > 0 ? (totalOrders / totalCustomers) * 100 : 0

//   return {
//     totalRevenue,
//     totalOrders,
//     totalCustomers,
//     conversionRate,
//   }
// }

// export default async function DashboardPage() {
//   const data = await fetchDashboardData()

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-4">E-commerce Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">${data.totalRevenue.toFixed(2)}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Orders</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{data.totalOrders}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Customers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{data.totalCustomers}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{data.conversionRate.toFixed(2)}%</div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
















import { client } from "../sanity/lib/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 1️⃣ Define the Order interface
interface Order {
  _id: string;
  orders: number;
  totalSpent: number;
}

// 2️⃣ Define the return type for fetchDashboardData
interface DashboardData {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  conversionRate: number;
}

// 3️⃣ Fetch data from Sanity and calculate metrics
async function fetchDashboardData(): Promise<DashboardData> {
  try {
    const users = await client.fetch<Order[]>(`*[_type == "order"]`);

    const totalCustomers = users.length;
    const totalOrders = users.reduce((sum, user) => sum + (user.orders || 0), 0);
    const totalRevenue = users.reduce((sum, user) => sum + (user.totalSpent || 0), 0);
    const conversionRate = totalCustomers > 0 ? (totalOrders / totalCustomers) * 100 : 0;

    return {
      totalRevenue,
      totalOrders,
      totalCustomers,
      conversionRate,
    };
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    // Return default values in case of an error
    return {
      totalRevenue: 0,
      totalOrders: 0,
      totalCustomers: 0,
      conversionRate: 0,
    };
  }
}

export default async function DashboardPage() {
  const data = await fetchDashboardData();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">E-commerce Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${data.totalRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>

        {/* Total Orders Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalOrders}</div>
          </CardContent>
        </Card>

        {/* Total Customers Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalCustomers}</div>
          </CardContent>
        </Card>

        {/* Conversion Rate Card */}
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
  );
}
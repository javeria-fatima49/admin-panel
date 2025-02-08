// /**
//  * eslint-disable @next/next/no-img-element
//  *
//  * @format
//  */

// /**
//  * eslint-disable @next/next/no-img-element
//  *
//  * @format
//  */

// /** @format */
// "use client";

// import { DataTable } from "@/components/DataTable";
// import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
// import PageTitle from "@/components/PageTitle";
// import { cn } from "@/lib/utils";

// type Props = {};
// type Payment = {
//   order: string;
//   status: string;
//   lastOrder: string;
//   method: string;
// };

// const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "order",
//     header: "Order"
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       return (
//         <div
//           className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
//             "bg-red-200": row.getValue("status") === "Pending",
//             "bg-orange-200": row.getValue("status") === "Processing",
//             "bg-green-200": row.getValue("status") === "Completed"
//           })}
//         >
//           {row.getValue("status")}
//         </div>
//       );
//     }
//   },
//   {
//     accessorKey: "lastOrder",
//     header: "Last Order"
//   },
//   {
//     accessorKey: "method",
//     header: "Method"
//   }
// ];

// const data: Payment[] = [
//   {
//     order: "ORD001",
//     status: "Pending",
//     lastOrder: "2023-01-15",
//     method: "Credit Card"
//   },
//   {
//     order: "ORD002",
//     status: "Processing",
//     lastOrder: "2023-02-20",
//     method: "PayPal"
//   },
//   {
//     order: "ORD003",
//     status: "Completed",
//     lastOrder: "2023-03-10",
//     method: "Stripe"
//   },
//   {
//     order: "ORD004",
//     status: "Pending",
//     lastOrder: "2023-04-05",
//     method: "Venmo"
//   },
//   {
//     order: "ORD005",
//     status: "Completed",
//     lastOrder: "2023-05-12",
//     method: "Bank Transfer"
//   },
//   {
//     order: "ORD006",
//     status: "Processing",
//     lastOrder: "2023-06-18",
//     method: "Apple Pay"
//   },
//   {
//     order: "ORD007",
//     status: "Completed",
//     lastOrder: "2023-07-22",
//     method: "Google Pay"
//   },
//   {
//     order: "ORD008",
//     status: "Pending",
//     lastOrder: "2023-08-30",
//     method: "Cryptocurrency"
//   },
//   {
//     order: "ORD009",
//     status: "Processing",
//     lastOrder: "2023-09-05",
//     method: "Alipay"
//   },
//   {
//     order: "ORD010",
//     status: "Completed",
//     lastOrder: "2023-10-18",
//     method: "WeChat Pay"
//   },
//   {
//     order: "ORD011",
//     status: "Pending",
//     lastOrder: "2023-11-25",
//     method: "Square Cash"
//   },
//   {
//     order: "ORD012",
//     status: "Completed",
//     lastOrder: "2023-12-08",
//     method: "Zelle"
//   },
//   {
//     order: "ORD013",
//     status: "Processing",
//     lastOrder: "2024-01-15",
//     method: "Stripe"
//   },
//   {
//     order: "ORD014",
//     status: "Completed",
//     lastOrder: "2024-02-20",
//     method: "PayPal"
//   },
//   {
//     order: "ORD015",
//     status: "Pending",
//     lastOrder: "2024-03-30",
//     method: "Credit Card"
//   }
// ];

// export default function OrdersPage({}: Props) {
//   return (
//     <div className="flex flex-col gap-5  w-full">
//       <PageTitle title="Orders" />
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }


// import { useEffect, useState } from "react";

// interface Order {
//   _id: string;
//   user: string;
//   email: string;
//   products: string[];
//   total: number;
//   status: string;
// }

// export default function OrdersPage() {
//   const [order, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     async function fetchOrders() {
//       const res = await fetch("/api/getOrders");
//       const data: Order[] = await res.json();
//       setOrders(data);
//     }
//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold">Orders</h1>
//       <ul>
//         {order.map((order) => (
//           <li key={order._id} className="border p-3 my-2 text-amber-800">
//             <p><strong>User:</strong> {order.user} ({order.email})</p>
//             <p><strong>Products:</strong> {order.products.join(", ")}</p>
//             <p><strong>Total:</strong> ${order.total}</p>
//             <p><strong>Status:</strong> {order.status}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }











// import { useEffect, useState } from "react";

// interface Order {
//   _id: string;
//   user: string;
//   email: string;
//   products: string[];
//   total: number;
//   status: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchOrders() {
//       try {
//         const res = await fetch("/api/getOrders");
//         if (!res.ok) {
//           throw new Error("Failed to fetch Orders");
//         }
//         const data: Order[] = await res.json();
//         setOrders(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchOrders();
//   }, []);

//   if (loading) return <p className="p-5 text-blue-500">Loading orders...</p>;
//   if (error) return <p className="p-5 text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold">Orders</h1>
//       {orders.length === 0 ? (
//         <p className="text-gray-600">No orders found.</p>
//       ) : (
//         <ul>
//           {orders.map((order) => (
//             <li key={order._id} className="border p-3 my-2 text-amber-800">
//               <p><strong>User:</strong> {order.user} ({order.email})</p>
//               <p><strong>Products:</strong> {order.products.join(", ")}</p>
//               <p><strong>Total:</strong> ${order.total}</p>
//               <p><strong>Status:</strong> {order.status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }









// import { client } from "../../sanity/lib/client"
// // import DashboardLayout from "../components/layout"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// // Define the Order interface
// interface Order {
//   orderNumber: string
//   customerEmail: string
//   totalAmount: number
//   status: string
//   createdAt: string
// }

// async function fetchOrders(): Promise<Order[]> {
//   return client.fetch(`
//     *[_type == "order"] | order(createdAt desc) {
//       orderNumber,
//       "customerEmail": customer->email,
//       totalAmount,
//       status,
//       createdAt
//     }
//   `)
// }

// export default async function OrdersPage() {
//   const orders: Order[] = await fetchOrders()

//   return (
//     <div>

//       <h1 className="text-2xl font-semibold mb-4">Orders</h1>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Order Number</TableHead>
//             <TableHead>Customer</TableHead>
//             <TableHead>Total Amount</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Date</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {orders.map((order: Order) => (
//             <TableRow key={order.orderNumber}>
//               <TableCell>{order.orderNumber}</TableCell>
//               <TableCell>{order.customerEmail}</TableCell>
//               <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
//               <TableCell>{order.status}</TableCell>
//               <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//     </div>
//   )
// }













// // import { client } from "@/lib/sanity"
// // import DashboardLayout from "../components/layout"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// // Define the Order interface
// interface Order {
//   orderNumber: string
//   customerEmail: string
//   totalAmount: number
//   status: string
//   createdAt: string
// }

// async function fetchOrders(): Promise<Order[]> {
//   return client.fetch(`
//     *[_type == "order"] | order(createdAt desc) {
//       orderNumber,
//       "customerEmail": customer->email,
//       totalAmount,
//       status,
//       createdAt
//     }
//   `)
// }

// export default async function OrdersPage() {
//   const orders: Order[] = await fetchOrders()

//   return (
//     <div>

//       <h1 className="text-2xl font-semibold mb-4">Orders</h1>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Order Number</TableHead>
//             <TableHead>Customer</TableHead>
//             <TableHead>Total Amount</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Date</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {orders.map((order: Order) => (
//             <TableRow key={order.orderNumber}>
//               <TableCell>{order.orderNumber}</TableCell>
//               <TableCell>{order.customerEmail}</TableCell>
//               <TableCell>${order.totalAmount ? order.totalAmount.toFixed(2) : "0.00"}</TableCell>
//               <TableCell>{order.status}</TableCell>
//               <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     {/* </DashboardLayout> */}
//     </div>
//   )
// }





import  AdminDashboard  from "../../components/ui/Order-table"

export default function OrdersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customer Orders</h1>
      <  AdminDashboard/>
    </div>
  )
}


// // export default {
// //     name: 'order',
// //     title: 'Order',
// //     type: 'document',
// //     fields: [
// //       {
// //         name: 'orderNumber',
// //         title: 'Order Number',
// //         type: 'string',
// //       },
// //       {
// //         name: 'customer',
// //         title: 'Customer',
// //         type: 'reference',
// //         to: [{ type: 'user' }],
// //       },
// //       {
// //         name: 'items',
// //         title: 'Items',
// //         type: 'array',
// //         of: [
// //           {
// //             type: 'object',
// //             fields: [
// //               { name: 'product', title: 'Product', type: 'string' },
// //               { name: 'quantity', title: 'Quantity', type: 'number' },
// //               { name: 'price', title: 'Price', type: 'number' },
// //             ],
// //           },
// //         ],
// //       },
// //       {
// //         name: 'totalAmount',
// //         title: 'Total Amount',
// //         type: 'number',
// //       },
// //       {
// //         name: 'status',
// //         title: 'Status',
// //         type: 'string',
// //         options: {
// //           list: [
// //             { title: 'Pending', value: 'pending' },
// //             { title: 'Processing', value: 'processing' },
// //             { title: 'Shipped', value: 'shipped' },
// //             { title: 'Delivered', value: 'delivered' },
// //           ],
// //         },
// //       },
// //       {
// //         name: 'createdAt',
// //         title: 'Created At',
// //         type: 'datetime',
// //       },
// //     ],
// //   }







// import { defineField, defineType } from "sanity";

// export default defineType({
//   name: "order",
//   title: "Orders",
//   type: "document",
//   fields: [
//     defineField({
//       name: "user",
//       title: "User",
//       type: "string",
//     }),
//     defineField({
//       name: "email",
//       title: "Email",
//       type: "string",
//     }),
//     defineField({
//       name: "products",
//       title: "Products",
//       type: "array",
//       of: [{ type: "string" }],
//     }),
//     defineField({
//       name: "total",
//       title: "Total Price",
//       type: "number",
//     }),
//     defineField({
//       name: "status",
//       title: "Status",
//       type: "string",
//       options: {
//         list: ["Pending", "Processing", "Completed"],
//       },
//     }),
//   ],
// });









// export default {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//       {
//         name: 'customer',
//         type: 'string',
//         title: 'Customer Name'
//       },
//       {
//         name: 'email',
//         type: 'string',
//         title: 'Email'
//       },

//       {
//         name: 'total',
//         type: 'number',
//         title: 'Total Price'
//       },
//       {
//         name: 'status',
//         type: 'string',
//         title: 'Status'
//       },
//       {
//         name: 'createdAt',
//         type: 'datetime',
//         title: 'Created At'
//       }
//     ]
//   }
  







// export default {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//       {
//         name: 'customer',
//         type: 'string',
//         title: 'Customer Name'
//       },
//       {
//         name: 'email',
//         type: 'string',
//         title: 'Email'
//       },
//       {
//     name: 'products',
//     type: 'array',
//     title: 'Products',
//     of: [
//       {
//         type: 'object',
//         fields: [
//           { name: 'quantity', type: 'number', title: 'Quantity' },
//           {
//             name: 'product',
//             type: 'reference',
//             to: [{ type: 'product' }] // Make sure "product" type exists in Sanity
//           }
//         ]
//       }
//     ]
//   }
//   ]
//   }




export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "products",
        title: "Products",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "product",
                title: "Product",
                type: "reference",
                to: [{ type: "product" }], // Yeh confirm karo ke "product" schema define hai
              },
              {
                name: "quantity",
                title: "Quantity",
                type: "number",
              },
            ],
          },
        ],
      },
    ],
  };
  
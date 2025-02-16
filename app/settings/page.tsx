// "use client";

// import { DataTable } from "@/components/DataTable";
// import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
// import PageTitle from "@/components/PageTitle";

// interface Setting {
//   category: string;
//   value: string | number | boolean;
// }

// const columns: ColumnDef<Setting>[] = [
//   {
//     accessorKey: "category",
//     header: "Category"
//   },
//   {
//     accessorKey: "value",
//     header: "Value"
//   }
// ];
// const data: Setting[] = [
//   {
//     category: "Account",
//     value: true
//   },
//   {
//     category: "Notifications",
//     value: false
//   },
//   {
//     category: "Language",
//     value: "English"
//   },
//   {
//     category: "Theme",
//     value: "Dark"
//   }
// ];

// export default function SettingsPage() {
//   return (
//     <div className="flex flex-col gap-5  w-full">
//       <PageTitle title="Settings" />
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }





"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

interface Setting {
  category: "Account" | "Notifications" | "Language" | "Theme";
  value: string | number | boolean;
}

const columns: ColumnDef<Setting, string | number | boolean>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value"
  }
];

const data: Setting[] = [
  {
    category: "Account",
    value: true
  },
  {
    category: "Notifications",
    value: false
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Theme",
    value: "Dark"
  }
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

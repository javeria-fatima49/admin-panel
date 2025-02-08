// import Link from "next/link"
// import { Home, Package, ShoppingCart, BarChart } from "lucide-react"
// import type React from "react" // Added import for React

// const SidebarItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
//   <Link href={href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
//     {children}
//   </Link>
// )

// export default function Sidebar() {
//   return (
//     <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
//       <h1 className="text-2xl font-semibold text-center">Admin Dashboard</h1>
//       <nav>
//         <SidebarItem href="/">
//           <Home className="mr-4" />
//           Dashboard
//         </SidebarItem>
//         <SidebarItem href="/settings">
//           <Package className="mr-4" />
//           Setting
//         </SidebarItem>
//         <SidebarItem href="/orders">
//           <ShoppingCart className="mr-4" />
//           Orders
//         </SidebarItem>
//         <SidebarItem href="/users">
//           <BarChart className="mr-4" />
//           Analytics
//         </SidebarItem>
//       </nav>
//     </div>
//   )
// }




import Link from "next/link";
import { Home, Package, ShoppingCart, BarChart } from "lucide-react";
import type React from "react";

// Define props for SidebarItem
interface SidebarItemProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode; // Optional icon prop
  className?: string; // Optional className for custom styling
}

// SidebarItem component
const SidebarItem = ({ href, children, icon, className }: SidebarItemProps) => (
  <Link
    href={href}
    className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 ${className}`}
    aria-label={typeof children === "string" ? children : "Sidebar Item"} // Improve accessibility
  >
    {icon && <span className="mr-4">{icon}</span>} {/* Render icon if provided */}
    {children}
  </Link>
);

// Main Sidebar component
export default function Sidebar() {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">Admin Dashboard</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <SidebarItem href="/" icon={<Home className="w-5 h-5" />}>
              Dashboard
            </SidebarItem>
          </li>
          <li>
            <SidebarItem href="/settings" icon={<Package className="w-5 h-5" />}>
              Settings
            </SidebarItem>
          </li>
          <li>
            <SidebarItem href="/orders" icon={<ShoppingCart className="w-5 h-5" />}>
              Orders
            </SidebarItem>
          </li>
          <li>
            <SidebarItem href="/analytics" icon={<BarChart className="w-5 h-5" />}>
              Analytics
            </SidebarItem>
          </li>
        </ul>
      </nav>
    </div>
  );
}
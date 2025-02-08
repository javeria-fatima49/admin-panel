import Link from "next/link"
import { Home, Package, ShoppingCart, Users, BarChart } from "lucide-react"
import type React from "react" // Added import for React

const SidebarItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
    {children}
  </Link>
)

export default function Sidebar() {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">Admin Dashboard</h1>
      <nav>
        <SidebarItem href="/">
          <Home className="mr-4" />
          Dashboard
        </SidebarItem>
        <SidebarItem href="/settings">
          <Package className="mr-4" />
          Setting
        </SidebarItem>
        <SidebarItem href="/orders">
          <ShoppingCart className="mr-4" />
          Orders
        </SidebarItem>
        <SidebarItem href="/users">
          <BarChart className="mr-4" />
          Analytics
        </SidebarItem>
      </nav>
    </div>
  )
}


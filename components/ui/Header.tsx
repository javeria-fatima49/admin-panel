import { Bell, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Welcome, Admin</h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}


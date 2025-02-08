// "use client";

// import { useState } from "react";
// import { Nav } from "./ui/nav";

// import {
//   ShoppingCart,
//   LayoutDashboard,
//   UsersRound,
//   Settings,
//   ChevronRight
// } from "lucide-react";
// import { Button } from "./ui/button";

// import { useWindowWidth } from "@react-hook/window-size";

// export default function SideNavbar() {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const onlyWidth = useWindowWidth();
//   const mobileWidth = onlyWidth < 768;

//   function toggleSidebar() {
//     setIsCollapsed(!isCollapsed);
//   }

//   return (
//     <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
//       {!mobileWidth && (
//         <div className="absolute right-[-20px] top-7">
//           <Button
//             onClick={toggleSidebar}
//             variant="secondary"
//             className=" rounded-full p-2"
//           >
//             <ChevronRight />
//           </Button>
//         </div>
//       )}
//       <Nav
//         isCollapsed={mobileWidth ? true : isCollapsed}
//         links={[
//           {
//             title: "Dashboard",
//             href: "/",
//             icon: LayoutDashboard,
//             variant: "default"
//           },
//           {
//             title: "Users",
//             href: "/users",
//             icon: UsersRound,
//             variant: "ghost"
//           },
//           {
//             title: "Ordrs",
//             href: "/orders",
//             icon: ShoppingCart,
//             variant: "ghost"
//           },
//           {
//             title: "Settings",
//             href: "/settings",
//             icon: Settings,
//             variant: "ghost"
//           }
//         ]}
//       />
//     </div>
//   );
// }






"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  LucideIcon, // Import LucideIcon type
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

// Define the type for a single link
interface NavLink {
  title: string;
  href: string;
  icon: LucideIcon; // Use LucideIcon for the icon prop
  variant: "default" | "ghost";
}

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const isMobile = onlyWidth < 768;

  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Define the links for the Nav component
  const links: NavLink[] = [
    {
      title: "Dashboard",
      href: "/",
      icon: LayoutDashboard, // This is a LucideIcon
      variant: "default",
    },
    {
      title: "Users",
      href: "/users",
      icon: UsersRound, // This is a LucideIcon
      variant: "ghost",
    },
    {
      title: "Orders",
      href: "/orders",
      icon: ShoppingCart, // This is a LucideIcon
      variant: "ghost",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings, // This is a LucideIcon
      variant: "ghost",
    },
  ];

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {/* Collapse button (visible only on desktop) */}
      {!isMobile && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Nav component */}
      <Nav
        isCollapsed={isMobile ? true : isCollapsed} // Always collapse on mobile
        links={links}
      />
    </div>
  );
}
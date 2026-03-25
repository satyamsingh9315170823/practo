import { Bell, Calendar, Settings, Stethoscope, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
interface HeaderProps {
  showDashboardNav?: boolean;
}
interface NavigationItem {
  label: string;
  icon: React.ComponentType<any>;
  href: string;
  active: boolean;
}

const Header: React.FC<HeaderProps> = ({ showDashboardNav = false }) => {
  const pathname = usePathname();
  const user = {
    type: "patient",
    name: "satyam",
    profileImage: "/placeholder.png",
    email: "satyam@gmail.com",
  };

  const isAuthenticated = false;

  const getDashboardNavigation = (): NavigationItem[] => {
    if (!user || !showDashboardNav) return [];
    if (user?.type === "patient") {
      return [
        {
          label: "Appointments",
          icon: Calendar,
          href: "/patient/dashboard",
          active: pathname?.includes("/patient/dashboard") || false,
        },
      ];
    } else if (user?.type === "doctor") {
      return [
        {
          label: "Dashboard",
          icon: Calendar,
          href: "/doctor/dashboard",
          active: pathname?.includes("/doctor/dashboard") || false,
        },
        {
          label: "Appointments",
          icon: Calendar,
          href: "/doctor/appointments",
          active: pathname?.includes("/doctor/appointments") || false,
        },
      ];
    }
    return [];
  };

  return (
    <header className="border-b bg-white/95  backdrop-blur-sm fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center space-x-8 ">
          
<Link 
  href={"/"} 
  className="flex items-center gap-3 group relative"
>

  {/* Icon */}
  <div className="
    relative
    w-11 h-11
    bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600
    rounded-xl
    flex items-center justify-center
    shadow-lg
    shadow-purple-500/20
    group-hover:shadow-purple-500/40
    group-hover:scale-110
    transition-all duration-300
  ">

    {/* Glow effect */}
    <div className="
      absolute inset-0
      bg-gradient-to-br from-purple-500 to-indigo-500
      rounded-xl
      blur-md opacity-0
      group-hover:opacity-40
      transition duration-300
    "/>

    <Stethoscope className="w-5 h-5 text-white relative z-10" />

  </div>

  {/* Text */}
  <div className="
    text-2xl font-bold
    bg-gradient-to-r from-gray-900 via-purple-700 to-indigo-600
    bg-clip-text text-transparent
    tracking-tight
    relative
  ">
    MediCare+
    
    {/* Premium underline animation */}
    <div className="
      absolute left-0 -bottom-1
      w-0 h-[2px]
      bg-gradient-to-r from-purple-600 to-indigo-600
      group-hover:w-full
      transition-all duration-300
    "/>

  </div>

</Link>
          {/* dashboard navigation */}

          {isAuthenticated && showDashboardNav && (
            <nav className="hidden md:flex items-center space-x-6">
              {getDashboardNavigation().map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 transition-colors ${item.active ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          )}
        </div>

        {isAuthenticated && showDashboardNav ? (
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 hover:bg-red-600 ">
                3
              </Badge>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 px-2"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={user?.profileImage}
                      alt={user?.name}
                    ></AvatarImage>
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-semibold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left ">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {user?.type}
                    </p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex  items-center space-x-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={user?.profileImage}
                        alt={user?.name}
                      ></AvatarImage>
                      <AvatarFallback className="bg-blue-100 text-blue-600 ">
                        {user?.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{user?.name}</p>
                        <p className="text-sm  max-w-[140px] text-gray-500 truncate">
                          {user?.email}
                        </p>
                      </div>
                    </Avatar>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href={`/${user?.type}/profile`}
                    className="flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href={`/${user?.type}/settings`}
                    className="flex items-center"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Setting
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            {!isAuthenticated ? (
              <>
                <Link href="/login/patient">
                  <Button
                    variant="ghost"
                    className="text-blue-900 font-medium hover:text-blue-700"
                  >
                    Log in
                  </Button>
                </Link>

                <Link href="/signup/patient" className="hidden md:block">
                  <Button
                    
                    className="
  bg-gradient-to-r from-purple-600 to-indigo-600
  hover:from-purple-700 hover:to-indigo-700
  text-white font-semibold
  px-7 py-2.5
  rounded-full
  shadow-lg hover:shadow-purple-500/30
  hover:scale-105
  transition-all duration-300
  "
                  >
                    Book Consultation
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="hidden md:block text-sm text-gray-700 font-medium whitespace-nowrap">
                  Welcome,&nbsp; {user?.name}
                </span>
                <Link href={`/${user?.type}/dashboard`}>
                  <Button
                   
                    className="
  bg-gradient-to-r from-purple-600 to-indigo-600
  hover:from-purple-700 hover:to-indigo-700
  text-white font-semibold
  px-7 py-2.5
  rounded-full
  shadow-lg hover:shadow-purple-500/30
  hover:scale-105
  transition-all duration-300
  "
                  >
                    Dashboard
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SideBarOptions } from "@/services/Constants";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const path = usePathname();
  console.log(path);

  return (
    <Sidebar>
      <SidebarHeader>
        <Image
          className="w-[150px] flex items-center mt-6 ml-10"
          src="/logo.png"
          alt="logo"
          width={200}
          height={100}
        />
        <Button className="w-full mt-5">
          <Plus /> Create New Interview
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
                <SidebarMenuButton asChild key={index} className={`p-5 ${path == option.path && 
                  'bg-blue-50'
                }`}>
                  <Link href={option.path} className="flex items-center gap-2">
                    <option.icon className= {`${path == option.path && 'text-primary'}`} />
                    <span className= {`text-[16px] font-medium ${path == option.path && 'text-primary'}`}>{option.name}</span>
                  </Link>
                </SidebarMenuButton>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}

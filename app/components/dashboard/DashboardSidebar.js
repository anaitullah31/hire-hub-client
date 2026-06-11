import { getUserSession } from "@/app/lib/core/session";
import {
  Bars,
  Bell,
  Bookmark,
  CreditCard,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Briefcase, Users } from "lucide-react";
import Link from "next/link";

export async function DashboardSidebar() {
  const user = await getUserSession();
  const seekerNavLinks = [
    {
      icon: House,
      href: "/dashboard/job-seaker",
      label: "Dashboard",
    },
    {
      icon: Magnifier,
      href: "/dashboard/job-seaker/jobs",
      label: "Jobs",
    },
    {
      icon: Envelope,
      href: "/dashboard/job-seaker/applications",
      label: "Applications",
    },
    {
      icon: Bookmark,
      href: "/dashboard/job-seeker/saved-jobs",
      label: "Saved Jobs",
    },
    {
      icon: CreditCard,
      href: "/dashboard/job-seeker/billings",
      label: "Billings",
    },
    {
      icon: Gear,
      href: "/dashboard/job-seeker/settings",
      label: "Settings",
    },
  ];
  const recruiterNavLinks = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
    {
      icon: Bell,
      href: "/dashboard/recruiter/jobs/new",
      label: "Create A Job",
    },
    {
      icon: Envelope,
      href: "/dashboard/recruiter/company",
      label: "Company Profile",
    },
    { icon: Person, href: "/dashboard/recruiter", label: "Profile" },
    { icon: Gear, href: "/dashboard/recruiter", label: "Settings" },
  ];
  const adminNavLinks = [
    {
      icon: House,
      href: "/dashboard/admin",
      label: "Dashboard",
    },
    {
      icon: Users,
      href: "/dashboard/admin/users",
      label: "Users",
    },
    {
      icon: House,
      href: "/dashboard/admin/companies",
      label: "Companies",
    },
    {
      icon: Briefcase,
      href: "/dashboard/admin/jobs",
      label: "Jobs",
    },
    {
      icon: CreditCard,
      href: "/dashboard/admin/payments",
      label: "Payments",
    },
    {
      icon: Gear,
      href: "/dashboard/admin/settings",
      label: "Settings",
    },
  ];
  const navLinksMap = {
    "job-seaker": seekerNavLinks,
    recruiter: recruiterNavLinks,
    admin: adminNavLinks,
  };

  const navItems = navLinksMap[user?.role];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <Bars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}

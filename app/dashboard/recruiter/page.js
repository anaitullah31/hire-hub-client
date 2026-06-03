import { DashboardStats } from "@/app/components/dashboard/DashboardStats";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";

const RecruiterDashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

  const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: Briefcase },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <DashboardStats statsData={recruiterStats} />
    </div>
  );
};

export default RecruiterDashboardPage;

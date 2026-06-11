import { getApplicationsByApplicant } from "@/app/lib/api/applications";
import { getUserSession } from "@/app/lib/core/session";
import ApplicationsTable from "./ApplicationTable";

const ApplicationsPage = async () => {
  const user = await getUserSession();
  const jobs = await getApplicationsByApplicant(user?.id);
  console.log(jobs);

  return (
    <div>
      <ApplicationsTable jobs={jobs} />
    </div>
  );
};

export default ApplicationsPage;

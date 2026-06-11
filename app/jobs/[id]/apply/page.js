import { getJobById } from "@/app/lib/api/jobs";
import { getUserSession } from "@/app/lib/core/session";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";
import { getApplicationsByApplicant } from "@/app/lib/api/applications";
import Link from "next/link";
import { getPlanById } from "@/app/lib/api/plans";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();

  if (!user) {
    return redirect(`/signin?redirect=/jobs/${id}/apply`);
  }
  if (user.role !== "job-seaker") {
    return (
      <div>
        <p>
          Only Job seakers can apply ofr positions. Please sign in with a job
          seaker accoutn to proceed futher
        </p>
      </div>
    );
  }
  const applications = await getApplicationsByApplicant(user.id);

  const plan = await getPlanById(user?.plan || "seeker-free");

  const job = await getJobById(id);

  return (
    <div>
      <h2>
        You have applied so far: {applications.length} out of{" "}
        {plan.maxApplicationsPerMonth} this month
      </h2>
      <p>
        Purchase plan to apply for more positions.{" "}
        <Link href={"/plans"}>Plans</Link>
      </p>
      <div>Apply Page {job.jobTitle}</div>
      {applications.length < plan.maxApplicationsPerMonth && (
        <JobApply applicant={user} job={job} />
      )}
    </div>
  );
};

export default ApplyPage;

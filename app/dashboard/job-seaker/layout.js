import { requireRole } from "@/app/lib/core/session";

const JobSeakerLayout = async ({ children }) => {
  await requireRole("job-seaker");
  return children;
};

export default JobSeakerLayout;

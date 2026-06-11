import { requireRole } from "@/app/lib/core/session";

const RecruiterLayout = async ({ children }) => {
  await requireRole("recruiter");
  return children;
};

export default RecruiterLayout;

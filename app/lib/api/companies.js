import { protectedFetch, serverFetch } from "../core/server";
import { getUserSession } from "../core/session";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompanies = async() => {
    return protectedFetch("/api/companies")
}

export const getRecruiterCompany = async (recruiterId) => {
  return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
  //   const res = await fetch(
  //     `${baseUrl}/api/my/companies?recruiterId=${recruiterId}`,
  //   );
  //   return res.json();
};

export const getLoggedInRecruiterCompany = async () => {
  const user = await getUserSession();
  return getRecruiterCompany(user?.id);
};

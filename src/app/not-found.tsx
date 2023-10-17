import { redirect } from "next/navigation";
import type { FC } from "react";

const PageNotFound: FC = () => {
  redirect("/");
}

export default PageNotFound;

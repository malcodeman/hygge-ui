import { redirect } from "next/navigation";
import { NAVIGATION_GROUPS } from "./navigation-groups";

function HomePage() {
  return redirect(NAVIGATION_GROUPS[0].pages[0].href);
}

export default HomePage;

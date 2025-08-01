import { redirect } from "next/navigation";
import { NAVIGATION_GROUPS } from "app/navigation-groups";

function DocsPage() {
  return redirect(NAVIGATION_GROUPS[0].pages[0].href);
}

export default DocsPage;

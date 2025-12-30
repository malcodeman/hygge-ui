import { createFileRoute, redirect } from "@tanstack/react-router";
import { NAVIGATION_GROUPS } from "app/navigation-groups";

export const Route = createFileRoute("/")({
  loader: () => {
    throw redirect({
      to: NAVIGATION_GROUPS[0].pages[0].href,
    });
  },
});

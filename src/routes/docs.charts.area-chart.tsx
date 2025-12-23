import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";

export const Route = createFileRoute("/docs/charts/area-chart")({
  component: AreaChartPage,
  head: () => ({
    meta: [
      {
        title: "Area Chart | Hygge UI",
      },
    ],
  }),
});

function AreaChartPage() {
  return (
    <>
      <PageHeader
        title="Area Chart"
        description="Used to display quantitative data by filling the area between the line and axis, showing trends and patterns over time."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/charts/area-chart.tsx"
        className="mb-2"
      />
    </>
  );
}

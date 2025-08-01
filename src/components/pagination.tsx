import { Pagination as ArkPagination } from "@ark-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "./cn";
import { Button } from "./button";

export function PaginationRoot(props: ArkPagination.RootProps) {
  const { className, ...rest } = props;

  return (
    <ArkPagination.Root className={cn("flex gap-2", className)} {...rest} />
  );
}

export function PaginationPrevTrigger(props: ArkPagination.PrevTriggerProps) {
  return (
    <ArkPagination.PrevTrigger {...props} asChild>
      <Button variant="ghost">
        <LuChevronLeft size={16} />
      </Button>
    </ArkPagination.PrevTrigger>
  );
}

export function PaginationItems() {
  return (
    <ArkPagination.Context>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === "page" ? (
            <ArkPagination.Item key={index} {...page} asChild>
              <Button
                variant={pagination.page === page.value ? "solid" : "outline"}
              >
                {page.value}
              </Button>
            </ArkPagination.Item>
          ) : (
            <ArkPagination.Ellipsis key={index} index={index}>
              &#8230;
            </ArkPagination.Ellipsis>
          ),
        )
      }
    </ArkPagination.Context>
  );
}

export function PaginationNextTrigger(props: ArkPagination.NextTriggerProps) {
  return (
    <ArkPagination.NextTrigger {...props} asChild>
      <Button variant="ghost">
        <LuChevronRight size={16} />
      </Button>
    </ArkPagination.NextTrigger>
  );
}

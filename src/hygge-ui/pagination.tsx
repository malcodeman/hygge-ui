import { Pagination as ArkPagination } from "@ark-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { createContext, useContext } from "react";
import { cn } from "./cn";
import { Button } from "./button";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const PaginationContext = createContext<{ size: Size }>({
  size: "md",
});

type PaginationRootProps = {
  size?: Size;
} & ArkPagination.RootProps;

export function PaginationRoot(props: PaginationRootProps) {
  const { size = "md", className, ...rest } = props;

  return (
    <PaginationContext.Provider value={{ size }}>
      <ArkPagination.Root className={cn("flex gap-2", className)} {...rest} />
    </PaginationContext.Provider>
  );
}

export function PaginationPrevTrigger(props: ArkPagination.PrevTriggerProps) {
  const { size } = useContext(PaginationContext);

  return (
    <ArkPagination.PrevTrigger {...props} asChild>
      <Button size={size} variant="ghost">
        <LuChevronLeft size={16} />
      </Button>
    </ArkPagination.PrevTrigger>
  );
}

export function PaginationItems() {
  const { size } = useContext(PaginationContext);

  return (
    <ArkPagination.Context>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === "page" ? (
            <ArkPagination.Item key={index} {...page} asChild>
              <Button
                size={size}
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
  const { size } = useContext(PaginationContext);

  return (
    <ArkPagination.NextTrigger {...props} asChild>
      <Button size={size} variant="ghost">
        <LuChevronRight size={16} />
      </Button>
    </ArkPagination.NextTrigger>
  );
}

import React from "react";
import { cn } from "./cn";

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  showColumnBorder?: boolean;
  interactive?: boolean;
  stickyHeader?: boolean;
};

export function Table(props: TableProps) {
  const { showColumnBorder, interactive, stickyHeader, className, ...rest } =
    props;

  return (
    <table
      {...rest}
      className={cn(
        "w-full text-sm",
        {
          "[&_td]:border-r [&_th]:border-r": showColumnBorder,
          "[&_tbody_tr]:hover:bg-[#21201c]/8 [&_tbody_tr]:dark:hover:bg-[#eeeeec]/8":
            interactive,
          "[&_thead]:bg-bg-default [&_thead]:sticky [&_thead]:top-0 [&_thead]:z-1":
            stickyHeader,
        },
        className,
      )}
    />
  );
}

export function TableColumnHeader(
  props: React.ThHTMLAttributes<HTMLTableCellElement>,
) {
  const { className, ...rest } = props;

  return (
    <th
      {...rest}
      className={cn(
        "border-border-subtle border-b p-2 text-start font-medium",
        className,
      )}
    />
  );
}

export function TableCell(props: React.TdHTMLAttributes<HTMLTableCellElement>) {
  const { className, ...rest } = props;

  return (
    <td
      {...rest}
      className={cn("border-border-subtle border-b p-2 text-start", className)}
    />
  );
}

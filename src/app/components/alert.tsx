import { LuInfo, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

type Props = {
  status?: "info" | "warning" | "success" | "error";
  title?: React.ReactNode;
  description?: React.ReactNode;
  showIndicator?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export function Alert(props: Props) {
  const {
    status = "info",
    title,
    description,
    showIndicator,
    className,
    ...rest
  } = props;

  function renderIndicator() {
    switch (status) {
      default:
      case "info":
        return <LuInfo size={16} className={cn("text-[#173da6]")} />;
      case "warning":
        return <LuCircleAlert size={16} className={cn("text-[#92310a]")} />;
      case "success":
        return <LuCircleCheck size={16} className={cn("text-[#116932]")} />;
      case "error":
        return <LuCircleAlert size={16} className={cn("text-[#991919]")} />;
    }
  }

  return (
    <div
      {...rest}
      className={cn(className, "flex gap-2 rounded-lg p-2", {
        "bg-[#dbeafe] text-[#173da6]": status === "info",
        "bg-[#ffedd5] text-[#92310a]": status === "warning",
        "bg-[#dcfce7] text-[#116932]": status === "success",
        "bg-[#fee2e2] text-[#991919]": status === "error",
      })}
    >
      {showIndicator ? <span>{renderIndicator()}</span> : null}
      <div className="flex flex-col">
        {title ? (
          <div className={cn("text-sm font-semibold")}>{title}</div>
        ) : null}
        {description ? (
          <div className={cn("text-sm")}>{description}</div>
        ) : null}
      </div>
    </div>
  );
}

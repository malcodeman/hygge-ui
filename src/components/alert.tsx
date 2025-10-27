import { LuInfo, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import { cn } from "./cn";

type BaseProps = {
  status?: "info" | "warning" | "success" | "error";
  showIndicator?: boolean;
} & React.ComponentPropsWithoutRef<"div">;
type Props =
  | (BaseProps & { title: React.ReactNode; description?: React.ReactNode })
  | (BaseProps & { title?: React.ReactNode; description: React.ReactNode });

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
        return <LuInfo size={16} />;
      case "warning":
        return <LuCircleAlert size={16} />;
      case "success":
        return <LuCircleCheck size={16} />;
      case "error":
        return <LuCircleAlert size={16} />;
    }
  }

  return (
    <div
      {...rest}
      className={cn(
        "grid grid-cols-[auto_1fr] items-center gap-x-2 rounded-lg p-2 text-sm/6",
        {
          "bg-blue-subtle text-blue-fg": status === "info",
          "bg-orange-subtle text-orange-fg": status === "warning",
          "bg-green-subtle text-green-fg": status === "success",
          "bg-red-subtle text-red-fg": status === "error",
        },
        className,
      )}
    >
      {showIndicator ? renderIndicator() : null}
      {title ? <div className="col-start-2">{title}</div> : null}
      {description ? <div className="col-start-2">{description}</div> : null}
    </div>
  );
}

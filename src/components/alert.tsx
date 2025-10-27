import { LuInfo, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import { cn } from "./cn";

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
          "bg-[#dbeafe] text-[#173da6] dark:bg-[#14204a] dark:text-[#a3cfff]":
            status === "info",
          "bg-[#ffedd5] text-[#92310a] dark:bg-[#3b1106] dark:text-[#fdba74]":
            status === "warning",
          "bg-[#dcfce7] text-[#116932] dark:bg-[#042713] dark:text-[#86efac]":
            status === "success",
          "bg-[#fee2e2] text-[#991919] dark:bg-[#300c0c] dark:text-[#fca5a5]":
            status === "error",
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

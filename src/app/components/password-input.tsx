import { PasswordInput as ArkPasswordInput } from "@ark-ui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Input } from "./input";
import { Button } from "./button";

type Props = {
  label?: React.ReactNode;
} & ArkPasswordInput.RootProps;

export function PasswordInput(props: Props) {
  const { label, ...rest } = props;

  return (
    <ArkPasswordInput.Root {...rest}>
      {label ? (
        <ArkPasswordInput.Label className="text-sm font-semibold text-[#21201C] dark:text-[#eeeeec]">
          {label}
        </ArkPasswordInput.Label>
      ) : null}
      <ArkPasswordInput.Control className="relative">
        <ArkPasswordInput.Input asChild>
          <Input />
        </ArkPasswordInput.Input>
        <ArkPasswordInput.VisibilityTrigger asChild>
          <Button
            variant="ghost"
            className="absolute top-1/2 right-2 -translate-y-1/2"
          >
            <ArkPasswordInput.Indicator fallback={<LuEyeOff size={16} />}>
              <LuEye size={16} />
            </ArkPasswordInput.Indicator>
          </Button>
        </ArkPasswordInput.VisibilityTrigger>
      </ArkPasswordInput.Control>
    </ArkPasswordInput.Root>
  );
}

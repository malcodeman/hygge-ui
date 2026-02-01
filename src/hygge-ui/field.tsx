import { Field as ArkField } from "@ark-ui/react";
import { cn } from "./cn";

export function FieldRoot(props: ArkField.RootProps) {
  const { className, ...rest } = props;

  return (
    <ArkField.Root {...rest} className={cn("flex flex-col gap-1", className)} />
  );
}

export function FieldLabel(props: ArkField.LabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkField.Label
      {...rest}
      className={cn("text-fg-default text-sm font-semibold", className)}
    />
  );
}

export function FieldHelperText(props: ArkField.HelperTextProps) {
  const { className, ...rest } = props;

  return (
    <ArkField.HelperText
      {...rest}
      className={cn("text-fg-muted text-sm", className)}
    />
  );
}

export function FieldErrorText(props: ArkField.ErrorTextProps) {
  const { className, ...rest } = props;

  return (
    <ArkField.ErrorText
      {...rest}
      className={cn("text-sm text-[#fd5454]", className)}
    />
  );
}

type FieldProps = {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
} & ArkField.RootProps;

export function Field(props: FieldProps) {
  const {
    className,
    label,
    helperText,
    errorText,
    required,
    disabled,
    children,
    ...rest
  } = props;

  return (
    <FieldRoot
      {...rest}
      disabled={disabled}
      className={cn("w-full", className)}
    >
      {label ? (
        <FieldLabel
          className={cn("flex items-center gap-1", {
            "opacity-50": disabled,
          })}
        >
          {label}
          {required ? <span className={cn("text-[#fd5454]")}>*</span> : null}
        </FieldLabel>
      ) : null}
      {children}
      {helperText ? <FieldHelperText>{helperText}</FieldHelperText> : null}
      {errorText ? <FieldErrorText>{errorText}</FieldErrorText> : null}
    </FieldRoot>
  );
}

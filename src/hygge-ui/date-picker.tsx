import {
  DatePicker as ArkDatePicker,
  type DateValue,
} from "@ark-ui/react/date-picker";
import { LuCalendar, LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import { cn } from "./cn";
import { Button } from "./button";
import { Input } from "./input";
import { Tag } from "./tag";

function formatDate(date: DateValue) {
  const jsDate = date.toDate("UTC");

  return jsDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

type Props = {
  label?: React.ReactNode;
} & ArkDatePicker.RootProps;

export function DatePicker(props: Props) {
  const {
    className,
    label,
    selectionMode,
    placeholder,
    disabled,
    invalid,
    ...rest
  } = props;

  return (
    <ArkDatePicker.Root
      selectionMode={selectionMode}
      placeholder={placeholder}
      disabled={disabled}
      invalid={invalid}
      className={cn("flex flex-col gap-1", className)}
      {...rest}
    >
      {label ? (
        <ArkDatePicker.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkDatePicker.Label>
      ) : null}
      <ArkDatePicker.Control className="inline-flex items-center gap-2">
        {selectionMode === "multiple" ? (
          <ArkDatePicker.Context>
            {(datePicker) => (
              <div
                className={cn(
                  "border-border-default flex h-10 w-full flex-wrap items-center gap-1 rounded-sm border px-2 text-sm text-[#21201C]/50 transition-colors dark:text-[#eeeeec]/50",
                  {
                    "cursor-not-allowed opacity-50": disabled,
                    "border-[#fd5454]": invalid,
                  },
                )}
              >
                {datePicker.value.length === 0
                  ? placeholder
                  : datePicker.value.map((date, index) => (
                      <Tag key={index} size="xs">
                        {formatDate(date)}
                        <button
                          type="button"
                          onClick={() =>
                            datePicker.setValue(
                              datePicker.value.filter((_, i) => i !== index),
                            )
                          }
                        >
                          <LuX />
                        </button>
                      </Tag>
                    ))}
              </div>
            )}
          </ArkDatePicker.Context>
        ) : (
          <>
            <ArkDatePicker.Input index={0} asChild>
              <Input className="w-auto" variant="outline" />
            </ArkDatePicker.Input>
            {selectionMode === "range" ? (
              <ArkDatePicker.Input index={1} asChild>
                <Input className="w-auto" variant="outline" />
              </ArkDatePicker.Input>
            ) : null}
          </>
        )}
        <ArkDatePicker.Trigger asChild>
          <Button variant="outline">
            <LuCalendar size={16} />
          </Button>
        </ArkDatePicker.Trigger>
      </ArkDatePicker.Control>
      <ArkDatePicker.Positioner>
        <ArkDatePicker.Content className="bg-bg-default border-border-subtle z-50 rounded-lg border p-2 shadow-2xs">
          <ArkDatePicker.View view="day" className="flex flex-col gap-2">
            <ArkDatePicker.Context>
              {(datePicker) => (
                <>
                  <ArkDatePicker.ViewControl className="flex items-center justify-between">
                    <ArkDatePicker.PrevTrigger asChild>
                      <Button variant="ghost">
                        <LuChevronLeft size={16} />
                      </Button>
                    </ArkDatePicker.PrevTrigger>
                    <ArkDatePicker.ViewTrigger asChild>
                      <Button variant="ghost">
                        <ArkDatePicker.RangeText />
                      </Button>
                    </ArkDatePicker.ViewTrigger>
                    <ArkDatePicker.NextTrigger asChild>
                      <Button variant="ghost">
                        <LuChevronRight size={16} />
                      </Button>
                    </ArkDatePicker.NextTrigger>
                  </ArkDatePicker.ViewControl>
                  <ArkDatePicker.Table className="border-separate border-spacing-1">
                    <ArkDatePicker.TableHead>
                      <ArkDatePicker.TableRow>
                        {datePicker.weekDays.map((weekDay, id) => (
                          <ArkDatePicker.TableHeader
                            key={id}
                            className="text-fg-muted size-10 text-sm/6"
                          >
                            {weekDay.short[0]}
                          </ArkDatePicker.TableHeader>
                        ))}
                      </ArkDatePicker.TableRow>
                    </ArkDatePicker.TableHead>
                    <ArkDatePicker.TableBody>
                      {datePicker.weeks.map((week, id) => (
                        <ArkDatePicker.TableRow key={id}>
                          {week.map((day, id) => (
                            <ArkDatePicker.TableCell key={id} value={day}>
                              <ArkDatePicker.TableCellTrigger
                                asChild
                                className="data-in-range:bg-[#f1f0ef] data-outside-range:hidden data-selected:border-transparent data-selected:bg-[#21201C] data-selected:text-white data-selected:hover:bg-[#21201C] data-in-range:dark:bg-[#292928] data-selected:dark:bg-[#eeeeec] data-selected:dark:text-[#191918] data-selected:dark:hover:bg-[#eeeeec]"
                              >
                                <Button variant="ghost" className="size-10">
                                  {day.day}
                                </Button>
                              </ArkDatePicker.TableCellTrigger>
                            </ArkDatePicker.TableCell>
                          ))}
                        </ArkDatePicker.TableRow>
                      ))}
                    </ArkDatePicker.TableBody>
                  </ArkDatePicker.Table>
                </>
              )}
            </ArkDatePicker.Context>
          </ArkDatePicker.View>
          <ArkDatePicker.View view="month" className="flex flex-col gap-2">
            <ArkDatePicker.Context>
              {(datePicker) => (
                <>
                  <ArkDatePicker.ViewControl className="flex items-center justify-between">
                    <ArkDatePicker.PrevTrigger asChild>
                      <Button variant="ghost">
                        <LuChevronLeft size={16} />
                      </Button>
                    </ArkDatePicker.PrevTrigger>
                    <ArkDatePicker.ViewTrigger asChild>
                      <Button variant="ghost">
                        <ArkDatePicker.RangeText />
                      </Button>
                    </ArkDatePicker.ViewTrigger>
                    <ArkDatePicker.NextTrigger asChild>
                      <Button variant="ghost">
                        <LuChevronRight size={16} />
                      </Button>
                    </ArkDatePicker.NextTrigger>
                  </ArkDatePicker.ViewControl>
                  <ArkDatePicker.Table className="border-separate border-spacing-1">
                    <ArkDatePicker.TableBody>
                      {datePicker
                        .getMonthsGrid({ columns: 4, format: "short" })
                        .map((months, id) => (
                          <ArkDatePicker.TableRow key={id}>
                            {months.map((month, id) => (
                              <ArkDatePicker.TableCell
                                key={id}
                                value={month.value}
                              >
                                <ArkDatePicker.TableCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </ArkDatePicker.TableCellTrigger>
                              </ArkDatePicker.TableCell>
                            ))}
                          </ArkDatePicker.TableRow>
                        ))}
                    </ArkDatePicker.TableBody>
                  </ArkDatePicker.Table>
                </>
              )}
            </ArkDatePicker.Context>
          </ArkDatePicker.View>
          <ArkDatePicker.View view="year" className="flex flex-col gap-2">
            <ArkDatePicker.Context>
              {(datePicker) => (
                <>
                  <ArkDatePicker.ViewControl className="flex items-center justify-between">
                    <ArkDatePicker.PrevTrigger asChild>
                      <Button variant="ghost">
                        <LuChevronLeft size={16} />
                      </Button>
                    </ArkDatePicker.PrevTrigger>
                    <ArkDatePicker.ViewTrigger asChild>
                      <Button variant="ghost">
                        <ArkDatePicker.RangeText />
                      </Button>
                    </ArkDatePicker.ViewTrigger>
                    <ArkDatePicker.NextTrigger asChild>
                      <Button variant="ghost">
                        <LuChevronRight size={16} />
                      </Button>
                    </ArkDatePicker.NextTrigger>
                  </ArkDatePicker.ViewControl>
                  <ArkDatePicker.Table className="border-separate border-spacing-1">
                    <ArkDatePicker.TableBody>
                      {datePicker
                        .getYearsGrid({ columns: 4 })
                        .map((years, id) => (
                          <ArkDatePicker.TableRow key={id}>
                            {years.map((year, id) => (
                              <ArkDatePicker.TableCell
                                key={id}
                                value={year.value}
                              >
                                <ArkDatePicker.TableCellTrigger asChild>
                                  <Button variant="ghost">{year.label}</Button>
                                </ArkDatePicker.TableCellTrigger>
                              </ArkDatePicker.TableCell>
                            ))}
                          </ArkDatePicker.TableRow>
                        ))}
                    </ArkDatePicker.TableBody>
                  </ArkDatePicker.Table>
                </>
              )}
            </ArkDatePicker.Context>
          </ArkDatePicker.View>
        </ArkDatePicker.Content>
      </ArkDatePicker.Positioner>
    </ArkDatePicker.Root>
  );
}

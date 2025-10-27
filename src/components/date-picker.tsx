"use client";
import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { LuCalendar, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "./cn";
import { Button } from "./button";
import { Input } from "./input";

type Props = {
  label?: React.ReactNode;
} & ArkDatePicker.RootProps;

export function DatePicker(props: Props) {
  const { className, label, selectionMode, ...rest } = props;

  return (
    <ArkDatePicker.Root
      selectionMode={selectionMode}
      className={cn("flex flex-col gap-1", className)}
      {...rest}
    >
      {label ? (
        <ArkDatePicker.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkDatePicker.Label>
      ) : null}
      <ArkDatePicker.Control className="inline-flex items-center gap-2">
        <ArkDatePicker.Input index={0} asChild>
          <Input className="w-auto" />
        </ArkDatePicker.Input>
        {selectionMode === "range" ? (
          <ArkDatePicker.Input index={1} asChild>
            <Input className="w-auto" />
          </ArkDatePicker.Input>
        ) : null}
        <ArkDatePicker.Trigger asChild>
          <Button variant="outline">
            <LuCalendar size={16} />
          </Button>
        </ArkDatePicker.Trigger>
      </ArkDatePicker.Control>
      <ArkDatePicker.Positioner>
        <ArkDatePicker.Content className="z-50 rounded-lg border border-[#E9E8E6] bg-white p-2 shadow-2xs dark:border-[#2a2a28] dark:bg-[#191918]">
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
                    <ArkDatePicker.RangeText />
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
                                className="data-[in-range]:bg-[#f1f0ef] data-[outside-range]:hidden data-[selected]:border-transparent data-[selected]:bg-[#21201C] data-[selected]:text-white data-[selected]:hover:bg-[#21201C] data-[in-range]:dark:bg-[#292928] data-[selected]:dark:bg-[#eeeeec] data-[selected]:dark:text-[#191918] data-[selected]:dark:hover:bg-[#eeeeec]"
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
        </ArkDatePicker.Content>
      </ArkDatePicker.Positioner>
    </ArkDatePicker.Root>
  );
}

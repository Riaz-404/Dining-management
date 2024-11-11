import { useState } from "react";
import { addDays, format, add } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { formatDate, checkTimeOver } from "../../utils/helper.js";

export function DateSelection({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const [action, setAction] = useState("off");

  const disabledDate = checkTimeOver()
    ? add(new Date(), { days: 2 })
    : add(new Date(), { days: 1 });

  const beforeMatcher = { before: disabledDate };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data send korar time handle korte hobe

    // if (!date?.to) {
    //   ((date) => setDate{ from: date?.from, to: date?.from });
    // }

    console.log(date, action);
  };

  return (
    <div>
      <div className={cn("gap-2 mt-6 flex justify-center", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
              disableNavigation
              disabled={beforeMatcher}
            />
          </PopoverContent>
        </Popover>

        <Select onValueChange={setAction} defaultValue={action}>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="on">ON</SelectItem>
            <SelectItem value="off">OFF</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" mt-5 flex justify-center">
        <Button variant="outline" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

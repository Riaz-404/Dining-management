import { useState } from "react";
import {
  format,
  startOfMonth,
  lastDayOfMonth,
  differenceInDays,
  add,
  sub,
} from "date-fns";

const Calendar = ({ page, userMealDetails }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonth = new Date(currentDate).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  console.log(userMealDetails);
  let mealOffDates: number[] = [];
  let diningOffDates: number[] = [];

  userMealDetails.meal.map((item) => {
    if (item.month === currentMonth) {
      mealOffDates = item.offDays;
    }
  });

  const firstDayOfTheMonth = startOfMonth(currentDate);
  const lastDayOfTheMonth = lastDayOfMonth(currentDate);

  const noOfDaysInTheMonth =
    differenceInDays(lastDayOfTheMonth, firstDayOfTheMonth) + 1;

  const prefixDays = firstDayOfTheMonth.getDay() + 1;

  const suffixDays =
    lastDayOfTheMonth.getDay() === 6
      ? lastDayOfTheMonth.getDay()
      : 5 - lastDayOfTheMonth.getDay();

  const handleMonthForward = () => {
    setCurrentDate(add(currentDate, { months: 1 }));
  };

  const handleMonthBackward = () => {
    setCurrentDate(sub(currentDate, { months: 1 }));
  };

  const dateBaseStyle =
    "[aspect-ratio:1] flex items-center justify-center h-10 md:h-12 text-xs md:text-base text-black rounded-3xl relative";

  const dateStyle = {
    mealOn: dateBaseStyle + " bg-green-400",
    mealOff: dateBaseStyle + " bg-red-300",
    diningOff: dateBaseStyle + " bg-gray-200",
  };

  const dateDiff = differenceInDays(new Date(), currentDate);

  console.log(currentDate, dateDiff);

  return (
    <div className="flex justify-center items-center m-0 ">
      <div className="bg-white rounded-2xl p-6 max-w-xl md:max-w-[800px]">
        <div className="flex justify-between items-center mb-6 md:mb-[40px]">
          <div className="text-base md:text-2xl font-semibold text-[#1a1a1a]">
            {format(currentDate, "LLLL yyyy")}
          </div>
          <div className={page === "meal" ? "hidden" : "block"}>
            <div className="flex gap-2 md:gap-3">
              <button
                className="cursor-pointer"
                onClick={handleMonthBackward}
                disabled={dateDiff > 65}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 md:size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="cursor-pointer"
                onClick={handleMonthForward}
                disabled={
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear()
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 md:size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(7,_1fr)] text-center text-gray-700 font-semibold text-xs md:text-sm mb-[12px]">
          <div>Sat</div>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
        </div>
        <div className="grid grid-cols-[repeat(7,_1fr)] gap-1 mb-6 md:gap-[12px]">
          {Array.from({ length: prefixDays }).map((_, index) => {
            return <div key={index}></div>;
          })}

          {Array.from({ length: noOfDaysInTheMonth }).map(
            (_, index: number) => {
              const date: number = index + 1;

              let style;

              if (mealOffDates.find((offDate) => offDate === date)) {
                style = dateStyle.mealOff;
              } else if (diningOffDates.find((offDate) => offDate === date)) {
                style = dateStyle.diningOff;
              } else {
                style = dateStyle.mealOn;
              }

              if (
                date.toString() === new Date().getDate().toLocaleString() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear()
              ) {
                style += " border-2 border-black";
              }
              return (
                <div className={style} key={date}>
                  {date}
                </div>
              );
            }
          )}

          {Array.from({ length: suffixDays }).map((_, index) => {
            return <div key={index}></div>;
          })}
        </div>

        <div className="grid grid-cols-[repeat(3,_1fr)] text-center text-gray-700 font-semibold text-xs md:text-sm mb-[12px]">
          <div className="flex gap-3 justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-green-500"></div>
            <div className="text-green-600">Meal On</div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-red-400"></div>
            <div className="text-red-500">Meal Off</div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-gray-400"></div>
            <div className="text-gray-500">Dining Off</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calendar;

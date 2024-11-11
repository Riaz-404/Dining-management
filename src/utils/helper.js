import { differenceInMinutes } from "date-fns";

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function checkTimeOver() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  const diffMinutes = differenceInMinutes(
    new Date(),
    new Date(year, month, date, 19, 0)
  );

  if (diffMinutes > 0) return true;

  return false;
}

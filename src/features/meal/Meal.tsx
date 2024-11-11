import Calendar from "@/components/Calendar";
import MainContent from "@/ui/MainContent";
import { DateSelection } from "./DateSelection";

const Meal = () => {
  return (
    <MainContent title="Meal On/Off">
      <Calendar page={"meal"} />

      <DateSelection />
    </MainContent>
  );
};
export default Meal;

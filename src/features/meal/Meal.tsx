import Calendar from "@/components/Calendar";
import MainContent from "@/ui/MainContent";
import { DateSelection } from "./DateSelection";
import { useLoaderData } from "react-router-dom";
import { getUserMealDetails } from "../../utils/apiRequest.js";

const Meal = () => {
  const userMealDetails = useLoaderData();
  return (
    <MainContent title="Meal On/Off">
      <Calendar page={"meal"} userMealDetails={userMealDetails} />

      <DateSelection />
    </MainContent>
  );
};

export async function loader() {
  const user = await getUserMealDetails("6735986772e4ce4c16f20fa2");
  return user;
}

export default Meal;

import MainContent from "@/ui/MainContent";
import { formatDate } from "../../utils/helper.js";

export default function Status() {
  const meal = true;
  return (
    <MainContent title="Status">
      {/* <div className="bg-gray-100 w-full"> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex flex-col justify-center items-center">
            <div className="h-64 w-64 overflow-hidden rounded-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-6 mb-4 flex gap-2 items-center">
              <h3 className="gap-2 text-gray-700">Meal Status: </h3>
              <h3
                className={`rounded-full text-sm uppercase px-3 py-1.5 font-semibold text-white ${
                  meal ? "bg-green-500" : "bg-red-400"
                }`}
              >
                {meal ? <span>On</span> : <span>Off</span>}
              </h3>
            </div>

            <p className="text-xs mb-3 font-medium text-center text-gray-500 font-mono sm:text-sm">
              {formatDate(new Date())}
            </p>

            <p className="text-2xl m-1 font-semibold text-center text-gray-900 sm:text-3xl">
              Md. Riazul Islam
            </p>

            <p className="text-lg m-1 font-medium text-center text-gray-600 sm:text-xl">
              Roll: <span className="text-gray-900">1827016</span>
            </p>

            <p className="text-base m-1 font-medium text-center text-gray-600 sm:text-lg">
              Materials Science and Engineering
            </p>

            <p className="text-base m-1 font-medium text-center text-gray-600 sm:text-lg">
              Room no: E-413, Forth Floor, Amar Ekushey Hall
            </p>

            <p className="text-base m-1 font-medium text-center text-gray-600 sm:text-lg">
              No. 01712345678
            </p>

            <p className="text-base m-1 font-medium text-center text-gray-600 sm:text-lg">
              Border No. 16
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </MainContent>
  );
}

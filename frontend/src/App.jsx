import Graph from "./components/Graph";
import Indicators from "./components/Indicators";
import SalesTable from "./components/SalesTable";
import TopCustomersCard from "./components/TopCustomersCard";

function App() {
  return (
    <div className="md:mx-30 mx-2 mt-10">
      <h1 className="text-xl font-medium text-gray-800 mb-6">Dashboard</h1>

      <div className="flex flex-col md:flex-row gap-5 ">

        <div className="flex-1 min-w-[300px]">
          <Graph />
        </div>

        <div className="flex flex-col w-full md:w-1/3 justify-center">
          <Indicators />
        </div>
      </div>
      <TopCustomersCard />
      <SalesTable />
    </div>
  );
}

export default App;

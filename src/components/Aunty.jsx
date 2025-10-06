import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">Aunty</h1>
      <div className="flex gap-2">
        <div className="border-2 border-blue-500 p-5">
          <Cousin name="Sunerah"></Cousin>
        </div>
        <div className="border-2 border-blue-500 p-5">
          <Cousin name="Gulbahar"></Cousin>
        </div>
      </div>
    </div>
  );
};

export default Aunty;

import Cousin from "./Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">Uncle</h1>
      <div className="flex gap-2">
        <div className="border-2 border-green-500 p-5">
          <Cousin name="Rafsan" asset={asset}></Cousin>
        </div>
        <div className="border-2 border-green-500 p-5">
          <Cousin name="Allen"></Cousin>
        </div>
      </div>
    </div>
  );
};

export default Uncle;

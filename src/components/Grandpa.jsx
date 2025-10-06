import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = () => {
  let asset = "diamond";
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Grandpa</h1>
      <h2 className="text-center text-lg font-bold">owner : {asset}</h2>
      <div className="flex justify-between items-center m-5">
        <div className="border-2 border-yellow-800 p-5">
          <Dad asset={asset}></Dad>
        </div>
        <div className="border-2 border-yellow-800 p-5">
          <Uncle asset={asset}></Uncle>
        </div>
        <div className="border-2 border-yellow-800 p-5">
          <Aunty></Aunty>
        </div>
      </div>
    </div>
  );
};

export default Grandpa;

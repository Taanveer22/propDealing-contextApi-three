import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = ({asset}) => {
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">Dad</h1>
      <div className="flex gap-2 justify-between items-center">
        <div className="border-2 border-red-500 p-5">
          <Myself asset={asset}></Myself>
        </div>
        <div className="border-2 border-red-500 p-5">
          <Brother></Brother>
        </div>
        <div className="border-2 border-red-500 p-5">
          <Sister></Sister>
        </div>
      </div>
    </div>
  );
};

export default Dad;

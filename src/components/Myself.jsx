import Special from "./Special";

const Myself = ({asset}) => {
  return (
    <div>
      <h1 className="text-center">Myself</h1>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;

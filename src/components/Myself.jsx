import Special from "./Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h1 className="text-center text-xl font-medium">Myself</h1>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;

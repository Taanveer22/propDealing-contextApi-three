import Special from "./Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h1 className="text-center text-xl font-medium">Cousin</h1>
      <h2>{name}</h2>
      {asset && <Special asset={asset}></Special>}
    </div>
  );
};

export default Cousin;

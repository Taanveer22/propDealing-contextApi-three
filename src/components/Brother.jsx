import { useContext } from "react";
import { MoneyContext } from "./MoneyContext";

const Brother = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1 className="text-center text-xl font-medium">Brother</h1>
      <p>Money via context : {money}</p>
      <button onClick={() => setMoney(money + 500)} className="bg-green-500">
        Add More
      </button>
    </div>
  );
};

export default Brother;

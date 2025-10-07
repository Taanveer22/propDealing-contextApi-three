import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import { GiftContext } from "./GiftContext";
import { useState } from "react";
import { MoneyContext } from "./MoneyContext";

const Grandpa = () => {
  const asset = "diamond";
  const [money, setMoney] = useState(1000);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Grandpa</h1>
      <h2 className="text-center text-lg font-bold">owner : {asset}</h2>
      <h2 className="text-center text-lg font-bold">money : {money}</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
        <GiftContext.Provider value={"gold"}>
          <div className="flex gap-5 justify-between items-center m-5">
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
        </GiftContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

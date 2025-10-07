import { useContext } from "react";
import { GiftContext } from "./GiftContext";

const Sister = () => {
  const gift = useContext(GiftContext);
  return (
    <div>
      <h1 className="text-center text-xl font-medium">Sister</h1>
      <h2>pass via context : {gift}</h2>
    </div>
  );
};

export default Sister;

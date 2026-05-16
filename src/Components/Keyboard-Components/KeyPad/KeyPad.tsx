import NumberDispay from "../NumberDispay/NumberDispay";
import NumberPad from "../NumberPad/NumberPad";

const KeyPad = () => {
  return <div className="absolute bottom-25 left-0 w-full text-white bg-[#292A2F] p-3">
    <NumberDispay/>
    <NumberPad/>
    </div>;
};

export default KeyPad;

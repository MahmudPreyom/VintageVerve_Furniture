import ChairDesign from "./chairdesign/ChairDesign";
import SofaDesign from "./sofadesign/SofaDesign";

const HotDeals = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold grid justify-items-center mt-20 underline decoration-solid decoration-yellow-500">HOT DEALS</h1>
            <SofaDesign />
            <ChairDesign />
        </div>
    );
};

export default HotDeals;
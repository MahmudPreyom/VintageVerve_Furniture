import d1 from "../../../assets/discount-1-fotor-bg-remover-2024060413391.png"

const Discount = () => {
    return (
        <div className="hero h-auto md:h-72 lg:h-80 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={d1} className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">DISCOUNT <span className="font-semibold italic">50%</span></h1>
                    <p className="py-6">Breathe new life into your space without breaking the bank! Furniture stores are offering deep discounts, slashing prices on sofas, chairs, and more. Update your decor for less and enjoy the comfort of stylish new pieces.</p>
                    <button className="btn btn-warning">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;

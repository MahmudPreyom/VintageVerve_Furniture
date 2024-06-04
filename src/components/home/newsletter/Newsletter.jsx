/* eslint-disable react/no-unescaped-entities */

const Newsletter = () => {
    return (
        <div className="hero h-80 mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/jzvT7Cr/nl.jpg)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-white">
                <div>
                    <h1 className="mb-5 text-5xl font-bold">NEWS LETTER</h1>
                    <p className="mb-5">Step inside for a look at the latest trends from legendary furniture makers, plus exclusive discounts you won't want to miss.</p>
                    <div className="flex justify-center items-center">
                        <input 
                            type="email" 
                            placeholder="message" 
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <button className="btn btn-warning ml-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

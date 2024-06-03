
const SofaDesign = () => {
    return (
        <div className="mt-48 mb-48">
            <div className="container md:w-3/4 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3" >
                <div>
                    {/* <div className="hero h-fit md:h-[575px] lg:h-[575px] bg-base-200 rounded-lg">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Hello there</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="hero h-fit md:h-[575px] lg:h-[575px] bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/Vgf1yg7/sofa-d-2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="card rounded-none bg-base-100 shadow-xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card rounded-none bg-base-100 shadow-xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card rounded-none bg-base-100 shadow-xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card rounded-none bg-base-100 shadow-xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SofaDesign;
import ch1 from "../../../../assets/rsz_c1.jpg"
import ch2 from "../../../../assets/rsz_c1.jpg"
import ch3 from "../../../../assets/rsz_ch3a.jpg"
import ch4 from "../../../../assets/rsz_ch-4.jpg"

const ChairDesign = () => {
    return (
        <div className="mt-48 mb-48 grid justify-items-end">
            <div className="container md:w-3/4 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3" >
                
                <div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="card rounded-none bg-base-100 shadow-xl h-[280px]">
                            <figure><img className="" src={ch1} alt="" /></figure>
                            <div className="card-body">
                                <p className="text-xl font-semibold">Eames Chair</p>
                            </div>
                        </div>
                        <div className="card rounded-none bg-base-100 shadow-xl h-[280px]">
                            <figure><img className="" src={ch2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className="text-xl font-semibold">Rocking Chair</p>
                            </div>
                        </div>
                        <div className="card rounded-none bg-base-100 shadow-xl h-[280px]">
                            <figure><img className="" src={ch3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className="text-xl font-semibold">Adirondack Chair</p>
                            </div>
                        </div>
                        <div className="card rounded-none bg-base-100 shadow-xl h-[280px]">
                            <figure><img className="" src={ch4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className="text-xl font-semibold">Wingback Chair</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                <div className="hero h-fit md:h-[575px] lg:h-[575px] bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/wgftXtf/chair-1.jpg)' }}>
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
            </div>
        </div>
    );
};

export default ChairDesign;
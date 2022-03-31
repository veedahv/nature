import { useNavigate } from 'react-router-dom';
import AboutImg1 from '../assets/images/about-img-1.jpg';
import AboutImg2 from '../assets/images/about-img-2.jpg';


export default function AboutSection() {
    let navigate = useNavigate();
    return (
        <section className="App-section bg-secondary text-white">
            <div className="container lg:max-w-screen-xl mx-auto px-4 py-5 md:py-14">
                <div className="section-container flex items-center justify-between w-full py-4">
                    <div className="flex flex-wrap items-center justify-between gap-y-10">
                        <img src={AboutImg1} alt="about image" className="about-img order-1 w-full md:w-6/12" />
                        <img src={AboutImg2} alt="about image" className="about-img order-2 md:order-3 w-full" />
                        <div className="about-contents order-3 md:order-2 w-full md:w-5/12">
                            <div className="">
                                <h2 className="section-title text-5xl">Discover yourself with nature</h2>
                                <p className="about-text text-lg my-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Tincidunt facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Tincidunt facilisis nunc
                                </p>
                                <div className="">
                                    <button className="btn about-btn p-3 w-44 border-2 border-white text-sm font-bold tracking-widest" onClick={() => navigate('/about')}>LEARN MORE</button>
                                    {/* <button className="btn about-btn">LEARN MORE</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Link to='/'></Link> */}
                </div>
            </div>
        </section>
    )
}

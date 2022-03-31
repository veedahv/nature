import { useNavigate } from 'react-router-dom';
import HeroImg from '../assets/images/hero-img.png';


export default function HeroSection() {
    let navigate = useNavigate();
    return (
        <section className="App-section">
            <div className="container lg:max-w-screen-xl mx-auto px-4 py-5 md:py-14">
                <div className="hero-container flex items-center justify-between w-full py-4">
                    <div className="hero-contents w-full md:w-5/12">
                        <div className="">
                            <h1 className="hero-title section-title text-6xl text-secondary">A beatiful adventure awaits</h1>
                            <p className="hero text-body font-light text-2xl my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc
                            </p>
                            <div className="hero-btn-container flex gap-4">
                                <button className="btn hero-btn w-44 p-3 border-2 border-primary bg-primary text-white text-sm font-bold tracking-widest">BUY TICKETS</button>
                                <button className="btn hero-btn w-44 p-3 border-2 border-primary text-primary text-sm font-bold tracking-widest" onClick={() => navigate('/about')}>LEARN MORE</button>
                                {/* <button className="btn heo-btn"LEARN MORE</button> */}
                                </div>
                            </div>
                        </div>                    
                    <div className="w-full md:w-5/12">
                        <img src={HeroImg} alt="hero image" className="hero-img" />
                    </div>
                    {/* <Link to='/'></Link> */}
                </div>
            </div>
        </section>
    )
}

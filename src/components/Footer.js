import { Link } from 'react-router-dom';
import logo from '../assets/images/footer-logo.svg'
import mail from '../assets/images/mail.svg'
import linkedin from '../assets/images/linkedin.svg'
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'


export default function Footer() {
    return (
        <footer className="App-footer text-white">
            <div className="footer-top bg-primary">
                <div className="container lg:max-w-screen-xl mx-auto px-4 py-10 text-center sm:text-left">
                    <div className="footer-container flex flex-wrap items-start justify-between gap-y-10 w-full py-6">
                        <div className="w-full sm:w-4/12">
                            <img src={logo} className="App-logo mx-auto sm:mx-0 mb-3" alt="logo" width='230px' />
                            <p className="text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Tincidunt facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/12">
                            <ul className="flex flex-col items-center sm:items-start gap-5">
                                <li className="">
                                    <Link className='px-2 py-1.5' to='/'>Home</Link>
                                </li>
                                <li className="">
                                    <Link className='px-2 py-1.5' to='/about'>About</Link>
                                </li>
                                <li className="">
                                    <Link className='px-2 py-1.5' to='/about'>Store</Link>
                                </li>
                                <li className="">
                                    <Link className='px-2 py-1.5' to='/about'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-4/12">
                            <h3 className="section-title text-base mb-3">Connect</h3>
                            <ul className="flex flex-row items-center justify-center sm:justify-start gap-5">
                                <li className="">
                                    <a href="http://">
                                        <img src={twitter} alt="" className="" />
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://">
                                        <img src={facebook} alt="" className="" />
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://">
                                        <img src={linkedin} alt="" className="" />
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://">
                                        <img src={mail} alt="" className="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-secondary">
                <div className="container lg:max-w-screen-xl mx-auto px-4">
                    <div className="footer-container flex items-center justify-between w-full py-6">
                        <p className="w-full text-sm text-center">
                            © 2021 Mist Gardens. All rights reserved.
                        </p>
                        {/* <Link to='/'></Link> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

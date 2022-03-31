import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'


export default function Header() {
    return (
        <header className="App-header">
            <div className="container lg:max-w-screen-xl mx-auto px-4">
                <nav className="nav flex items-center justify-between w-full py-4">
                    {/* <div className="App-logo">Logo</div> */}
                    <img src={logo} className="App-logo" alt="logo" width='230px' />
                    <ul className="flex flex-col lg:flex-row items-center justify-between gap-5">
                        <li className="">
                            <Link className='px-2 py-1.5' to='/'>Home</Link>
                        </li>
                        <li className="">
                            <Link className='px-2 py-1.5' to='/about'>About</Link>
                        </li>
                        <li className="">
                            <Link className='px-2 py-1.5' to='/collection'>Store</Link>
                        </li>
                        <li className="">
                            <Link className='px-2 py-1.5' to='/about'>Contact</Link>
                        </li>
                    </ul>
                    {/* <Link to='/'></Link> */}
                </nav>
            </div>
        </header>
    )
}

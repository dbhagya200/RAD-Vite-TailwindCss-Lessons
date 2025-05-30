
import {Link} from "react-rout-dom";
import logo from "../../../assets/icons8-logo-48.png";
export function Navbar() {
    return (
        <>
            <section className='nav'>
                <div>
                    <nav className='navbar'>
                        <div className='logo'>
                            <img src={logo} alt="" />
                            <p className="name">Ride Share</p>
                        </div>
                        <div className='menu'>
                            <ul className='list'>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                {/*<li>*/}
                                {/*    <Link to="/services">Services</Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">Portfolio</a>*/}
                                {/*</li>*/}
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <button className="sign">
                                        <Link to="/login">
                                            Sign In
                                        </Link>
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
}
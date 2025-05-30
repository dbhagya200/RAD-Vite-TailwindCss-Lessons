
import {Link} from "react-router-dom";
import logo from "../../../assets/icons8-logo-48.png";
export function Navbar() {
    return (
        <>
            <section className='sticky top-0  '>
                <div>
                    <nav className="flex justify-between bg-[#114253] text-white px-[30px] py-[10px]">
                        <div className='flex justify-start items-center text-xl'>
                            <img src={logo} alt="" />
                            <p className="name">Ride Share</p>
                        </div>
                        <div className='menu'>
                            <ul className='flex list-none gap-x-[50px] gap-y-[10px] p-[5px]'>
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
                                    <button className="bg-teal-500 w-[100px] h-[30px] rounded-2xl">
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
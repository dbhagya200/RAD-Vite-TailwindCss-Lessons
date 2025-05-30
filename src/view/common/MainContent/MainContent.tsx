import "../../../index.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";

export function MainContent() {
    return (
        <>
            <div className='flex justify-center items-center h-screen bg-[#b9c1c1]'>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>

                </Routes>
            </div>
        </>
    );
}
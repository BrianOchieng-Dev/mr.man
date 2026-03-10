
import {Link} from 'react-router-dom';
import image from '../assets/img7.jpeg';
export default function Nav(){
    return(
        <>
        <section >
            <header >
                    <nav className="flex items-center justify-between p-4
                     bg-white/50 backdrop-blur-2xl
                    shadow-lg fixed top-0 left-0 z-50 w-full">
                    <img src={image} alt="Logo" className="h-10 rounded-full"/>
                    <div className='flex gap-3'>
                    <Link to="/">Home</Link>
                    <a href="#about">About</a>
                    <Link to="/contact">Contact</Link>
                    <Link to="/contact">Book</Link></div>
                    </nav>
            </header>
        </section>
        </>
    )
}
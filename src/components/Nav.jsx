
import {Link} from 'react-router-dom';

export default function Nav(){
    return(
        <>
        <section>
            <header>
                <div></div>
                <nav>
                   <Link to="/">Home</Link>
                   <Link to="/about">About</Link>
                   <Link to="/contact">Contact</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </section>
        </>
    )
}
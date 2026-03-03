
import Nav from '../components/Nav'
import heroImg from "../assets/img.jpg";
export default function Home(){
    return(
        <>
        <main>
            
           <Nav/>
            <section className='pt-20'>
                <div className="flex items-center justify-center flex-col text-center">
                    <h1 className="text-4xl md:text-8xl lg:text-16xl font-bold text-blue-500">Mr Man Fitness</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima optio, 
                        ab ipsa ullam iste ad quisquam culpa est aut 
                        corporis numquam. Consectetur distinctio, earum laudantium repellendus animi atque 
                        accusantium!</p>

                    <div>
                        <button>Book a Session</button>
                    </div>
                    <div>
                        <img src={heroImg} alt="Hero Image" className=''/>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

import Nav from '../components/Nav'
import heroImg from "../assets/img.jpg";
export default function Home(){
    return(
        <>
        <main>
            
           <Nav/>
            <section className='pt-26'>
                <div className="flex items-center justify-center flex-col text-center">

                     <h2 className="text-gray-500 lg:px-12 md:px-6 px-2">
                        <span class="text-xl md:text-2xl lg:text-2xl text-green-500 p-2 border-2 rounded-2xl m-2">Built Strong</span>  
                        <span class="text-xl md:text-2xl lg:text-2xl text-green-500 p-2 border-2 rounded-2xl m-2">Living Sharp</span></h2>
                    <h1 className="text-4xl md:text-8xl lg:text-12xl font-semibold text-blue-500 p-2 lg:p-4">Mr Man Fitness</h1>
                   

                    <div>
                        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Book a Session</button>
                    </div>
                    <div className='m-2 md:m-4 lg:m-8'>
                        <img src={heroImg} alt="Hero Image" className='shadow-lg rounded-2xl '/>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
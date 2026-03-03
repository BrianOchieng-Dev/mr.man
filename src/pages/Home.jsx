
import Nav from '../components/Nav'
import heroImg from "../assets/img.jpg";
import profile from "../assets/geff.jpeg";
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
                    <h1 className="text-4xl md:text-8xl lg:text-12xl font-semibold text-blue-500 p-4 lg:p-4">Mr Man Fitness</h1>
                   

                    <div>
                        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Book a Session</button>
                    </div>
                    <div className='m-2 md:m-4 lg:m-8'>
                        <img src={heroImg} alt="Hero Image" className='shadow-lg rounded-2xl '/>
                    </div>
                </div>
            </section>
            <section className="px-6">
                <h2 className="text-blue-500 text-2xl md:text-4xl lg:text-6xl text-semibold text-center">
                    About <span >Mr Man</span></h2>

                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center pt-4 pb-4">
                        <div>
                            <p class="py-6 text-gray-500 text-left md:text-left lg:text-left">
                                <span class="text-red-500 text-bold">Mr Man Fitness </span> is about disciplined training and purposeful living. It focuses on 
                                building real strength, an aesthetic physique, and mental toughness through consistent 
                                workouts, structured routines, and a growth-driven mindset. The goal is not quick results 
                                but lasting transformation — developing the habits, discipline, and resilience that shape 
                                a strong man over time.
                                At Mr Man Fitness, progress comes from commitment, effort, and daily improvement. Members are encouraged to push their 
                                limits, stay focused on their goals, and build confidence through physical and mental development. It’s a space where dedication is valued and growth is expected.
                                It’s not just about muscles — it’s about becoming a stronger, more confident, and disciplined version of yourself every 
                                single day.
                            </p>
                        </div>
                        <div>
                            <img src={profile} alt="fitness profile" className='rounded-2xl'/>
                        </div>
                    </div>
            </section>
        </main>
        </>
    )
}
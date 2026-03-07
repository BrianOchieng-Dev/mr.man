
import Nav from '../components/Nav'
import heroImg from "../assets/img3.jpg";
import profile from "../assets/img.jpg";
import strength from "../assets/img4.jpg";
import cardio from "../assets/img5.jpg";
import compound from "../assets/img6.jpg";
export default function Home(){
    return(
        <>
        <main>
            
           <Nav/>
            <section className='pt-26 bg-blue-100'>
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
            <section className="p-6">
                <h2 className="text-blue-500 text-2xl md:text-4xl lg:text-6xl font-semibold text-center">
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

            <section id="service" className=' p-6'>
                <h2 className="text-blue-500 text-2xl md:text-4xl lg:text-6xl font-semibold text-center">
                    Mr Man Services
                </h2>

                   <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center pt-6 pb-6 lg:pt-24 lg:pb-24">
                        <div>
                        <h3 className='text-3xl md:text-6xl lg:text-6xl leading-tight font-bold'>Strength Training</h3>
                        <p className=' text-green-500'>Our strength training programs are designed to build muscle, increase power, and improve overall fitness through progressive overload and periodization.</p>
                        </div>
                        <div>
                            <img src={strength} className='rounded-lg' alt="strength training"/>
                        </div>
                    </div>
                     <div className="grid grid-cols-reverse-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center pt-6 pb-6 lg:pt-24 lg:pb-24">

                         <div>
                            <img src={cardio} className='rounded-lg ' alt="cardio workout"/>
                        </div>
                        <div>
                        <h3 className='text-3xl md:text-6xl lg:text-6xl leading-tight font-bold'>Cardio Workout</h3>
                        <p  className='text-green-500'>Our cardio workouts are designed to improve heart health, increase endurance, and boost metabolism through various aerobic exercises.</p>
                        </div>
                       
                    </div>
                    <div className="grid grid-cols-reverse md:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center pt-6 pb-6 lg:pt-24 lg:pb-24">
                        <div>
                        <h3 className='text-3xl md:text-6xl lg:text-6xl leading-tight font-bold'>Compound Movements</h3>
                        <p className='text-green-500'>Our compound movement exercises are designed to engage multiple muscle groups simultaneously, maximizing strength gains and functional fitness.</p>
                        </div>
                        <div>
                            <img src={compound} className='rounded-lg ' alt="compound movements"/>
                        </div>
                       
                    </div>
                    <h1 className="text-red-500 text-3xl md:text-6xl lg:text-6xl text-center font-bold leading-tight">Health Discipline. Build Confidence</h1>
                    </div>
                </section>
        </main>
        </>
    )
}

import Nav from '../components/Nav'
export default function Home(){
    return(
        <>
        <main>
            <section class="bg-[url('../assets/img.jpg')] bg-center bg-cover">
                <Nav/>

                <div>
                    <h1>Mr Man Fitness</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima optio, 
                        ab ipsa ullam iste ad quisquam culpa est aut 
                        corporis numquam. Consectetur distinctio, earum laudantium repellendus animi atque 
                        accusantium!</p>

                    <div>
                        <button>Book a Session</button>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
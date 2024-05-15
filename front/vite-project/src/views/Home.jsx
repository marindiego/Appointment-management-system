import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import "../styles/index.css";


const Home = () => {
    return (
        <main className="body">
            <Hero />
            <Services />
        </main>
    )
}

export default Home;
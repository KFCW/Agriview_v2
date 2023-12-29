import NavBar from "../../Components/HomePage/NavBar";
import Button from '../../Components/HomePage/Button'
import SectionHome from "../../Components/HomePage/SectionHome"
import Vitrines from "../../Components/HomePage/Vitrines";
import Objectifs from "../../Components/HomePage/Objectifs";
import Equipes from "../../Components/HomePage/Equipes";
import Footer from "../../Components/HomePage/Footer";
import image from "../../assets/images/home/home.jpg"



const HomePage = () => {

  return (
    <div className="home-container">
      <NavBar />
      <SectionHome
        welcomeText={{
          title: 'Bienvenue à vous, ',
          title2: 'chez',
          title3: 'AgriDigital.',
          title4: "AgriDigital, l'agriculture à l'ère du numérique : ",
        }}
        backgroundImage={`url(${image})`}
        imageUrl="https://images.unsplash.com/photo-1633640737481-2e9aabd87033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc2lsfGVufDB8fDB8fHww"
        cropTitle="Persil"
        buttonProps={{
          buttonText: 'Découvrir',
          buttonLink: '/products',
        }}
      />

      <Button title="Catégories" />
      <Vitrines />
      <Button title="Objectifs" />
      <Objectifs />
      <Button title="Equipes" />
      <Equipes />
      <Footer />
    </div>
  )
}

export default HomePage

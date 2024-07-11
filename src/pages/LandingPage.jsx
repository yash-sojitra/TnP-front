import Achievers from "../components/LandingPage/Achievers";
import Director from "../components/LandingPage/Director";
import Header from "../components/LandingPages/Header";
import Moto from "../components/LandingPage/Moto";
import PlacementProcedure from "../components/LandingPage/PlacementProcedure";

function LandingPage() {
  return (
    <>
      <Header/>
      <section>
        <Moto/>
        <Achievers/>
        <Director/>
        <PlacementProcedure/>
      </section>
      
    </>

  );
}

export default LandingPage;


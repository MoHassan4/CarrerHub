import Header from "../Components/shared/Header";
import SearchForm from "../Components/shared/SearchForm";
import JopByCountry from "../Components/shared/JopByCountry";
import EgyptImg from "../assets/countriesImages/egypt.avif";
import UAEImg from "../assets/countriesImages/UAE.jpg";
import SaudiaImg from "../assets/countriesImages/SaudiArabia.jpeg";
import OmanImg from "../assets/countriesImages/Oman.jpg";
import KuwaitImg from "../assets/countriesImages/Kuwait.jpg";
import QatarImg from "../assets/countriesImages/Qatar.jpg";
import AlgeriaImg from "../assets/countriesImages/Algeria.jpg";
import TunisiaImg from "../assets/countriesImages/Tunisia.jpg";
import MoroccoImg from "../assets/countriesImages/Morocco.jpg";
import IraqImg from "../assets/countriesImages/Iraq.jpg";
import BahrainImg from "../assets/countriesImages/Bahrain.webp";
import JordanImg from "../assets/countriesImages/Jordan.webp";
import LibyaImg from "../assets/countriesImages/Libya.jpg";
import LebanonImg from "../assets/countriesImages/Lebanon.jpg";
import SudanImg from "../assets/countriesImages/Sudan.jpg";
import PalestineImg from "../assets/countriesImages/Palestine.jpg";
import "../css/JobsByLocation.css";

function JobsByLocation() {
  return (
    <>
      <div className="container py-4">
        <Header
          h1={"Find Jobs "}
          inSpan={"Near You"}
          p={
            "Search job opportunities by location to find the perfect match near you."
          }
        />
        <SearchForm />
        <div className="jobs-container container d-grid bg-light p-5 rounded gap-4">
          <JopByCountry country={"Egypt"} number={"4,230"} image={EgyptImg} />
          <JopByCountry country={"UAE"} number={"5,120"} image={UAEImg} />
          <JopByCountry
            country={"Saudi Arabia"}
            number={"3,852"}
            image={SaudiaImg}
          />
          <JopByCountry country={"Oman"} number={"1,120"} image={OmanImg} />
          <JopByCountry country={"Algeria"} number={"680"} image={AlgeriaImg} />
          <JopByCountry country={"Tunisia"} number={"730"} image={TunisiaImg} />
          <JopByCountry
            country={"Morocco"}
            number={"1,300"}
            image={MoroccoImg}
          />
          <JopByCountry country={"Libya"} number={"560"} image={LibyaImg} />
          <JopByCountry
            country={"Bahrain"}
            number={"1,250"}
            image={BahrainImg}
          />
          <JopByCountry country={"Qatar"} number={"3,410"} image={QatarImg} />
          <JopByCountry country={"Kuwait"} number={"2,580"} image={KuwaitImg} />
          <JopByCountry country={"Jordan"} number={"840"} image={JordanImg} />
          <JopByCountry country={"Iraq"} number={"770"} image={IraqImg} />
          <JopByCountry country={"Sudan"} number={"430"} image={SudanImg} />
          <JopByCountry country={"Lebanon"} number={"210"} image={LebanonImg} />
          <JopByCountry
            country={"Palestine"}
            number={"107"}
            image={PalestineImg}
          />
        </div>
      </div>
    </>
  );
}

export default JobsByLocation;

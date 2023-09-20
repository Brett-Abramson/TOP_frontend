import { Link } from "react-router-dom";
import HomeImg from "../../../Images/HomeImg.png";
import homeSection from "../../../Images/homeSection.png"
import SiteBanner from "../../SiteBanner/SiteBanner";


function Home({demoPage, setDemoPage}) {
    return(
      <>
    <div className="home-page"  >
      <div className="home-text" >
        <h1 className="home-h1">Took an at-home <br /> test?</h1>
        <p className="home-paragraph">You can help keep your community safe by reporting an over-the-
          <br />counter test result for yourself or any member of your family.</p>
        <Link to="/ReportMyTest"><button className="blueButton">REPORT YOUR RESULTS</button></Link>
        </div>
      <div className="home-image" >
        <img src={HomeImg} alt="HomeImg" className="responsive-image"/>  
      </div>
    </div>
    <section>
    <SiteBanner  />
    </section>
    <div className="home-p2">
      <h2 className="h2" style={{ fontSize: 40 }}>Your anonymous test result matters.</h2>
      <p className="p2" style={{ fontSize: 18 }}>At-home tests are the future of diagnosing disease. Reporting your result — whether negative or positive  <br />
      — helps our community learn how to use those test results effectively. 
    effectively.</p>
    </div>
    <div>
      <img src={homeSection} className="homeSection" alt="homeSection" style={{  }} />
    </div>

      </>
)}

export default Home;

// style={{ flex: 1, padding: '2rem' }}
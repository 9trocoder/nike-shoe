import "./App.css";
import nikelogo from "./assets/nikelogo.png";
import nikeshoe from "./assets/shoe.png";
import eclipse1 from "./assets/Ellipse_1.png";
import eclipse2 from "./assets/Ellipse_2.png";
import eclipse3 from "./assets/Ellipse_3.png";
import eclipse4 from "./assets/Ellipse_4.png";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <img src={nikelogo} alt="nikelogo" />
        <div className="sidebar-content">STYLETAKESOVER</div>
      </div>
      <div className="mainn">
        <div className="header">
          <p>HOME</p>
          <p>COLLECTION</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
        </div>

        <div className="main-body">
          <div className="main-body-left">
            <h1>AIR MAX</h1>
            <p className="nike-name">NIKE AIR MAX 90</p>
            <p className="nike-price">$98</p>
            <p className="nike-desc">
              Nothing as fly, nothing as comfortable, nothing as proven-the Nike
              Air Max 90 stays true to its roots with iconic waffle sole,
              stitched overlays and classic TPU accents.
            </p>
            <button>ADD TO CART</button>
          </div>
          <div className="main-body-left">
            <img className="ec1" src={eclipse1} alt="" />
            <img className="ec2" src={eclipse2} alt="" />
            <img className="ec3" src={eclipse3} alt="" />
            <img className="ec4" src={eclipse4} alt="" />
            <img className="ec5" src={nikeshoe} alt="nikeshoe" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

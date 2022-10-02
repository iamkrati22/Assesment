import './App.css';
import { Link } from "react-router-dom";
function LandingPage() {
    return (
      <div className="LandingPage">
        <div class = "landing-page">
            <div class = "section-1">
                <div class = "card">
                    <img src = "img-1.png" alt = ""></img>
                    
                </div>
            </div>
            <div class = "section-2">
                <h1>Imagine if <br></br><span class = "gradient">Snapchat</span><br></br>had events.</h1>
                <h3>Easily host and share events with your friends <br></br>across any social media.</h3>
               <Link to = "/event"> <button>🎉 Create my event </button></Link>
            </div>
        </div>
    
      </div>
    );
  }
  
  export default LandingPage;
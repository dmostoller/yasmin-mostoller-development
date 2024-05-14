import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage () {

return (
    <div className="ui centered grid" style={{minHeight:"100vh"}}>
    <div style={{width: "100%", margin: "auto"}} className="ui card">
        <div className="image">
            <img className="ui huge image" src="./images/slider2.jpg" alt="Yasmin Mostoller at the Jed William's Gallery"/>
        </div>
        <div className="content">
            <div className="header">
                Yasmin Mostoller
            </div>
            <div className="meta">
                <span className="category">Philadelphia, PA</span>
            </div>
            <div className="description">
                <p>	Yasmin is a Persian artist currently living in Philadelphia, PA.  After growing up with a love for the visual arts, Yasmin studied painting and fine art, recieving both Bachelor's and Master's degrees.  Her work has been shown internationally, with shows in the USA, Iran, France, Spain, India, and Germany.             
                <br></br>Yasmin's works are an exploration of abstract ideas, stemming from a unique perspective on space and motion. Utilizing various techniques and methods for applying paint, Yasmin has created whole worlds within her canvases. Bright, colorful, and energetic vistas into a unique universe derived from a global perspective and a reach into the unknown.</p>
            </div>
            <div>
                {/* <a href="https://www.facebook.com/yasminmostollerart" target="none"><img style={{float: "left", padding:"5px"}} src="./icons/facebook.svg" alt="Facebook"></img></a>
                <a href="https://www.instagram.com/yasminnunsy/" target="none"><img style={{float: "left", padding:"5px"}} src="./icons/instagram.svg" alt="Instagram"></img></a> */}
                <Link to="https://www.facebook.com/yasminmostollerart" target="blank"  className="ui circular facebook icon button" style={{marginTop: "5px", marginRight: "5px"}}>
                    <i className="facebook icon"></i>
                </Link> 
                <Link to="/contact" className="ui circular button teal">Contact Me</Link>
                <Link to="https://www.instagram.com/yasminnunsy/" target="blank"  className="ui circular icon purple button" style={{marginTop: "5px", marginRight: "5px"}}>
                    <i className="instagram icon"></i>
                </Link>
            </div>
        </div>
</div>
</div>


)
}
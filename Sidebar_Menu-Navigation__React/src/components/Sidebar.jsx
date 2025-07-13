import { useState } from "react";
import homeIcon from "../assets/home.png";
import contactIcon from "../assets/contact.png";
import aboutIcon from "../assets/about.png";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import view from "../assets/view.png";

function Sidebar()
{
    const [openSidebar , setOpenSidebar] = useState(true);
    return (
        <div className="sidebar">
            <img src={openSidebar ? leftArrow : rightArrow} className="toggle-sidebar" onClick={ () => { setOpenSidebar( prev => !prev ) } }/>
            {openSidebar ? <img src={view} className="viewIcon" /> : ""}
            <div className="menuContainer">
                <div className="homeMenu">
                    <img src={homeIcon} alt="Home Icon" className="icon" id="homeIcon" />
                    {openSidebar ? <span className="home">Home</span> : ""}
                </div>
                <div className="aboutMenu">
                    <img src={aboutIcon} alt="About Icon" className="icon" id="aboutIcon"/>
                    {openSidebar ? <span className="about">About</span> : ""}
                </div>
                <div className="contactMenu">
                    <img src={contactIcon} alt="Contact Icon" className="icon" id="contactIcon"/>
                    {openSidebar ? <span className="contact">Contact</span> : ""}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
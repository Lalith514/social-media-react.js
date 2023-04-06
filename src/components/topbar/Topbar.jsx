import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export default function Topbar() {
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
     // Retrieve the user's details after successful login
     const waName = otplessUser.waName;
     const waNumber = otplessUser.waNumber;
         
     // Handle the signup/signin process
     // ...
    };
   }, []);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}><span className="logo">Social Media</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div id="otpless"></div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style={{textDecoration: "none", color:"white"}}> <span className="topbarLink">Homepage</span></Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
           <Link to="/Requests"> <span className="topbarIconBadge">1</span></Link>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <Link to="/Chat"><span className="topbarIconBadge">2</span></Link>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
       <Link to="/Profile"> <img src="/assets/person/7.jpg" alt="" className="topbarImg"/></Link>
      </div>
    </div>
  );
}

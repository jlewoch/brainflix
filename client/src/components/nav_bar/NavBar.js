import React from "react";
import { Link } from "react-router-dom";
import BrainFlixLogo from "./icons/BrainFlixLogo";
import SearchBar from "./search_bar/SearchBar";
import ProfilePicture from "../profile_picture/ProfilePicture";
import ContentUploadIcon from "./icons/ContentUploadIcon";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <BrainFlixLogo />
      </Link>
      <SearchBar />
      <div className="navbar-right">
        <ContentUploadIcon />
        <ProfilePicture />
      </div>
    </nav>
  );
};

export default NavBar;

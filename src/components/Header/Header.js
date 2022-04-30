import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "../Button/Button";
import ProfilePic from "../ProfilePic/ProfilePic";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <div className="header__container">
          <SearchBar />
          <ProfilePic
            className={"header__pic profile-pic profile-pic--image"}
          />
          <Link to="/upload" className="header__btn-container">
            <Button
              className={"header__btn-upload btn btn-hover"}
              text={"UPLOAD"}
            />
          </Link>
        </div>
      </header>
    );
  }
}

import React, {Component} from 'react';
import "./Nav.css"
import logo from "../../asset/ismea-red-logo-bg-removed.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
    render() {
        return (
            <div className={"nav-placeholder"}>
                <div className={"nav-bar"}>
                    <div className="content">
                        <ul className="nav-items">
                            <li className="nav-item">
                                <a className={"nav-link"} href="/public">
                                    Accueill
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link"} href="/public">
                                    L'Institut
                                <FontAwesomeIcon icon={faAngleDown} className="nav-link-icon"/>
                                </a>
                                <div className="dropdown-container">
                                    <ul className="dropdown">
                                        <li className="dropdown-item"><a href="/">Histoire</a></li>
                                        <li className="dropdown-item"><a href="/">Administration</a></li>
                                        <li className="dropdown-item"><a href="/">Fondation FP</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/" className={"image-container-link"}>
                                    <img src={logo} alt="ISMEA LOGO" className={"logo"}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link"} href="/public">
                                Les Revues
                                <FontAwesomeIcon icon={faAngleDown} className="nav-link-icon"/>
                                </a>
                                <div className="dropdown-container">
                                    <ul className="dropdown">
                                        <li className="dropdown-item"><a href="/">économie appliquée</a></li>
                                        <li className="dropdown-item"><a href="/">économies et sociétés</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link"} href="/public">
                                    Activités
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
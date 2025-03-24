import logo from "../assets/logo.png";
import {Link, useNavigate} from "react-router-dom";
import "./header.css"

const Header = () =>{
    const navigate = useNavigate();
return (
    <div className="header">
        <img className="logo" src={logo}></img>
        <div className="nav-item">
            <Link to ="about">About</Link>
            <Link to="details">Details</Link>
            <Link to="contact">Contact</Link>
            <button  onClick={() => navigate('/')} className="sub-btn">Submit</button>

            </div>
            
        </div>
    
);

}

export default Header;
import natuer from "../assets/nature.jpg"
import logo from "../assets/logo.png"
import { useNavigate} from "react-router-dom";
import './login.css'


const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="login-container">
        <img src={natuer}></img>
      </div>
      <div className="inner-login">
        <div className="login-text">User Login</div>
        <div className="inner-text">
          Information about you
        </div>

        <div className="login-btn">
          <button  className="Goolge-btn">Continoue With Google</button>
          <button className="Facebook-btn">Continoue With Facebook</button>
        </div>

        <div className="or">
          <hr/> or <hr />
        </div>

        <div className="address">Your email address</div>
        <button onClick={()=> navigate('/home')}  className="email">email@address.com</button>
      

      <div className="click">
        By clicking the button above, you agree to our <br/>
        <span>Terms of Use</span> and <span> Privacy Policy.</span>
      </div>
      </div>
    </div>
  );
};

export default Login;

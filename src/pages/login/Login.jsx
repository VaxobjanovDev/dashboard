import { useContext, useState } from "react";
import { registerAPI } from "../../context/authcontext/ApiCall";
import { AuthContext } from "../../context/authcontext/Authcontext";
import Logo from '../../assets/telegramlogo.png'
import "./Login.css";

const Login = () => {

  const [token, setEmail] = useState("")
  const {isFetching, dispatch} = useContext(AuthContext)

  const handleClick = (e)=>{
    e.preventDefault()
    registerAPI(token, dispatch)
  }

  return (
    <div className="login">
      <div className="login-title">
        <img src={Logo} alt="logo" />
        <ul className="lists">
          <li><span>1</span>Lorem ipsum dolor sit amet.</li>
          <li><span>2</span>Lorem ipsum dolor sit amet.</li>
          <li><span>3</span>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <form className="login__form">
        <input type="email" placeholder="Token" onChange={(e)=>setEmail(e.target.value)}/>
        <button className="login__button" onClick={handleClick} disabled={isFetching}>Login</button>
      </form>
    </div>
  );
};

export default Login;

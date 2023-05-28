import "./register.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
        <label>Name</label>
            <input className="registerInput" type="text" placeholder="Enter Name "/>
            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Enter Mail ID "/>
            <label>password</label>
           <input className="registerInput" type="password" placeholder="Enter Password"/>
           <button className="registerButton">Register</button> 
        </form>
       <button className="registerRegisterButton"><Link className="Link" to="/login">Login</Link></button>
    </div>
  )
}

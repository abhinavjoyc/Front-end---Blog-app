import "./topbar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function TopBar () {
  const user = true;
  return ( 
    <div className="top" >
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i  className="topIcon fa-brands fa-linkedin"></i>
        <i  className="topIcon fa-brands fa-square-instagram"></i>
        <i  className="topIcon fa-brands fa-square-twitter"></i>
        </div>
        <div className="topCenter">
         <ul className="topList">
            <li className="topListItem">
              <Link className="Link" to="/">HOME</Link>
            </li>
            <li className="topListItem"> <Link className="Link" to="/">ABOUT</Link></li>
            <li className="topListItem"> <Link className="Link" to="/">CONTACT</Link></li>
            <li className="topListItem"> <Link className="Link" to="/write">COMPOSE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
         </ul>
        </div>
        <div className="topRight">
          {
           user ? ( <><img 
            className="topImage "
            src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?size=626&ext=jpg" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </>):(<>
              <ul className="topList">
              <li className="topListItem">   <Link className="Link" to="/login">LOGIN</Link></li>
              <li className="topListItem">   <Link className="Link" to="/register">REGISTER</Link></li>
           </ul>
            </>)
}
        </div>
         </div>
  )
}

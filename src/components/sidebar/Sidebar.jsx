import "./sidebar.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <img className="sidebarImg" src="https://i.pinimg.com/236x/81/5d/37/815d37e6655276d8e985fef2c4ce5472.jpg" alt="" />
        <p className="sidebarPara">
        We are a dedicated group maintaining a vibrant blog site, curating insightful articles to inspire and engage our readers, fostering a community of knowledge seekers.
        </p>
        <div className="sidebrItem">
            <span className="sidebarTitles">CATEGORIES</span>
      <ul className="sidebarList"> 
    {cats.map((c)=>
    (
      <li className="sidebarListItems">{c.name}</li>
    ))}
      </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US </span>
       
       <div className="sidebarSocial">
       <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i  className="sidebarIcon fa-brands fa-linkedin"></i>
        <i  className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i  className="sidebarIcon fa-brands fa-square-twitter"></i>
        </div> 
        </div>
        </div>
    </div>
  )
}

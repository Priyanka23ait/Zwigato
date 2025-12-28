import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = ()=>{
    const onlineStatus = useOnlineStatus();
    return ( 
    <div className="header-container">
        
       <div className='logo' >
        <Link to='/'>
            <img src='https://public.bnbstatic.com/image/pgc/202312/b29531739a6092c1c858d07aab370804.png' alt="logo"/>
        </Link>
    </div> 
        
        <div className="nav-items">
            <li>
                Online Status - {onlineStatus ?
                    <span >🟩</span>
                :
                    <span >🟥</span>}
                
            </li>
                    <li>
                       <Link to='/about'> About </Link> 
                    </li> 
                    <li>
                        <Link to='/contact'> Contact Us  </Link> 
                    </li>
            <li>Cart </li>
            <li>Sign In </li>
            
        </div>
       
       
    </div>)
}

export default Header;
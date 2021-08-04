import React from 'react';
import {logout,selectUser} from "../features/userSlice";
import "./Logout.css";
import { useSelector,useDispatch } from 'react-redux';

const Logout = () => {
    const user=useSelector(selectUser);
    
    
    const dispatch=useDispatch();
    const handleLogout = (e) =>{
        e.preventDefault();

        dispatch(logout());

    };
    return (
        <div>
            <h1>
                Welcome <span className="user_name">{user.name}</span>
                <span className="user_name">{user.email}</span>
               
                      
                <button className="logout_button" onClick={(e)=>handleLogout(e)}>Logout</button>
            </h1>
        </div>
    );
};

export default Logout;

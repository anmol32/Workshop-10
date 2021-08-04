import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {login} from "../features/userSlice";
import "./Login.css";
 const Login = () =>{
     const[name,setName]=useState("");
     const[email,setEmail]=useState("");
     const[password,setPassword]=useState("");

     // for handling submit button

     const dispatch=useDispatch();

     const handleSubmit=(e) =>{
         e.preventDefault();

         dispatch(
             login({
                 name:name,
                 email:email,
                 password:password,
                 loggedIn:true,
             })
         );
     };


     return(
         <div className="login">
             <form className="login_form" onSubmit={(e)=>handleSubmit(e)}>
                 <h1>Login Here</h1>
                 <input 
                 type="name"
                 placeholders="Name"
                 value={name}
                 onChange={(e) => setName(e.target.value) }/>
                 <input 
                 type="email"
                 placeholders="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value) }/>
                 <input 
                 type="password"
                 placeholders="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value) }/>

                 <button type="submit" className="submit_btn">Submit</button>
                 </form>
         </div>
     );
};

 export default Login;
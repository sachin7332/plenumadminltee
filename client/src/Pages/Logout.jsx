import React ,{useEffect} from 'react';
import {useHistory } from "react-router-dom";


function Logout() {

    const history = useHistory();
    

fetch('/logout' , {
    method: 'GET' , 
    headers: {
        accept: 'application/json' ,
        "content-type" : 'application/json'
    } ,
    credentials : "include"
}).then((res) =>{
    
history.push('/login' , {replace : true});
if(!res.status === 200)
{
  throw new Error(res.error);
 
}


}).catch((err) =>{
    console.log(err)
})

useEffect(() => {
  
}, )


    return (
        <div>
     
            
        </div>
    )
}

export default Logout

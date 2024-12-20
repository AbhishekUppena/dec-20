//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

export default function EmpApi() {

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(
        res=>(
            setEmpData(res.data)
        )
    );
},[]);


    const [empData,setEmpData] = useState([]);
  
    // () => ()
  
    return (
      
       
       <div className="card">
  <img src="https://images8.alphacoders.com/133/1331108.jpeg" className="card-img-top" alt="..." />
  <img src="https://thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?x55428" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.superherotoystore.com%2Fblogs%2Fcharacter-bios%2Fitachi-uchiha-a-tapestry-woven-with-loyalty-sacrifice-and-lies&psig=AOvVaw1qLw7j2kX43XJFw90VJg6C&ust=1734762283197000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiZisae27WKAxUvb2wGHbURBPcQjRx6BAgAEBk" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>



    );
  }
  
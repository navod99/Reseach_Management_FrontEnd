import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';

function Viewmarks() {

    const [listofmarks, setListofmarks] = useState([]);

    useEffect(() => {

        function  getMarks(){
            axios.get("http://localhost:5001/marks").then((res) =>{
                setListofmarks(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getMarks();
    
    }, [])
    

  return (

    <div className="listofMarks">
    <h1>List Of Marks</h1>
    {listofmarks.map((value) =>{
      return(
        <div className="markContainer">
      <div  key={value.id} className="mark">
        <h3>Group ID:{value.groupID}</h3>
        <h3>Grade:{value.Marks} </h3>
        <h3>Feedback:{value.Comments} </h3>
        </div>
        </div>
      );
    })}
  </div>
  )
}

export default Viewmarks
import React from 'react';
import axios from "axios";
import { useState } from 'react';

export default function FindStudentByKeyword() {
    // const [id, setId] = useState();
    const [data, setData] = useState();
    const [keyword, setKeyword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(id);
        axios.get('http://localhost:4000/api/student/name/' + keyword).then((response) => {
            if (response.data.length!==0) {
                console.log(response.data);
                setData(response.data);
        // alert("Found "+ response.data[0].name)                
            }
            else {
                alert("No student found with keyword " + keyword)
            }
        }, error => {
            alert("Some error!")
      });
    }
    const handleKeyword = (e) => {
        console.log(e.target.value);
        setKeyword(e.target.value);
    }
  return (
      <div>
          {
              data ? data.map(student => {
                  return <div key={student.id} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'350px', margin:'auto', marginTop:'10px'}}>
                      <div>{student.name}</div>
                      <div>{student.id}</div>
                  </div>
              }):
          <form onSubmit={handleSubmit}>
              <label>Enter keyword: </label>
              <input type="text" value={keyword} onChange={handleKeyword} /><br/>
              <input type="submit" value="Find Students" />
          </form>
          }
    </div>
  )
}
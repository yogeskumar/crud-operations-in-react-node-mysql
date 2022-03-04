import React from 'react';
import axios from "axios";
import { useState } from 'react';

export default function FindStudentById() {
    const [id, setId] = useState();
    const [name, setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id);
        axios.get('http://localhost:4000/api/student/' + id).then((response) => {
            if (response.data.length!==0) {
                console.log(response.data);
                setName(response.data[0].name);
        // alert("Found "+ response.data[0].name)                
            }
            else {
                alert("No student found with id " + id)
            }
        }, error => {
            alert("Some error!")
      });
    }
    const handleId = (e) => {
        console.log(e.target.value);
        setId(e.target.value);
    }
  return (
      <div>
          {
              name ? <div>
                  Success<br />
                  Found {name} with id {id}
              </div>:
          <form onSubmit={handleSubmit}>
              <label>Enter unique id: </label>
              <input type="number" value={id} onChange={handleId} /><br/>
              <input type="submit" value="Find Student" />
          </form>
          }
    </div>
  )
}
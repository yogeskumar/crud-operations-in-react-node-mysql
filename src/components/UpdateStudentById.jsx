import React from 'react';
import axios from "axios";
import { useState } from 'react';

export default function UpdateStudentById() {
    const [id, setId] = useState();
    const [name, setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id, name);
        axios.put('http://localhost:4000/api/student', {
            id: id,
            name:name
        }).then((response) => {
          console.log(response.data);
        alert("Student Updated")
      }, error => {
          alert("Student not updated!")
      });
    }
    const handleId = (e) => {
        // console.log(e.target.value);
        setId(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>Enter unique id: </label>
              <input type="number" value={id} onChange={handleId} /><br/>
              <label>Enter updated name: </label>
              <input type="text" value={name} onChange={handleName} /><br/>
              <input type="submit" value="Update Student" />
          </form>
    </div>
  )
}
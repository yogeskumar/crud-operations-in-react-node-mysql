import React from 'react';
import axios from "axios";
import { useState } from 'react';

export default function DeleteStudentById() {
    const [id, setId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/student/'+id).then((response) => {
          console.log(response.data);
        alert("Student deleted")
      }, error => {
          alert("Student not deleted!")
      });
    }
    const handleId = (e) => {
        // console.log(e.target.value);
        setId(e.target.value);
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>Enter unique id: </label>
              <input type="number" value={id} onChange={handleId} /><br/>
              <input type="submit" value="Delete Student" />
          </form>
    </div>
  )
}
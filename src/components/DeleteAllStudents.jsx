import React from 'react';
import axios from "axios";
import { useState } from 'react';

export default function DeleteAllStudents() {
    const [deleteall, setDeleteall] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (deleteall === "delete all") {            
        axios.delete('http://localhost:4000/api/student'
      ).then((response) => {
        alert("All students data deleted")
            setDeleteall('')
      }, error => {
          alert("Deletion not performed due to some error")
            setDeleteall('')
      });
        }
        else {
            alert("Enter 'delete all' correctly")
            setDeleteall('')
        }
    }
    const handleDelete = (e) => {
        setDeleteall(e.target.value)
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>Enter delete all </label>
              <input type="text" value={deleteall} onChange={handleDelete} placeholder="delete all" /><br/>
              <input type="submit" value="Delete All Student" />
          </form>
    </div>
  )
}

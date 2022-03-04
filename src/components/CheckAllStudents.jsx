import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";

export default function CheckAllStudents() {
    const [allStudents, setAllStudents] = useState();
    useEffect(() => {
       axios.get('http://localhost:4000/api/student').then((response) => {
           setAllStudents(response.data);
           console.log(response.data);
    }); 
    },[])
  return (
      <div>
          {
              allStudents ? allStudents.map(student => {
                  return <div key={student.id} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'350px', margin:'auto', marginTop:'10px'}}>
                      <div>{student.name}</div>
                      <div>{student.id}</div>
                  </div>
              }):<>No student/data</>
          }
    </div>
  )
}

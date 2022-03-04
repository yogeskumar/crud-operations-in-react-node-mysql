import { useState } from 'react';
import AddNewStudent from './components/AddNewStudent';
import CheckAllStudents from './components/CheckAllStudents';
import DeleteAllStudents from './components/DeleteAllStudents';
import DeleteStudentById from './components/DeleteStudentById';
import FindStudentById from './components/FindStudentById';
import FindStudentByKeyword from './components/FindStudentByKeyword';
import UpdateStudentById from './components/UpdateStudentById';

function App() {
  const [screen, setScreen] = useState(<div style={screenStyle}>'Welcome to CRUD operations'</div>);

  const addNewStudent = () => {
    setScreen(<AddNewStudent/>)
  }
  const checkAllStudents = () => {
    setScreen(<CheckAllStudents />)
  }
  const findStudentById = () => {
    setScreen(<FindStudentById />)
  }
  const updateStudentById = () => {
    setScreen(<UpdateStudentById/>)
  }
  const deleteStudentById = () => {
    setScreen(<DeleteStudentById/>)
  }
  const deleteAllStudents = () => {
    setScreen(<DeleteAllStudents/>)
  }
  const findStudentByKeyword = () => {
    setScreen(<FindStudentByKeyword/>)
  }
  return (
    <div style={container}>
      <div style={buttonContainer}>
        <button onClick={addNewStudent} style={button}>Add new student</button>
        <button onClick={checkAllStudents} style={button}>Check All Students</button>
        <button onClick={findStudentById} style={button}>Find a student by id</button>
        <button onClick={updateStudentById} style={button}>Update a student by id</button>
        <button onClick={deleteStudentById} style={button}>Delete a student by id</button>
        <button onClick={deleteAllStudents} style={button}>Delete all students</button>
        <button onClick={findStudentByKeyword} style={button}>Find a student with keyword</button>
      </div>
      <div>{screen}</div>
    </div>
  );
}

export default App;

const container = {
  flex:1,
  padding: '10%',
  justifyContent: 'center',
  alignItems:'center'
}
const buttonContainer = {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap:'wrap'
}
const button = {
  padding: '10px',
  border: 0,
  borderRadius: '2px',
  fontWeight: '700',
  color: '#4f4f4f',
  fontSize: '15px',
  cursor:'pointer'
}
const screenStyle = {
  marginTop: '10px',
  backgroundColor:'red'
}
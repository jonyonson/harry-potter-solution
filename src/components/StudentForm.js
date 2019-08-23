import React, { useState } from 'react';

function StudentForm(props) {
  const [student, setStudent] = useState({
    name: '',
    identity: '',
    img: '',
    age: '',
    bestFriend: '',
  });

  const handleChanges = event => {
    console.log(event.target.name);
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newStudent = {
      ...student,
      id: Date.now(),
    };
    props.addStudent(newStudent);
    setStudent({ name: '', identity: '', img: '', age: '', bestFriend: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={student.name}
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChanges}
      />
      <input
        value={student.identity}
        type="text"
        name="identity"
        placeholder="Identity"
        onChange={handleChanges}
      />
      <input
        value={student.img}
        type="text"
        name="img"
        placeholder="Image"
        onChange={handleChanges}
      />
      <input
        value={student.age}
        type="text"
        name="age"
        placeholder="Age"
        onChange={handleChanges}
      />
      <input
        value={student.bestFriend}
        type="text"
        name="bestFriend"
        placeholder="Best Friend"
        onChange={handleChanges}
      />
      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;

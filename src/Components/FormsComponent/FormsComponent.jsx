import React, { useState } from "react";

const FormsComponent = () => {
  const [user, setUser] = useState({})

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let data = e.target;
    let dataUser = {
      name: data.name.value,
      lastname: data.lastname.value,
      selectgender: data.selectgender.value,
      bio: data.bio.value,
      send: data.send.value,
    }
    console.log("Data User", dataUser);
    setUser(dataUser)
  };

  const handleOnChange = (e) => {
    let input_name = e.target.name;
    let modify_user = user;

    // modify_user[input_name] = e.target.value;
    setUser(prevState => {
      return {
        ...prevState,
        [input_name]: e.target.value,
      }
    })
    console.log("user onchange", user);
  }

  return (
    <div>
      <h2>Forms Component</h2>
      {
        user.send && (
          <div className="card text-dark p-3 bg-info">
            {user.name} {user.lastname} es un {user.selectgender} y su biografía es esta {user.bio}
          </div>
        )
      }
      <br />
      <form onSubmit={handleOnSubmit}>
        <p>
          <input name="name" className="form-control" type="text" placeholder="Name" onChange={handleOnChange} />
        </p>
        <p>
          <input name="lastname" className="form-control" type="text" placeholder="Lastname" onChange={handleOnChange} />
        </p>
        <p>
          <select className="form-select" name="selectgender" id="" onChange={handleOnChange}>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </p>
        <p>
          <textarea name="bio" className="form-control" placeholder="Bio" onChange={handleOnChange}></textarea>
        </p>
        <p>
          <input name="send" type="submit" value="Enviar" className="btn btn-success" />
        </p>
      </form>
    </div>
  );
};

export default FormsComponent;

import React, { useEffect, useState } from "react";

const AjaxComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("")

  const handleGetUsersAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  const handleGetUsersAjaxAW = () => {
    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=2");
        const { data } = await peticion.json();
        setUsers(data);
        setLoading(false)
      } catch (err) {
        console.log(err.message);
        setErrors(err.message);
      }
    }, 1000);
  };

  useEffect(() => {
    //handleGetUsersAjaxPms();
    handleGetUsersAjaxAW();
  }, []);

  return (
    <div>
      <h2>Ajax Component</h2>
      {loading && <p>Loading...</p>}
      {errors !== "" && <p>Error...</p>}
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt="" width={"20"} /> {user.first_name}{" "}
            {user.last_name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AjaxComponent;

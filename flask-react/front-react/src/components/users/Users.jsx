import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './styles.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get(axios.defaults.baseURL + "/users")
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            }).catch((err)=>{
                console.log(err)
            });

    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-2">
                        <h3>Users</h3>
                        <ul>
                            {
                                users &&
                                users?.map((item,i) =>
                                    <li key={i}>
                                        {item.username}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Datos</h3>
                        <p>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link className="btn btn-primary" to={`/`}>Home</Link>
                    </li>
                </ul>
            </div>
            <Link to="?tab=one" preventScrollReset={true} />
        </>


    )
}

export default Users;
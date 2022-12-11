import React from "react";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

const About = () => (
    <>
    <Menu></Menu>
        <div className="container">
            <div className="row mt-2">
                <h3>About</h3>
                <p>
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <ul>
                    <li>
                        <Link className="btn btn-primary" to={`/`}>Atras</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
)

export default About;
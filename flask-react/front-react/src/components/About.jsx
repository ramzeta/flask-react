import React from "react";

const About = (
    <>
        <div className="row">
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
                    <Link className="btn btn-primary" to={`/`}>Home</Link>
                </li>
            </ul>
        </div>
    </>
)

export default About;
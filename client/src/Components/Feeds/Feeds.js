import React, { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import "./Feeds.css"







function Feeds() {

    const [project, setproject] = useState([])

    // API work here

    const get_projects = async () => {

        await fetch("https://domefavor.herokuapp.com/project")
            .then((response) => response.json())
            .then((json) => {
                // console.log(json[0].name);
                setproject(json);
            });

    };

    useEffect(() => {
        get_projects();
    }, []);















    return (
        <div className='Feeds'>
            {

                project.map(e => (

                    <div className='Feedss'>
                        <div className="top">
                            <div className='head'>
                                <h2>{e.name}</h2>
                                <h4>Reputation required : 3</h4>
                            </div>

                            <div class="avatars">
                                {e.team.map(j => (
                                    <span class="avatar">
                                        <img src="https://www.fillmurray.com/50/50" width="45" height="45" alt={j} />
                                    </span>
                                ))}
                            </div>
                        </div>


                        <div className="middle">

                            <div className="about">
                                <p>1. Login Screen</p>
                                <p>2. Dashboard to choose either “Create Report” or “View Report”</p>
                                <p>3. For “Create Report” display a new form. And Save in a database table.</p>
                                <p>4. For “View Report” read the fields from database table and display.</p>
                                <p>5. Give a button to Email the report as a pdf fil</p>
                            </div>

                            <div className='tags'>
                                {e.category.map(j => (
                                    <p>{j}</p>
                                ))}

                            </div>

                        </div>


                        <div className="bottom">
                            <div className="bottom__left">
                                <h4>bids : 10</h4>
                                <div className="location">
                                    <GrLocation />
                                    India
                                </div>
                            </div>

                            <div className="bottom__right">


                                <div className="likeicons">
                                    <AiFillLike className='icons' />
                                    <AiFillDislike className='icons' />
                                </div>

                            </div>
                        </div>

                    </div>

                ))
            }
        </div>

    )
}


export default Feeds;

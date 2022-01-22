import React from 'react';
import "../css/Home.css"
import { FaSearch } from 'react-icons/fa';
import Feeds from './Feeds/Feeds';

function Home() {

    return (

        <div className='Home'>


            <div className="left__feeds">
                <h3 className="name">DO ME FAVOUR</h3>
            </div>

            <div className="middle__feeds">
                <h3>Welcome Shiv, You've got x notifications</h3>

                <div className="search_bar">
                    <FaSearch className='search__icon' />
                    <input type="text" placeholder='Search'></input>
                </div>

                <Feeds />
                <Feeds />
                <Feeds />
                <Feeds />

            </div>

            <div className="right__feeds">
                <img src="https://i5.walmartimages.com/asr/d30a610d-9db8-41f7-bd03-0d9072a1a1b7_1.9a252d2ef16ff913bcb4926254106fb4.jpeg" alt='Avatar' width='100px' height='100px'></img>
                <h3>Shivansh Sharma</h3>
                <p>MERN developer | Genius Guy | Smartest Guy in the room | Fuck you nehal</p>
                <p>Reputation : 100</p>

            </div>
        </div>

    )
}

export default Home;

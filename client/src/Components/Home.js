import React from 'react';
import "../css/Home.css"
import { FaSearch} from 'react-icons/fa';
import Feeds from './Feeds/Feeds';
import Home_profile from './Home_profile/Home_profile';

function Home() {

    return (

        <div className='Home'>

           

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
                <Home_profile/>
            </div>
        </div>

    )
}

export default Home;

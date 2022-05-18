import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <div>
            <main className='home'>
                <section className='home__container'>
                    <h2>Watch your favorite Tech youtuber's videos</h2>
                    <div className='home__buttonContainer'>
                        <button>
                            <Link to='/videos'>Watch Now</Link>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;
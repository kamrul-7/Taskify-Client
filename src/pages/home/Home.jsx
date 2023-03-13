import React from 'react';
import CategorySlide from '../../components/categorySlide/CategorySlide';
import Featured from '../../components/featured/Featured';
import ProjectCard from '../../components/projectCard/ProjectCard';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trusredBy/TrustedBy';
import { cards, projects } from '../../data'

import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={4} arrowsScroll={4}>
                {cards.map((card) => (
                    <CategorySlide key={card.id} card={card} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>A whole world of <i>freelance</i> talent at your fingertips</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            <h3> The best for every budget</h3>
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            <h3>uality work done quickly</h3>
                        </div>
                        <p>
                            Find the right freelancer to begin working on your project within minutes.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            <h3> Protected payments, every time</h3>
                        </div>
                        <p>
                            Always know what you will pay upfront. Your payment is not released until you approve the work.
                        </p>

                    </div>
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>Taskify business</h1>
                        <h1>A business solution designed for teams</h1>
                        <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Connect to freelancers with proven business experience
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get matched with the perfect talent by a customer success manager
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Manage teamwork and boost productivity with one powerful workspace
                        </div>
                        <button>Explore Fiver Business</button>
                    </div>
                    <div className="item">
                        <img src="https://Taskify-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map((card) => (
                    <ProjectCard key={card.id} card={card} />
                ))}
            </Slide>
        </div >

    );
};

export default Home;
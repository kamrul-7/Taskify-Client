import React from 'react';
import { Link } from 'react-router-dom';
import './GigCard.scss'
const GigCard = ({ item }) => {
    return (
        <Link to='/gig/2123' className='link'>
            <div className='gigCard'>
                <img src={item.img} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src="./img/star.png" alt="" />
                        <span>{item.star}</span>
                    </div>
                    <hr />

                </div>
            </div>
        </Link>
    );
};

export default GigCard;
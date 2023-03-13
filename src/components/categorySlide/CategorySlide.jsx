import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CategorySlide.scss'

const CategorySlide = ({ card }) => {
    // console.log(card);
    return (
        <Link to='/gigs?cat=design'>
            <div className='categorySlide'>
                <img src={card.img} alt="" />
                <span className='desc'>{card.desc}</span>
                <span className='title'>{card.title}</span>
            </div>
        </Link >
    );
};

CategorySlide.propTypes = {
    card: PropTypes.shape({
        img: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default CategorySlide;

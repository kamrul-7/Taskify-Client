import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProjectCard.scss'

const ProjectCard = ({ card }) => {
    console.log(card);
    return (
        <Link to='/' className='link'>
            <div className='projectCard'>
                <img src={card.img} alt="" />
                <div className="info">
                    <img src={card.pp} alt="" />
                    <div className="texts">
                        <h2>{card.cat}</h2>
                        <span>{card.username}</span>
                    </div>
                </div>
            </div>
        </Link >
    );
};

ProjectCard.propTypes = {
    card: PropTypes.shape({
        img: PropTypes.string.isRequired,
        cat: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        pp: PropTypes.string.isRequired
    }).isRequired
};

export default ProjectCard;

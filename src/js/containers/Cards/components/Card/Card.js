import React from 'react';
import PropTypes from 'prop-types';

import style from './Card.sass';

const Card = ({ description }) => <div className={style.card}>{description}</div>;

Card.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Card;

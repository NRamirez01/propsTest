import React from 'react';

const PersonCard = (props) => {
    const { name, age, hairColor } = props;
    return (
        <div>
            <p>{name}</p>
            <p>Age: {age} </p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;
import React from 'react';

const Filter = props => {
    return (
        <ul className="filter">
            <h3>{props.data.name}</h3>
            <ul className="filter__options">
                {props.data.options.map(option => <li key={option.id}>{option.name}</li>)}
            </ul>
        </ul>
    )
}

export default Filter;
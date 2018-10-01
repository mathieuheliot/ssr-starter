import React from 'react';

const Product = props => {
    return (
        <article className="product">
            <h3>{props.data.name}</h3>
            <img src={props.data.thumbnail} alt={props.data.name}/>
        </article>
    )
}

export default Product;
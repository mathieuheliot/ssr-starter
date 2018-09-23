import React from 'react';

const Product = props => {
    console.log(props);
    return (
        <article className="product">
            <h3>{props.data.name}</h3>

        </article>
    )
}

export default Product;
import React from 'react';

export default class Category extends React.Component {

    constructor(params) {
        super();      
        console.log(params)
        this.state = {
            id: params.id
        }
    }

    render() {
        return (
            <div>
                <h2>Category {this.state.id}</h2>
                <nav className="filters">
                    <ul>
                        <li><span className="filter">Best Kiteboarding</span></li>
                        <li><span className="filter">Kite</span></li>
                    </ul>
                </nav>
                <aside className="filterbar">


                </aside>


            </div>
        );
    }
}
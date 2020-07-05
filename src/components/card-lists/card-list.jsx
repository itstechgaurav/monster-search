import React from 'react';

import './card-list.css'

export const CardList =  (props) => {
    return (
        <div className="cards">
            {
                props.monsters.map(monster => (
                    <div className="card" key={monster.id}>
                        <img className="card-img" alt={monster.name} src={`https://robohash.org/${monster.id}.png?set=set2`}></img>
                        <h2 className="card-title" dangerouslySetInnerHTML={{__html: monster.preetyName}}></h2>
                        <p className="card-email">{ monster.email }</p>
                    </div>
                ))
            }
        </div>
    )
}
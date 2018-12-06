import React from 'react';
import Card from './Card';


const CardList = ( {cats} ) => {
    const catArray = cats.map((cat, i) =>

        <Card 
            key={cat.id} 
            id={cat.id} 
            name={cat.name} 
            email={cat.email} 
        />
        );
        
    return (
        <div>
            {catArray}
        </div>
    );
};

export default CardList;
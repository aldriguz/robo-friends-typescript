import React from 'react';
import Card from './Card';
import IRobot from '../interfaces/IRobot';

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
    //console.log('CardList');
    const cardsArray = robots.map((user:any, i:number) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email}/>
    });

    return(
        <React.Fragment>
            {cardsArray}
        </React.Fragment>
    );
}

export default CardList;
import React, {FunctionComponent} from 'react';

interface Details {
    name: string,
    attribute: string
    role: string,
    assets?: 
}




const HeroesDetail: React.FC <Details> = ({name, attribute}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{attribute}</p>
            <p></p>
        </div>
    )
}


export default HeroesDetail
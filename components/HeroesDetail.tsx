import React, {FunctionComponent} from 'react';

interface Details {
    name: string,
    attribute: string
}




const HeroesDetail: React.FC <Details> = ({name, attribute}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{attribute}</p>
        </div>
    )
}


export default HeroesDetail
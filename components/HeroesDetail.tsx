import React, {FunctionComponent} from 'react';

interface Details {
    name: string
}




const HeroesDetail: React.FC <Details> = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}


export default HeroesDetail
import React, {FunctionComponent} from 'react';

interface Details {
    name: string
}




const HeroesDetail: React.FC <Details> = () => {
    return (
        <div>
            <h3>Hero's Name</h3>
        </div>
    )
}


export default HeroesDetail
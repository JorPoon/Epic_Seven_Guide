import React, {FunctionComponent} from 'react';
import Link from "next/link";


interface Details {
    name: string,
    attribute: string
    role: string,
    assets?: []
}




const HeroesDetail: React.FC <Details> = ({name, attribute, role, assets}) => {
   
    return (
        <>
        <Link href="/heroes/[id]" as={`/heroes/${name.toLowerCase()}`}>
            <a>
                <h3>
                    {name}
                </h3>  
            </a>
         </Link>
            <p>{attribute}</p>
            <p>{role}</p>
        </>
    )
}


export default HeroesDetail
import React, {FunctionComponent} from 'react';
import Link from "next/link";

interface Props {
    list?: any[]
}

const Homepage: React.FC <Props> = () => {
    return (
        <div>
            <h2>Content by ZIROKUDOS</h2>
            <Link href="/heroes">
                <a>Heroes</a>
            </Link>
        </div>
    )
}



export default Homepage

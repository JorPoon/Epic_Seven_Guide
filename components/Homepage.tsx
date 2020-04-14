import React, {FunctionComponent} from 'react';
import Link from "next/link";

interface Props {
    list?: any[]
}

const Homepage: React.FC <Props> = () => {
    return (
        <div>
            <h1>Welcome to Epic Seven Guides by ZIROKUDOS</h1>
            <Link href="/character">
                <a>Heroes</a>
            </Link>
        </div>
    )
}



export default Homepage

import React from 'react';
import Link from "next/link";



const Homepage: React.FC = () => {
    return (
        <div>
            <Link href="/heroes">
                <a>Epic Seven Heroes</a>
            </Link>
            
        </div>
    )
}



export default Homepage

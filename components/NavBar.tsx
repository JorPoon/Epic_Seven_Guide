import Link from 'next/link';




const NavBar: React.FC = () => {
    return (
        <div>
            <Link href="/index" as="/home">
                Home
            </Link>
        </div>
    )
}


export default NavBar
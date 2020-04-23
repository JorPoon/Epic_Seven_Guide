import Link from 'next/link';




const NavBar: React.FC = () => {
    return (
        <div className="nav-bar">
            <Link href="/index" as="/home">
                Home
            </Link>
        </div>
    )
}


export default NavBar
import Link from 'next/link';




const NavBar: React.FC = () => {
    return (
        <div className="nav-bar">
            <Link href="/index" as="/">
                <a>Home</a>
            </Link>
        </div>
    )
}


export default NavBar
import fetch from 'isomorphic-unfetch'
import HeroesDetail from "../components/HeroesDetail"
import Link from "next/link"



const Hero = (props) => {

    return (
        <div>
            Heroes of Epic Seven
            {props.results.map(hero => {
                const {name} = hero.name.toLowerCase()
                return (
                        <Link href="/heroes/[id]" as={`/heroes/${name}`}>
                            <HeroesDetail 
                                attribute={hero.attribute}
                                name={hero.name}
                                role={hero.role}
                            />
                            {/* <a>{hero.name}</a> */}
                        </Link>
                        )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.epicsevendb.com/hero')
    const list = await res.json() 

    return {
        props: list
    }
}

export default Hero
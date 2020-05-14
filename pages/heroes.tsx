import fetch from 'isomorphic-unfetch'
import HeroesDetail from "../components/HeroesDetail"




const heroes = (props) => {

    return (
        <div>
            <h1>Heroes of Epic Seven</h1>
            {props.results.map(hero => {
                return (  
                            <HeroesDetail 
                                attribute={hero.attribute}
                                name={hero.name}
                                role={hero.role}
                            />
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

export default heroes
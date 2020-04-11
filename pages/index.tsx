import Header from "../components/Header"
import Homepage from "../components/Homepage"
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
    console.log(props.results)
    return (
        <div>
            <Header/>
            <h1>Hello From EPIC SEVEN</h1>
            <Homepage list={props.list}/>
            {props.results.map(item => {
                return (
                <h3 key={item.id}>{item.name}</h3>
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.epicsevendb.com/hero')
    const list = await res.json()
    console.log(list)
    return {
        props: list
    }
}

export default Index
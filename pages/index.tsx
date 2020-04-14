import Header from "../components/Header"
import Homepage from "../components/Homepage"
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
    return (
        <div>
            <Header/>
            <h1>Hello From EPIC SEVEN</h1>
            <Homepage list={props.list}/>
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

export default Index
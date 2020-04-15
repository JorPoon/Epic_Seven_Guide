import Header from "../components/Header"
import Homepage from "../components/Homepage"
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
    return (
        <div>
            <Header/>
            <h1>Hello From EPIC SEVEN</h1>
            <Homepage />
        </div>
    )
}



export default Index
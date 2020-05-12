

const Character = ({characterData}) => {
  
  const {name, rarity, attribute, role, assets} = characterData.results[0]
  
  return (
    <div>
      <h1>{name}</h1>
      <img src={assets["image"]} alt="aramintha" />
      <p>{rarity}</p>
      <p>{attribute}</p>
      <p>{role}</p>
      
    </div>
  )
}


export async function getStaticPaths() {

  const res = await fetch('https://api.epicsevendb.com/hero')
  const lists = await res.json() 

  const paths = lists.results.map(list => ({
    params: {id: list["_id"]},
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const res = await fetch(`https://api.epicsevendb.com/hero/${params.id}`)
  const characterData = await res.json()

  return {
    props: {
      characterData
    }
  }
}

export default Character


import {getAllCharacterIds, getCharacterData} from '../../lib/characters'

export const Character = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}


// export async function getStaticPaths() {
//   const paths = getAllCharacterIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const characterData = getCharacterData(params.id)
//   console.log(characterData)
//   return {
//     props: {
//       characterData
//     }
//   }
// }
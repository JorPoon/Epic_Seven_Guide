import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const charactersDirectory = path.join(process.cwd(), 'characters')

export function getSortedCharactersData() {
    const fileNames = fs.readdirSync(charactersDirectory)

    const allCharactersData = fileNames.map(filename => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(charactersDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
          }
    })

    return allCharactersData.sort((a, b) => {
        if (a.name < b.name) {
          return 1
        } else {
          return -1
        }
      })
}

export function getAllCharacterIds() {
    const fileNames = fs.readdirSync(charactersDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export function getCharacterData(id) {
    const fullPath = path.join(charactersDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  }
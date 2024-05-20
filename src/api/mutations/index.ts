import { api } from '../index'

const API_KEY = import.meta.env.VITE_API_KEY

if (!API_KEY) {
  throw new Error('Missing api url!')
}

class Mutations {
  generatePdf(text: string) {
    const query = `/create-pdf?apiKey=${API_KEY}`

    return api.post(query, { text })
  }
}

export const mutations = new Mutations()

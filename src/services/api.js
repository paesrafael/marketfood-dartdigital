import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      alert('Não foi possível consultar os dados!')
    } else {
      return Promise.reject(error)
    }
  }
)

export default api

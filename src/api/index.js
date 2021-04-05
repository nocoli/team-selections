import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertPlayer = payload => api.post(`/player`, payload)
export const getAllPlayers = () => api.get(`/players`)
export const updatePlayerById = (id, payload) => api.put(`/player/${id}`, payload)
export const deletePlayerById = id => api.delete(`/player/${id}`)
export const getPlayerById = id => api.get(`/player/${id}`)

const apis = {
    insertPlayer,
    getAllPlayers,
    updatePlayerById,
    deletePlayerById,
    getPlayerById,
}

export default apis
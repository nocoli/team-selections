import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

// Players
export const insertPlayer = payload => api.post(`/players`, payload)
export const getAllPlayers = () => api.get(`/players/all`)
// export const updatePlayerById = (id, payload) => api.put(`/player/${id}`, payload)
export const deletePlayerById = id => api.delete(`/players/${id}`)
// export const getPlayerById = id => api.get(`/player/${id}`)

export const getAllTeams = () => api.get(`/teams/all`)

const apis = {
    // Players
    insertPlayer,
    getAllPlayers,
    // updatePlayerById,
    deletePlayerById,
    // getPlayerById,

    // Teams
    getAllTeams,
}

export default apis
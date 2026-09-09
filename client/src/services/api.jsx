import axios from 'axios' 

const api = "http://localhost:5000/chat"

export const sendMsg = async({msg})=> {
    try {
        const res = await axios.post(api, {msg})
         return res.data
    } catch (error) {
        console.error(error.message)
    }
}
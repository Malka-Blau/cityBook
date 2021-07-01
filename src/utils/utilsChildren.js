import axios from 'axios'

const url = "http://localhost:53983/api/children";

// function getAll (){
//     return axios.get(`${url}`);
// }
// function getById (id) {
//     return axios.get(`${url}/${id}`);
// }

function postData (obj) {
    return axios.post(`${url}`, obj);
}

export default  postData


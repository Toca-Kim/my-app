/**
* Этот файл содержит все вызовы к API
*/

import axios from "axios";

// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.VUE_APP_API_ADDRESS;

const requests = {
    get: (url) => axios.get(url).then((response) => response.data),
    post: (url, body) => axios.post(url, body).then((response) => response.data),
    put: (url, body) => axios.put(url, body).then((response) => response.data),
    del: (url) => axios.delete(url).then((response) => response.data)
}

const Todos = {
    list: () => requests.get("/todos"),
    create: (task) => requests.post("/todos", task),
    update: (task) => requests.put(`/todos/${task.id}`, task),
    delete: (id) => requests.del(`/todos/${id}`),
}

export default {
    Todos
}
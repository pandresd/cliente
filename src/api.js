import axios from 'axios';
const url = "https://powerful-everglades-44441.herokuapp.com/api/post";



export default class API{
    //Obtener todos los posts
    static async getAllPost() { 
        const res = await axios.get(url);
        return res.data;
    }
    //Traer un solo post por ID
    static async getPostByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //Insertar nuevo post
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }
    //Actualizar post por ID
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    //Borrar un solo post por ID
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}
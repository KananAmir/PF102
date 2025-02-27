
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../constants";
import { Book, Endpoints } from "../types/book";

// const instance = axios.create({
//     baseURL: 'https://book-store-api-liard-three.vercel.app',
//     timeout: 1000,
//     headers: {'Content-type': 'application/json'}
//   });


//get all data

export const getAllData = async (endpoint: Endpoints): Promise<Book[]> => {
    try {
        const response:AxiosResponse<Book[]> = await axios(`${BASE_URL}/${endpoint}`)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
    }
}
//get data by id

export const getDataById = async (endpoint: Endpoints, id: string): Promise<Book> => {
    try {
        const response:AxiosResponse<Book> = await axios(`${BASE_URL}/${endpoint}/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
    }
}
//delete data by id

export const deleteDataById = async (endpoint: Endpoints, id: string): Promise<void>=>{
    try {
        await axios.delete(`${BASE_URL}/${endpoint}/${id}`) 
    } catch (error) {
        console.log(error);   
    }
}
//add new data

export const addNewData = async (endpoint: Endpoints, payload: Omit<Book, "id">): Promise<Book> => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

// edit data by id

export const editDataById = async (endpoint: Endpoints, payload: Omit<Book, "id">, id: string): Promise<Book> => {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
        
    }
}
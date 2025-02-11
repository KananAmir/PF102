import axios from "axios";
import { BASE_URL } from "../constants";
//get all
const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

//get one data by id
const getDataById = async (endpoint, id) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//delete one data by id
const deleteDataById = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
//add new data
const addNewData = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};
//edit data by id
const editDataById = async (endpoint, id, payload) => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//edit data by id with patch
const editDataByIdWitPatch = async (endpoint, id, payload) => {
  try {
    const response = await axios.patch(`${BASE_URL}${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getData,
  getDataById,
  deleteDataById,
  addNewData,
  editDataById,
  editDataByIdWitPatch,
};

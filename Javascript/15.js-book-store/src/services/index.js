import BASE_URL from "../constants";
import axios from "axios";

//get all
const getAllData = async (endpoint) => {
  try {
    const response = await axios(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

//get one
const getDataById = async (endpoint, id) => {
  try {
    const response = await axios(`${BASE_URL}${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
//delete one
const deleteDataById = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
//post one
const addNewData = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
//edit data
const editDataById = async (endpoint, id, payload) => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
const editDataByIdWithPatch = async (endpoint, id, payload) => {
  try {
    const response = await axios.patch(`${BASE_URL}${endpoint}/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getAllData,
  getDataById,
  deleteDataById,
  addNewData,
  editDataById,
  editDataByIdWithPatch,
};

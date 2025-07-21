import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// POST (e.g. for multipart/form-data)
export const postFormData = async (endpoint, formData) => {
  try {
    const response = await axiosInstance.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { success: true, data: response.data, message: "Success" };
  } catch (error) {
    return {
      success: false,
      error,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
};

// Other helpers if needed (GET, PUT, DELETE, etc.)
export const getRequest = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error,
      message: error.response?.data?.message || "Failed to fetch data",
    };
  }
};

// DELETE request helper
export const deleteRequest = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error,
      message: error.response?.data?.message || "Failed to delete data",
    };
  }
};

// PUT request helper
export const putRequest = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error,
      message: error.response?.data?.message || "Failed to update data",
    };
  }
};

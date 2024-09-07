import axios from "axios";

const API_URL = "http://localhost:5000/cars";

const api = {
    getCars: () => axios.get(API_URL),
    addCar: (car) => axios.post(API_URL, car),
    updateCar: (car) => axios.put(API_URL, car),
    removeCar: (id) => axios.delete(`${API_URL}/${id}`),
};

export default api;

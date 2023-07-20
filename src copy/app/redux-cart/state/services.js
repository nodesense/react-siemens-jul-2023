// code to fetch data from backend...

import axios  from "axios";
import { API_END_POINT } from "../../config";

export const fetchProducts = async () => {
    try {
      //const response = await  axios.get(`${process.env.REACT_APP_API_END_POINT}/delayed/api/products`)
      const response = await  axios.get(`${API_END_POINT}/delayed/api/products`)
      
      return response.data // products array
    }catch (error) {
        console.log("error from backend.. ", error)
        // todo: convert http error into application usable..
        if (error.message) throw error.message;

        throw error
        // return error
    }
}
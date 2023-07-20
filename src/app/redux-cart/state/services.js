// code to fetch data from backend...

import axios  from "axios";

export const fetchProducts = async () => {
    try {
      const response = await  axios.get('http://localhost:7070/delayed/api/products')
      return response.data // products array
    }catch (error) {
        console.log("error from backend.. ")
        // todo: convert http error into application usable..
        return error
    }
}
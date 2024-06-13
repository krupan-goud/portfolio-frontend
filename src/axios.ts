import axios from "axios";

const instance = axios.create({
  baseURL: "http://" + "localhost:5000" + "/portFolio",
});

export const sendUserDetails = async (userDetails: any) => {
  return await instance
    .post(`/contact`, userDetails)
    .then((res: any) => {
      return res.data;
    })
    .catch((e: any) => {
      console.error(e.message);
    });
};
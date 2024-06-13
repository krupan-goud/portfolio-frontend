import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfolio-backend-dun-rho.vercel.app" + "/portFolio",
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

import { myAxios } from "./Helper";

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};
export const signUp = (user) => {
    return myAxios.post('/auth/v1/register',config).then((response) => response.json())
}
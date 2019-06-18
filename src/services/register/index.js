import request from "util/request";
import { doLogin } from "../login";

export const doRegister = async data => {
  const { email } = await request.post("/register", data);
  return doLogin({ email, password: data.password });
};

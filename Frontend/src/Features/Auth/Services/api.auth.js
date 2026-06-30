import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials:true
});

export  const login=async(name,password)=>{
  const respons = await api.post('auth/login-user', { name, password });


  return respons.data
}
export  const registr=async(name,password)=>{
  const respons = await api.post('registrtion');
  return respons.data
}
export  const gatme=async(name,password)=>{
  const respons = await api.post('get-me');
  return respons.data
}

import { $host, $authHost } from "./index";
import jwt_decode from 'jwt-decode'

export const signup = async (email: string, password: string) => {
  // const response = await $host.post('auth/signup', { email, password });  // NOTE why add role?
  const { data } = await $host.post('auth/signup', { email, password, role: "ADMIN" });
  localStorage.setItem('token', data.token) // TODO generally refactor localStorage
  console.log('signup { data } ==>', data)
  console.log('signup jwt_decode(data.token) ==>', jwt_decode(data.token))
  return jwt_decode(data.token)
}

export const signin = async (email: string, password: string) => {
  const { data } = await $host.post('auth/signin', { email, password });
  localStorage.setItem('token', data.token)
  console.log('signin { data } ==>', data)
  console.log('signin jwt_decode(data.token) ==>', jwt_decode(data.token))
  return jwt_decode(data.token)
}

export const check = async () => {
  const { data } = await $authHost.post('auth');
  localStorage.setItem('token', data.token)
  console.log('check { data } ==>', data)
  return jwt_decode(data.token)
}
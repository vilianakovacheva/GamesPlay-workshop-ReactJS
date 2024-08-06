import requester from "./requester";

//const BASE_URL = 'http://localhost:3030/users';
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/users`;

export const login = (email, password) => requester.post(`${BASE_URL}/login`, {email, password});

export const register = (email, password) => requester.post(`${BASE_URL}/register`, {email, password});

export const logout = () => requester.get(`${BASE_URL}/logout`);

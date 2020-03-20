import axios from 'axios';

export default class AuthService {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8000/api/';
    this.setAxiosDefaultAuthorizationHeader();
  }

  login(email, password) {
    return axios.post('login', { email, password }).then(response => {
      window.localStorage.setItem('loginToken', response.data.token);
      this.setAxiosDefaultAuthorizationHeader();
    });
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem('loginToken');
    if (!TOKEN) {
      return;
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  }

  logout() {
    window.localStorage.removeItem('loginToken');
    delete axios.defaults.headers.common['Authorization'];
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('loginToken');
  }
}

export const authService = new AuthService();
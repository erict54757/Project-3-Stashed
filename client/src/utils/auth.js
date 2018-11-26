class Auth {
  static onAuthChangeCallback = null;

  static login(token, name, id) {
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("id", id);
    if (Auth.onAuthChangeCallback) Auth.onAuthChangeCallback(token);
  }

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    if (Auth.onAuthChangeCallback) Auth.onAuthChangeCallback(false);
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static getName() {
    return localStorage.getItem("name");
  }

  static getId() {
    return localStorage.getItem("id");
  }

  static isAuthenticated() {
    return !!Auth.getToken();
  }

  static onAuthChange(callback) {
    Auth.onAuthChangeCallback = callback;
  }
}

export default Auth;

import axios from "axios";

class Auth {
  async signupUser(signupInfo) {
    // make an api call to save the data
    try {
      await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/signup",
        method: "POST",
        data: signupInfo,
      });
      return { success: true };
    } catch (error) {
      alert("Signup failed");
      return { success: false };
    }
  }

  async loginUser(credentials) {
    try {
      const response = await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/login",
        method: "POST",
        data: credentials,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      return { success: true };
    } catch (error) {
      alert("Login Failed");
      return { success: false };
    }
  }
}

export default Auth;

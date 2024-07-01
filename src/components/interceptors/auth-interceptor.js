const AuthInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use(
      (req) => {
        const token = localStorage.getItem("token_key_Bpnthr");
        if (token) {
          req.headers["Authorization"] = "Bearer " + token;
        }
        return req;
      },
      (err) => Promise.reject(err)
    );
  };
  
  export default AuthInterceptor;
  
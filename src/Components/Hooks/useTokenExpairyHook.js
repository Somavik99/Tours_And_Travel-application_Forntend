
  
  
  export async function handleTokenExpiration(result) {
    try {
      if (result.status === 401 || result.status === 403) {
        console.log(
          "Token either invalid or expired. Redirecting to login...!"
        );
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        window.location.href = "/logIn";
      }
    } catch (error) {
      console.log(error);
    }
  }



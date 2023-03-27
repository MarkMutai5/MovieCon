import LoginForm from "@/components/account/login-form";
import { Box } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <div
          className="h-screen bg-center bg-cover"
          style={{
            backgroundImage: `url('/static/KE-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box>
            <LoginForm />
          </Box>
          
        </div>
      </div>
    </>
  );
};

export default Login;

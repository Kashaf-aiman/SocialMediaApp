import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import shareVideo from "../assets/login.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const result = jwt_decode(response.credential);
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(result))
    const { name,sub, picture } = result;
    const doc = {
      _id: sub,
      _type: "user",
      username: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          muted
          controls={false}
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center inset-0  bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />{" "}
          </div>
          <div className="shadow-2xl flex justify-center items-center ">
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => console.log("Error")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

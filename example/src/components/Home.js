import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3></h3>
        <div>
            <img width="100%" height="50%" src="https://cdn.shopify.com/s/files/1/2428/9197/products/MWZ3579_wallpaper3.jpg?v=1653227743"></img> 
        </div>
      </header>
    </div>
  );
};

export default Home;
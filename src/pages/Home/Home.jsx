import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const Data = [
    {
      id: 1,
      name: "Contractors",
      img: "https://website-data-pluckwalk.s3.ap-south-1.amazonaws.com/blogs-images/blog_15.webp",
    },
    {
      id: 2,
      name: "Architecture",
      img: "https://thearchitectsdiary.com/wp-content/uploads/2023/02/Arch2O-architectural-sketching-10-architecture-sketching-tips-1-1024x585.jpg",
    },
    {
      id: 3,
      name: "Materials",
      img: "https://media.licdn.com/dms/image/C4D12AQEP-X2LkBodIQ/article-cover_image-shrink_423_752/0/1569506860407?e=1719446400&v=beta&t=0_ZuM3L5Ub0zttdBPDrbH-Gyo6i5rFsRYrTpcvGw7pc",
    },
  ];

  return (
    <div className="cards">
      {Data.map((product) => (
        <Link key={product.id} to={`/${product.name.toLowerCase()}/${product.id}`}>
          <div className="card">
            <img src={product.img} alt="" />
            <h4 style={{ color: "black", textDecoration: "none" }}>{product.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

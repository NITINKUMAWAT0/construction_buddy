import React from 'react';
import './Materials.scss';
import { Link } from 'react-router-dom';

const Materials = () => {
  const Data = [
    {
      id: 1,
      name: "Cement",
      img: "https://d251cvb8f7e7p0.cloudfront.net/image-handler/ts/20190819080858/ri/750/src/images/Article_Images/ImageForArticle_7959(1).jpg",
    },
    {
      id: 2,
      name: "Tiles",
      img: "https://www.gharjunction.com/img/blog/351.jpg",
    },
    {
      id: 3,
      name: "Marbles",
      img: "https://www.kajariaceramics.com/concept-picture/high002010.jpg",
    },
  ];

  return (
    <div className='cards'>
      {Data.map((product) => (
        <Link key={product.id} to={`/materials/${product.name.toLowerCase().replace('&', 'and')}/${product.id}`}>
          <div className="card">
            <img src={product.img} alt="" />
            <h4 style={{ color: "black", textDecoration: "none" }}>{product.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Materials;

import React from 'react';
import './Tiles.scss';
import { Link } from 'react-router-dom';

const Materials = () => {
  const Data = [
        {
          "id": 1,
          "name": "Balaji Tiles Gallery",
          "number": 9782539025,
          "experience": "9 years",
          "address": "Plot no. 4, Near 7 no. chouraha, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017"
        },
        {
          "id": 2,
          "name": "The Tile Studio",
          "number": 9717407153,
          "experience": "15 years",
          "address": "Plot no. 1 Mahalroad, Nri circle, Near mathura misthan, Jagatpura, Jaipur, Rajasthan- 302017"
        },
        {
          "id": 3,
          "name": "Dua and Company",
          "number": 9829091818,
          "experience": "10 years",
          "address": "60, Vivek vihar, Jagatpura, Jaipur, Rajasthan- 302017"
        },
        {
          "id": 4,
          "name": "Zara Tiles and Bathware",
          "number": 8058204444,
          "experience": "20 years",
          "address": "B- 57-58, Centeral spineyojna, Near akashya patra chouraha, Jagatpura, Jaipur, Rajasthan- 302017"
        },
        {
          "id": 5,
          "name": "Orientbell Tiles Boutique",
          "number": 9167342598,
          "experience": "4 years",
          "address": "No. 23/B, Krishna Puri, Sector 1, Malviya Nagar, Jaipur, Rajasthan- 302017"
        },
        {
          "id": 6,
          "name": "Laxmi Narayan Sanitary and Tiles",
          "number": 9782508920,
          "experience": "7 years",
          "address": "17, Krishna puri, Sector 1 sant kheteshware marg malviya nagar haldiya, Near om agency, Jaipur, Rajasthan- 302017"
        },
        {
          "id": 7,
          "name": "Kostuba Tiles and Sanitary",
          "number": "0141 396 9987",
          "experience": "5 years",
          "address": "Shop no. 888, Siddhart nagar, Sector 10, Malviya nagar, Jaipur, Rajasthan- 302017"
        },
        {
          "id": 8,
          "name": "Girraj Taps and Tiles",
          "address": "Shop no. 26-27, Near BSNL office, Opposite SBI bank, Chandrakala Colony, Durgapura, Jaipur, Rajsthan- 302018"
        },
        {
          "id": 9,
          "name": "Jio Tiles Gallary",
          "number": 7383554245,
          "experience": "7 years",
          "address": "Office- A- 05A, Laxmi nagar, Mansarover, Jaipur, Rajsthan"
        },
        {
          "id": 10,
          "name": "Udharv Tiles and Sanitary Wares",
          "number": 7041785598,
          "experience": "17 years",
          "address": "Near aatish market, Mansarover, Jaipur, Rajsthan"
        },
        {
          "id": 11,
          "name": "The Tile World",
          "number": 7041640547,
          "experience": "15 years",
          "address": "Shop no. 34, Near aatish market, Mansarover, Jaipur, Rajasthan"
        },
        {
          "id": 12,
          "name": "Aashiyana Décor",
          "number": 9724602961,
          "experience": "2 years",
          "address": "Plot No. 8, Rajiv vihar, Gopalpura Bypass, Mansarover, Jaipur, Rajastahn- 302020"
        },
        {
          "id": 13,
          "name": "Dhyra Platinum Tiles Center",
          "number": 9929244987,
          "address": "5,6,7, Govind Nagar, Gokulpura Road, Kalwar Road, Jhotwara, Jaipur- 302012"
        },
        {
          "id": 14,
          "name": "Maa Karni Indra Granite and Marbles",
          "number": 9982219657,
          "address": "Takiya ki choki, Marble mandi, Gokulpura, Jaipur- 302012"
        },
        {
          "id": 15,
          "name": "Vinayak Tiles and Sanitary",
          "number": 9667676250,
          "address": "Marble Mandi Choraha, Gokulpura, Kalwar road, Jhotwara, Jaipur- 302012"
        },
        {
          "id": 16,
          "name": "Tirupati Tiles",
          "number": 9001666898,
          "address": "243/11/8 Near Iffaka Bajar, Hingoniya, Jaipur"
        },
        {
          "id": 17,
          "name": "Balaji Buliding Materials",
          "number": 9314513334,
          "address": "Shop no. 28, Govind Nagar, Gokulpura Road, Jhotwara- 302012"
        },
        {
          "id": 18,
          "name": "MG Tiles",
          "number": 9649064000,
          "address": "Shop no. B 5, Govind Nagar lane, Kalwar road near aryan restaurent, Gokulpura,  Jaipur- 302012"
        },
        {
          "id": 19,
          "name": "Shri Baba Stones and Sanitary Wares",
          "number": 9462089002,
          "address": "4, Vikash Nagar, Kalwar road, Jhotwara, Jaipur- 302012"
        },
        {
          "id": 20,
          "name": "Shri Krishna Kripa Marbles",
          "number": 9414836509,
          "address": "Gokulpura Road, Behind Power house , Kalwar Road, Jaipur- 302012"
        }
  ];

  return (
    <>
    <h1 className='title'>Tiles</h1>
    <div className='cards'>
      {Data.map((product) => (
        // <Link  to={`/materials/${product.name.toLowerCase().replace('&', 'and')}/${product.id}`}>
          <div key={product.id} className="card">
            <img src={product.img} alt="" />
            <h4 style={{ color: "black", textDecoration: "none" }}>{product.name}</h4>
          </div>
        // </Link>
      ))}
    </div>
    </>
  );
};

export default Materials;

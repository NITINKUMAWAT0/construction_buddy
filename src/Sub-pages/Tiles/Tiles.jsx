import React, { useState } from "react";
import "./Tiles.scss";
import TilesSingle from "../TilesSinglepage/TilesSingle";

const Materials = () => {
  const [selectedTile, setSelectedTile] = useState(null);

  const Data = [
    {
      id: 1,
      name: "Balaji Tiles Gallery",
      number: 9782539025,
      experience: "9 years",
      location:
        "https://www.google.com/maps/place/Balaji+Tiles+Gallery+-Retailer+and+Wholesaler/@26.8230505,75.8434135,17z/data=!4m10!1m2!2m1!1sBalaji+Tiles+Gallery!3m6!1s0x396dc9750206761f:0xbfce2f2453689b7e!8m2!3d26.8230505!4d75.8481771!15sChRCYWxhamkgVGlsZXMgR2FsbGVyeVoWIhRiYWxhamkgdGlsZXMgZ2FsbGVyeZIBCnRpbGVfc3RvcmXgAQA!16s%2Fg%2F11v0xr91hq?entry=ttu",
      address:
        "Plot no. 4, Near 7 no. chouraha, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "The Tile Studio",
      number: 9717407153,
      experience: "15 years",
      location:
        "https://www.google.com/maps/place/The+Tile+Studio/@26.8185561,75.8478123,17z/data=!3m1!4b1!4m6!3m5!1s0x396dc930b9e8d00d:0x2a83f2a998d86f63!8m2!3d26.8185513!4d75.8503872!16s%2Fg%2F11qmcb39_z?entry=ttu",

      address:
        "Plot no. 1 Mahalroad, Nri circle, Near mathura misthan, Jagatpura, Jaipur, Rajasthan- 302017",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Dua and Company",
      number: 9829091818,
      location:
        "https://www.google.com/maps/place/Dua+And+Company/@26.8030597,75.8066974,14z/data=!4m10!1m2!2m1!1sDua+and+Company!3m6!1s0x396dc9b6d5d6b851:0x3aba40fce83a9f7e!8m2!3d26.8030597!4d75.8448062!15sCg9EdWEgYW5kIENvbXBhbnmSARBidXNpbmVzc19yZWxhdGVk4AEA!16s%2Fg%2F11td8csjwh?entry=ttu",

      experience: "10 years",
      address: "60, Vivek vihar, Jagatpura, Jaipur, Rajasthan- 302017",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ta9Uivwt3hN6vVYpU37IFzQ-eaQqka5b2eVtXDe5_A&s",
    },
    {
      id: 4,
      name: "Zara Tiles and Bathware",
      number: 8058204444,
      experience: "20 years",
      location:
        "https://www.google.com/maps/place/Zara+Tiles+%26+Bathware/@26.8039403,75.8570417,17z/data=!3m1!4b1!4m6!3m5!1s0x396db3d2c3f22f3d:0x24ed1d4b23c3018d!8m2!3d26.8039355!4d75.8596166!16s%2Fg%2F11l1q307s1?entry=ttu",

      address:
        "B- 57-58, Centeral spineyojna, Near akashya patra chouraha, Jagatpura, Jaipur, Rajasthan- 302017",
      img: "https://content.jdmagicbox.com/comp/mumbai/j7/022pxx22.xx22.130110132111.f3j7/catalogue/zara-bath-santacruz-west-mumbai-sanitaryware-dealers-0-250.jpg",
    },
    {
      id: 5,
      name: "Orientbell Tiles Boutique",
      number: 9167342598,
      experience: "4 years",

      location:
        "https://www.google.com/maps/place/Orientbell+Tiles+Boutique/@26.9272788,74.669152,9.11z/data=!4m10!1m2!2m1!1sOrientbell+Tiles+Boutique!3m6!1s0x396db7503ee8fdf1:0xdaaf478a833a0cff!8m2!3d26.852539!4d75.8231746!15sChlPcmllbnRiZWxsIFRpbGVzIEJvdXRpcXVlWhsiGW9yaWVudGJlbGwgdGlsZXMgYm91dGlxdWWSAQp0aWxlX3N0b3JlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJsZWs0dGQxbDNFQUXgAQA!16s%2Fg%2F11h4pc79fz?entry=ttu",
      address:
        "No. 23/B, Krishna Puri, Sector 1, Malviya Nagar, Jaipur, Rajasthan- 302017",
      img: "https://www.orientbell.com/sign-exclusivity.jpg",
    },
    {
      id: 6,
      name: "Laxmi Narayan Sanitary and Tiles",
      number: 9782508920,
      location:
        "https://www.google.com/maps/place/Laxmi+Narayan+Sanitary+and+Tiles/@26.8614425,75.7328808,13z/data=!4m10!1m2!2m1!1sLaxmi+Narayan+Sanitary+and+Tiles!3m6!1s0x396db66cae45288b:0xb9039619166d9250!8m2!3d26.8533877!4d75.8218197!15sCiBMYXhtaSBOYXJheWFuIFNhbml0YXJ5IGFuZCBUaWxlc1oiIiBsYXhtaSBuYXJheWFuIHNhbml0YXJ5IGFuZCB0aWxlc5IBCnRpbGVfc3RvcmXgAQA!16s%2Fg%2F1x5f8r_v?entry=ttu",

      experience: "7 years",
      address:
        "17, Krishna puri, Sector 1 sant kheteshware marg malviya nagar haldiya, Near om agency, Jaipur, Rajasthan- 302017",
      img: "https://content.jdmagicbox.com/comp/jaipur/k6/0141px141.x141.171222181242.r9k6/catalogue/laxmi-narayan-sanitary-and-tiles-jaipur-sdkvoz953i.jpg",
    },
    {
      id: 7,
      name: "Kostuba Tiles and Sanitary",
      number: "0141 396 9987",
      experience: "5 years",
      location:
        "https://www.google.com/maps/place/Kostuba+Tiles+and+Sanitary/@26.8512999,75.8081601,17z/data=!3m1!4b1!4m6!3m5!1s0x396db674cd712529:0xd9a49d115ab6bacc!8m2!3d26.8512951!4d75.810735!16s%2Fg%2F1tdx734w?entry=ttu",

      address:
        "Shop no. 888, Siddhart nagar, Sector 10, Malviya nagar, Jaipur, Rajasthan- 302017",
      img: "https://content3.jdmagicbox.com/comp/jaipur/i4/0141px141.x141.150401104012.y6i4/catalogue/mahalaxmi-sanitary-tiles-jaipur-z7ejm4rskd.jpg",
    },
    {
      id: 8,
      name: "Girraj Taps and Tiles",
      location:
        "https://www.google.com/maps/place/Girraj+Taps+%26+Tiles/@26.8461511,75.7912886,17z/data=!3m1!4b1!4m6!3m5!1s0x396db5e7940834d9:0x19778f9628f9359!8m2!3d26.8461463!4d75.7938635!16s%2Fg%2F11vhy4ynjp?entry=ttu",

      address:
        "Shop no. 26-27, Near BSNL office, Opposite SBI bank, Chandrakala Colony, Durgapura, Jaipur, Rajsthan- 302018",
      experience: "5 years",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSyZ-tKabslXRcwBqkLg7JD7IJlDmsEy7DHm4nsh_BQ&s",
    },
    {
      id: 9,
      name: "Jio Tiles Gallary",
      number: 7383554245,
      experience: "7 years",
      address: "Office- A- 05A, Laxmi nagar, Mansarover, Jaipur, Rajsthan",
      img: "https://images.jdmagicbox.com/comp/jaipur/s5/0141px141.x141.200824124225.k2s5/catalogue/jio-tiles-gallery-mansarovar-jaipur-tile-dealers-r96pq9z0w3.jpg",
    },
    {
      id: 10,
      name: "Udharv Tiles and Sanitary Wares",
      number: 7041785598,
      experience: "17 years",
      address: "Near aatish market, Mansarover, Jaipur, Rajsthan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHilmW9rHuaXk1tOQShnLbzAVlws0rn9TGpJ5a-E7bA&s",
    },
    {
      id: 11,
      name: "The Tile World",
      number: 7041640547,
      experience: "15 years",
      address: "Shop no. 34, Near aatish market, Mansarover, Jaipur, Rajasthan",
      img: "https://images.jdmagicbox.com/comp/jaipur/g7/0141px141.x141.210430161314.m2g7/catalogue/the-tiles-world-mansarovar-jaipur-flooring-tile-dealers-6q6tl4y2m3.jpg",
    },
    {
      id: 12,
      name: "Aashiyana Décor",
      number: 9724602961,
      experience: "2 years",
      address:
        "Plot No. 8, Rajiv vihar, Gopalpura Bypass, Mansarover, Jaipur, Rajastahn- 302020",
      img: "https://images.jdmagicbox.com/comp/jaipur/e3/0141p1425.1425.110622163658.k5e3/catalogue/aashiyana-decor-gopalpura-bypass-jaipur-tile-dealers-3wuiq7n.jpg?clr=",
    },
    {
      id: 13,
      name: "Dhyra Platinum Tiles Center",
      number: 9929244987,
      experience: "7 years",
      address:
        "5,6,7, Govind Nagar, Gokulpura Road, Kalwar Road, Jhotwara, Jaipur- 302012",
      img: "https://5.imimg.com/data5/NSDMERP/Default/2022/8/KP/XB/EU/64819612/tiles-1661159639684-250x250.jpg",
    },
    {
      id: 14,
      name: "Maa Karni Indra Granite and Marbles",
      number: 9982219657,
      experience: "7 years",

      address: "Takiya ki choki, Marble mandi, Gokulpura, Jaipur- 302012",
      img: "https://content.jdmagicbox.com/comp/jaipur/e9/0141px141.x141.161223143555.h3e9/catalogue/platinum-tiles-centre-jhotwara-jaipur-tile-dealers-1gpm0n1nzh-250.jpg",
    },
    {
      id: 15,
      name: "Vinayak Tiles and Sanitary",
      number: 9667676250,
      experience: "7 years",

      address:
        "Marble Mandi Choraha, Gokulpura, Kalwar road, Jhotwara, Jaipur- 302012",
      img: "https://images.jdmagicbox.com/comp/gandhidham/q3/9999p2836.2836.160621165426.q3q3/catalogue/vinayak-tiles-and-sanitary-gandhidham-ho-gandhidham-tile-dealers-qzyjo9.jpg",
    },
    {
      id: 16,
      name: "Tirupati Tiles",
      number: 9001666898,
      experience: "3 years",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCN6sH7PIUFTfbPW0MnpLZG7UVi6tJ2m8AGRRDh2LDog&s",
      address: "243/11/8 Near Iffaka Bajar, Hingoniya, Jaipur",
    },
    {
      id: 17,
      name: "Balaji Buliding Materials",
      number: 9314513334,
      experience: "7 years",
      img: "https://content.jdmagicbox.com/comp/jaipur/i7/0141px141.x141.120705124920.l6i7/catalogue/balaji-building-material-suppliers-vaishali-nagar-jaipur-cement-dealers-3dn3cpe-250.jpg",
      address: "Shop no. 28, Govind Nagar, Gokulpura Road, Jhotwara- 302012",
    },
    {
      id: 18,
      name: "MG Tiles",
      number: 9649064000,
      address:
        "Shop no. B 5, Govind Nagar lane, Kalwar road near aryan restaurent, Gokulpura,  Jaipur- 302012",
      experience: "8 years",
      img: "https://content3.jdmagicbox.com/comp/shimoga/g7/9999p8182.8182.110709174555.c3g7/catalogue/m-g-pvc-works-vinoba-nagar-shimoga-ceramic-tile-dealers-0y0aafv9vc.jpg",
    },
    {
      id: 19,
      name: "Shri Baba Stones and Sanitary Wares",
      number: 9462089002,
      experience: "9 years",

      address: "4, Vikash Nagar, Kalwar road, Jhotwara, Jaipur- 302012",
      img: "https://content.jdmagicbox.com/comp/jaipur/b8/0141px141.x141.110414163752.r9b8/catalogue/shri-baba-stone-and-saintary-wares-jhotwara-jaipur-tile-dealers-9mze9y.jpg",
    },
    {
      id: 20,
      name: "Shri Krishna Kripa Marbles",
      number: 9414836509,
      experience: "7 years",
      address:
        "Gokulpura Road, Behind Power house , Kalwar Road, Jaipur- 302012",
      img: "https://content.jdmagicbox.com/comp/hyderabad/g3/040pxx40.xx40.150721164004.y7g3/catalogue/sri-krishna-granite-and-marbles-miyapur-hyderabad-granite-tile-dealers-70otrdsrl1.jpg",
    },
  ];

  const handleClick = (tile) => {
    if (selectedTile && selectedTile.id === tile.id) {
      setSelectedTile(null);
    } else {
      setSelectedTile(tile);
    }
  };

  const handleClose = () => {
    setSelectedTile(null);
  };

  return (
    <>
      <h1 className="title">Tiles</h1>
      {selectedTile ? (
        <TilesSingle selectedTile={selectedTile} onClose={handleClose} />
      ) : (
        <div className="tilescards">
          {Data.map((tile) => (
            <div
              key={tile.id}
              className="tilescard"
              onClick={() => handleClick(tile)}
            >
              <img src={tile.img} alt="" />
              <h4 style={{ color: "black", textDecoration: "none" }}>
                {tile.name}
              </h4>
              <p>+91 {tile.number}</p>
              <p>
                Experience : <span>{tile.experience}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Materials;

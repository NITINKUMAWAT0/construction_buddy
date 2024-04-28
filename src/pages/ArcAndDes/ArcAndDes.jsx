// Contractor_page.jsx
import React, { useState } from "react";
import "./ArcAndDes.scss";
import SingleArc from "../SingleArc/SingleArc";

const Contractor_page = () => {
  const [selectedArc, setSelectedArc] = useState(null);
  const Data = [
    {
      id: 1,
      name: "21 Avenue Projects",
      number: "7041893179",
      location: "https://maps.app.goo.gl/b7EkPnxf3SQgr65d6",
      experience: "11 years",
      address: "4/122 Vidhyadhar Nagar, Vidhyadhar Nagar, Jaipur - 302039",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6882XdoeYcslvd47fFaGhqFHJDvtoZ6XwjWrfrAK0g&s",
      details:
        "21 Avenue Projects is a dynamic architectural firm that specializes in creating innovative and sustainable design solutions. With over a decade of experience, we have built a reputation for delivering high-quality projects that exceed client expectations. Our team of talented architects and designers is dedicated to pushing the boundaries of design excellence while ensuring practicality and functionality in every project we undertake.",
     
    },
    { id: 2,
      name: "Designarch",
      number: "9828287799",
      experience: "20 years",
      location:
        "https://www.google.com/maps/place/DESIGN+ARCH/@26.8345644,75.8443582,17z/data=!3m1!4b1!4m6!3m5!1s0x396db62982ae62e7:0xe4924cd425dedcf5!8m2!3d26.8345596!4d75.8469331!16s%2Fg%2F11gdqwjq0t?entry=ttu",
      address:
        "C-1, Anand Vihar, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2VimAfDpAsK4K30BaFu2s_OpKvlW3h6p6Jir144RXw&s",
      details:
        "Designarch is a premier architectural firm known for its visionary approach to design and unwavering commitment to excellence. With two decades of experience, we have successfully completed a diverse portfolio of projects, ranging from residential developments to commercial complexes. Our team of seasoned professionals brings together expertise in architecture, interior design, and sustainable practices to create spaces that inspire and endure.",
     
    },
    {
      id: 3,
      name: "3i Works",
      number: "9928389231",
      location: "",
      experience: "10 years",
      address: "Shop No. G-3, Mirza Ismail Rd, Kanti Nagar, Jaipur, Rajasthan",
      img: "https://media.licdn.com/dms/image/D4E0BAQFOW1d6MXhnZA/company-logo_200_200/0/1688062911689/3i_tech_works_inc_logo?e=2147483647&v=beta&t=RYDs1okwm0IKMvSRlqkC-E7S7FVkBgPXBjtXijqgPCo",
      details:
        "3i Works is a forward-thinking architectural firm dedicated to shaping the built environment through thoughtful design and meticulous execution. Our team comprises talented individuals who are passionate about architecture and committed to delivering projects of exceptional quality. With a decade of experience under our belt, we have established ourselves as trusted partners in the pursuit of architectural excellence.",
     
    },
    { id: 4,
      name: "MPS & Associates",
      number: "9829258097",
      location:
        "https://www.google.com/maps/place/mps+%26+associates/@19.9128288,64.5184067,5z/data=!4m10!1m2!2m1!1sMPS+%26+Associates!3m6!1s0x396db36dcc007855:0x25980a39a467ae78!8m2!3d26.9332778!4d75.7463144!15sChBNUFMgJiBBc3NvY2lhdGVzkgEJYXJjaGl0ZWN04AEA!16s%2Fg%2F11bw4sf_2m?entry=ttu",
      experience: "19 years",
      address:
        "146, K5C Scheme Rd, Chand Bihari Nagar, Khatipura, Jaipur, Rajasthan 302012",
      img: "https://media.licdn.com/dms/image/C4E1BAQEGnghk2hyBPQ/company-background_10000/0/1584433067100?e=2147483647&v=beta&t=Kw5GsCQbHjwkELN5kkhQ2KDNDKK4WwntAFRDwwf1Qq4",
      details:
        "MPS & Associates is a leading architectural consultancy known for its commitment to quality, innovation, and client satisfaction. Our experienced team brings together a wealth of expertise in architecture, interior design, and urban planning to create spaces that resonate with the needs and aspirations of our clients. With nearly two decades of experience, we continue to set new standards of excellence in the industry.",
 
    },
    {
      id: 5,
      name: "Triangle Engineers (P) Ltd.",
      number: 9829153221,
      experience: "11 years",
      details:
        "   As a group of highly professional and experienced Civil Engineer, Architects and Chartered Accountants registered under section 34AB of wealth tax act,Council of Architecture, Instition of Engineers, Chartered Engineering Council,Income Tax department Govt. of India, Indian Concrete Institute andReal Estate (Regulation and Development) Act, 2016.",
      address:
        "S-56, Triangle Chamber, Tonk Rd, Himmat Nagar, Bajaj Nagar, Jaipur, Rajasthan 302018",
      img: "https://content.jdmagicbox.com/comp/jaipur/16/0141p141stdg040416/catalogue/triangle-engineers-pvt-ltd-tonk-road-jaipur-estate-agents-yv3zhz1pe6.jpg",
      location: "https://maps.app.goo.gl/8LJ1KZ7SAFmPjb1w6",
    },
    {
      id: 6,
      name: "Western Pearl (India Agro)",
      number: "0141-4013555",
      experience: "16 years",
      address: "402, Alaknanda, B-87 Ganesh Marg C-scheme, Jaipur",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcKs754YR4UBNwpRrJkK74oan5wUxwWILFPe5RbCvyw&s",
      details:
        "Western Pearly (India Agro) is a renowned architectural firm with a rich legacy of crafting innovative and sustainable designs. Our team comprises highly skilled professionals who blend creativity with technical expertise to deliver exceptional results. With a track record spanning over a decade, we have successfully completed numerous projects, ranging from residential complexes to commercial spaces.",
      location:
        "https://www.anandproperties.com/jaipur/architect/westernpea.htm",
    },
    {
      id: 7,
      name: "D-zine Associates",
      number: "9509799830",
      experience: "13 years",
      address: "G - 2/3/4/5,Space Cinema City Plaza, Banipark, Jaipur, 302016",
      img: "https://www.dzinepartners.com/wp-content/uploads/2021/01/trans-D-ZINE-partners-logo-02.png",
      details:
        "D-zine Associates is more than just an architectural firm; we're creators of timeless spaces that inspire and delight. Our multidisciplinary team brings together a diverse range of talents and perspectives, ensuring that each project is approached with fresh ideas and innovative solutions. With over a decade of experience in the industry, we have earned a reputation for excellence and attention to detail.",
      location:
        "https://www.google.com/maps/place/Dzine+Furniture/@20.5182439,64.523807,5z/data=!4m10!1m2!2m1!1sD-zine+Associates!3m6!1s0x396db3eed38aa207:0x8db53b563494e488!8m2!3d26.9355281!4d75.791924!15sChFELXppbmUgQXNzb2NpYXRlc5IBD2Z1cm5pdHVyZV9zdG9yZeABAA!16s%2Fg%2F11f2wltvn0?entry=ttu",
    },
    {
      id: 8,
      name: "Lakshya Designers & Planner",
      number: "7947124400",
      experience: "15 years",
      location: "https://maps.app.goo.gl/aMSmPtXeD5Jpwmy59",

      address:
        " Shekhawati Nagar Vistar, 76-A, Kalwar Rd, near Govindam Tower, Kardhani Govindpura, Govindpura, Jaipur, Rajasthan 302012",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLU6b8uVIqZO4jaYd9ZuyqPodPiHM_2tuJH5V78JAHw&s",
      details:
        "Lakshya Designers & Planner is a leading architectural firm known for its innovative designs and meticulous planning. With over a decade of experience, we have successfully executed numerous projects ranging from residential buildings to commercial complexes. Our team of skilled architects and planners is committed to delivering exceptional results that meet and exceed client expectations.",
    },
    {
      id: 9,
      name: "RK Architects & Engineers	",
      number: 9782215296,
      experience: "13 years",
      details:
        "RK ARCHITECT & ENGINEERS is Best Architect Firm in Jaipur and is one of the leading international architecture and design practices that offers services in Architecture and Urban Planning, Project Management, Financial Analysis, Construction Management, Construction, Engineering and Building Consultancy.",
      address:
        " C-148 kanha vihar, bura Patel marg, Ajmer Rd, Lalarpura, Jaipur, Rajasthan 302021",
      img: "https://lh3.googleusercontent.com/p/AF1QipN1UzXmVYwTY0SIC_PNpg4haEbrO8--qQ0MdLYz=s1360-w1360-h1020",
      location: "https://maps.app.goo.gl/S1xdDi843QqTDKiA8",
    },
    {
      id:10,
      name: "Unibuildmakers Architects &Construction      ",
      number: 8058429003,
      experience: "14 years",
      details:
        "We undertake a wide range of construction projects including residential, commercial, and industrial projects. You can request a quote by filling out our online contact form or by contacting us directly via phone or email. We will get back to you promptly with a customized quote.",
      address:
        "2nd floor, jay tower, near, Gopalpura Bypass Rd, Muktanand Nagar, Gopal Pura Mode, Jaipur, Rajasthan 302017",
      img: "https://lh3.googleusercontent.com/p/AF1QipN04rO9hvZkxnB_DI59rhU7boz3oiboUkgSrrBz=s1360-w1360-h1020",
      location: "https://maps.app.goo.gl/4UkCt8nwZK5wVVvF9",
    },
    {
      id: 11,
      name: "2 JKS Architects &Construction",
      number: 8955621119,
      experience: "8 years",
      details:
        "Architect company specialized in innovative designs, constructions, and aesthetically pleasing indoor and outdoor environments.",
      address:
        "Building No.- 112 Jagdamba Colony, Nursury Circle, Vaishali Nagar, Jaipur - 302021 (Opposite Max Vision Eye Care Center)",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSByJLGy4r3r-nSlgDug_jfLC5Gd4cQbXmSOMPZu98Q&s",
      location: "https://maps.app.goo.gl/hF2ArMNw7dnFfonL7",
    },
    {
      id: 12,
      name: "Sunrays Contractors",
      number: 9828378007,
      experience: "7 years",
      address:
        "Sunrays Contracting is situated at A-75, Vaishali Nagar, Jaipur 302021",
      details:
        "Builders, contractors, civil, interior design, modern architecture, more than 75 bungalows, years of experience.",
      img: "https://media.licdn.com/dms/image/C4E0BAQFgdkE19Nud0g/company-logo_200_200/0/1630616597570/sunray_construction_notices_inc_logo?e=2147483647&v=beta&t=15k9_zNlTPV3ruCYQWVfFEwkk8ORPqiNvObnnj0uoME",
      location:
        "https://www.google.com/maps/place//@26.9130789,75.7443772,17z/data=!4m5!1m2!2m1!1sSunrays+Contracting+is+situated+at+A-75,+Vaishali+Nagar,+Jaipur+302021!3m1!15sCkZTdW5yYXlzIENvbnRyYWN0aW5nIGlzIHNpdHVhdGVkIGF0IEEtNzUsIFZhaXNoYWxpIE5hZ2FyLCBKYWlwdXIgMzAyMDIxkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu",
    },
  ];

  const handleClick = (contractor) => {
    setSelectedArc(contractor);
  };

  const handleClose = () => {
    setSelectedArc(null);
  };

  return (
    <>
      <h1 className="title">Designers & Architect</h1>
      {selectedArc ? (
        <SingleArc
          selectedArc={selectedArc}
          onClose={handleClose}
        />
      ) : (
        <div className="Arccards">
          {Data.map((Arc) => (
            <div
              key={Arc.id}
              className="Arccard"
              onClick={() => handleClick(Arc)}
            >
              <img src={Arc.img} alt={Arc.name} />
              <h4>{Arc.name}</h4>
              <p>+91 {Arc.number}</p>
              <p>
                Experience: <span>{Arc.experience}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Contractor_page;

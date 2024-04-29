  import "./Marbals.scss";
  import React, { useState } from "react";
  import MarbleSingle from "../MarblesSinglepage/MarbleSingle";

  const Marbals = () => {
    const [selectedMarbal, setselectedMarbal] = useState(null);

    const Data = [
      {
        id: 1,
        name: "Shree Balaji Marbles and Graintes",
        number: 8432198970,
        location:'https://www.google.com/maps/place/Shri+Balaji+Marbles/@26.8567814,75.696199,13z/data=!4m10!1m2!2m1!1sShree+Balaji+Marbles+and+Graintes!3m6!1s0x396db5087cf257e1:0x987c727b81de866c!8m2!3d26.8567814!4d75.7576785!15sCiFTaHJlZSBCYWxhamkgTWFyYmxlcyBhbmQgR3Jhbml0ZXNaIyIhc2hyZWUgYmFsYWppIG1hcmJsZXMgYW5kIGdyYW5pdGVzkgEPbWFyYmxlX3N1cHBsaWVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJuYVRoRWVFVlJFQUXgAQA!16s%2Fg%2F1ptwtz8hp?entry=ttu',
        experience: "1 years",
        address:
          "Near akshya patra temple, Marble mandi, Jagatpua, Jaipur, Rajasthan- 302017",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2-E9NavpQ3dnLYz6zZc_aB2C0UIjwe8WwPd4KDwbCQ&s",
      },
      {
        id: 2,
        name: "Khandelwal Granite and Marble",
        number: 9414068648,
        location:'https://www.google.com/maps/place/Khandelwal+Granites+And+Marbel/@26.8050718,75.7750335,12z/data=!4m10!1m2!2m1!1s%22Khandelwal+Granite+and+Marble!3m6!1s0x396dc84bf2d78091:0xd675589c3963a73f!8m2!3d26.804604!4d75.857798!15sCh4iS2hhbmRlbHdhbCBHcmFuaXRlIGFuZCBNYXJibGWSARBidXNpbmVzc19yZWxhdGVk4AEA!16s%2Fg%2F11s7zrtf27?entry=ttu',

        experience: "18 years",
        address: "Shop no. 773, Nahal road, Jagatpura, Jaipur, Rajasthan- 302017",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZx2utvAwoclHww-_wd9bahcEWO51k8uDuyGn6iznMWA&s",
      },
      {
        id: 3,
        name: "Mangal Bhavan Marbles",
        number: 8000890194,
        experience: "5 years",
        location:'https://www.google.com/maps/place/Mangal+Bhavan+Marbles+(+Best+Marble+Granite+in+Jaipur+)/@26.8049377,75.8548606,17z/data=!3m1!4b1!4m6!3m5!1s0x396dc91c017f8471:0x9bb444e4ccb9d5!8m2!3d26.8049329!4d75.8574355!16s%2Fg%2F11j_3l6wsb?entry=ttu',

        address:
          "Central spine yojna, Mahal road, Opp. Akshya patra temple, Jagatpura, Jaipur, Rajasthan- 302017",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHERUSEhQWFhUXFx4WFxgYGRodFRsWFx4WFhkcFh4hKCgiHB0lHhcWITEhJiorLjAuGCAzODMsNygtLisBCgoKDg0OGRAQGy0mICUtMC0tLS0rLS0rLSstNTItNS0tLS0rLS0rLS0tLS0tLS0vLS0vLS0tLS0tLS0tLS0tLf/AABEIAOEA4AMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAcCAf/EAEMQAAEDAgQBCAYHBwMFAQAAAAEAAgMEEQUSITEGExQiQVFhcYEyNFNykZIHFVKhsbLBIzNCYoLD0XOi4SQ1s/DxFv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACkRAQACAgEDAgQHAAAAAAAAAAABEQIhAxIxQTJRImGBsQQTM3Gh0fD/2gAMAwEAAhEDEQA/APauZR+zZ8oTmUfs2fKFOiCDmUfs2fKE5lH7NnyhTogg5lH7NnyhOZR+zZ8oU6IIOZR+zZ8oTmUfs2fKFOiCDmUfs2fKE5lH7NnyhTogg5lH7NnyhOZR+zZ8oU6IIOZR+zZ8oTmUfs2fKFOiCDmUfs2fKE5lH7NnyhTogg5lH7NnyhOZR+zZ8oU6IIOZR+zZ8oTmUfs2fKFOiCDmUfs2fKE5lH7NnyhTogg5lH7NnyhOZR+zZ8oU6IIOZR+zZ8oTmUfs2fKFOiCDmUfs2fKE5lH7NnyhTogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIq/EsWbQkMDXPkcLtYwXNtrnsHepMxG5WItYLgr8YioNHOu/qY3V58h+q4ubVWJfvXiBn2IzeQj+Z3V5Kww/C4sPH7NgB63HVx8SdVi8p7fytRHdWQ8Uxh5jmY6Ij7Wo11Ga2xV5FK2YBzSCDsQbhec8V+ty+I/K1cVDiElAbxvLe0dR8RsV54/ETjlMZOn5dxcPVl+A32XnOK8RS4kxrT0bXzZSQHXta4+PX1rW8MYYKGJrg5xL2hxBPRGYA6DbzXbDm68qiGJwqNrpERdmBEVTPxLR078j6mIO2IzjQ9/Z5oLZF8xyCUBzSCDqCDcEdxX0gIiICIiAiIgIiICIiAiIg+XvEYuSABuToFT1PELGAujY+VrdXOaOgAN9Tv5KTEoG1VRCx4zNyvdlPo3GSxI69yrTkxbLYWta3VbsWJ6pumtQpqXiqmn3cWH+YfqLhS4I01BfUu3kNmd0TdG/HV3mFlKrh4sq2wi+R5zA9jN3eY2+Hat/GwRgACwAsB3Bc+Kc8p+Lw1lER2fSIi7ubzbiv1uXxH5WqpVtxX63L4j8rVUr5XJ65/d68e0C0FZxK50McUQLCxrQX31u0AaAdXiq/CcHlxV1mCzetx9Ef5PctOzgqLrkk8so/Qrpx4ckxPSzlOPlw4Zxi6OwnbmH2m6O8xsfuWroMSixAXjeD2j+IeI3VM3gyAfxSHzb/AIXJjWARYVFysZeHhzbHN2kA7L0Yzy4R8W4c56Z7O/iNzq6WGia4tbKHSTOabO5GOwLQerM5zRfsus5FVS0sVU6PmjIaeWSMQui1e2PUDNm3N7bG5Wh4gf8AVlTBWH900OhmP2GyFpa89wc0A+8qmPhNtbDWPfCx0skkr6d92k5XC8Za4HTVelydeFWwmenMbSyCsYTyR2imy8p0ewOGYEdoWtWRoZHYrPSxnpGlZnqHXBHLlnJhmYaF2r3G3ctcgIiICIiAiIgIiICIiAiIgrar1qH3JP7aslW1XrUPuSf2184/XnDWMk6hI0OHa03B/wA+SxdXMtVdLPKCb9fb16//AAL9X4xweAQbg6g9xVTR4rzyrfE09CNmve+4B+G3xVnKIr5pS3REWkebcUi9XIO9v5Wq0wPhMzWfUXa3qZ/Efe7B3b+Ct8Np2yVtS8tBc3JlJ6rtN7fAK+Xlw4YnKcp95dcs5iKh8QxNgaGtAAGwGwX0Tl3WexPiuOmdkjBe69idmg7HvPl8VQ8YVsj6h8Zecjctm9WrQde3U9a6Z82OMa2zGEy30bxKAWkEHYjY+Cp+L/VXe8z8wXXgILaaEHT9m38FycX+qu95n5gtZzfHM/JMfUuHsEgIIBB0IOxB7VRO4PpbnKJGNO7GSyNj+UGw8lfoujLnoaKPD2COJjWMGwaLD/k966ERAREQEREBERAREQEREBERBW1XrUPuSf21wccerf1t/VWFV61D7kn9tV/HHq39bf1XHk9GX+8N494UtHxIaajMYP7UdBh7Gnr8tR8F98BfvpPc/ULMLUcA/vZPcH4rycec5Z434dcoiMZbdERfRedTYT63V+Mf5SrlU2E+t1fjH+Uq5WOPt9Z+7WXdgBgD5JHSSubFHnJu/c6m1h/ld+PYpFh1Q8siDptLvfq0dEWyjwt2LP100lbUEEuec5AGp0B2AWnxHhl2J1L5HODYza1tXGzQD3DZePG5ieiPLrPf4l7hE7qmCN7tXOYCfErh4v8AVXe8z8wVpSU4pGNjbezQGi+9h2qr4v8AVXe8z8wXrz/Tm/Zyx9S6REXRkREQEREBERAREQEREBERAREQcGJ0DqotfHIY5GXymwLSHWuHDs0CoOIpaiphEMkJz5gQ6O7mOtfzae4rXIuefH1Xvu1GVPOaXhipqP4Awdrjb7hcq/4aws4TUPY5wcTEHabauIt9y06pq6c4fUcq5jzGYwwuaL5SHE9Ib213XOOHHCpa65y0uUUFJWR1rc0bg4dx/HsU69ETbmpsJ9bq/GP8pVyqbCfW6vxj/KVbveGC5IAG5Oyxx9vrP3ay7oKSgjo7ljACTcnrJOup3XSqabH2yOLKdjpn/wAujB4u2Uf1VNiOtTLZvsotG+DnblTqjtjH9Fe7orMeigdkZeWT7EYufM7BcslDUYwLTlsUdweTbZzzbUZnbDyVvR0UdE3LGwNHcN/E7nzXQnTM+qS67CIi6MiIiAiIgIiICIiAiLFfSTjc+DCAwSFhfnzdFpuG5T1g9qDaosTU8YO+qm1LSBO88kLAaS9Zt4Aut4KX6N8YnxmOV08mcteGjotFha/UApa02KLzyXjSRuKcnmHNs/IWsLZtAXX3uHHttZWv0i4rPhMULqd5a50mQgNa69wSNCDrcfeqjXIsHVcWvrsKdUxPyTxlrZAACMxIadCD0XA3Hw6lJxFxNPSimpqezqiZjXFxA0zaCw2uSHHsAGyljcIsnhWH4nSSxumqWSxk/tG5QCBY6tNh12T6QsdkwiFjIDaaQkggAkMYMzzY3HZ5XSJsXVXgsVQ7O28cn24zld59R81DytVQek0Ts+03oygd7dneSYHiZxiiZMDZzozmIto9tw63VuCqz6OcVmximfLO8vdyhaNGgABrT1AfaKzOEeNLb8pKyZ887oIS7lCyzpAWtblbY5r7m52HYrBmBOqzmqpDJ15B0Yh5DfxVhjMjoaeVzDlc2NzmkW0LQSN9Opecw45iLaLn3OWFodlMbo2XPSy6EAX8FmOOPO16vZ6dBC2naGsaGgbACwUiwvFOP1EEFFLG4xGfLnbZp9INOmYG1rldX0jYvNg0MT4JC1xflOjTcZSesHsXVlsEVTxJif1LSSS3u5rbMv1vd0W37dTf4qk4LxibG6aaOR5FRG4tzWbmF75SRa2hDht1INiiyH0fY5LiTJ2VL7yxPsbhos3bqA2LXKbg7EpcTE9RJITDyjmwghoAY3UuJAuezyKDUosBwlxfLidc+OU/spQ50AsBYNJtY7m7Q7frC/ePuIarBaiIQP6JZnc0taQcpN76XtbsKljfIsPjHE76qOilppCxs0wjkbZpIuQHNNwbEf8AK3CWCIioIiICw/HbRPXYewi4L3XHaCYwVuFx1eFQ1j2ySRtc9nouPpDr0PiplFxSx3eXYPw9J9YGkfm5GF7pbHYtsMp77gMHxXRwPin1PQ1svW0ty++4FrfvsvU3MDgQRuLHwVUOF6MAt5vHYm5FtLi9jbzPxU6d2Xp5hU8PVjKASObHyQPOLi/LdIAEnutY27lf8Q4n9bUeHTfxGoYHe+27XfeCt++ijkj5ItBjtlynUZR1Lh//ADdIGhvIMyg5gLaB21x2HQfBKmi4eefSHgrsFfJLDpBUaSNGweCH27rkXH9QXXjL/qavoauQHkjCxpcBexDXNPwDg74rcY7WUkTOSq3xhrx6Mh0IH+FPWMp5af8AaiMwBoPSsWZbaHwtbVWRk8V4pM1fTRUtQHRSFokDQxwBLrWuRcEjqXJUip4gxCaWl5ItgHNxytyzpAh9rdd8w8LLR4Hh2HTkvpWQuLd3N1sTtr1FdlJzPB5RBHycckmoYNC619bfFTZpkvo9mdhrqqgl0cy72jq2DXW7vQPmvj6M8bp8NpHMmmYxxlLgHGxtlYL/AHH4LW4lS0WHuM8zYmOcSDI4WJLhYgnvF1wUcOEVjgyMUrnHZoy3PgOtXYtMRqmVtFLJGczHQvLT1EZXC4XlFFR0X1eZny5appJY0O1JB6PQ7D2r1XEK6jwxgp5nRxsLbBjtGlm1gNrLmwumw2tP/Ttpnubr0AwuHfbcIMVxRPJiNDh7qj03vIdpYlpNmnxLbHzXz9IHC1PgMMb4Q4OdJlN3E6ZXH9FvnSUWNyckeSlkjvdpFyyxsbg+jrYL7x3mkbWmr5PLezeUALb22F+uw+5BneMTLi9XBR0+XNGOcvz3yXaQGB1vPT+YKrwgzcPYsBU5P+qBzFl8mZx6Nr9eYW/rWsw7EMOfMDC+Dln9EFts57r7nQfcvzHq3DoJBzow8oALZhmeBuNACR2psYrizlMAr5uRHrcRYAPtPIabd9x/uWi4lH1BhsdJF+8ky07bbku9M+evzBaWKOnxcRztDJQ3WN+hsdiWnqNx9ykqsNhrHNfJG17m+iXC5HXp2aqUPLsfw2r4f5tUSclaAtYzk73s3Xp33vYi/etHijmYjitEdHMkgee4tc15WwrqCPEGhsrGvaDezhcX7bKCPBKeJzHNhYHM0YbC7Rr6PZufilFvKsQwp+A10UFzyTqiORnZ6QHxtp5BeyrmqsPirHMdIxriw5mEi9j2hdKsRRIiIqgiIgIiICIiAiIg85+k2nNfUU8Ldy15HkCf0VNHjT8Tw+ChbflDJybv9NvSF+4A2/pWyxnDZqnE6aZsRdFGCHOu2wzBw2Judx1KLC+CxhlVNU5g4FruSYBqC/e5Ol7XHmudS3pxfRM4RwVF9hJfyyj/AAsrjNXJVyuxJrh0agNjbfXKzUG3ZsPMq9wfCK7DKSribTu5SYjJ0o7BpuHEnNobfirE8CQihtyJ5zyW+bpcra9t8u+nYr80ff0j1Ta3DGSM9F743DwIcVkcR5DGY6WCihPOQAHuDcuoaLknr16WbuVzLg1bUYW2kdA7lGSgt6UdjH0jvm6ibW8F145w1USw0lRTsLamFjGObdod0ALG97GxB69QVUc30iu5Croi8GTKBmaBcus5twB131071Fw8+KsxflGN5qA05YnDI95LSDZo0Hba/Uu7iihrMUmpKhlK7NEA57C+MAPDg7KDm1Gm/eFPHg9ZjtfFVVETadkNrNDw5zspLht3nrtorBKLgz/u1f4u/wDIuj6XPU2f6w/LIuGjo6/CK2pqIqTlGyudbM9jeiXZgd1LxRS1/EVJkfS5HiYEMa9h6AY4FxJNt3Wt3Iju4XnpsRla1tCYXsZygkfGGEkZW9Ajf0v/AG6zYmbw1XTmvpuVZK8lshaHaEuILb6HQi43FlqaHE8SLo2Oomsbma1zzI02ZcBxtfsuuHGKnEsQikpX0LXFwLOVzty22DwCdD1jXQ/BUa3AuQ5Bhprcibubl26RJPhqTp1bLvVLwhhDsEpGQvILhdzrbAuN7DwV0gIiICIiAiIgIiICIiAvmQkA2FzbQdpX0iDibX8o1zmi4awO8yCcviABfxC/aisMLmjKLG1ySQNTawNiL+JF1M2mawOaBo4ku7y7dfktIyUgkbabkAgagG248VmsqXSGfEBC4ttqC0DexzkDe1ha6+pavk3FlulduXXcO3PlZx8u9TOp2vvcb2J/p1H4L9dC17g8jpNuAey+/wCCVJpDzwcrydure/8AFbNlt7uq/IaoySFhaBa9tTmNiBexFiDfcEqTmjL3yi+bNfrv47/8L9ZStjdmA116zbXU2Gwv3JWRpFW1gpLXF817eOlh3XJ3Oy/Kmt5sQHD+Au0udRbTQba7rolhbL6QvoR5HdfnN29n8OXc+ibf4CVJpHzrUC27C/4W0+9c9XiRpww5QczC86nqy6CwP2tzYLqlpGSgAjYWFiRobXBtuNBp3JPSMntmGwI0JAsbXBA3Gg0Kkxl4NIp6sxPDcosbdIkjUkiw0tcaaEi99F9Pq8ubTaRrN/tZNf8Af9y+5KVsjg4jXTrNtDcXGxse1frqVjnZra77m1xsSNiR2q1JpzmvtLydhvbc5vRDr2ttrbdSQzPe9zSGgN6wSSb7aW/VSmnaTe2t81++2X8NF9NjDST1nfy2SpNPmll5djX2tmaHW8QCoKGt55ewsBv7x1sO61te9dUbBEA0aACw8BoFEKVjdhbo5dz6PZ95+JTejT4oawVYOlrHTW92nVrvMfgupRR0zIjdrQDa2mmgUqsXW0ERFQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQZ9ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z",
      },
      {
        id: 4,
        name: "Shree Mahadev Marbles and Granite",
        number: 9166221548,
        experience: "3 years",
        location:'https://www.google.com/maps/place/Mahadev+granite+%26+marbles/@26.8546163,75.4332451,11z/data=!4m10!1m2!2m1!1sShree+Mahadev+Marbles+and+Granite!3m6!1s0x396db5eafd3b55d5:0xa9b5fa4e4f993b7b!8m2!3d26.8546163!4d75.7381157!15sCiFTaHJlZSBNYWhhZGV2IE1hcmJsZXMgYW5kIEdyYW5pdGWSARBncmFuaXRlX3N1cHBsaWVy4AEA!16s%2Fg%2F11s3xfz53p?entry=ttu',

        address:
          "New mandi, Akshya patra temple, Jagatpura, Jaipur, Rajasthan- 302017",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFhUVFR4WGRgXGBcYFxYXGBgXFxcXGBgYHiggGBslHRsaITIhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy8lHyYtLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLf/AABEIAMIBBAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABHEAABAgQDBAcEBwcBBwUAAAABAhEAAyExBBJBBSJRYQYTMnGBkaGxwdHwFCNCUnKCsgczYpKi4fFTJDRDc4OT4hWzwsPS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QALhEAAgIABAQFAwQDAAAAAAAAAAECEQMSITETQVFhIjJxgfAEwdEUI6GxM0JD/9oADAMBAAIRAxEAPwDRtHQIUdEemcJ0COtCjoikAgIeBHBDgIAOtChR2ABAQ8COCHCGAmhqxlObQ0V7j7vHlDwIcQ4Y2MIBwEMw1HR9234T2fePCOSD9k3HqND36d4h06jL+7f8Jv5UPhzg7gSzJYUCk2IY+MR4FZKWV2k7qu9NH8Qyu4iJoiAyr/H+pI9pT+gQMQ80WD94N4pqPTN5CKPpDLyGTNFAiZ1S/wAEwFA8goK/LF5iey+qd7yqR4hx4wDt7DCbLXKNpkpVeaWZuZBNeUTLYcSyzZpeZqlObxZx6xOkxWdHMSZkhKj2vtfiuoeBJHhB+HO6Bw3f5S3uhp2JqicQ6GCHiBiHJh0MEPiWAoeIZDhEjHiOw1MOiWM6Ic0NEOEACaFChQgHAwobChUBhkYpJVlBrX0Le2CBFFgpgJLFyVFZFaVSG7rxcSFfZJejg8qP3t7xFQxMxbjRNHRHI4olqXaj8Y1sgcqYAz6w8TBxEZLaMybLBBKiolSyS7UfKBwBykAeOtC9loWJXWLUXWpyTwcW0oAKd8YrG8VUaZNLNIDHRAchQJUxcA8bUY89I5itoplKCSCX7qCNM6q2RQeIdA8zEJSgzCQEhJU5swDv5RlVdLM65UtKTVQJsCqlX0b4QpYkY7lRg3sbQCHQJgcYmYC1w2YapcOARoYMEWpXqiSOYmyhdPqNR7+8CJkEHmDChkqhy6Go949/jygsR2RR0/dt+E9n3jwhuOkFaCEllXSXbeBcV0qG7iYfOoyuF/wm/lQ+BiUQcqER4LECYgLGvmDzGh5RT9JMdNkSELkoC1onJQxc7qnSOzxBTXnFXgMb9Cn4mSJOKn55xmDq5eYb6EKABUoCjkE8oqemvS5aZfVjDTpK1qQsdaEBxLXmcBKjqEDu74zc/DqaKOpsejaOrXPkP2ZilAfwKOdJ/rb8sGbMxUszZ8lKwVomZlJ1TnAI+PjGO2d0ixE1crEysIGnpMoZp6EiapBUHoCUsQqhFWi96M4SaMTip06SiUub1fYmdYDlSxYsGuNLw4y6BKPU1Ahwhgh4jQyOw8QyOphMB0dEcjoiWMcIeDDI6Ilgh0OENEdEIY6FChQAKFChQAeLYfEdUsVUwlKAoaKK1gPowv5xoBiXlJyXQkK0fgA3EuaRmNv4gmYlmDgFQsA+lNSKnkrnHJGL6thUAkJIHB8o5E9o+McEcRwdHQ1ZrpW0Q6SohiKsXZ6h28vGF9NeYyFbz9mZQEctfKM8raiJK1pIdLOgXIUzkbtuHd4xAdrBSKKWFH7KiCkXdlkE8KX9Y3WMiXEvp+KKzMStDTEIzpSKhRGYDv0MRbTxBQuSlQIlZFO1lGjM3nGcRtOa4WFErd7qoaA3+dI4ras1QmU+rVTK+6AGcAq17ozeKmilGg/Z+1Mi5iczpO84pyHa4UFP8k7alnqcxJpdzd3IVxLA0fhGakT85BAHlwAbu0iXEbbWtPVkjK9rmwAHEgMPOMo4mjTKcegWrHTUyeqKiykqTxcgsxrRzmrw74rdizhKX1i5ZooA1tX4sfCJJsxaQBlfdKSDQPmSUnjQJgtOPQykE0NCDfsgO40sIIS0KZt8JjEmXNnyyAc4CiQXYM+YcQCR4Q2bt7MuXldKCauLuHZ+7heM2jbwkSurlpQoLUSvMT2SDoLknuo0CrCsRPlIRuhLJcndApvEhqgsW4vHTxtKW5koK7PTJWISokJUCRf2RKtDjgRUHgfn0eMdsx8IiYrdmrypZlbylmi35WPCh4xZbI28VzJnW7qGBQSkg6uCK8o6FiLZmbg+RoUKce7nqI5Io6fu/p0+HhFedryQpwpwbsFXFjbhTwENmbclOCMxalrg9/gfCKzx6iyPoGbRQWC01UguBZ+IfR7PoCYxv7TsMmbIw+ITVllHNlhyCNCFSwDwrGjmdIJZBGRRelWHvjN7YJnJyAlKSvrDUklTKFLZQc1rbo5vniSTTSNMOLTTYPs+UZUifhkuV4TEoxMkH/TWlMy/DeWH4kRv5E5AykrDqrUs+YZgWP4faNIxGFUZcyZNSTmmyRKWFElKiCWWB9ksSGFPFzEUqUAQSlCmliWApIWlgXBZb19A5pWJjiJDlhtnoGI2ihGUFQJWrIkAiqmJvYBga8onlT97KoZSQ4q4LXY8RwIEebYxco0VLlBmUSmUhLXYlSUuHY0erQSvpAtYKusWcm9SmhDhuRPmYvi9ieCekR0Fo8qmdIFnWaaEsVF6aM5ry4ViMY9Sry1fZu5ooV00hvE7Bwj1ZeJQLrSO9QEMl46UpQSmYgqNgFAnjpHlsudMP2WtdKuO9dtK+XhbbCxyZM1MycoISkqBNWD5kps93HnE8RjeFSPRhHRGV6F7YXiV4omb1iEzB1e6Esk5m52AoeHONWmNDEcI7HI6IkB0KFCgAUKFCgA8CCQJqCCS5cg1zWsPyt3RNicUlaMmUKIUaklmqQBV90EUaIMWtIY6Bq6ah3FQa+kNKrIBtc0cZq3agd7co8lSo66sgQSKmmUhwLMSKwsSnOkkDK6u4M9uYgOZmzNdyK6vq/KJMTOVlSQzE+twe+Je+g0SYdeRdQzHnXu4GhPjFhidoJrlUQFXZgD309gEVMycTVnSTdhZydPZC+kBnSRQcNOEVmfITQ7CoApmZyQCA4Jy07hzjUSdnyEJC1ISN0OT4e+MmCClwA9SaluAHKsbDEoAylRYBgP4SxdT8WDDg7x0Qgkk3z/IRttoiM6WVF5QfTNkCzYUSTmtxa0F4ZEtQzJSnh2QCDqDwMVH09ZSUAIDAuMrglg4Z9Tm8xFxg5QDly7lN75VEAnm1Hi/C9jWeHKG5OEiOtHYZMWEgk0AhEUOhRwqAuREcqelRISXa928DY+EMdEsYyftA5lTApdGBQpw6TTMAoO7+fCNUrGy/wDURz3hTmeEVEzY+GVUzFKel0kks2iX/uYtSSFLDb5Fps4vLSWa9+8wTAeFmSpaQhJOVI4KLa1LMDyMKbtFIKQATmapcBlEAEUrUwnJFRwpbJBkKI500JbmW+fZ4iG4qfkTmZ7ACzkkACtrxNgk2PXKSS5SCRRyATW8NnKyJJSlyNBT5/tAU/aZQplISGIHbqXD03a90N/9RdY3gBXdFSpIzV7nSfloeZF8GVWErxEywRqqtWolw/eqn+YclcwqZgBmv/Cx53dvPlAa8ctW6kgKKilsi6Cw3nYEM78xB2CSoIAVeupOpZySatzhqSZMsNxVshSZzhwAHS/Zs28L8fYG4xedF0nr5QUxNXtXdVAEWPR8/wC0S+8/pMWnqYy2Yd0IkdXisfLdwmYln4PMb0aNomMj0cptHHjj1Z/p/vGvEdEjlR2OgRyHRIChQoUAChQoUAHzjhsYAsfdazOCXo4OkMOMSAovVQ0rVxccMqleKYqcTPH2TW3hp3wsPLzEFwT7Gt4R5PD5naF9cScxLgD05cxWOHElRylVHZza9/XyiJQOXJwdWrWB8qC8c2hunKljlZJ4EihIN/8AMUkmFBsjEoAcFxwdr2q9+ccQkEqCUswBIJF3AodXEDYVAUDmT+ZJs1ajXvgicAlimtWLUpcad/yYmkmAVs0pLZWqQLWJWKNG0xcnOlmB5GxoQQeRBI8YxOyUOqUGAecmzfZKj7ov+le2V4ZMvqwglZL5gTQAcCOMduXZdl+SMPm+4anCByRLIUVZnWUlIPFkkktcD2Qydg5mY5cpTRsy1ioqSUijk+14B2Ft9U2ROmzcoMok7oIGUJBFCTV3EVGxukuJmz5UtRTlUqrJAoxN/CHwm77GyxWnZolbOmFQJUlmZt48ON2ZgeBjn/pS2qqWd1qoJy1JdJcMa+YjnSvaZw8h0FlqUEpNC2pLHkPURTdEttzpk8ypyyrMklLhIIUGOgFw/lCWE3Gy/wBRLYvTstTv1ie0TVGZ3s7q/wAvpBmDwaZdrkAE8WfTSpJ8Yz/TjaEyUJQlrUkqKnYs4GX4xYbPxR+hJWpbq6kqcmr5SX74OHomRLFlLRhA2af9aY1abut6s9o6NlJcnPMfNmoQPC3rfnGZ6CYmYubMzzFqaWO0pSqlQ4mJenWNJVKkIJcnMWLEk7qB7fSHwvFlDjSq7NLLwCRm7RzBi5NefI84iMkSyGUkAkElaiVFndio8KeJjL9BsSUTpkhWof8AMgsR5H+mJP2iXkdy/wD64rheLKLiyo0s3G4ckBU2U9mK06tRnrYeUFZQQ1CPMHh3xg5fRjNhRiErObIV5WDEByQC92EGdAsccypBLpy50jgxAU3IuD4Q3hqm0yFJlvidr4UKJM9q7yUh3IpVkFQOlCIhxfSHCLAHWqDF91Cx7UxjZfV/SD1r9X1iszO7OeFbtF51myx9iYfGb71CKeFFdRrEkX209uyEBKVhZC0hYYXBLirjhaLDZs5C5SVofKoOHLm9XJJq76xSdMdnA4dKkj9ywH4CySPDdPgYi6D44dVMlqP7s5/yqv5EE+MTkWW0LM9gvafShEmYqX1alFLOQQA5ALDzjV9HlHr5RIYkhxdiRUPHl2xZZxOMCiLrM1XcDmbzYR6hsY/Xyv8AmJ9sOcVFpE8mXOxS21cYOMtB/pl/GNfGO2dTbGIH3sOk+QlCNgI1ZyIdDnhkdEIY6FChQAKFChQAfJBLQbs6YokJAeh9QW9pMQSUAF1Bxw1iUYoBsthXR9aPHny10O2wuZVnNSB73PpAeJQEr5FI82Y+rwepEtaQpK94UOah46+6IFSSUZSHYOFBiBc35tER0FZX9aRQU7tfjBmElKJzBQoeY9rWiCbhklmWMxFQxZ+APPnHJCChW9SlXOh8KGLbtaFGq2JhyZ0gs4SpaieByBj6mO9PBmnYdHF/6lIHuibo0/0hKQ+USVKPfmCR6PBe3dizZ2KkzU5erRkdzXdWVKYa0aOpOp6/NDPD8vzqZPF4hUo4uQAXmTgAOSVrPrujxiw2Zhcm0kS/9MAfyyKn+Z4tJ/Rxasd1xKOrKwts28cqR9lvvDjaJMNsiYjFzMUVSilWbJvmqiGSDRhbQmL4ir2LplJ0xxqZuKEtR+rlMlTcyDMIbkw70wNitpSxjRiJROTOk1BDBglYbufzi52V0aSiapWLXKWVDs5i5WouVEEDn5w/bXRmTMWlMhcqWQ4Ul6k0agq94anBaBkk9aB/2hq3pA/hWfMo+EV6uiahh/pBmJbquty5S/ZzM73i72xsM4iXKUZ8sCVLyKUzgkMCXelotJypSsIqUJyABLEoruAcuW3uiViqMUkx8OT5Ge/Z725x4JT7VfCKidtZKsZ9IUMyQtwHuEhkXtYGNTsbo6ZcqcET0nrkBIWEUSBmBParc8GaH9F9iyZeciYmcSw7DZRWwJLvx5Q3iQtsnJKtjII2oBi/pKRlT1mci7A9u3F1ecXf7QjvSPwr9qIsOkuy8MuYkrmdWoJZkpdw5YlhTWI9sYDDr6qXNnTAZKAlwl3BCWKixFgIXFhaZSwcR7JjJO2pMvABHWJMzqSnIC5zEEVAteAegGGJmrmNRKMviogt5J9RBh6K4VExCFTZpUuoG6x7yE0i7ws+RISuWgZRJqoAVrq57R5wpYkUmlzGsKbrT5sefYUy/pH137vrFZr2r92t2tGlGL2WPsA/kmH2iOz9i4QKW4nKIZRAI+3UM0Qo2dgsil9VPZLVKmdy1C7GG8WD3bGsDEfI1aCidKe6JiPNKhw7o81Kl4dc2XqUqlK5g6+gPjG+w2OTKlN1UxCUBKUhQqp6ABzyiIbMw+JWqZMkKEwEAuVB2DA7pY015REMVJvoKWFJK6K3oFg2SuaftHIO4VPmSP5Y2uzS06V/zE/qEA4TColICEDKkWHeXN+cF4QtMQeC0n1EKUs0rIrQu5NNtL/iwvvT8I10ZCeW2yj+LDH2r+Ea4R0s40PBjsNBh0IdHQYc8MhQDoe8cjjxyFYUfJqJ5qGFYgJhExwxxHYdKnpE8tSkVCuTVeB0KaOhz8PfABYzAkgVb3cYllTHUAGUbPSlKghnNorpcs0eo74MwQTnD3d4SjboTdKzc9GUDOo1cISOW86qfOkaGKXo0KTDwUE/ypHpWDVz5oJaWCKscwBvTWvp6V1esn6v+ycNVBFVtwnrwU3CUoHfN61Pw8oAxCvqUS0hRCErmbofKSpQQVcAA5eNFnmFKj1aAujOQXY3J0YEw1K5oB+rQLD7NQ+9rZn+aRm4HdD6lRSVbfPuUm0FdZMWotkJlJUpnUkKSFOk6cD3iFJWDiLpJ+kqOUDfAD72b7o4covFLmAkBCCHLVSKOcr14N68GL5q5gLpSmwvlA56u7+HfBk7j/VKqrlRQS8eg4JUsK3wHIY2M0a21ESzJ0sy0nrrTaTEyglKCE0ChrrWLczJ3CX7/wBXzy0fMmTcu7kzPVyGKWJ4mrsL6wZGL9THkud7r8AuCnKThM+QZglRCQGBqWLDjeBejkxlGWN5OVxMZVQkJATWgZzB5mT3d5Z5W173pDlrnMCFIBq4pl0y8Tx11ism2pnxlUlW5V7QWpEyfQ5pmQoOTOFABiljQViDHSJhVNLKYCVnSA2cZQ4DDQ8IvDNm5RWWFZq13SGOl7t80iITZ1d+Vfjb5+MDwy4/VZa0+afgqseJilrmolkpQpGU2ICKsE3IJMM2jg1qM6YgKfMzMd5CgLDVi3yIu5i5m80xA3wU1HZaqTTi3OprEaZk5/3ktnrUOBypeFw75hH6tqqXzT8DMBKInzSQQChDFixZIdjAP0df0HJkVmzdli/be14sJip2YlM2WzUBIuyQdLAgn8x5Mgqc/wC9l+Y+Fv7+DydyF9Q7uun8AKUvKWBJnHskiaS5Fexq4vBWwZSk9ZRaZbjIJnaF3poImmrmEIaZLCh2t6hNK0vrTnDFmaQodagVoXFuPZoeVdbw1AJY9pqty0jsssQeBEAYecoHfmSyORA90E/SEfeT5iHTRgaPaVNs4b+LDqH/ALxjYRgZ+1pOI2pglyVhYCFJLAhiUzKVA4xvo6JPRHIludEOEBJwqxMKxOWQboUEFI/CQAoeZhbSn5JSlKoEsXBpRQNdQ7RNlUGx2InUbbo8z5WHrEWCwQluc8xajcrWVeSeynwAgsKCjHI7HILCj5HjpFoaTHZS2L3jlOkapLXeGwSmePug6Ma+sOSQdPYIAI5Mw+fuiz2ct1BPlAZSnTz90G7JQRMzGwD+Dg+yLwlc16kYnkY6XiUiaoTFzAhiNxRBewbS0FnFYa/W4m1s/Jn79eD8oqpExhSvj/e8TJm7pOoLHk4PwMNY1cikqDk4nDspKps8726oLJplD8Ad59LAQvpWGCknPPUhlZgVKCiXGUuCAzaRXTRZi2ZvPiB5RKQ6QGGcE1Av3+Pth8YYWcVhgUsrEKGbeClNuseGpLcL8obiMThsq8pn5ik5XNEqoRq7XFXgFQahN/nziNT0Z+PjQM3zeDjAWy8Vg8ztPZ7ZqNTiok86i8QKnYbMgp61goFSVVzJ1AYhv7wJLmTEKCnSDxYajlr3wdhpecBTsRU+VXfv9YTx65fyKx4nYKpInC2o4hwmt2e5s+sRIn4MFQUlag6WUDWwKhUhquLcIutlywFFbBxLV31Uk2ixE4uBwUx5uaekXhYmeN/cTlRlEYvAinVzDUGpS9GtvWPDnDMNiMCUoTMStKgAFKFiWGYliS1DYa6Rs1zx1mjBQS1PE+cOWtusGV21puxeb5YsyMMZ+DCkEJWUhW+lTHMnKbb1GU1Dx5RJNxOBNkLT+VJuF17ehUk/9McY204jKgBgcuYmnCkPmAK6ugGZ3YCDP2C0Yf6XgcmXq1FWVsxABzBOV+1Rzvd+kdTjMCyR1Rej0BfdINlXfXj6bFaRlIYUWzsHIrEysGnKrcYitcpt3Qs/ywswM3FYUoYSmXlI1ZKurYF81d9r8zrAmCMqoWHdmIUEszvcEVppHpMiVLWsHIhkhyMoZ49PRsjDkVkST/00N7IaxOQWfOHVySAzDi8wOam9GtSnLjEGNQgdj2gj2CPozCbMwsx3wkgMSKype8AWcAh274mV0dwZvhMN/wBmX/8AmGsUVmWxKEjFbJUkAZpYsALoT8Y38YXpUDLxWzqISEzClIT2coMoAM261mraNl1qlJBQAXYuokBjVwwr6d8S3ojJbsKBil299tS1HImUrKAhZAWUkZ1KAy2JFbeMXEcXUEcQ3nE2MA2RNBJyEmUoBSAULGUntZVKDFLmgFtKWs4D2SvNIlKe8tJ/pEFtBY6FmjsMXOSKFQHeQIUFhR8jmE0cBhGMDclCm+fmkIF4iEdgAnlFi4i1wS92YeCD+lUUiVGLbCLaRMOrN5lIPoTGmH5r7P8AozxfLXp/YHMUkJpCQqjcYiVX5tCSsiMzQlz7z/NIeHBd71fVrRGkZqWYXidR3WBIAHt90AEiMpFXJFa8wzU51hpmkEKc0Ht9kDBJDuL8e+HqcP8AN7wgCUrGjkq41r8YKAUkAMwqKih74q5TksDW4r7G1ieXPUks5PEGIlGxM1fR4BUxaSB2O5qindF4uQHokXBvqLaxnujstTzChYqlLDVJd2PCkWqpE776fL/xjTDj4dxX2CuoDNkDEvevG7xJ1Yru9q9b+sAiTO++PL/xgsP7P76Rb9SlT5EyJQFctcoFfZDPo4oMlrVN6c44AfZ7a6cIel35ROvUFXQeJAbLlo73746iVldh7YHUmboU+IF/KGgTv4fT4Q67itX5QyTJSh2DPHok3FZJQUxJIAADOVEUG8QLx5hmmi5T6Ro17WTOVLkJOcZRnl7mXOkihBGd7q4UBGjj0J0fIssJjVIXR95k1bICDV3Irc6eOt1jMUUJY5cxoKsH0cGwdh4xTy5KVFeUEgJO9erJBGuUswik6RbdWiayDLBSkZgreWSSoWSRmTlYs4IzW0CjpoDQulGHUhWzwsgn6RQaAKVKOVzcO/nGq2PjEDD9YVpyC7HdQRuqSCQPtA04mkeO4jauImLQFkgJmlct3ZKipI3SpyE7qaF2gbZu2p8qVNCJ5lg1NAyibg7pJoTSgrGr0hEhK5M9JX+0ELK5WHkKXOKimUDRMwB3USWZmNH8RFFO/aLjQVylyJKVB0kAklJsbLIBBjzuRtCZLmBcuYQpNlCiquDewYmDF49ShnUXWpRWaAkqNXMZynRokkbLZn7QMTKlplJlyVZBldTglvzN/iDZf7ScQf8AgyPNfxjzuRiJhoCw4tcn2eyLQTAEsGJPJtKacYyliSToaV8jTY7pPi5qszoTRmSAQPEgmFGN+l5aeffCic0+ppp0MpCCCbVghEkd8FSwEqABQprguAPzfNo1ehACZRFPQMSO9rQ4Yc6gh7UZ+4m8WGIlqJcmijoXQOYILEGtDwMPCkpljMzZjRhxLtz5RKkBX/RiDTS/lByUthjzWPef/jDVICkugX9ONIfjEkSUJN8z+QN/5o1w3o32M5616lUA8dETK7Hcr2j+0WGztiKWUFe6k1Yu5SkjMWFh2mP8JiLNErGYbCfVBaj21H+UN/c9zRFNnFK3FAQ7PQCzeXtiw2zjJa5mROYSkggZQKsALE07I+RFQZgfWlISKYSJgJKjdTmjuSe/viJnNbcuHCBxMeCcMgkuakU+1QF2O6HYH2wUSSowYJBCiO+/uiZeHASFBXFNRdrmh8a8InRKYB0t3ufGsT5EmWxftAC/2lAK9AYGNIq5qUpKTnVVwpk5WZrMa9qC9k4MzCo51hKDxcka+0cbwDjQlkBLuArNcMXHGL3YsrJhSpqqB9SUp90GwJahmxtkomLH1swZ0k3BYBL2pq3mYNm4RpuRS1Kym5pmA5P8tDujyPrFfwSwPFRHwMdMzNOVW0xQ9IlvUtLQuNjYDrpChnKFCapIUACWYBiDcMYotudGMchsszrAAyerWpKiAH3kk1LPZ9I13RVH1czlOV6hBi9mJdn8PZEttMK0PK9nYhaJQ60qSoJchUxYWsMUulKwa6moHCFh9oTUuorJALMouDd7KCuDNxqY0fSTDg7OzG8s3ZyAZuUt5xgcNPmOi7E5uVaGh4gAQJWyHoaVC15kLUVKlqcJZSCoEtle5OtC1vCF0YmTzLE9kzSqhBCczKCSGN2zEOGo8V+HfOCCySwIPMtV9KA/3pB3RmeTKkpAAShABNSmlXJah5GnhSBtoGHYjEzpa0iZPKUsQChRoWc7o7q94ikxuOMybVYmKO64zOpiQH1Ong0Xu2dnLfMhZYlKihsys41SVu1AO8A1akDYzYQlvNBUs6JZnOnZpQeFG1i07ViKnGIUAkqSRWjpUng9/CKjG4ZzuszszsxJoWazRZTcLNl5ipJSlSgQ4okigDjlpD5mG7aCkiaGWbFQGob7QatD743fkXuRHzP2M9KRlKgQlxSrnw4QPMUXr890XX0RIdQmZyboUgoOlAahy3EQQrZ9Qr6oJUHAUqoIZw7MbERloXRWy5u6MoA5GvtiNM8g1D93OCcZgVbwRLUWAbq3WxPEoehY3gWXs+ef+DN/7a/hCpAIzhwPqY5BKcJPAA6qZSnYJbVrcGhQUOjszBoSlRq4HHmBpDMKEDdyO93q54jh4RPjjuAB95QBAuwr7hECMoL3/E4bxEN6iB1qT1hSGCQKOH5V5wlqPV5WBCuNNVW84dhFjNMYPwfl3i8cmIVkQw04cYkYGpXAZeN698HbVmES5STqCo+QHxh+G2eVg7tOOg7zpBWLwyVGXmIAytxI3lG3lGsfJL2MpeaIN0Zly1z0pmA5VG4ZgUjMCQdKN+YxaYyetRUmWwBIzEkDKAAlI4uwct61eDB4RKSsoIIApQurUgDVoqMXjVqFN1NmHvPGMt2bJ6EuIlIQwdyPu0T3VD+YF4BUwry4eEWey8GkjPMJKSDQValCpi4D8IqJhrqBoDdtHbWGmSJI5iLjYaS4JKUpdiCWDEVIppQ30itkAmhJa3v8nrF/sbCp6qYStKVJFArtFxp3s3jpCm9BodNlkWqFAHW9/h5QP1UwhKRZyQeJFT7Ivl4QiSVZq5QoF9CklorZWKZMtASVLSSeTFj53iYvQdFBtBBRMUFFyL99HjZSMG0pEsG2R/yqzH0EZKekrn1FVLqBpmV7I3ClUJ8fJMOTHFGZxe1pkpaurVlc1oC7O1xFnsqc61AuVdYFP+KWhT+2MvtRW+Y0ew6sriJRPjLAp4j0hyCO56H0aDJmDisHzSB7jF7NsDFRsBacqmd6Pw+0zRaTV7p7j7Iyk9SkZ7aknNgsQhiaTKC5YksIx/R7ZKSgFc0dokAuAXy7pBqHAemgjdz5f1OISCxdbHUOlwR5x5vInTMO8xSihSiUnLlIFKJWGOjKvR4dvkTIW0FrVPVLXLqDmZO8wFSocQWcm/Grwd0WxRypSkBIy0JLhkqUosm4s3wgTaOPSZSEKQ5qpRKsxLUBCynd0uTQM0S9EsTkRQqO8RldSRRRyqBHPjSh1hvVEo15BJTUEhIJIASkZjeqrO7N5WiDGrYDMKKrqACaFjqz839nEzk5CqXlSpTnP3K7RIHeCW5kQK6cQopltnCxmBUojitUsgMwJHjwvEWwYL0kQOpCkuxIOV6Oxq0WJ2cnrRPHbytwcV4a1vFLtgKErKSSkHgGFWFb+cWaNqhKATw4jw1pHSn+2vczXnfsF4wJUkFQSatvAUPB4AmbCkr/AOFlHEEg/wArt5wKtRnH6wlCXccCe/SkWeHlBI3SToz1HcdREWWVK+ioH7uctD/IsRAWI6O4odmYmYBYE1/qBA842CZj8fGOlIhgeeL2figWVJUTxZR9UKaOx6C3OFDAxeJm4A2mrJH8BJ8CWEBT5mHCHGZXLdFOYb0gWVsrIoJWXUa7rkAeIEWGH2KqYheWRNfKQgqLJKi7FsooKaxI9yn2MlKnBTUqoaNa1oN2ZMTkSFDQV9gPJ4v9jdF5yJaQpMtKw5J7RcksCQ+jWiw2X0b6hASuaHYaNYNRzEyaZSiZDFYsFQS4FR2SSdRc2NagRDtJJKqB2SLGzgEkjhzjV4zo/hZUtaxmWsAkEk9rjRheCZWGk5AOoBUUDMQKqLAVpWNFKsPTqZZf3F6GAGKUkjKSAKBn01pD8apaylZS/HUcB3xtsRslakkIlS0UpRm5lheAUbACaTJuYuC6bhnoHeheIzI0ymVQt1ISEkqqGBYEqNO7hDFYBck5iUu7APmI4ZstB3PF3h8VIDZQoFKiAkqcMQTmJatnbSkHbOnBSVo3QZuYhaxndIdsz0CdAL95MK6FRmJ05ZSVEggFnYUJ93KDdnyXTmXlLN2iUud7uc/GK6VhCmYErLVqxDgg0vfvqKxcpcKMxSUzEJBSRmZbDdzEUIYntM1IbEXRlzFuFAB0DIHpYUDngR8IhXs+bLUAuUoAAkKFXrXnwvVhF6hfVzZaGJCU5iT9kZQLixofODcdikFYmqKpy1bmVgliliCpxpmuR74zeiL0R5/Ikk4pqHKEk2ailK18I0mILIV4+paJJ4SjEYhKAkPLkA0FyZhU3zwgXHr+rPMD4xRRh9oK3jGs2I30eWbHKnxy0jH4w1MavYKnwyOQV6KIi5bEw3PQejf2uaUn+qYIvAAQ0VPR4gyqGooRWlyH84tJQpU1jF7llcu01/tV80JHujxYBSSxVQ2IW49rAPxqI9nx68iFngE/qKTHisxYQ4UFElTs4Yj2174uBEhYuasshRUwZgSdQGvajU5coP2XiOquahSm0IIcPSorcchcRWYXEJDuzXykXNWq+kTpxBEtQDsVCxvrWlfPWLa5EGglYgKkk7geaHSyhnAFRmcDUFr+8cYhaGygIB3mBKws0qa1BDBjw5wLPlgLQnOklgFFOZNxV84DEBhp3akVRCZhYqKXOQEhwNMwtZoigLlWIdJGY7zEpPoW8YMkTaiqS1SHBI4OP83ikQlQUXIIIcG7cu74RPj8Qczvl3WIDVIFO92Gn97a/bXqzNPxv0LeRjgFHIBXtJSTxoq1O/g0H4Wet8zN4jyPyIocPPGZBQQpagXBBBPCtie6jsIOmTlpVlIIJFRbRxyb0tGLtGho+vVSgiZKjGfTNWk5VhQGjOL2IpT2Ra4aYCKE+LH1EaRn1AMhRFnhRoMtESUp7KQO4AeyFrHYUc7NADaUwgsCWprAskOa8YUKGhsF20PqpncP1CLzC9hI/gHsEKFGj/xL1+xC8/sVWOWSogks9vCKyab/ADpChRJZisH2h86iC8Z/uw/Gf1mFCi5bmJVfa8vdFrgB+9/5Y9VpB9CR4woUEtgZ6Ds+YRNSASAWsW+zFjikAT1MAHl6fhHwHlChRkhoyGJP+1TvwS/R2hbV/dnv90KFFLc0MFirmNb0Y/3Ufm/UqFCi57Ew3PQOidpv4kfoi+THYUZMspttfuZ34D+pceKz/wB6oaZnbR+LQoUXDYyYTPQASwAtbugSXOVlScxfMk3NwCxjkKLewiz2f2VHXq1exUCJO6k6lBL6u6qvxjkKEhB6Psd6/dAOIP1ivxt4QoUaf8/cz/39i96NKJCwSWCXHI5JlRwgzpAGmS2p9WfRSgI5CjnZqti5xE1Rw7kknMA5JdiziFsxIySy13fnChRCAPMKFCjpA//Z",
      },
      {
        id: 5,
        name: "Shree Vinayaka Marble and Granite",
        number: 8618210837,
        experience: "3 years",
        address:
          "Marble mandi, Opp. Akshya patra, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017",
        img: "https://content.jdmagicbox.com/comp/goa/n2/0832px832.x832.090514044114.n9n2/catalogue/shree-vinayak-marble-and-granite-verna-goa-marble-dealers-ty70qx.jpg",
      },
      {
        id: 6,
        name: "D.R.D Marble Traders",
        number: 9462029501,
        experience: "3 years",
        address:
          "Marble mandi, Opp. Akshya patra, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017",
        img: "https://content.jdmagicbox.com/comp/jaipur/p3/0141px141.x141.120708040637.t7p3/catalogue/drd-marble-traders-jagat-pura-jaipur-granite-dealers-1zb5u.jpg",
      },
      {
        id: 7,
        name: "Shree Hari Granite and Stone",
        number: "67726-996-666",
        experience: "5 years",
        address:
          "Opp. akshya patra temple, Marble mandi, Jagatpua, Jaipur, Rajasthan- 302017",
        img: "https://images.jdmagicbox.com/comp/jaipur/f4/0141px141.x141.161230162001.p3f4/catalogue/shree-hari-granite-and-stones-jagatpura-getor-jaipur-granite-wholesalers-hwoflf54mj.jpg",
      },
      {
        id: 8,
        name: "Taysha Stone and Infrastructure",
        number: 8905945658,
        experience: "8 years",
        address:
          "Vigyan nagar, Near 7 no. bus stand, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017",
        img: " https://content.jdmagicbox.com/comp/jaipur/r3/0141px141.x141.191115150643.f7r3/catalogue/taysha-stones-and-infrastructure-jagatpura-samod-jaipur-tile-dealers-wt5905vde3.jpg",
      },
      {
        id: 9,
        name: "Deepika Marble and Granite",
        number: 7878871659,
        experience: "3 years",
        address:
          "Plot no. B-4, Vigyan nagar, Near 7 no. bus stand, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapSzPk8fA-3viNUYmgWFBGJyhy7bIm-ccOuWeU9tW6Q&s",
      },
      {
        id: 10,
        name: "Shree Aadinath Marble and Granite",
        number: 7976532713,
        experience: "5 years",
        address:
          "7 no. bus stand, Near ICICI bank, Jagatpura, Jaipur, Rajasthan- 302017",
        img: "https://content3.jdmagicbox.com/comp/bhopal/f6/0755px755.x755.180202172319.z5f6/catalogue/shri-aadinath-marbles-bhopal-oym4i.jpg",
      },
      {
        id: 11,
        name: "Pooja Marbles",
        number: 9414044861,
        experience: "35 years",
        address:
          "B- 39 ashish vihar colony, Opp. Shyam baba mandir, Mahal road, Jagatpura, Jaipur, Rajasthan-302017",
        img: "https://content.jdmagicbox.com/comp/udupi/q7/0820px820.x820.120420173436.p3q7/catalogue/pooja-marbles-nittor-udupi-ceramic-tile-dealers-5gh6n81upx.jpg",
      },
      {
        id: 12,
        name: "Saini Stone Suppliers",
        number: 8879954438,
        experience: "10 Years",
        address: "Meghna Vihar, Tonk Road, Jaipur- 302020",
        img: "https://content.jdmagicbox.com/comp/gurgaon/q2/011pxx11.xx11.130918165042.a7q2/catalogue/saini-stone-kala-kendra-and-handicraft-matta-road-gurgaon-gift-shops-1e07ibh.jpg",
      },
    ];

    const handleClick = (marbal) => {
      if (selectedMarbal && selectedMarbal.id === marbal.id) {
        // If the same cement card is clicked again, close it
        setselectedMarbal(null);
      } else {
        setselectedMarbal(marbal);
      }
    };
    const handleClose = () => {
      setselectedMarbal(null);
    };

    return (
      <>
      <h1 className="title">Marbles & Granite</h1>
      {selectedMarbal ? (
          <MarbleSingle selectedMarbal={selectedMarbal} onClose={handleClose} />
        ) : (
      <div className="marbalscards">
        {Data.map((marbal) => (
          <div key={marbal.id} className="marbalscard" onClick={() => handleClick(marbal)}>
            <img src={marbal.img} alt={marbal.name} />
            <h4>{marbal.name}</h4>
            <p>+91 {marbal.number}</p>
            <p>
              Experience : <span>{marbal.experience}</span>
            </p>
          </div>
        ))}
      </div>
        )}
      </>
    );
  };


  export default Marbals;

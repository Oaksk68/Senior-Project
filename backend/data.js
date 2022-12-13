import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Admin",
      email: "oaksk@gmail.com",
      password: bcrypt.hashSync("admin"),
      address: "34000 SOE, Thailand",
      phone: "+66/5555555",
      image: "./assets/images/sellers/seller.png",
      isAdmin: true,
    },
    {
      name: "Ricpe",
      email: "oak123@gmail.com",
      password: bcrypt.hashSync("ricpe"),
      address: "37230 OAK, Thailand",
      phone: "+66/0000000",
      image: "./assets/images/sellers/seller.png",
      isAdmin: false,
    },
    {
      name: "wawc",
      email: "oak@gmail.com",
      password: bcrypt.hashSync("123abc"),
      address: "34000 SOE, Thailand",
      phone: "+66/5555555",
      image: "./assets/images/sellers/seller.png",
      isAdmin: false,
    },
    {
      name: "wefc",
      email: "aewcm@gmail.com",
      password: bcrypt.hashSync("123123"),
      address: "37230 OAK, Thailand",
      phone: "+66/0000000",
      image: "./assets/images/sellers/seller.png",
      isAdmin: false,
    },
    {
      name: "awecmes",
      email: "awecmes@gmail.com",
      password: bcrypt.hashSync("admin"),
      address: "34000 SOE, Thailand",
      phone: "+66/5555555",
      image: "./assets/images/sellers/seller.png",
      isAdmin: false,
    },
    {
      name: "Baide",
      email: "oak12123@gmail.com",
      password: bcrypt.hashSync("ricpe"),
      address: "37230 OAK, Thailand",
      phone: "+66/0000000",
      image: "./assets/images/sellers/seller.png",
      isAdmin: false,
    },
  ],

  category: [
    {
      name: "Men",
    },
    {
      name: "Women",
    },
    {
      name: "Kids",
    },
    { name: "Electronics" },
  ],

  products: [
    {
      name: "LEE Men's Jeans LE MB714011 Navy Blue",
      slug: "123fwe",
      category: "Men",
      description: "Get this item with 9,160 Points",
      price: "950",
      image: "./assets/images/products/centraljpg.jpg",
      seller: "Admin",
      sellerImage: "./assets/images/sellers/seller.png",
      link: "https://www.central.co.th/en/lee-men-s-jeans-le-mb714011-navy-blue-grmkppr001547397?MTg0LGNkcw%253D%253D=4051",
      city: "Chiang Mai",
    },
    {
      name: "T-Shirts",
      slug: "548",
      category: "Men",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
      price: "950",
      image: "./assets/images/products/tshirts.png",
      seller: "Admin",
      sellerImage: "./assets/images/sellers/seller.png",
      link: "https://shopee.co.th/",
      city: "Chiang Mai",
    },
    {
      name: "Khaki Pants",
      slug: "546",
      category: "Pants",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
      price: "1200",
      image: "./assets/images/products/trousers.png",
      seller: "Ricpe",
      sellerImage: "./assets/images/sellers/seller.png",
      link: "https://shopee.co.th/",
      city: "Chiang Mai",
    },
    {
      name: "Khaki Pants",
      slug: "1234",
      category: "Pants",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
      price: "1200",
      image: "./assets/images/products/trousers.png",
      seller: "Ricpe",
      sellerImage: "./assets/images/sellers/seller.png",
      link: "https://shopee.co.th/",
      city: "Chiang Rai",
    },
    {
      name: "Khaki Pants",
      slug: "4",
      category: "Pants",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
      price: "1200",
      image: "./assets/images/products/trousers.png",
      seller: "Ricpe",
      sellerImage: "./assets/images/sellers/seller.png",
      link: "https://shopee.co.th/",
      city: "Bangkok",
    },
    {
      name: "Long Coat",
      slug: "outerwears",
      category: "Outerwears",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
      price: "1900",
      image: "./assets/images/products/coat.png",
      seller: "Admin",
      sellerImage: "./assets/images/sellers/seller.png",
      link: "https://www.belsimpel.nl/",
      city: "Songkhla",
    },
    {
      name: "Long Coat",
      slug: "2",
      category: "Outerwears",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
      price: "1900",
      image: "./assets/images/products/coat.png",
      seller: "Admin",
      sellerImage: "./assets/images/sellers/seller.png",
      link: "https://www.belsimpel.nl/",
      city: "Songkhla",
    },
  ],
};

export default data;

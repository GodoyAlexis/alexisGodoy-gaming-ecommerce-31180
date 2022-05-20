const inventary = [
    {
      title: "Cotton Carbon",
      price: 7340,
      image: "COTTONCARBON.jpg",
      stock: 5,
      id: 1,
    },
    {
      title: "Cotton Black",
      price: 7340,
      image: "COTTONBLACK.jpg",
      stock: 3,
      id: 2,
    },
    {
      title: "Cotton Grey",
      price: 7340,
      image: "COTTONGREY.jpg",
      stock: 4,
      id: 3,
    },
    {
      title: "Cotton Navy",
      price: 7340,
      image: "COTTONNAVY.jpg",
      stock: 5,
      id: 4,
    },
    {
      title: "Herradura",
      price: 8740,
      image: "HERRADURA.jpg",
      stock: 3,
      id: 5,
    },
    { title: "Orchind", price: 8740, image: "ORCHIND.jpg", stock: 2, id: 6 },
    { title: "Saffron", price: 8740, image: "SAFFRON.jpg", stock: 5, id: 7 },
    { title: "Toucan", price: 8740, image: "TOUCAN.jpg", stock: 6, id: 8 },
  ];
  
  export const getInventary = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(inventary);
      }, 2000);
    });
  };
  
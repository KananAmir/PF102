const products = [
  {
    id: "6403c49deb0d73a0453b6c6e",
    title: "iPhone X 128GB",
    brand: "Apple",
    description:
      "The iPhone X was Apple's flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition, 3D camera functionality, a glass body, and an A11 Bionic processor.",
    price: 960,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-4.jpg",
      "https://fdn.gsmarena.com/imgroot//reviews/17/apple-iphone-x/lifestyle/-728w2/gsmarena_019.jpg",
    ],
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
    category: "smartphones",
    stock: 55,
    tags: ["mobile phone", "smartphone", "ios"],
    rating: 5,
  },
  {
    id: "6403c67feb0d73a0453b6c72",
    title: "iPhone 11 128GB",
    brand: "Apple",
    description:
      "The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc.",
    price: 999,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/19/apple-iphone-11/lifestyle/-1024w2/gsmarena_004.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/19/apple-iphone-11/lifestyle/-1024w2/gsmarena_005.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/19/apple-iphone-11/lifestyle/-1024w2/gsmarena_007.jpg",
    ],
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
    category: "smartphones",
    stock: 42,
    tags: ["mobile phone", "smartphone", "ios"],
    rating: 4,
  },
  {
    id: "6403c730eb0d73a0453b6c74",
    title: "iPhone 14 Pro 256GB",
    brand: "Apple",
    description:
      "The iPhone 14 Pro is a smartphone designed, developed, and marketed by Apple Inc.",
    price: 1499,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro/lifestyle/-1024w2/gsmarena_003.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro/lifestyle/-1024w2/gsmarena_004.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro/lifestyle/-1024w2/gsmarena_005.jpg",
    ],
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
    category: "smartphones",
    stock: 50,
    tags: ["mobile phone", "smartphone", "ios"],
    rating: 5,
  },
  {
    id: "64077f9114760a7018986911",
    title: "Samsung Galaxy S23 Ultra 256GB",
    brand: "Samsung",
    description:
      "Here are the lowest prices we could find for the Samsung Galaxy S23 Ultra at our partner stores.",
    price: 1199,
    images: [
      "https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-s23-ultra/lifestyle/-1024w2/gsmarena_009.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-s23-ultra/lifestyle/-1024w2/gsmarena_011.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-s23-ultra/lifestyle/-1024w2/gsmarena_012.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-s23-ultra/lifestyle/-1024w2/gsmarena_017.jpg",
    ],
    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
    category: "smartphones",
    stock: 25,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
  },
  {
    id: "6407832d197e7ef81e336693",
    title: "Samsung Galaxy Z Fold4 1TB",
    brand: "Samsung",
    description:
      "This here are the lowest prices we could find for the Samsung Galaxy Z Fold4 at our partner stores.",
    price: 1245,
    images: [
      "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-z-fold4/lifestyle/-1024w2/gsmarena_027.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-z-fold4/lifestyle/-1024w2/gsmarena_028.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-z-fold4/lifestyle/-1024w2/gsmarena_034.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-z-fold4/lifestyle/-1024w2/gsmarena_035.jpg",
    ],
    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4-5g.jpg",
    category: "smartphones",
    stock: 30,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
    rating: 3,
  },
  {
    id: "640784ae197e7ef81e336695",
    title: "Samsung Galaxy A73 5G 64GB",
    brand: "Samsung",
    description:
      "This here are the lowest prices we could find for the Samsung Galaxy A73 5G at our partner stores.",
    price: 397,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a73-5g-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a73-5g-2.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-a53-5g/lifestyle/-1024w2/gsmarena_003.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-a53-5g/lifestyle/-1024w2/gsmarena_004.jpg",
    ],
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a73-5g.jpg",
    category: "smartphones",
    stock: 20,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
  },
  {
    id: "6407858d197e7ef81e336697",
    title: "Huawei nova 10 Youth 128GB",
    brand: "Huawei",
    description:
      "This here are the lowest prices we could find for the Huawei nova 10 Youth at our partner stores.",
    price: 450,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova10-yough-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova10-yough-2.jpg",
    ],
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova10-yough.jpg",
    category: "smartphones",
    stock: 40,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
  },
  {
    id: "64078662197e7ef81e336699",
    title: "Huawei Mate 50 RS Porsche Design 256GB",
    brand: "Huawei",
    description:
      "This here are the lowest prices we could find for the Huawei Mate 50 RS Porsche Design Youth at our partner stores.",
    price: 850,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate-50-rs-porsche-design-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate-50-rs-porsche-design-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate-50-rs-porsche-design-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate-50-3.jpg",
    ],
    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-50-rs-porsche-design.jpg",
    category: "smartphones",
    stock: 50,
    tags: ["mobile phone", "smartphone", "android", "huawei"],
    comments: [],
  },
  {
    id: "64078745197e7ef81e33669b",
    title: "Asus ROG Phone 6D 512GB",
    brand: "Asus",
    description:
      "This here are the lowest prices we could find for the Asus ROG Phone 6D RS Porsche Design Youthat our partner stores.",
    price: 690,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-6d-1.jpg",
      "https://m.media-amazon.com/images/I/413EOEX0LJL._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/51FmT4HMtaL._AC_SX569_.jpg",
    ],
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-6d.jpg",
    category: "Smartphones",
    stock: 45,
    tags: ["mobile phone", "smartphone", "android", "asus"],
    rating: 4.4,
  },
  {
    id: "640787b3197e7ef81e33669d",
    title: "Asus Zenfone 7 128GB",
    brand: "Asus",
    description:
      "This here are the lowest prices we could find for the Asus Zenfone 7 RS Porsche Design Youthat our partner stores.",
    price: 510,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-pro-zs670ks-zs671ks-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-pro-zs670ks-zs671ks-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-002.jpg",
    ],
    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone7-pro-zs670ks-zs671ks.jpg",
    category: "Smartphones",
    stock: 60,
    tags: ["mobile phone", "smartphone", "android", "asus"],
    rating: 4.2,
  },
  {
    id: "640789f7197e7ef81e3366a1",
    title: "Asus TUF Gaming A17 512GB SSD",
    brand: "Asus",
    description:
      "Asus TUF Gaming A17 FA706IHRB-HX041W Gaming Laptop (AMD Ryzen 5 4600H/ 8GB/ 512GB SSD/ Win11 Home/ 4GB/",
    price: 1660,
    images: [
      "https://cdn1.smartprix.com/rx-iUVvKsDah-w420-h420/asus-tuf-gaming-a17.webp",
      "https://cdn1.smartprix.com/rx-iy2Uygxa2-w420-h420/asus-tuf-gaming-a17.webp",
      "https://cdn1.smartprix.com/rx-iZYnGRi8U-w420-h420/asus-tuf-gaming-a17.webp",
      "https://cdn1.smartprix.com/rx-iZPPgjlya-w420-h420/asus-tuf-gaming-a17.webp",
      "https://cdn1.smartprix.com/rx-iEX8mBOvh-w420-h420/asus-tuf-gaming-a17.webp",
    ],
    thumbnail:
      "https://cdn1.smartprix.com/rx-i4TCnbvn5-w420-h420/asus-tuf-gaming-a17.webp",
    category: "Laptops",
    stock: 60,
    tags: ["gaming", "laptop", "windows", "asus"],
    rating: 4.6,
  },
  {
    id: "64078ac6197e7ef81e3366a3",
    title: "Lenovo IdeaPad Slim 1 512GB SSD",
    brand: "Lenovo",
    description:
      "You can buy Lenovo IdeaPad Slim 1 82VG009MIN Laptop (AMD Ryzen 3 7320U/ 8GB/ 512GB SSD/ Win11 Home) online on Amazon lowest price. Lenovo IdeaPad Slim 1 82VG009MIN Laptop (AMD Ryzen 3 7320U/ 8GB/ 512GB SSD/ Win11 Home) was last updated on March 7, 2023",
    price: 1400,
    images: [
      "https://cdn1.smartprix.com/rx-i2NrXlXrJ-w420-h420/lenovo-ideapad-slim.webp",
      "https://cdn1.smartprix.com/rx-imazK08iB-w420-h420/lenovo-ideapad-slim.webp",
      "https://cdn1.smartprix.com/rx-imazK08iB-w420-h420/lenovo-ideapad-slim.webp",
      "https://cdn1.smartprix.com/rx-i5MlTfc95-w420-h420/lenovo-ideapad-slim.webp",
    ],
    thumbnail:
      "https://cdn1.smartprix.com/rx-ial6kx7ni-w420-h420/lenovo-ideapad-slim.webp",
    category: "Laptops",
    stock: 20,
    tags: ["office", "laptop", "windows", "lenovo"],
    rating: 4.3,
  },
  {
    id: "64078b67197e7ef81e3366a5",
    title: "HP Pavilion 15 Gaming Laptop 512GB SSD",
    brand: "HP",
    description:
      "HP Pavilion 15-ec2004AX Gaming Laptop (AMD Ryzen 5 5600H/ 8GB/ 512GB SSD/ Win10 Home/ 4GB Graph)",
    price: 1500,
    images: [
      "https://cdn1.smartprix.com/rx-iAVwiD0if-w420-h420/hp-pavilion-15-ec200.webp",
      "https://cdn1.smartprix.com/rx-iF83g5OxQ-w420-h420/hp-pavilion-15-ec200.webp",
      "https://cdn1.smartprix.com/rx-iibcQREdI-w420-h420/hp-pavilion-15-ec200.webp",
      "https://cdn1.smartprix.com/rx-ixw8plkUF-w420-h420/hp-pavilion-15-ec200.webp",
    ],
    thumbnail:
      "https://cdn1.smartprix.com/rx-ixw8plkUF-w420-h420/hp-pavilion-15-ec200.webp",
    category: "Laptops",
    stock: 14,
    tags: ["gaming", "laptop", "windows", "hp"],
    rating: 4.4,
  },

  {
    id: "64078be8197e7ef81e3366a7",
    title: "Acer Aspire 7 A715-51G Gaming Laptop 512GB SSD",
    brand: "Acer",
    description:
      "Acer Aspire 7 A715-51G Gaming Laptop (12th Gen Core i5/ 8GB/ 512GB SSD/ Win11/ 4GB Graph)",
    price: 1710,
    images: [
      "https://cdn1.smartprix.com/rx-iHzVhxcsY-w420-h420/acer-aspire-7-a715-5.webp",
      "https://cdn1.smartprix.com/rx-i329kEMkL-w420-h420/acer-aspire-7-a715-5.webp",
      "https://cdn1.smartprix.com/rx-iV5iyC00z-w420-h420/acer-aspire-7-a715-5.webp",
      "https://cdn1.smartprix.com/rx-iSC99mITO-w420-h420/acer-aspire-7-a715-5.webp",
    ],
    thumbnail:
      "https://cdn1.smartprix.com/rx-ie0dZGrf5-w420-h420/acer-aspire-7-a715-5.webp",
    category: "Laptops",
    stock: 22,
    tags: ["gaming", "laptop", "windows", "acer"],
    rating: 4.6,
  },
  {
    id: "64078d1e197e7ef81e3366a9",
    title: "MSI Gaming Katana GF76 512GB SSD",
    brand: "MSI",
    description:
      "MSI Gaming Katana GF76 11SC-847IN Laptop (11th Gen Core i5/ 8GB/ 512GB SSD/ Win11 Home/ 4GB Graph)",
    price: 1620,
    images: [
      "https://cdn1.smartprix.com/rx-iIL0bISnc-w420-h420/msi-gaming-katana-gf.webp",
      "https://cdn1.smartprix.com/rx-i7VsY3Q8m-w420-h420/msi-gaming-katana-gf.webp",
      "https://cdn1.smartprix.com/rx-iVqbv51AS-w420-h420/msi-thin-gf63-11sc-8.webp",
    ],
    thumbnail:
      "https://cdn1.smartprix.com/rx-iIL0bISnc-w420-h420/msi-gaming-katana-gf.webp",
    category: "Laptops",
    stock: 22,
    tags: ["gaming", "laptop", "windows", "msi"],
    rating: 4.5,
  },
  {
    id: "6407908f197e7ef81e3366ad",
    title: "Apple Watch Series 7 Aluminum",
    brand: "Apple",
    description:
      "ECG certified (region dependent SW application; HW available on all models)",
    price: 799,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-series-7-aluminum-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-series-7-aluminum-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-8se-2022-2.jpg",
    ],
    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-aluminum.jpg",
    category: "Accessories",
    stock: 16,
    tags: ["digital", "watch", "apple"],
    rating: 4.7,
  },
  {
    id: "6407912d197e7ef81e3366b1",
    title: "Apple Watch Edition 38mm",
    brand: "Apple",
    description:
      "ECG Certified (region dependent SW application; HW available on all models)",
    price: 800,
    images: [
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-edition-38mm.jpg",
      "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-aluminum.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-8se-2022-2.jpg",
    ],
    thumbnail:
      "https://360view.hum3d.com/zoom/Apple/Apple_Watch_38mm_Rose_Gold_Case_with_Gray_Modern_Buckle_1000_0001.jpg",
    category: "Accessories",
    stock: 16,
    tags: ["digital", "watch", "apple"],
    rating: 4.8,
  },
  {
    id: "64079206197e7ef81e3366b3",
    title: "Beats Studio3 Wireless",
    brand: "Beats",
    description:
      "Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time",
    price: 232,
    images: [
      "https://m.media-amazon.com/images/I/61zCi3GMH4L._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/81es0mtpr3L._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/81tSaYQ32rL._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/81tSaYQ32rL._AC_SX522_.jpg",
    ],
    thumbnail: "https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_SX522_.jpg",
    category: "Accessories",
    stock: 18,
    tags: ["earphone", "headphone", "beats"],
    rating: 4.5,
  },
  {
    id: "64079287197e7ef81e3366b5",
    title: "Beats Studio Buds Wireless",
    brand: "Beats",
    description:
      "True Wireless Noise Cancelling Earbuds - Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - Black",
    price: 119,
    images: [
      "https://m.media-amazon.com/images/I/618wL2LMGMS._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/61nwkA++RFS._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/61zJiWdOzFS._AC_SX522_.jpg",
    ],
    thumbnail: "https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_SX522_.jpg",
    category: "Accessories",
    stock: 26,
    tags: ["earphone", "headphone", "beats"],
    rating: 4.3,
  },
  {
    id: "6407934e197e7ef81e3366b7",
    title: "Apple AirPods Wireless Earbuds",
    brand: "Apple",
    description:
      "Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone",
    price: 119,
    images: [
      "https://m.media-amazon.com/images/I/61Zh467pKjL._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/31HCezMp0AL._AC_SR38,50_.jpg",
      "https://m.media-amazon.com/images/I/71tysOlpaYL._AC_SX522_.jpg",
    ],
    thumbnail: "https://m.media-amazon.com/images/I/61ziCBwTtEL._AC_SX522_.jpg",
    category: "Accessories",
    stock: 30,
    tags: ["earphone", "headphone", "apple", "earbuds"],
    rating: 4.8,
  },
];

const categories = [
  {
    id: "1",
    categoryName: "smartphones",
  },
  {
    id: "2",
    categoryName: "laptops",
  },
  {
    id: "3",
    categoryName: "accessories",
  },
];
export { products, categories };

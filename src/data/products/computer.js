const computers = [
  { 
    id: 201, 
    categoryId: 2, 
    name: 'Apple iMac 24-inch M3', 
    price: 2500, 
    images: [ 
      'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/01/20/12/51/imac-605421_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/01/21/14/14/macbook-606763_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/02/10/18/16/apple-3144237_1280.jpg'
    ],
    description: [
      'Apple M3 ჩიპი 8-core CPU და 8-core GPU-ით',
      '24-inch 4.5K Retina დისპლეი P3 ფერადი სპექტრით',
      '8GB უნიფიცირებული მეხსიერება და 256GB SSD',
      'Touch ID, Magic Keyboard და Magic Mouse-ი'
    ]
  },
  { 
    id: 202, 
    categoryId: 2, 
    name: 'Acer Aspire Vero', 
    price: 2800, 
    images: [
      'https://gstore.ge/wp-content/uploads/2025/02/ACER-2-01.png',
      'https://gstore.ge/wp-content/uploads/2025/02/ACER-01.png',
      'https://gstore.ge/wp-content/uploads/2025/02/ACER-3-01.png',
    ],
    description: [
      'Intel Core i7-13700 პროცესორი 16-core წარმადობით',
      '16GB DDR5 RAM და 512GB NVMe SSD',
      'NVIDIA GeForce RTX 4060 ვიდეო ბარათი',
      'Wi-Fi 6E და Thunderbolt 4 პორტები'
    ]
  },
  { 
    id: 203, 
    categoryId: 2, 
    name: 'Apple MacBook Pro 14″', 
    price: 2200, 
    images: [
      'https://gstore.ge/wp-content/uploads/2024/11/MACBOOK-PRO-M2-PRO-1-01.png',
      'https://gstore.ge/wp-content/uploads/2024/11/MACBOOK-PRO-M2-PRO-01.png',
    ],
    description: [
      'Intel Xeon W-1350 პროცესორი პროფესიონალური სამუშაოებისთვის',
      '32GB ECC DDR4 მეხსიერება მაღალი სანდოობისთვის',
      '1TB NVMe SSD და NVIDIA RTX A2000',
      'ISV სერტიფიკაცია CAD/3D აპლიკაციებისთვის'
    ]
  },
  { 
    id: 204, 
    categoryId: 2, 
    name: 'Asus Vivobook 15 OLED', 
    price: 4500, 
    images: [
      'https://gstore.ge/wp-content/uploads/2024/02/vivobook-16-01.png',
      'https://gstore.ge/wp-content/uploads/2024/02/vivobook-16-1-01.png',
      'https://gstore.ge/product/asus-vivobook-15-oled-x1505va-l1594/',
      'https://gstore.ge/wp-content/uploads/2024/02/vivobook-16-3-01.png'
    ],
    description: [
      'AMD Ryzen 7 7800X3D გეიმინგ პროცესორი',
      'NVIDIA GeForce RTX 4070 Super ვიდეო ბარათი',
      '32GB DDR5-6000 RAM და 1TB Gen4 NVMe SSD',
      'კასტომ RGB გაცივება და ტემპერატურული მონიტორინგი'
    ]
  },
  { 
    id: 205, 
    categoryId: 2, 
    name: 'Asus Vivobook S16', 
    price: 2000, 
    images: [
      'https://gstore.ge/wp-content/uploads/2024/10/asus-vivobook-1-01.png',
      'https://gstore.ge/wp-content/uploads/2024/10/asus-vivobook-01.png',
      'https://gstore.ge/wp-content/uploads/2024/10/asus-vivobook-2-01.png',
      'https://gstore.ge/wp-content/uploads/2024/10/asus-vivobook-3-01.png'
    ],
    description: [
      '28-inch PixelSense Flow სენსორული დისპლეი',
      'Intel Core i7-11370H და NVIDIA GeForce RTX 3060',
      '32GB RAM და 1TB SSD მაღალსიჩქარიანი საცავი',
      'Surface Pen და Surface Dial-ით კრეატიული სამუშაო'
    ]
  },
  { 
    id: 206, 
    categoryId: 2, 
    name: 'Dell Inspiron 14″', 
    price: 3800, 
    images: [
      'https://gstore.ge/wp-content/uploads/2025/06/dell-1-01.png',
      'https://gstore.ge/wp-content/uploads/2025/06/dell-01.png',
      'https://gstore.ge/wp-content/uploads/2025/06/dell-2-01.png',
    ],
    description: [
      'Intel Core i9-12900F 16-core პროცესორი',
      'NVIDIA GeForce RTX 4080 Super ვიდეო ბარათი',
      '32GB DDR5 RAM და 1TB NVMe SSD',
      'Alienware Command Center და RGB განათების კასტომიზაცია'
    ]
  },
  { 
    id: 207, 
    categoryId: 2, 
    name: 'HP B69B1ET EliteBook X G1i', 
    price: 5200, 
    images: [
      'https://gstore.ge/wp-content/uploads/2025/07/128GB-min-2-14.png',
      'https://gstore.ge/wp-content/uploads/2025/07/noutbuqi-hp-b69b2et-elitebook-x-g1i-14-ultra-7-258v-32gb-1tb-ssd-integrated-w11p-atmospheric-blue-3.jpg',
      'https://gstore.ge/wp-content/uploads/2025/07/noutbuqi-hp-b69b2et-elitebook-x-g1i-14-ultra-7-258v-32gb-1tb-ssd-integrated-w11p-atmospheric-blue-4.jpg',
    ],
    description: [
      'Intel Core i9-13900K ორ-ჩიპ კონფიგურაცია',
      'NVIDIA GeForce RTX 4090 ფლაგმანი GPU',
      '64GB DDR5 RAM და 2TB NVMe SSD',
      'კასტომ წყლის გაცივება და ლაიფტაიმ სერვისი'
    ]
  },
  { 
    id: 208, 
    categoryId: 2, 
    name: 'Lenovo Thinkbook 16 ', 
    price: 3500, 
    images: [
      'https://gstore.ge/wp-content/uploads/2025/06/tyytt-01.png',
      'https://gstore.ge/wp-content/uploads/2025/06/rtetrtetrer-01.png',
      'https://gstore.ge/wp-content/uploads/2025/06/tyrteyr-01.png',
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop'
    ],
    description: [
      'Apple M2 Ultra ჩიპი 24-core CPU და 76-core GPU',
      '192GB უნიფიცირებული მეხსიერება',
      '8TB SSD საცავი და ProRes ვიდეო ენკოდერი',
      'Thunderbolt 4 და 10Gb Ethernet პორტები'
    ]
  },
  { 
    id: 209, 
    categoryId: 2, 
    name: 'Lenovo Yoga 7 16″', 
    price: 4000, 
    images: [
      'https://gstore.ge/wp-content/uploads/2024/08/LENOVO-YOGA-13-01.png',
      'https://gstore.ge/wp-content/uploads/2024/08/LENOVO-YOGA-1-01.png',
      'https://gstore.ge/wp-content/uploads/2024/08/LENOVO-YOGA-11-01.png',
    ],
    description: [
      'Intel Xeon W-2245 პროცესორი კრეატიული სამუშაოებისთვის',
      'NVIDIA RTX A5000 პროფესიონალური ვიდეო ბარათი',
      '128GB ECC DDR4 და 2TB NVMe SSD RAID კონფიგურაციაში',
      'ISV სერტიფიკაცია Adobe, Autodesk და Cinema 4D-სთვის'
    ]
  },
  { 
    id: 210, 
    categoryId: 2, 
    name: 'Macbook Air 13', 
    price: 2700, 
    images: [
      'https://gstore.ge/wp-content/uploads/2024/04/mac-air-m1-01.png',
      'https://gstore.ge/wp-content/uploads/2024/04/mac-air-m1-1-01.png',
      'https://gstore.ge/wp-content/uploads/2024/04/mac-air-m1-2-01.png',
    ],
    description: [
      'Intel Core i5-13600K მოდულარული დიზაინით',
      '16GB DDR5 და 512GB NVMe SSD',
      'სრულიად განახლებადი და შეკეთებადი კომპონენტები',
      'ღია წყაროს firmware და იდეალური DIY ენთუზიასტებისთვის'
    ]
  },
  { 
    id: 211, 
    categoryId: 2, 
    name: 'Microsoft Surface Laptop 7', 
    price: 4800, 
    images: [
      'https://gstore.ge/wp-content/uploads/2025/04/surface-7-01.png',
      'https://gstore.ge/wp-content/uploads/2025/04/surface-9-01.png',
      'https://gstore.ge/wp-content/uploads/2025/04/surface-8-01.png',
    ],
    description: [
      'AMD Ryzen 9 7950X3D გეიმინგ ოპტიმიზებული პროცესორი',
      'NVIDIA GeForce RTX 4080 Super ვიდეო ბარათი',
      '32GB DDR5-5600 RAM და 2TB Gen4 NVMe SSD',
      'ხელით შეღებილი კასტომ case და უსაზღვრო გარანტია'
    ]
  }
];

export default computers;
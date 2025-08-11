const products = [
  { 
    id: 201, 
    categoryId: 2, 
    name: 'HP Pavilion Desktop TP01', 
    price: 2500, 
    imageUrl: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=300&h=300&fit=crop',
    description: [
      'Intel Core i5 პროცესორი და 8GB DDR4 ოპერატიული მეხსიერება',
      '512GB SSD საცავი სწრაფი ჩატვირთვისთვის',
      'Windows 11 Home ოპერაციული სისტემა',
      'კომპაქტური დიზაინი ოფისისა და სახლისთვის'
    ]
  },
  { 
    id: 202, 
    categoryId: 2, 
    name: 'Dell Inspiron 3020', 
    price: 2800, 
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    description: [
      'Intel Core i5-13400 პროცესორი მაღალი წარმადობისთვის',
      '8GB RAM და 256GB SSD + 1TB HDD კომბინაცია',
      'DVD-RW დრაივი და მრავალი USB პორტი',
      'ენერგოეფექტური და ეკოლოგიურად სუფთა დიზაინი'
    ]
  },
  { 
    id: 203, 
    categoryId: 2, 
    name: 'Lenovo IdeaCentre 5', 
    price: 2200, 
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop',
    description: [
      'AMD Ryzen 5 პროცესორი და 8GB DDR4 მეხსიერება',
      '512GB SSD სწრაფი ჩატვირთვისთვის',
      'Wi-Fi 6 და Bluetooth 5.1 უსადენო კავშირი',
      'ოპტიმიზებული სამუშაო და სასწავლო დავალებებისთვის'
    ]
  },
  { 
    id: 204, 
    categoryId: 2, 
    name: 'Asus ROG Strix GT15', 
    price: 4500, 
    imageUrl: 'https://images.unsplash.com/photo-1591238371164-c42ef2b3b5d8?w=300&h=300&fit=crop',
    description: [
      'Intel Core i7 პროცესორი და NVIDIA GeForce RTX 3060 ვიდეო ბარათი',
      '16GB DDR4 RAM და 1TB SSD საცავი',
      'RGB განათება და შესანიშნავი ვენტილაცია',
      'სპეციალურად შექმნილი გეიმინგისა და კრეატიულობისთვის'
    ]
  },
  { 
    id: 205, 
    categoryId: 2, 
    name: 'Acer Aspire TC', 
    price: 2000, 
    imageUrl: 'https://images.unsplash.com/photo-1595429035839-c99c298ffdde?w=300&h=300&fit=crop',
    description: [
      'Intel Core i3 პროცესორი და 4GB RAM ეკონომიური ვარიანტისთვის',
      '1TB HDD საცავი დიდი ფაილებისთვის',
      'ინტეგრირებული Intel UHD Graphics',
      'იდეალური ოფისური სამუშაოების და ინტერნეტისთვის'
    ]
  },
  { 
    id: 206, 
    categoryId: 2, 
    name: 'MSI Codex R', 
    price: 3800, 
    imageUrl: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=300&fit=crop',
    description: [
      'Intel Core i5-12400F პროცესორი და GeForce GTX 1660 Super',
      '16GB DDR4 RAM და 512GB NVMe SSD',
      'მისტიური RGB განათება და გამარტივებული კაბინეტი',
      'საშუალო დონის გეიმინგისა და სტრიმინგისთვის'
    ]
  },
  { 
    id: 207, 
    categoryId: 2, 
    name: 'HP Omen 30L', 
    price: 5200, 
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop',
    description: [
      'Intel Core i7-11700K პროცესორი და RTX 3070 ვიდეო ბარათი',
      '16GB DDR4 RAM და 1TB NVMe SSD + 1TB HDD',
      'მოწინავე ვენტილაცია და კასტომიზებადი RGB განათება',
      'პროფესიონალური გეიმინგისა და VR-ისთვის'
    ]
  },
  { 
    id: 208, 
    categoryId: 2, 
    name: 'Dell XPS Desktop', 
    price: 3500, 
    imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop',
    description: [
      'Intel Core i7-12700 პროცესორი და 16GB DDR4 მეხსიერება',
      '512GB NVMe SSD სწრაფი წარმადობისთვის',
      'პრემიუმ დიზაინი და უმაღლესი ხარისხის მასალები',
      'იდეალური პროფესიონალური სამუშაოებისთვის'
    ]
  },
  { 
    id: 209, 
    categoryId: 2, 
    name: 'Lenovo Legion Tower 5', 
    price: 4000, 
    imageUrl: 'https://images.unsplash.com/photo-1624571409659-2c1e0bfa9f84?w=300&h=300&fit=crop',
    description: [
      'AMD Ryzen 7 5700G პროცესორი და GeForce RTX 3060',
      '16GB DDR4 RAM და 1TB SSD საცავი',
      'Legion Coldfront კული სისტემა ოპტიმალური ტემპერატურისთვის',
      'გეიმინგისა და კონტენტ კრეაციისთვის შექმნილი'
    ]
  },
  { 
    id: 210, 
    categoryId: 2, 
    name: 'Asus ExpertCenter D7', 
    price: 2700, 
    imageUrl: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop',
    description: [
      'Intel Core i5-10400 პროცესორი ბიზნეს კლასისთვის',
      '8GB DDR4 RAM და 256GB SSD + 1TB HDD',
      'უსაფრთხოების მოწინავე ფუნქციები და TPM 2.0',
      'ოფისისა და მცირე ბიზნესისთვის ოპტიმიზებული'
    ]
  },
  { 
    id: 211, 
    categoryId: 2, 
    name: 'Acer Predator Orion 3000', 
    price: 4800, 
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop',
    description: [
      'Intel Core i7-11700F პროცესორი და RTX 3060 Ti ვიდეო ბარათი',
      '16GB DDR4 RAM და 512GB SSD + 1TB HDD კომბინაცია',
      'PredatorSense სისტემა და განსაკუთრებული კუling',
      'მაღალი დონის გეიმინგისა და eSports-ისთვის'
    ]
  }
];

export default products;
const products = [
  { 
    id: 801, 
    categoryId: 8, 
    name: 'Razer Firefly V2 RGB', 
    price: 200, 
    imageUrl: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=300&fit=crop',
    description: [
      'RGB განათებული გეიმინგ მაუსის პადი',
      'მიკრო-ტექსტურირებული ზედაპირი ზუსტი თვალსაზრისებისთვის',
      'Razer Chroma RGB ინტეგრაცია',
      'ოპტიმიზებული ყველა სენსორის ტიპისთვის'
    ]
  },
  { 
    id: 802, 
    categoryId: 8, 
    name: 'Logitech G Powerplay', 
    price: 350, 
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop',
    description: [
      'უსადენო დატენვის ტექნოლოგია',
      'უსასრულო ენერგია თამაშის დროს',
      'ორ ზედაპირს შორის არჩევანი (კონტროლი/სპიდი)',
      'თავსებადი G903, G502 X PLUS და სხვა მოდელებთან'
    ]
  },
  { 
    id: 803, 
    categoryId: 8, 
    name: 'SteelSeries QcK Prism', 
    price: 180, 
    imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop',
    description: [
      'RGB განათებული კლასიკური QcK ზედაპირი',
      'მყარი და გამძლე კონსტრუქცია',
      'SteelSeries Engine თავსებადობა',
      'ზუსტი ტრეკინგი ყველა სენსორისთვის'
    ]
  },
  { 
    id: 804, 
    categoryId: 8, 
    name: 'HyperX Wrist Rest', 
    price: 80, 
    imageUrl: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop',
    description: [
      'მაღალი ხარისხის მეხსიერებისგან ქაფი',
      'ეგრონომიული მხარდაჭერა მუხლისთვის',
      'წყალგამძლე და მარტივი წმენდა',
      'დიდი ხანგრძლივობის გამოყენება'
    ]
  },
  { 
    id: 805, 
    categoryId: 8, 
    name: 'Corsair MM700 RGB', 
    price: 220, 
    imageUrl: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=300&h=300&fit=crop',
    description: [
      'გაფართოებული RGB მაუსის პადი',
      'მაღალი ხარისხის ქსოვილის ზედაპირი',
      'Corsair iCUE თავსებადობა',
      'USB-C კავშირი და გავლის პორტი'
    ]
  },
  { 
    id: 806, 
    categoryId: 8, 
    name: 'Razer Gigantus V2', 
    price: 150, 
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    description: [
      'დიდი ზომის ქსოვილის გეიმინგ პადი',
      'ზუსტი კონტროლი დაბალი DPI-სთვის',
      'წყალგამძლე და ანტისლაიდინგ ფუძე',
      'მოკლე დროში გამხმარი ზედაპირი'
    ]
  },
  { 
    id: 807, 
    categoryId: 8, 
    name: 'Logitech G440 Hard Pad', 
    price: 100, 
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop',
    description: [
      'მყარი პოლიმერული ზედაპირი',
      'ექსტრემალური სწრაფე კურსორის მოძრაობა',
      'დაბალი ღია დაღაბადი',
      'იდეალური მაღალი DPI გამოყენების მაუსებისთვის'
    ]
  },
  { 
    id: 808, 
    categoryId: 8, 
    name: 'SteelSeries Apex Pro Mouse Bungee', 
    price: 120, 
    imageUrl: 'https://images.unsplash.com/photo-1591238371164-c42ef2b3b5d8?w=300&h=300&fit=crop',
    description: [
      'მაუსის კაბელის მენეჯმენტი',
      'ასაქნევი და მოძრავი სისტემა',
      'ღია ღია ზედაპირს წინააღმდეგობა',
      'USB Hub დამატებითი კავშირისთვის'
    ]
  },
  { 
    id: 809, 
    categoryId: 8, 
    name: 'HyperX Fury Ultra', 
    price: 200, 
    imageUrl: 'https://images.unsplash.com/photo-1624571409659-2c1e0bfa9f84?w=300&h=300&fit=crop',
    description: [
      'RGB განათებული პრემიუმ მაუსის პადი',
      '360-გრადუსი RGB განათება',
      'მაღალი წარმადობის ქსოვილის ზედაპირი',
      'HyperX NGENUITY სოფტუეარ მხარდაჭერა'
    ]
  },
  { 
    id: 810, 
    categoryId: 8, 
    name: 'Razer Mouse Dock Chroma', 
    price: 250, 
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop',
    description: [
      'უსადენო დატენვის სადგამი RGB განათებით',
      'Qi უსადენო დატენვის სტანდარტი',
      'Razer Chroma RGB ინტეგრაცია',
      'ელეგანტური მაუსის შენახვისა და განათების ადგილი'
    ]
  }
];

export default products;
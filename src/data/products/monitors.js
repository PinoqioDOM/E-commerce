const monitors = [
  {
    id: 301,
    categoryId: 3,
    name: 'Dell UltraSharp 27',
    price: 1500,
    images: [
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი QHD (2560x1440) რეზოლუცია',
      'ულტრა-თხელი ჩარჩო',
      'USB-C პორტი, რომელიც უზრუნველყოფს კვებასაც და ვიდეოსაც',
      'ერგონომიული სადგამი'
    ]
  },
  {
    id: 302,
    categoryId: 3,
    name: 'LG 24MK430H',
    price: 600,
    images: [
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop'
    ],
    description: [
      '24-ინჩიანი Full HD (192ოx1080) რეზოლუცია',
      'IPS პანელი',
      'AMD FreeSync ტექნოლოგია',
      'თვალის დაცვის ფუნქცია'
    ]
  },
  {
    id: 303,
    categoryId: 3,
    name: 'Samsung Odyssey G5',
    price: 1200,
    images: [
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop'
    ],
    description: [
      '32-ინჩიანი curved (მრუდი) WQHD (2560x1440) ეკრანი',
      '144Hz განახლების სიხშირე',
      '1ms რეაგირების დრო',
      'AMD FreeSync Premium'
    ]
  },
  {
    id: 304,
    categoryId: 3,
    name: 'Asus TUF Gaming VG27AQ',
    price: 1400,
    images: [
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი WQHD (2560x1440) რეზოლუცია',
      '165Hz განახლების სიხშირე',
      'ASUS Extreme Low Motion Blur Sync',
      'Adaptive-Sync ტექნოლოგია'
    ]
  },
  {
    id: 305,
    categoryId: 3,
    name: 'Acer Nitro XV272U',
    price: 1100,
    images: [
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი WQHD (2560x1440) რეზოლუცია',
      '144Hz განახლების სიხშირე',
      'AMD FreeSync',
      'HDR 400 მხარდაჭერა'
    ]
  },
  {
    id: 306,
    categoryId: 3,
    name: 'HP M27f',
    price: 800,
    images: [
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი Full HD (1920x1080) რეზოლუცია',
      'IPS პანელი',
      'ულტრა-თხელი დიზაინი',
      'HP Eye Ease ფუნქცია'
    ]
  },
  {
    id: 307,
    categoryId: 3,
    name: 'BenQ PD2700U',
    price: 1800,
    images: [
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი 4K UHD (3840x2160) რეზოლუცია',
      'IPS პანელი',
      'Rec.709 ფერის სივრცის 100%',
      'CAD/CAM და ანიმაციის რეჟიმები'
    ]
  },
  {
    id: 308,
    categoryId: 3,
    name: 'LG UltraGear 32GN600',
    price: 1600,
    images: [
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop'
    ],
    description: [
      '32-ინჩიანი QHD (2560x1440) რეზოლუცია',
      '165Hz განახლების სიხშირე',
      '1ms რეაგირების დრო',
      'HDR10 მხარდაჭერა'
    ]
  },
  {
    id: 309,
    categoryId: 3,
    name: 'Dell S2721QS',
    price: 1300,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი 4K UHD (3840x2160) რეზოლუცია',
      'IPS პანელი',
      'AMD FreeSync',
      'სამმხრივი ულტრა-თხელი ჩარჩო'
    ]
  },
  {
    id: 310,
    categoryId: 3,
    name: 'Samsung Smart Monitor M5',
    price: 1000,
    images: [
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი Full HD (1920x1080) რეზოლუცია',
      'სმარტ ტელევიზორის ფუნქციები',
      'Tizen OS და აპლიკაციების მხარდაჭერა',
      'USB-C პორტი'
    ]
  },
  {
    id: 311,
    categoryId: 3,
    name: 'Asus ProArt PA278CV',
    price: 2000,
    images: [
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop'
    ],
    description: [
      '27-ინჩიანი WQHD (2560x1440) რეზოლუცია',
      'პროფესიონალური ფერების სიზუსტე',
      'USB-C პორტი',
      'ერგონომიული სადგამი'
    ]
  },
  {
    id: 312,
    categoryId: 3,
    name: 'AOC CQ32G2S',
    price: 1400,
    images: [
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop'
    ],
    description: [
      '32-ინჩიანი Curved QHD (2560x1440) რეზოლუცია',
      '165Hz განახლების სიხშირე',
      'VA პანელი',
      'AMD FreeSync Premium'
    ]
  }
];

export default monitors;
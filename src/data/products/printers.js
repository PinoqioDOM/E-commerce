const products = [
  {
    id: 701,
    categoryId: 7,
    name: 'HP DeskJet 2720',
    price: 200,
    images: [
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop'
    ],
    description: [
      'მრავალფუნქციური პრინტერი: ბეჭდვა, სკანირება, ასლი',
      'უკაბელო კავშირი Wi-Fi-ის საშუალებით',
      'მარტივი დაყენება HP Smart აპლიკაციით',
      'ეკონომიური ყოველდღიური მოხმარებისთვის'
    ]
  },
  {
    id: 702,
    categoryId: 7,
    name: 'Canon PIXMA TS3420',
    price: 250,
    images: [
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop'
    ],
    description: [
      'კომპაქტური და ელეგანტური დიზაინი',
      'უკაბელო კავშირი',
      'ფერადი ბეჭდვა',
      'მარტივი გამოყენება'
    ]
  },
  {
    id: 703,
    categoryId: 7,
    name: 'Epson EcoTank ET-2800',
    price: 800,
    images: [
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop'
    ],
    description: [
      'ჭავლური პრინტერი დიდი მოცულობის საღებავის რეზერვუარებით',
      'ეკონომიური და მარტივი საღებავის შევსება',
      'მაღალი ხარისხის ბეჭდვა',
      'Wi-Fi კავშირი'
    ]
  },
  {
    id: 704,
    categoryId: 7,
    name: 'Brother HL-L2350DW',
    price: 400,
    images: [
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop'
    ],
    description: [
      'მონოქრომული ლაზერული პრინტერი',
      'სწრაფი ბეჭდვის სიჩქარე',
      'ავტომატური ორმხრივი ბეჭდვა',
      'უკაბელო კავშირი'
    ]
  },
  {
    id: 705,
    categoryId: 7,
    name: 'HP LaserJet Pro MFP M227fdw',
    price: 700,
    images: [
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop'
    ],
    description: [
      'ლაზერული მრავალფუნქციური პრინტერი',
      'სწრაფი ბეჭდვა, სკანირება და ასლი',
      'Wi-Fi და Ethernet კავშირი',
      'ავტომატური დოკუმენტების მიმწოდებელი'
    ]
  },
  {
    id: 706,
    categoryId: 7,
    name: 'Canon imageCLASS MF445dw',
    price: 900,
    images: [
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop'
    ],
    description: [
      'ლაზერული მრავალფუნქციური პრინტერი',
      'სწრაფი ბეჭდვის სიჩქარე',
      'Wi-Fi და Ethernet კავშირი',
      'სენსორული ეკრანი'
    ]
  },
  {
    id: 707,
    categoryId: 7,
    name: 'Epson WorkForce Pro WF-4830',
    price: 600,
    images: [
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop'
    ],
    description: [
      'ჭავლური მრავალფუნქციური პრინტერი',
      'მაღალი ხარისხის ფერადი ბეჭდვა',
      'სწრაფი ბეჭდვის სიჩქარე',
      'ავტომატური ორმხრივი ბეჭდვა'
    ]
  },
  {
    id: 708,
    categoryId: 7,
    name: 'Brother MFC-J4335DW',
    price: 500,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop'
    ],
    description: [
      'ჭავლური მრავალფუნქციური პრინტერი',
      'ეკონომიური Inkvestment Tank სისტემა',
      'Wi-Fi და მობილური ბეჭდვა',
      'ავტომატური ორმხრივი ბეჭდვა'
    ]
  },
  {
    id: 709,
    categoryId: 7,
    name: 'HP OfficeJet Pro 8025',
    price: 550,
    images: [
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop'
    ],
    description: [
      'მრავალფუნქციური ჭავლური პრინტერი',
      'სწრაფი ბეჭდვა',
      'Wi-Fi და Ethernet კავშირი',
      'მომსახურება HP Instant Ink'
    ]
  },
  {
    id: 710,
    categoryId: 7,
    name: 'Epson Expression Premium XP-7100',
    price: 450,
    images: [
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop'
    ],
    description: [
      'ჭავლური მრავალფუნქციური პრინტერი',
      'მაღალი ხარისხის ფოტო ბეჭდვა',
      'სენსორული ეკრანი',
      'უკაბელო კავშირი'
    ]
  }
];

export default products;
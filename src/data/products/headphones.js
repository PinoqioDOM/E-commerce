const products = [
  {
    id: 601,
    categoryId: 6,
    name: 'Sony WH-1000XM5',
    price: 1200,
    images: [
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop'
    ],
    description: [
      'მრეწველობის წამყვანი ხმაურის ჩახშობა',
      'გამორჩეული ხმის ხარისხი და ბრწყინვალე ზარები',
      '30 საათამდე ბატარეის ხანგრძლივობა',
      'მრავალპუნქტიანი კავშირი და კომფორტული დიზაინი'
    ]
  },
  {
    id: 602,
    categoryId: 6,
    name: 'Bose QuietComfort 45',
    price: 1000,
    images: [
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop'
    ],
    description: [
      'ხმაურის ჩახშობის Acoustic Noise Cancelling ტექნოლოგია',
      'Quiet და Aware რეჟიმები გარემოსთან ადაპტაციისთვის',
      '22 საათამდე ბატარეის ხანგრძლივობა',
      'ერგონომიული და კომფორტული დიზაინი'
    ]
  },
  {
    id: 603,
    categoryId: 6,
    name: 'JBL Live 660NC',
    price: 500,
    images: [
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop'
    ],
    description: [
      'ადაპტირებადი ხმაურის ჩახშობა (Adaptive Noise Cancelling)',
      'ძლიერი 40მმ დრაივერები JBL Signature Sound-ით',
      '50 საათამდე ბატარეის ხანგრძლივობა',
      'TalkThru და Ambient Aware ტექნოლოგიები'
    ]
  },
  {
    id: 604,
    categoryId: 6,
    name: 'Razer Barracuda X',
    price: 400,
    images: [
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop'
    ],
    description: [
      'მრავალფუნქციური უკაბელო გეიმინგ ყურსასმენი',
      'Razer TriForce 40მმ დრაივერები',
      '50 საათამდე ბატარეის ხანგრძლივობა',
      'მოხსნადი HyperClear კარდიოიდული მიკროფონი'
    ]
  },
  {
    id: 605,
    categoryId: 6,
    name: 'Sony WF-1000XM4',
    price: 800,
    images: [
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop'
    ],
    description: [
      'წამყვანი ციფრული ხმაურის ჩახშობა',
      'ახალი Integrated Processor V1',
      'წყალგამძლეობა IPX4 რეიტინგით',
      'ბატარეის 8 საათი და კიდევ 16 საათი ქეისიდან'
    ]
  },
  {
    id: 606,
    categoryId: 6,
    name: 'Apple AirPods Pro 2',
    price: 900,
    images: [
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop'
    ],
    description: [
      '2x უფრო აქტიური ხმაურის ჩახშობა',
      'ადაპტირებადი აუდიო და სივრცითი აუდიო (Spatial Audio)',
      'H2 ჩიპი',
      'მორგებადი სილიკონის ყურის დაბოლოებები'
    ]
  },
  {
    id: 607,
    categoryId: 6,
    name: 'Sennheiser HD 450BT',
    price: 600,
    images: [
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop'
    ],
    description: [
      'აქტიური ხმაურის ჩახშობა',
      '30 საათამდე ბატარეის ხანგრძლივობა',
      'Bluetooth 5.0 და aptX Low Latency',
      'კომპაქტური დასაკეცი დიზაინი'
    ]
  },
  {
    id: 608,
    categoryId: 6,
    name: 'HyperX Cloud Alpha',
    price: 350,
    images: [
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop'
    ],
    description: [
      'HyperX Dual Chamber დრაივერები',
      'ხმაურის ჩამხშობი, მოხსნადი მიკროფონი',
      'ხანგრძლივი ალუმინის ჩარჩო',
      'ხაზზე არსებული აუდიო კონტროლები'
    ]
  },
  {
    id: 609,
    categoryId: 6,
    name: 'Anker Soundcore Q30',
    price: 300,
    images: [
      'https://images.unsplash.com/photo-1616763355605-e11559815031?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355605-e11559815031?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355605-e11559815031?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1616763355605-e11559815031?w=300&h=300&fit=crop'
    ],
    description: [
      'ჰიბრიდული აქტიური ხმაურის ჩახშობა',
      'რამდენიმე რეჟიმი (ტრანსპორტი, გარე, შიდა)',
      '60 საათამდე ბატარეის ხანგრძლივობა',
      'Hi-Res აუდიო სერთიფიკატი'
    ]
  },
  {
    id: 610,
    categoryId: 6,
    name: 'SteelSeries Arctis 7',
    price: 450,
    images: [
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop'
    ],
    description: [
      'უკაბელო გეიმინგ ყურსასმენი',
      'Discord-ის მიერ სერტიფიცირებული ClearCast მიკროფონი',
      '30 საათამდე ბატარეის ხანგრძლივობა',
      'თამაშისა და ჩატის აუდიოს ცალკე რეგულირება'
    ]
  }
];

export default products;
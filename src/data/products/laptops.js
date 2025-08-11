const products = [
  {
    id: 101,
    categoryId: 1,
    name: 'Dell XPS 13',
    price: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1599878233379-3c72782b6b55?w=300&h=300&fit=crop',
    description: [
      'ულტრა-თხელი და მსუბუქი დიზაინი',
      'InfinityEdge ეკრანი თითქმის უჩარჩოო დიზაინით',
      'ძლიერი Intel Core პროცესორები',
      'ხანგრძლივი ბატარეის ხანგრძლივობა'
    ]
  },
  {
    id: 102,
    categoryId: 1,
    name: 'Lenovo IdeaPad Slim 3',
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1616763355549-d3e91d9e9c15?w=300&h=300&fit=crop',
    description: [
      'კომფორტული და ხელმისაწვდომი ლეპტოპი',
      'მაღალი რეზოლუციის Full HD ეკრანი',
      'სწრაფი SSD მეხსიერება',
      'გამძლე და მსუბუქი დიზაინი'
    ]
  },
  {
    id: 103,
    categoryId: 1,
    name: 'HP Victus 15',
    price: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
    description: [
      'გეიმინგ ლეპტოპი მძლავრი გრაფიკული ბარათით',
      '15.6-ინჩიანი Full HD ეკრანი',
      'ხარისხიანი გაგრილების სისტემა',
      'გამორჩეული გეიმინგ დიზაინი'
    ]
  },
  {
    id: 104,
    categoryId: 1,
    name: 'Apple MacBook Air M2',
    price: 5500,
    imageUrl: 'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
    description: [
      'უახლესი M2 ჩიპი',
      'ულტრა თხელი და მსუბუქი კორპუსი',
      'Liquid Retina ეკრანი',
      'ხანგრძლივი ბატარეის ხანგრძლივობა'
    ]
  },
  {
    id: 105,
    categoryId: 1,
    name: 'Asus ROG Strix G16',
    price: 4800,
    imageUrl: 'https://images.unsplash.com/photo-1600868884940-0255c4d0a13e?w=300&h=300&fit=crop',
    description: [
      'პროფესიონალური გეიმინგ ლეპტოპი',
      'მაღალი რეზოლუციის და განახლების სიხშირის ეკრანი',
      'ძლიერი Intel Core i9 პროცესორი',
      'RTX 40-სერიის გრაფიკული ბარათი'
    ]
  },
  {
    id: 106,
    categoryId: 1,
    name: 'Acer Aspire 5',
    price: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1596707328018-09ac212555eb?w=300&h=300&fit=crop',
    description: [
      'ყოველდღიური გამოყენებისთვის განკუთვნილი ლეპტოპი',
      'ეკრანი BlueLightShield ტექნოლოგიით',
      'ერგონომიული კორპუსი და კლავიატურა',
      'კომფორტული და ეფექტური'
    ]
  },
  {
    id: 107,
    categoryId: 1,
    name: 'Dell Inspiron 14',
    price: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1631580971032-4d1d6a6c1171?w=300&h=300&fit=crop',
    description: [
      'კომპაქტური და მოხერხებული ლეპტოპი',
      '14-ინჩიანი Full HD ეკრანი',
      'ძლიერი Intel Core პროცესორები',
      'მრავალფუნქციური პორტები'
    ]
  },
  {
    id: 108,
    categoryId: 1,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 6000,
    imageUrl: 'https://images.unsplash.com/photo-1632766520337-128a3915151b?w=300&h=300&fit=crop',
    description: [
      'პრემიუმ ბიზნეს ლეპტოპი',
      'ულტრა მსუბუქი ნახშირბადის ბოჭკოვანი კორპუსი',
      'ხანგრძლივი ბატარეის ხანგრძლივობა',
      'საიმედო უსაფრთხოების ფუნქციები'
    ]
  },
  {
    id: 109,
    categoryId: 1,
    name: 'HP Pavilion 15',
    price: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    description: [
      'მრავალფუნქციური ლეპტოპი ყოველდღიური გამოყენებისთვის',
      '15.6-ინჩიანი Full HD ეკრანი',
      'Bang & Olufsen აუდიო სისტემა',
      'ელეგანტური და თანამედროვე დიზაინი'
    ]
  },
  {
    id: 110,
    categoryId: 1,
    name: 'Asus ZenBook 14',
    price: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1629221191060-6a2c262a6a24?w=300&h=300&fit=crop',
    description: [
      'ულტრა პორტატული და მძლავრი ლეპტოპი',
      'OLED NanoEdge ეკრანი',
      'Intel Core i7 პროცესორი',
      'NumberPad ტექნოლოგია'
    ]
  },
  {
    id: 111,
    categoryId: 1,
    name: 'Microsoft Surface Laptop 5',
    price: 5200,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    description: [
      'პრემიუმ დიზაინი და სენსორული ეკრანი',
      'უმაღლესი ხარისხის აუდიო სისტემა',
      'Intel Core i7 პროცესორი',
      'ხანგრძლივი ბატარეის ხანგრძლივობა'
    ]
  },
  {
    id: 112,
    categoryId: 1,
    name: 'Acer Nitro 5',
    price: 3600,
    imageUrl: 'https://images.unsplash.com/photo-1620950346395-65492ac6b9a8?w=300&h=300&fit=crop',
    description: [
      'გეიმინგ ლეპტოპი',
      'ძლიერი Intel Core პროცესორები',
      'ხარისხიანი 15.6-ინჩიანი ეკრანი',
      'CoolBoost გაგრილების ტექნოლოგია'
    ]
  }
];

export default products;
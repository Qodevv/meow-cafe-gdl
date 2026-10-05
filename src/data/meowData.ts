export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  category: "bebidas" | "postres" | "salados" | "sanrio";
  price: number;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  isPopular?: boolean;
  isKawaiiSignature?: boolean;
  dietary?: string[];
  imageUrl: string;
}

export interface ResidentCat {
  id: string;
  name: string;
  age: string;
  gender: string;
  genderEn: string;
  breed: string;
  breedEn: string;
  personality: string;
  personalityEn: string;
  favoriteSnack: string;
  favoriteToy: string;
  cuddleLevel: number; // 1-5
  imageUrl: string;
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
  commentEn: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // --- BEBIDAS ---
  {
    id: "strawberry-cloud",
    name: "Strawberry Milk Cloud",
    nameEn: "Strawberry Milk Cloud",
    category: "bebidas",
    price: 88,
    isPopular: true,
    isKawaiiSignature: true,
    tagline: "Leche artesanal, confitura natural de fresa y espuma rosa esponjosa",
    taglineEn: "Artisanal milk, fresh strawberry compote, and fluffy pink cloud foam",
    description: "Nuestra bebida insignia en Guadalajara. Elaborada con fresas frescas de la región cocinadas a fuego lento, base de leche fría o vegetal y coronada con espuma de crema batida y orejitas de galleta.",
    descriptionEn: "Our signature GDL drink. Slow-simmered local fresh strawberries, your choice of milk, topped with rich pink foam and crisp wafer kitty ears.",
    dietary: ["Opción Vegana", "Sin Cafeína"],
    imageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "matcha-sakura",
    name: "Matcha Sakura Latte",
    nameEn: "Matcha Sakura Latte",
    category: "bebidas",
    price: 95,
    isPopular: true,
    tagline: "Matcha ceremonial de Uji con infusión de flor de cerezo y arte latte",
    taglineEn: "Ceremonial Uji matcha infused with cherry blossom and latte art",
    description: "Equilibrio zen de matcha japonés premium grado ceremonial, jarabe artesanal de sakura y leche espumada con una adorable patita de michi dibujada en canela.",
    descriptionEn: "Zen harmony of ceremonial Japanese matcha, artisanal sakura syrup, and velvety textured milk finished with cinnamon kitty paw latte art.",
    dietary: ["Antioxidantes", "Grado Ceremonial"],
    imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "meow-boba-taro",
    name: "Meow Boba Taro",
    nameEn: "Meow Taro Boba",
    category: "bebidas",
    price: 92,
    isKawaiiSignature: true,
    tagline: "Té de taro cremoso con perlas de tapioca caramelizadas en miel",
    taglineEn: "Creamy taro milk tea with brown sugar honey-glazed boba",
    description: "Color lila pastel irresistible con textura densa y sabor a vainilla suave y nuez, acompañado de boba recién cocida al dente.",
    descriptionEn: "Irresistible pastel lilac color, smooth vanilla and nutty notes, served over freshly boiled chewy boba pearls.",
    dietary: ["Tapioca Fresca"],
    imageUrl: "https://images.unsplash.com/photo-1558857563-b37cf5a1d7f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "lychee-soda",
    name: "Soda Italiana Lychee & Sakura",
    nameEn: "Lychee & Sakura Italian Soda",
    category: "bebidas",
    price: 78,
    tagline: "Burbujas refrescantes con fruta de lychee y perlas popping",
    taglineEn: "Crisp sparkling soda with real lychee fruit and popping boba",
    description: "Agua mineralizada de manantial, néctar de lychee dulce y flores comestibles de temporada con gomitas en forma de patitas de gatito.",
    descriptionEn: "Sparkling spring water, sweet lychee nectar, edible blossoms, and playful kitty paw fruit gummies.",
    dietary: ["Refrescante", "Sin Lácteos"],
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "cafe-latte-3d",
    name: "Café Latte Michi 3D",
    nameEn: "3D Cat Foam Latte",
    category: "bebidas",
    price: 90,
    isPopular: true,
    isKawaiiSignature: true,
    tagline: "Espresso de especialidad coronado con un gatito de espuma 3D",
    taglineEn: "Specialty espresso topped with hand-sculpted 3D milk foam kitty",
    description: "Granos de café de especialidad de Chiapas y Veracruz con tueste medio. El barista esculpe a mano un tierno gatito de espuma tridimensional que parece asomarse de tu taza.",
    descriptionEn: "Single-origin Chiapas & Veracruz medium roast espresso. Our barista hand-sculpts a 3D milk-foam kitty peeking over your ceramic cup.",
    dietary: ["Café de Especialidad"],
    imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80",
  },

  // --- POSTRES ---
  {
    id: "meow-pancakes",
    name: "Meow Pancake Tower",
    nameEn: "Fluffy Meow Pancake Tower",
    category: "postres",
    price: 135,
    isPopular: true,
    isKawaiiSignature: true,
    tagline: "Panqueques japoneses souflé ultra esponjosos con miel y frutos rojos",
    taglineEn: "Soufflé-style Japanese jiggly pancakes with maple syrup & fresh berries",
    description: "Elaborados al momento con claras batidas a punto de nieve. Tiemblan al mover el plato y vienen coronados con mantequilla con forma de patita de gato y fresas frescas.",
    descriptionEn: "Freshly made to order with whipped meringue. Perfectly jiggly and served with kitty paw-shaped butter, fresh strawberries, and pure maple syrup.",
    dietary: ["Hecho al Momento"],
    imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "japanese-cheesecake",
    name: "Cheesecake Japonés Michi",
    nameEn: "Japanese Cotton Cheesecake",
    category: "postres",
    price: 115,
    isPopular: true,
    tagline: "Pastel de queso nube sellado al fuego con la huella de Meow Café",
    taglineEn: "Cotton-soft cloud cheesecake branded with the Meow Café seal",
    description: "Textura ligera y aterciopelada que se derrite en la boca con un dulzor sutil. Decorado con compota casera de frutos del bosque.",
    descriptionEn: "Melt-in-your-mouth cloud-like texture with delicate sweetness, stamped with our hot iron kitty mark and served with berry compote.",
    dietary: ["Bajo en Azúcar"],
    imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "taiyaki-duo",
    name: "Taiyaki Michi Dúo (Nutella & Matcha)",
    nameEn: "Taiyaki Duo (Nutella & Matcha)",
    category: "postres",
    price: 110,
    tagline: "Dos waffles japoneses calientes en forma de pez con relleno cremoso",
    taglineEn: "Two warm Japanese fish-shaped waffles filled with rich creams",
    description: "Masa doradita y crujiente por fuera y esponjosa por dentro. Uno relleno de nutella avellanada y el otro de suave crema diplomática de té verde matcha.",
    descriptionEn: "Crisp golden exterior with tender pastry interior. One stuffed with creamy Nutella and the other with ceremonial matcha diplomat cream.",
    dietary: ["Crujiente al Horno"],
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "sanrio-macarons",
    name: "Set Macarons Kawaii (4 piezas)",
    nameEn: "Kawaii Macaron Gift Box (4 pcs)",
    category: "postres",
    price: 145,
    isKawaiiSignature: true,
    tagline: "Macarons franceses artesanales pintados a mano con caritas Sanrio",
    taglineEn: "Hand-painted French macarons with beloved Sanrio character faces",
    description: "Sabores surtidos: Fresa y rosas, Chocolate belga, Pistache tostado y Vainilla de Papantla. Diseños detallados y pintura comestible.",
    descriptionEn: "Assorted gourmet flavors: Rose Strawberry, Belgian Chocolate, Roasted Pistachio, and Papantla Vanilla with delicate edible art.",
    dietary: ["Sin Gluten", "Repostería Fina"],
    imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&auto=format&fit=crop&q=80",
  },

  // --- SALADOS ---
  {
    id: "ramen-meow-shoyu",
    name: "Ramen Meow Shoyu",
    nameEn: "Meow Shoyu Ramen",
    category: "salados",
    price: 165,
    isPopular: true,
    isKawaiiSignature: true,
    tagline: "Fideos ramen, caldo shoyu casero, chashu y narutomaki patita",
    taglineEn: "Fresh ramen noodles, house shoyu broth, tender chashu & paw narutomaki",
    description: "Caldo artesanal de fondo cocinado durante 8 horas, fideos ramen al dente, rebanadas de panceta de cerdo braseada chashu, huevo ajitsuke con yema líquida y nori crujiente.",
    descriptionEn: "8-hour slow-simmered rich shoyu broth, al dente noodles, braised tender pork belly chashu, seasoned molten-yolk ajitsuke egg, and cute paw-shaped fishcake.",
    dietary: ["Platillo Caliente"],
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "strawberry-sando",
    name: "Japanese Fruit Sando",
    nameEn: "Japanese Strawberry Sando",
    category: "salados",
    price: 98,
    isPopular: true,
    tagline: "Pan de leche shokupan, crema chantilly japonesa y fresas enteras",
    taglineEn: "Fluffy Japanese milk bread, light chantilly cream, and whole strawberries",
    description: "El clásico sandwich dulce de las cafeterías de Tokio. Pan shokupan de miga extra blanca y sedosa con corte geométrico perfecto para fotos.",
    descriptionEn: "The iconic Tokyo bakery classic. Cloud-like shokupan white bread, light airy whipped cream, cut symmetrically to reveal gorgeous strawberry hearts.",
    dietary: ["Clásico Japonés"],
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "katsu-sando",
    name: "Crispy Katsu Sando",
    nameEn: "Crispy Chicken Katsu Sando",
    category: "salados",
    price: 140,
    tagline: "Pechuga empanizada en panko dorado, col morada y salsa tonkatsu",
    taglineEn: "Golden panko crispy chicken, purple cabbage slaw, and savory tonkatsu sauce",
    description: "Jugosa pechuga de pollo marinada y frita a la perfección con crujiente panko japonés, servida entre dos rebanadas gruesas de pan shokupan tostado con mantequilla.",
    descriptionEn: "Juicy marinated chicken cutlet fried in extra-crunchy Japanese panko, served between thick butter-toasted shokupan with house tonkatsu glaze.",
    dietary: ["Favorito Salado"],
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "onigiri-trio",
    name: "Michi Onigiri Trío",
    nameEn: "Michi Onigiri Trio",
    category: "salados",
    price: 110,
    tagline: "Tres triángulos de arroz koshihikari con caritas de michi en nori",
    taglineEn: "Three seasoned koshihikari rice triangles styled with nori kitty faces",
    description: "Rellenos de: Salmón asado con teriyaki, atún spicy con mayonesa kewpie, y aguacate con ajonjolí negro tostado. Acompañados de salsa soya cítrica ponzu.",
    descriptionEn: "Filled with: Teriyaki glazed salmon, spicy tuna with kewpie mayo, and creamy avocado with roasted black sesame. Served with citrusy ponzu dip.",
    dietary: ["Sin Gluten"],
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop&q=80",
  },

  // --- SANRIO & TERNURINES ---
  {
    id: "blind-box-ternurin",
    name: "Blind Box Ternurines Original",
    nameEn: "Original Sylvanian Blind Box",
    category: "sanrio",
    price: 180,
    isPopular: true,
    isKawaiiSignature: true,
    tagline: "Cajita sorpresa coleccionable con figura aterciopelada y accesorio",
    taglineEn: "Collectible mystery box with flocked velvet critter and miniature accessory",
    description: "Figuras oficiales importadas de Sylvanian Families. ¡Abre tu cajita sorpresa en tu mesa mientras disfrutas de tu café y descubre qué ternurín te tocó!",
    descriptionEn: "Authentic imported Sylvanian Families collector blind bag. Open the surprise right at your cafe table and discover your new pocket companion!",
    dietary: ["Merch Oficial", "Coleccionable"],
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "vaso-boba-meow",
    name: "Vaso Coleccionable Meow Boba Cup",
    nameEn: "Collectible Meow Boba Tumbler",
    category: "sanrio",
    price: 160,
    tagline: "Vaso doble pared con purpurina líquida y orejitas de gato en la tapa",
    taglineEn: "Double-walled glitter tumbler with 3D cat ears lid and reusable straw",
    description: "Vaso libre de BPA con aislamiento térmico para bebidas frías. Incluye popote ancho ideal para perlas de boba y tapita a prueba de derrames.",
    descriptionEn: "BPA-free insulated tumbler with floating glitter effect, includes wide boba straw and spill-resistant lid with sculpted silicone ears.",
    dietary: ["Ecológico", "Reutilizable"],
    imageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=80",
  },
];

export const RESIDENT_CATS: ResidentCat[] = [
  {
    id: "mochi",
    name: "Mochi",
    age: "2 años",
    gender: "Macho",
    genderEn: "Male",
    breed: "Blanco Angora Mix",
    breedEn: "White Angora Mix",
    personality: "El rey de las siestas y los mimos lentos. Adora acomodarse en el regazo de quienes leen un libro mientras toman un latte.",
    personalityEn: "The undisputed nap king. Loves curling up in guests' laps while they read a book with a warm latte.",
    favoriteSnack: "Crema Churu de Salmón",
    favoriteToy: "Ratón de fieltro con catnip",
    cuddleLevel: 5,
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "sakura",
    name: "Sakura",
    age: "1 año",
    gender: "Hembra",
    genderEn: "Female",
    breed: "Calicó Japonesa",
    breedEn: "Japanese Calico",
    personality: "Alegre, sumamente curiosa y fotogénica. Le gusta posar para las cámaras y saludar a cada persona que entra por la puerta.",
    personalityEn: "Playful, wildly curious, and a total camera poser. She greets every customer at the door with friendly chirps.",
    favoriteSnack: "Pollo liofilizado crocante",
    favoriteToy: "Varita con plumas y cascabel",
    cuddleLevel: 4,
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "boba",
    name: "Boba",
    age: "3 años",
    gender: "Macho",
    genderEn: "Male",
    breed: "Bombay Negro Azabache",
    breedEn: "Sleek Jet Black Bombay",
    personality: "Noble, tranquilo y con ojos color ámbar brillante. Da suaves cabezaditas cariñosas cuando le rascan debajo de la barbilla.",
    personalityEn: "Gentle, wise, and features luminous amber eyes. Loves slow chin scratches and observing the cafe from high shelves.",
    favoriteSnack: "Atún blanco con caldito",
    favoriteToy: "Caja de cartón rascadora",
    cuddleLevel: 5,
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "matcha-cat",
    name: "Matcha",
    age: "8 meses",
    gender: "Hembra",
    genderEn: "Female",
    breed: "Tabby Plateada",
    breedEn: "Silver Tabby",
    personality: "La bebé consentida de la cafetería. Tiene un ronroneo potente que suena como motorcito cada vez que te sientas a su lado.",
    personalityEn: "The darling baby of the cafe. Has a turbocharged motor purr whenever someone sits beside her with a gentle pet.",
    favoriteSnack: "Bocaditos de pavo",
    favoriteToy: "Pelota de lana con sonido",
    cuddleLevel: 5,
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=80",
  },
];

export const REVIEWS: Review[] = [
  {
    name: "Valeria Gómez",
    rating: 5,
    date: "Hace 1 semana",
    comment: "¡El lugar más bonito de Guadalajara! Las bebidas son deliciosas, el Strawberry Milk Cloud es una joya y los gatitos están súper bien cuidados y felices. La atención es de 10.",
    commentEn: "The cutest spot in all of Guadalajara! The drinks are amazing, the Strawberry Milk Cloud is perfection, and the cats are so calm, pampered, and happy.",
  },
  {
    name: "Diego Arriaga",
    rating: 5,
    date: "Hace 2 semanas",
    comment: "Excelente concepto. El ramen shoyu está sorprendentemente rico y los pancakes souflé tiemblan tal como en Japón. Mochi se durmió en mi suéter y no me quería mover.",
    commentEn: "Incredible concept. The shoyu ramen was surprisingly authentic and delicious, and the soufflé pancakes jiggled just like in Tokyo. Mochi slept on my lap!",
  },
  {
    name: "Sofía Montes",
    rating: 5,
    date: "Hace 3 semanas",
    comment: "Me fascinó que tengan ternurines y regalitos Sanrio. El latte 3D con forma de gato da pena tomárselo de lo lindo que está. 100% recomendado para una tarde relajante.",
    commentEn: "Loved the Sylvanian blind boxes and Sanrio decor. The 3D cat latte was almost too adorable to drink! Highly recommended for a wholesome afternoon.",
  },
];

export const CAFE_RULES = [
  {
    title: "Sanitiza tus Manitas",
    titleEn: "Sanitize Your Hands",
    desc: "Usa el gel antibacterial en la entrada antes y después de acariciar a los michis para proteger su salud.",
    descEn: "Use hand sanitizer at our entrance before and after petting kitties to keep everyone healthy.",
  },
  {
    title: "Respeta sus Siestas",
    titleEn: "Respect Cat Naps",
    desc: "Si un gatito está durmiendo profundamente, por favor no lo despiertes abruptamente; les encanta descansar.",
    descEn: "If a kitty is sleeping soundly, please do not wake them up; sweet dreams are sacred.",
  },
  {
    title: "Fotos sin Flash",
    titleEn: "Photos Without Flash",
    desc: "Toma todas las fotos y TikToks que quieras, pero desactiva el flash para no lastimar sus ojitos.",
    descEn: "Take all the selfies and videos you want, but ensure your camera flash is turned off.",
  },
  {
    title: "Solo Snacks de la Barra",
    titleEn: "Only Cat Treats from the Bar",
    desc: "No compartas comida humana de tu mesa con los michis. Si deseas premiarlos, pide snacks felinos en barra.",
    descEn: "Do not feed human food from your plate to the cats. Safe cat treats are available at our counter.",
  },
];

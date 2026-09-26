export type ProductVariant = {
  name: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  variants: ProductVariant[];
  ingredients: string;
  allergens: string;
  weight: string;
  storage: string;
  stock: number;
  featured: boolean;
  badge?: string;
  tags: string[];
  available: boolean;
  seoTitle: string;
  seoDescription: string;
};

export const products: Product[] = [
  {
    id: 'signature-mix-6-piece-box',
    slug: 'signature-mix-6-piece-box',
    name: 'Signature Mix 6-Piece Box',
    category: 'Gift Boxes',
    description:
      'A curated six-piece signature selection featuring an elegant mix of classic and flavourful chocolates ideal for gifting and sweet celebrations.',
    shortDescription: 'Six-piece mixed chocolate gift box',
    price: 198,
    images: ['/images/products/gift-boxes/signature-mix-box.svg'],
    variants: [
      { name: 'Signature Mix', price: 198 },
      { name: 'Plain Milk', price: 189 },
      { name: 'Plain Dark', price: 189 },
      { name: 'Pumpkin Seeds', price: 209 },
      { name: 'Sunflower Seeds', price: 209 },
      { name: 'Black Raisin', price: 219 },
      { name: 'Cashew', price: 229 },
      { name: 'Roasted Almond', price: 239 },
      { name: 'Dried Strawberry', price: 249 },
      { name: 'Pistachio', price: 259 },
    ],
    ingredients: 'Ingredients to be updated after final product confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 180g',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    stock: 50,
    featured: true,
    badge: 'Best Seller',
    tags: ['gift box', 'signature mix', 'chocolate gift boxes'],
    available: true,
    seoTitle: 'Signature Mix 6-Piece Box | Dearé Øne',
    seoDescription: 'Premium signature chocolate gift box with handcrafted, gift-worthy flavours from Dearé Øne.',
  },
  {
    id: 'almond-dipped-bites',
    slug: 'almond-dipped-bites',
    name: 'Almond Dipped Bites',
    category: 'Almond Bites',
    description:
      'Approximately 10–15 almonds coated in smooth chocolate for a satisfying bite-sized sweet treat.',
    shortDescription: 'Almond bites coated in chocolate',
    price: 260,
    images: ['/images/products/almond-bites/almond-dipped-bites.svg'],
    variants: [
      { name: 'Milk Chocolate', price: 260 },
      { name: 'Dark Chocolate', price: 280 },
    ],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 150g',
    storage: 'Keep in a cool, dry place for best taste.',
    stock: 40,
    featured: true,
    badge: 'New',
    tags: ['almond bites', 'chocolate covered almonds', 'giftable snacks'],
    available: true,
    seoTitle: 'Almond Dipped Bites | Dearé Øne',
    seoDescription: 'Almond dipped bites in milk or dark chocolate from Dearé Øne.',
  },
  {
    id: 'milk-chocolate-bar',
    slug: 'milk-chocolate-bar',
    name: 'Milk Chocolate Bar',
    category: 'Chocolate Bars',
    description: 'A smooth milk chocolate bar made for everyday indulgence and gifting moments.',
    shortDescription: 'Classic milk chocolate bar',
    price: 180,
    images: ['/images/products/bars/milk-chocolate-bar.svg'],
    variants: [{ name: 'Classic', price: 180 }],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 90g',
    storage: 'Store in a cool place away from heat.',
    stock: 60,
    featured: true,
    tags: ['milk chocolate', 'bars', 'signature'],
    available: true,
    seoTitle: 'Milk Chocolate Bar | Dearé Øne',
    seoDescription: 'Premium milk chocolate bar from Dearé Øne for gifting and indulgence.',
  },
  {
    id: 'dark-chocolate-bar',
    slug: 'dark-chocolate-bar',
    name: 'Dark Chocolate Bar',
    category: 'Chocolate Bars',
    description: 'A rich dark chocolate bar with an elegant finish and a refined bite.',
    shortDescription: 'Classic dark chocolate bar',
    price: 190,
    images: ['/images/products/bars/dark-chocolate-bar.svg'],
    variants: [{ name: 'Classic', price: 190 }],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 90g',
    storage: 'Store in a cool, dry place.',
    stock: 60,
    featured: false,
    tags: ['dark chocolate', 'bars'],
    available: true,
    seoTitle: 'Dark Chocolate Bar | Dearé Øne',
    seoDescription: 'Elegant dark chocolate bar from Dearé Øne.',
  },
  {
    id: 'rectangle-bubble-chocolate',
    slug: 'rectangle-bubble-chocolate',
    name: 'Rectangle Bubble Chocolate',
    category: 'Bubble Chocolates',
    description: 'Soft bubble-shaped chocolate pieces in a rectangular format for gifting and fun sharing.',
    shortDescription: 'Rectangular bubble chocolate assortment',
    price: 220,
    images: ['/images/products/bubble/rectangle-bubble.svg'],
    variants: [{ name: 'Rectangle', price: 220 }],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 120g',
    storage: 'Store away from direct heat and moisture.',
    stock: 35,
    featured: false,
    tags: ['bubble chocolates', 'rectangle', 'gift-ready'],
    available: true,
    seoTitle: 'Rectangle Bubble Chocolate | Dearé Øne',
    seoDescription: 'Rectangle bubble chocolate from Dearé Øne for gifting and sweet sharing.',
  },
  {
    id: 'square-bubble-chocolate',
    slug: 'square-bubble-chocolate',
    name: 'Square Bubble Chocolate',
    category: 'Bubble Chocolates',
    description: 'A square bubble chocolate variant with a slightly elevated price profile for a premium presentation.',
    shortDescription: 'Square bubble chocolate assortment',
    price: 250,
    images: ['/images/products/bubble/square-bubble.svg'],
    variants: [{ name: 'Square', price: 250 }],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 120g',
    storage: 'Keep in a cool, dry place.',
    stock: 30,
    featured: false,
    tags: ['bubble chocolates', 'square', 'premium'],
    available: true,
    seoTitle: 'Square Bubble Chocolate | Dearé Øne',
    seoDescription: 'Square bubble chocolate for premium gifting and chocolate lovers.',
  },
  {
    id: 'nut-chocolate-bar',
    slug: 'nut-chocolate-bar',
    name: 'Nut Chocolate Bar',
    category: 'Chocolate Bars',
    description: 'A premium bar with a nutty finish and a satisfying bite.',
    shortDescription: 'Nut-filled chocolate bar',
    price: 210,
    images: ['/images/products/bars/nut-chocolate-bar.svg'],
    variants: [{ name: 'Classic', price: 210 }],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 100g',
    storage: 'Store in a cool, dry place.',
    stock: 25,
    featured: false,
    tags: ['nuts', 'chocolate bar', 'bar'],
    available: true,
    seoTitle: 'Nut Chocolate Bar | Dearé Øne',
    seoDescription: 'Nut chocolate bar by Dearé Øne crafted for gifting and indulgence.',
  },
  {
    id: 'fruit-chocolate-bar',
    slug: 'fruit-chocolate-bar',
    name: 'Fruit Chocolate Bar',
    category: 'Chocolate Bars',
    description: 'A fruit-inspired chocolate bar for those who enjoy a sweet and vibrant bite.',
    shortDescription: 'Fruit-inspired chocolate bar',
    price: 215,
    images: ['/images/products/bars/fruit-chocolate-bar.svg'],
    variants: [{ name: 'Classic', price: 215 }],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 100g',
    storage: 'Keep in a cool, dry place.',
    stock: 25,
    featured: false,
    tags: ['fruit', 'bars', 'signature'],
    available: true,
    seoTitle: 'Fruit Chocolate Bar | Dearé Øne',
    seoDescription: 'Fruit chocolate bar from Dearé Øne with a sweet, elevated profile.',
  },
  {
    id: 'signature-bar',
    slug: 'signature-bar',
    name: 'Signature Bar',
    category: 'Chocolate Bars',
    description: 'An elevated signature chocolate bar for gifting, collection, and special occasions.',
    shortDescription: 'Premium signature bar',
    price: 240,
    images: ['/images/products/bars/signature-bar.svg'],
    variants: [{ name: 'Classic', price: 240 }],
    ingredients: 'Ingredients to be updated after final confirmation.',
    allergens: 'Allergen details to be added upon confirmation.',
    weight: 'Approx. 110g',
    storage: 'Store in a cool, dry place.',
    stock: 20,
    featured: false,
    tags: ['signature', 'bars', 'premium'],
    available: true,
    seoTitle: 'Signature Bar | Dearé Øne',
    seoDescription: 'Signature chocolate bar from Dearé Øne for premium gifting.',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

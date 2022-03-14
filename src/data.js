let products = [
  {
    id: 1,
    urlName: 'studio-bag',
    item: 'Studio Bag',
    image: '/images/blackstudiobag.jpeg',
    price: 85,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: true,
  },

  {
    id: 2,
    urlName: 'cumulus-bag',
    item: 'Cumulus Bag',
    image: '/images/cumulus-olive.png',
    price: 75,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: true,
  },

  {
    id: 3,
    urlName: 'dance-bag',
    item: 'Dance Bag Nylon',
    image: '/images/dance-nylon.png',
    price: 10,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: true,
  },

  {
    id: 4,
    urlName: 'stratus-backpack',
    item: 'Stratus Backpack',
    image: '/images/stratus-backpack.png',
    price: 15,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: true,
  },

  {
    id: 5,
    urlName: 'cirrus',
    item: 'Cirrus',
    image: '/images/cirrus1.jpeg',
    price: 25,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: false,
  },

  {
    id: 6,
    item: 'Mini Circle',
    urlName: 'mini-circle',
    image: '/images/mini-circle.png',

    price: 35,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: false,
  },

  {
    id: 7,
    urlName: 'studio-bag-vaqueta',
    item: 'Studio Bag Vaqueta',
    image: '/images/studio-bag-vaqueta.jpeg',
    price: 45,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: false,
  },

  {
    id: 8,
    urlName: 'sling',
    item: 'Sling',
    image: '/images/sling.png',
    price: 55,
    description:
      'The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it will be ready to adapt to your needs and keep up with your style.',
    featured: false,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(urlName) {
  return products.find((product) => product.urlName === urlName);
}

export default products;

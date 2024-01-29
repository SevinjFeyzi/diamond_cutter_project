/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "A111",
    title: "Amber earrings and ring set",
    imageUrl:
      "https://i.etsystatic.com/7537662/c/793/630/56/0/il/76b3e4/1362798881/il_680x540.1362798881_l88c.jpg",
    description:
      "Fossilized resin, color of the burnished sun--orange or golden brown. Amber might trap and preserve ancient life, including insects, leaves, even scorpions and occasionally lizards.",
    price: 119.9,
    discontinued: false,
    categories: ["dailyWear", "birthdayGifts"],
  },

  {
    id: "A112",
    title: "Amethyst earrings and ring set",
    imageUrl:
      "https://www.solitairemagazine.com/wp-content/uploads/2021/06/Amethyst-Earrings-and-Ring-Set.jpeg",
    description:
      "Purple variety of the mineral quartz, often forms large, six-sided crystals. Fine velvety-colored gems come from African and South American mines. In demand for jewelry at all price points.",
    price: 169.9,
    discontinued: false,
    categories: ["dailyWear", "birthdayGifts"],
  },

  {
    id: "A113",
    title: "Citrine earrings and ring set",
    imageUrl:
      "https://www.peoplesjewellers.com/productimages/processed/V-20291296_0_800.jpg",
    description:
      " Citrine's color comes from traces of iron. It’s perhaps the most popular and frequently purchased yellow gemstone and an attractive alternative for topaz as well as for yellow sapphire.",
    price: 149.9,
    discontinued: false,
    categories: ["dailyWear"],
  },

  {
    id: "A114",
    title: "Emerald Jewelry set",
    imageUrl:
      "https://i.etsystatic.com/31608082/r/il/df374b/3743137913/il_1588xN.3743137913_n113.jpg",
    description:
      "The most valued variety of beryl, emerald was once cherished by Spanish conquistadors, Inca kings, Moguls, and pharaohs. Today, fine gems come from Africa, South America, and Central Asia.",
    price: 559.9,
    discontinued: false,
    categories: ["weddingGems", "birthdayGifts"],
  },

  {
    id: "A115",
    title: "Aquamarine bracelet",
    imageUrl:
      "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-jewelry/bracelets/aquamarine-infinity-link-bracelet-14k-white-gold-/72808_main?$phab_detailmain$",
    description:
      "Blue to slightly greenish-blue variety of the mineral beryl. Crystals are sometimes big enough to cut fashioned gems of more than 100 carats. Well-formed crystals might make superb mineral specimens.",
    price: 69.9,
    discontinued: false,
    categories: ["dailyWear"],
  },

  {
    id: "A116",
    title: "Diamond necklace and bracelet set",
    imageUrl:
      "https://image.s5a.com/is/image/TheBay/075000007991_main?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
    description:
      "This hardest gem of all is made of just one element: carbon. It’s valued for its colorless nature and purity. Most diamonds are primeval—over a billion years old—and form deep within the earth.",
    price: 19999.9,
    discontinued: false,
    categories: ["weddingGems"],
  },

  {
    id: "A117",
    title: "Pearl necklace and earrings set",
    imageUrl: "https://m.media-amazon.com/images/I/71yWwaLSBcL._AC_UL1500_.jpg",
    description:
      "Produced in the bodies of marine and freshwater mollusks naturally or cultured by people with great care. Lustrous, smooth, subtly-colored pearls are jewelry staples, especially as strands.",
    price: 5999.9,
    discontinued: false,
    categories: ["weddingGems"],
  },

  {
    id: "A118",
    title: "Lapis Lazuli earrings and ring set",
    imageUrl:
      "https://i.etsystatic.com/6560359/r/il/b155fb/2137820832/il_1588xN.2137820832_r5vr.jpg",
    description:
      "Lapis Lazuli is treasured for its beautiful deep blue color. Afghanistan is considered the source of the best-quality lapis.",
    price: 109.9,
    discontinued: false,
    categories: ["dailyWear", "birthdayGifts"],
  },

  {
    id: "A119",
    title: "Opal ear stud",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2724/1706/products/EARRINGS-opal_studs-g1_1296x.jpg?v=1620142449",
    description:
      " Opal's microscopic arrays of stacked silica spheres diffract light into a blaze of flashing colors. An opal’s color range and pattern help determine its value.",
    price: 49.9,
    discontinued: false,
    categories: ["dailyWear"],
  },

  {
    id: "A120",
    title: "Sapphire necklace, earring and bracelet set",
    imageUrl:
      "https://i.etsystatic.com/6376824/r/il/02c27d/3397499902/il_1588xN.3397499902_mwfo.jpg",
    description:
      "Depending on their trace element content, sapphire varieties of the mineral corundum might be blue, yellow, green, orange, pink, purple or even show a six-rayed star if cut as a cabochon.",
    price: 2249.9,
    discontinued: false,
    categories: ["weddingGems"],
  },

  {
    id: "A121",
    title: "Moonstone earrings",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1629/7173/products/image_b67f36a6-7b55-4909-9c79-00d760557f1d_grande.jpg?v=1667083312",
    description:
      "Feldspar prized for its billowy blue adularescence, caused by light scattering from an inter growth of microscopic, alternating layers. Favored gem of many Art Nouveau jewelry designers.",
    price: 59.9,
    discontinued: false,
    categories: ["dailyWear", "birthdayGifts"],
  },

  {
    id: "A122",
    title: "Sunstone bracelet",
    imageUrl:
      "https://www.lavalilylifestyle.ca/uploads/1/0/9/4/109455493/s767936149572764148_p515_i3_w750.jpeg?width=640",
    description:
      "Sunstone a member of the feldspar group, can be an orthoclase feldspar or a plagioclase feldspar, depending on chemistry. Both can show aventurescence. “Sunstone” applies to the gem’s appearance.",
    price: 79.9,
    discontinued: false,
    categories: ["birthdayGifts"],
  },

  {
    id: "A123",
    title: "Topaz earrings and bracelet set",
    imageUrl:
      "https://i.pinimg.com/originals/0c/ef/68/0cef687aded559fd6ac1130f1ca5528a.jpg",
    description:
      "Colorless topaz treated to blue is a mass-market gem. Fine pink-to-red, purple, or orange gems are one-of-a-kind pieces. Top sources include Brazil, and Russia's Ural Mountains.",
    price: 259.9,
    discontinued: false,
    categories: ["weddingGems", "dailyWear", "birthdayGifts"],
  },

  {
    id: "A124",
    title: "Turquoise necklace and ring set",
    imageUrl:
      "https://i.etsystatic.com/5867820/r/il/9e06df/1682133870/il_1588xN.1682133870_97lv.jpg",
    description:
      " Ancient People from Egypt to Mesoamerica and China treasured this vivid blue gem. It’s a rare phosphate of copper that only forms in the earth’s most dry and barren regions.",
    price: 349.9,
    discontinued: false,
    categories: ["birthdayGifts"],
  },

  {
    id: "A125",
    title: "Zircon earrings",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0606/4291/8568/products/6a63b443a83fec1c4f2b97514eb816b0.png?v=1641439096&width=1206",
    description:
      "Optical properties make it bright and lustrous. Best known for its brilliant blue hues; also comes in warm autumnal yellows and reddish browns, as well as red and green hues.",
    price: 39.9,
    discontinued: false,
    categories: ["dailyWear"],
  },

  {
    id: "A126",
    title: "Ruby necklace and ring set",
    imageUrl:
      "https://stauer-cdn-bi1tspyakbh4frq6pd1dkakl9n7hjflhje.netdna-ssl.com/images/stauer/products/46813ob_800.jpg",
    description:
      "Traces of chromium give this red variety of the mineral corundum its rich color. Long valued by humans of many cultures. In ancient Sanskrit, ruby was called ratnaraj, or “king of precious stones.",
    price: 2299.9,
    discontinued: false,
    categories: ["weddingGems"],
  },

  {
    id: "A127",
    title: "Tanzanite necklace and earrings set",
    imageUrl:
      "https://media.superjeweler.com/f_auto,fl_lossy,q_auto,c_scale/Images/Products/700x700/pic24150-1",
    description:
      "Named for Tanzania, the country where it was discovered in 1967, tanzanite is the blue-to-violet or purple variety of the mineral zoisite. It’s become one of the most popular of colored gemstones.",
    price: 3999.9,
    discontinued: false,
    categories: ["weddingGems"],
  },

  {
    id: "A128",
    title: "Peridot earrings",
    imageUrl:
      "https://i.etsystatic.com/6120089/r/il/40ae12/1302965713/il_1588xN.1302965713_k3rp.jpg",
    description:
      "Yellow-green gem variety of the mineral olivine. Found as nodules in volcanic rock, occasionally as crystals lining veins in mountains of Myanmar and Pakistan, and occasionally inside meteorites.",
    price: 109.9,
    discontinued: false,
    categories: ["birthdayGifts"],
  },

  {
    id: "A129",
    title: "Kunzite bracelet",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0191/7380/products/IMG_3529_grande.jpg?v=1605933946",
    description:
      "Trace amounts of manganese give this pink to violet variety of spodumene its feminine glow. A relative newcomer to the gemstone stage, kunzite was only confirmed as a unique variety of spodumene in the early part of the twentieth century.",
    price: 239.9,
    discontinued: false,
    categories: ["dailyWear", "birthdayGifts"],
  },

  {
    id: "A130",
    title: "Tourmaline earrings and ring set",
    imageUrl:
      "https://sothebys-md.brightspotcdn.com/dims4/default/c279e55/2147483647/strip/true/crop/2000x2000+0+0/resize/1024x1024!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F6f%2F87%2Fe478dc614b7abd168c46ba35884e%2Fde2240-c63xp-cs-01.jpg",
    description:
      "Comes in many colors, including the remarkable intense violet-to-blue gems particular to Paraíba, Brazil, and similar blues from Africa. Favorite of mineral collectors.",
    price: 129.9,
    discontinued: false,
    categories: ["birthdayGifts"],
  },

  {
    id: "A131",
    title: "Alexandrite necklace and bracelet set",
    imageUrl:
      "https://i.etsystatic.com/28823024/r/il/978d6b/3063993915/il_1588xN.3063993915_avqm.jpg",
    description:
      "It's the color-change variety of the mineral, chrysoberyl. Bluish green in daylight, purplish red under incandescent light; hard and durable. Top quality examples are rare and valuable.",
    price: 2249.9,
    discontinued: false,
    categories: ["weddingGems"],
  },
];

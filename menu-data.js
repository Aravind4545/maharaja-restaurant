/**
 * Maharaja Restaurant - Digitized Menu Data
 * Extracted accurately from the restaurant's physical menu cards.
 * Categories: Biryani Boutique, Maharaja Family Specials, Tandoori & Kebabs,
 * Chicken Delicacies, Mutton Delicacies, Veg Starters, Veg Gravy Items,
 * Fried Rice & Flavoured Rice, Veg Soups.
 */

const MENU_DATA = [
  // ==========================================
  // BIRYANI BOUTIQUE
  // ==========================================
  {
    id: "bir-1",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Hyd. Mutton Ghee Dum Biryani",
    price: 389,
    type: "nonveg",
    spice: "medium",
    badge: "Crown Jewel",
    description: "The crown jewel of Maharaja. Tender succulent baby goat meat layered with aged basmati, infused with pure aromatic desi ghee, saffron, and slow-cooked on traditional dum."
  },
  {
    id: "bir-2",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Hyd Dum Biryani",
    price: 319,
    type: "nonveg",
    spice: "medium",
    badge: "Bestseller",
    description: "Authentic Hyderabadi bone-in chicken marinated in spiced yogurt and fresh herbs, slow sealed on slow dum with fragrant long-grain basmati."
  },
  {
    id: "bir-3",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Roast Biryani",
    price: 339,
    type: "nonveg",
    spice: "hot",
    badge: "Rayalaseema Spicy",
    description: "Golden pan-roasted chicken infused with fiery local Rayalaseema spices, layered over aromatic saffron basmati rice."
  },
  {
    id: "bir-4",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Special Biryani",
    price: 369,
    type: "nonveg",
    spice: "medium",
    badge: "Chef's Special",
    description: "Chef's secret marinade tender boneless chicken morsels cooked to succulent perfection and garnished with roasted cashews and crispy onions."
  },
  {
    id: "bir-5",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Mutton Fry Biryani",
    price: 409,
    type: "nonveg",
    spice: "hot",
    badge: "Popular",
    description: "Crisp pan-fried Rayalaseema spiced mutton chunks with caramelized onions served on a bed of rich aromatic biryani rice."
  },
  {
    id: "bir-6",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Ghee Pot Dum Biryani",
    price: 749,
    type: "nonveg",
    spice: "medium",
    badge: "Earthen Pot Special",
    description: "Traditional earthen clay pot sealed biryani cooked with an extra ladle of warm golden desi ghee and royal herbs. Serves 2-3."
  },
  {
    id: "bir-7",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Mutton Ghee Pot Dum Biryani",
    price: 849,
    type: "nonveg",
    spice: "hot",
    badge: "Royal Pot Special",
    description: "Clay pot dum-cooked tender mutton infused with rich village ghee aromatics, sealed with dough for maximum depth of flavor. Serves 2-3."
  },
  {
    id: "bir-8",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Prawn Ghee Pot Dum Biryani",
    price: 849,
    type: "nonveg",
    spice: "medium",
    badge: "Coastal Delight",
    description: "Sweet juicy coastal prawns gently spiced in masala, clay pot baked with pure cow ghee and fragrant basmati. Serves 2-3."
  },
  {
    id: "bir-9",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Leg Fry Biryani",
    price: 349,
    type: "nonveg",
    spice: "hot",
    badge: null,
    description: "Whole crispy marinated chicken leg roasted with red masala, resting over piping hot dum biryani rice."
  },
  {
    id: "bir-10",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Mughlai Biryani",
    price: 369,
    type: "nonveg",
    spice: "mild",
    badge: "Royal Mughlai",
    description: "Rich, creamy chicken biryani gently spiced with ground cashews, saffron essence, and ribbons of egg."
  },
  {
    id: "bir-11",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Keema Fry Biryani",
    price: 349,
    type: "nonveg",
    spice: "hot",
    badge: null,
    description: "Minced spiced chicken sauteed dry with onions, green chillies, and crushed pepper, layered into fragrant basmati."
  },
  {
    id: "bir-12",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Chicken Lollipop Biryani (4 Pcs)",
    price: 349,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Four crisp fried chicken lollipops served with seasoned dum rice, raita, and mirchi salan."
  },
  {
    id: "bir-13",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Drumstick Biryani (2 Pcs)",
    price: 349,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Two tender marinated chicken drumsticks deep fried to juicy perfection and served over fragrant biryani."
  },
  {
    id: "bir-14",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Mutton Mughlai Biryani",
    price: 449,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Mughal-style creamy mutton biryani enriched with cashew paste, cardamom, and soft simmered meat."
  },
  {
    id: "bir-15",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Mutton Keema Fry Biryani",
    price: 449,
    type: "nonveg",
    spice: "hot",
    badge: null,
    description: "Spicy roasted minced mutton sauteed with curry leaves and black pepper, served atop spiced saffron rice."
  },
  {
    id: "bir-16",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Kamju Biryani (Quail)",
    price: 329,
    type: "nonveg",
    spice: "fiery",
    badge: "Country Classic",
    description: "Traditional whole marinated country quail bird (kamju pita) cooked with rustic Andhra spices and aromatic basmati."
  },
  {
    id: "bir-17",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Fish Biryani",
    price: 349,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Tender boneless fish fillets spiced with ginger, garlic, and fresh mint, slow simmered in basmati rice."
  },
  {
    id: "bir-18",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Royyala Biryani (Prawns)",
    price: 339,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Juicy marinated prawns pan-seared with coastal Andhra masala and tossed with flavorful dum biryani rice."
  },
  {
    id: "bir-19",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Egg Biryani",
    price: 269,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Golden pan-roasted spiced boiled eggs layered with saffron-scented dum biryani rice and caramelized onions."
  },
  {
    id: "bir-20",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Biryani Rice (Kuska)",
    price: 229,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Pure fragrant long-grain basmati rice cooked in royal ghee, whole spices, mint, and yakhni aromatics."
  },
  {
    id: "bir-21",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Bakasura Feast Biryani (Chi-Mut-Praw)",
    price: 2270,
    type: "nonveg",
    spice: "hot",
    badge: "Grand Feast (5-6 Pax)",
    description: "The ultimate monster feast! Mammoth platter featuring succulent Chicken, tender Mutton, and coastal Prawns with boiled eggs, salan, and raita."
  },
  {
    id: "bir-22",
    category: "biryani",
    categoryName: "Biryani Boutique",
    name: "Maharaja Bucket Biryani",
    price: 1879,
    type: "nonveg",
    spice: "medium",
    badge: "Family Party Pack",
    description: "Party-sized bucket loaded with succulent biryani, boiled eggs, large raita, and mirchi salan. Serves 4-5 hungry food lovers."
  },

  // ==========================================
  // MAHARAJA FAMILY SPECIAL COMBOS
  // ==========================================
  {
    id: "fam-1",
    category: "family",
    categoryName: "Maharaja Family Specials",
    name: "Chicken Family Pack",
    price: 1199,
    type: "nonveg",
    spice: "medium",
    badge: "Best Value Combo",
    description: "Complete royal spread: 2 Chicken Biryani + 4 Soft Phulkas + 1 Chicken Roast + 1 Chicken Curry + 1 Curd Rice + 500ml Cold Drink. Serves 3-4."
  },
  {
    id: "fam-2",
    category: "family",
    categoryName: "Maharaja Family Specials",
    name: "Mutton Family Pack",
    price: 1599,
    type: "nonveg",
    spice: "hot",
    badge: "Royal Mutton Spread",
    description: "Feast fit for kings: 2 Mutton Biryani + 4 Soft Phulkas + 1 Mutton Roast + 1 Mutton Curry + 1 Curd Rice + 500ml Cold Drink. Serves 3-4."
  },
  {
    id: "fam-3",
    category: "family",
    categoryName: "Maharaja Family Specials",
    name: "Royyala (Prawn) Family Pack",
    price: 1599,
    type: "nonveg",
    spice: "medium",
    badge: "Seafood Feast",
    description: "2 Royyala Biryani + 4 Soft Phulkas + 1 Royyala Dry Fry + 1 Royyala Curry + 1 Curd Rice + 500ml Cold Drink. Serves 3-4."
  },
  {
    id: "fam-4",
    category: "family",
    categoryName: "Maharaja Family Specials",
    name: "Fish Family Pack",
    price: 1599,
    type: "nonveg",
    spice: "medium",
    badge: "Fresh Catch Combo",
    description: "2 Fish Biryani + 4 Soft Phulkas + 1 Crispy Fish Dry + 1 Rich Fish Curry + 1 Curd Rice + 500ml Cold Drink. Serves 3-4."
  },
  {
    id: "fam-5",
    category: "family",
    categoryName: "Maharaja Family Specials",
    name: "Maharaja CB - Special",
    price: 949,
    type: "nonveg",
    spice: "medium",
    badge: "Chef Curated",
    description: "Exclusive signature Maharaja combo designed for couples and small families featuring specialty biryani and starters."
  },

  // ==========================================
  // TANDOORI & KEBABS
  // ==========================================
  {
    id: "tan-1",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Reshmi Kabab",
    price: 239,
    type: "nonveg",
    spice: "mild",
    badge: "Silky & Tender",
    description: "Melt-in-mouth chicken pieces steeped in cream, cashew paste, egg white, and gentle aromatic spices, char-grilled over glowing coals."
  },
  {
    id: "tan-2",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Hariyali Kabab",
    price: 210,
    type: "nonveg",
    spice: "medium",
    badge: "Herb Infused",
    description: "Boneless chicken skewers marinated in fresh mint, coriander, green chilies, yogurt, and roasted cumin, grilled in the tandoor."
  },
  {
    id: "tan-3",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Kasthuri Kabab",
    price: 259,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Succulent chicken skewers coated with sun-dried fenugreek leaves (kasuri methi), egg wash, and roasted spices."
  },
  {
    id: "tan-4",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Chicken Tandoori (Full)",
    price: 389,
    type: "nonveg",
    spice: "medium",
    badge: "Tandoori Classic",
    description: "Whole tender chicken marinated overnight in Kashmiri chilli yogurt, mustard oil, and whole spices, charred in the clay oven."
  },
  {
    id: "tan-5",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Chicken Tandoori (Half)",
    price: 229,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Half portion of classic smoky tandoori chicken served with sliced onions, lemon wedges, and mint chutney."
  },
  {
    id: "tan-6",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Mutton Kabab",
    price: 279,
    type: "nonveg",
    spice: "hot",
    badge: "Chef's Pick",
    description: "Finely minced baby mutton infused with mint, ginger, and roasted garam masala, grilled over charcoal embers."
  },
  {
    id: "tan-7",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Tandoori Pomfret",
    price: 300,
    type: "nonveg",
    spice: "medium",
    badge: "Whole Fish Specialty",
    description: "Whole fresh pomfret fish score-cut and marinated in ajwain tandoori marinade, roasted to crispy smoky skin perfection."
  },
  {
    id: "tan-8",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Tandoori Lemon Chilli Prawns",
    price: 289,
    type: "nonveg",
    spice: "hot",
    badge: "Zesty & Spicy",
    description: "Succulent jumbo prawns infused with fresh lemon zest, crushed green chillies, and yellow tandoori masala."
  },
  {
    id: "tan-9",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Fish Tikka",
    price: 259,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Boneless river fish cubes marinated in roasted carom seeds, ginger paste, and mustard oil, roasted in tandoor."
  },
  {
    id: "tan-10",
    category: "tandoor",
    categoryName: "Tandoori & Kebabs",
    name: "Lasooni Fish Tikka",
    price: 291,
    type: "nonveg",
    spice: "medium",
    badge: "Garlic Crust",
    description: "Delicate fish cubes steeped in burnt garlic and cream marinade, finished with a crisp golden exterior."
  },

  // ==========================================
  // CHICKEN DELICACIES & CURRIES
  // ==========================================
  {
    id: "chk-1",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Naatu Kodi Pulusu (Bone)",
    price: 389,
    type: "nonveg",
    spice: "fiery",
    badge: "Rayalaseema Heritage",
    description: "Maharaja's authentic country chicken simmered in an intensely flavorful, fiery country broth with local spices and curry leaves. Best with Bagara or Biryani rice."
  },
  {
    id: "chk-2",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Naatu Kodi Iguru",
    price: 389,
    type: "nonveg",
    spice: "fiery",
    badge: "Thick Masala",
    description: "Free-range country chicken slow-roasted into a rich, semi-gravy reduction packed with rustic crushed peppercorns and Andhra red chillies."
  },
  {
    id: "chk-3",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Ulava Charu Chicken",
    price: 389,
    type: "nonveg",
    spice: "medium",
    badge: "Iconic Andhra",
    description: "Succulent chicken pieces cooked in legendary Andhra slow-simmered horse-gram (ulava charu) reduction, imparting a rich, earthy, umami depth."
  },
  {
    id: "chk-4",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Curry Leaf Chicken",
    price: 389,
    type: "nonveg",
    spice: "hot",
    badge: "Aromatic Karivepaku",
    description: "Chicken tossed in an aromatic roasted curry leaf (karivepaku) paste, black pepper, and garlic tadka."
  },
  {
    id: "chk-5",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Rayalaseema (Boneless)",
    price: 359,
    type: "nonveg",
    spice: "fiery",
    badge: "Local Specialty",
    description: "Boneless chicken morsels cooked in authentic fiery red Rayalaseema gravy loaded with Guntur chillies and shallots."
  },
  {
    id: "chk-6",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Rayalaseema (Bone)",
    price: 339,
    type: "nonveg",
    spice: "fiery",
    badge: null,
    description: "Bone-in chicken simmered in spicy traditional Rayalaseema village style red gravy."
  },
  {
    id: "chk-7",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Dum Ka Murgi",
    price: 799,
    type: "nonveg",
    spice: "medium",
    badge: "Nawabi Feast",
    description: "Royal slow-cooked whole chicken sealed on dum with cashew nut paste, brown onions, saffron, and rich cream."
  },
  {
    id: "chk-8",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Nawabi",
    price: 389,
    type: "nonveg",
    spice: "mild",
    badge: "Creamy Royal",
    description: "Regal preparation of chicken simmered in silky cashew, poppy seed, and almond gravy scented with cardamom."
  },
  {
    id: "chk-9",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Chandrakala",
    price: 389,
    type: "nonveg",
    spice: "medium",
    badge: "Chef's Signature",
    description: "Specialty folded spiced chicken parcels simmered in a luscious golden aromatic curry."
  },
  {
    id: "chk-10",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Kakatiya",
    price: 359,
    type: "nonveg",
    spice: "hot",
    badge: "Heritage Recipe",
    description: "Inspired by historical Kakatiya royalty, this curry boasts a bold blend of dry roasted spices and tamarind tang."
  },
  {
    id: "chk-11",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Cashew Nut",
    price: 389,
    type: "nonveg",
    spice: "mild",
    badge: "Rich & Nutty",
    description: "Tender chicken simmered with an abundance of whole roasted crunchy cashews in a velvety rich gravy."
  },
  {
    id: "chk-12",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Butter",
    price: 339,
    type: "nonveg",
    spice: "mild",
    badge: "Classic Butter Masala",
    description: "Succulent shredded chicken cooked in rich buttery tomato satin gravy with kasuri methi and cream."
  },
  {
    id: "chk-13",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Moghalai",
    price: 349,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Velvety spiced chicken curry folded with whisked egg drops for a luscious royal texture."
  },
  {
    id: "chk-14",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Kolhapuri",
    price: 359,
    type: "nonveg",
    spice: "fiery",
    badge: "Extra Spicy",
    description: "A spicy preparation from Kolhapur with toasted desiccated coconut, roasted red chillies, and sesame."
  },
  {
    id: "chk-15",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Hyderabadi",
    price: 349,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Chicken cooked in a vibrant green gravy of fresh mint leaves, coriander, green chilies, and yogurt."
  },
  {
    id: "chk-16",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Malai",
    price: 359,
    type: "nonveg",
    spice: "mild",
    badge: null,
    description: "Tender chicken pieces simmered in silky smooth clotted cream and white pepper gravy."
  },
  {
    id: "chk-17",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Kadai",
    price: 339,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Wok-cooked chicken with bell peppers, tomatoes, and freshly pounded coriander and cumin seeds."
  },
  {
    id: "chk-18",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Pepper Chicken Curry",
    price: 359,
    type: "nonveg",
    spice: "hot",
    badge: null,
    description: "Warming and peppery chicken curry with freshly ground Malabar black pepper and shallots."
  },
  {
    id: "chk-19",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Malabar Chicken Curry",
    price: 389,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Coastal style chicken curry with pressed coconut milk, curry leaves, mustard seeds, and fennel."
  },
  {
    id: "chk-20",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Methi",
    price: 349,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Chicken cooked with aromatic fresh fenugreek leaves and warm spices."
  },
  {
    id: "chk-21",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Kashmiri (Boneless)",
    price: 389,
    type: "nonveg",
    spice: "mild",
    badge: null,
    description: "Mild, fragrant chicken curry flavored with Kashmiri saffron, fennel powder, and dried fruits."
  },
  {
    id: "chk-22",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Curry (Bone)",
    price: 289,
    type: "nonveg",
    spice: "medium",
    badge: "Homestyle Favorite",
    description: "Comforting homestyle chicken curry simmered in onion-tomato gravy with Andhra whole spices."
  },
  {
    id: "chk-23",
    category: "chicken",
    categoryName: "Chicken Delicacies",
    name: "Chicken Bhaji (Bone)",
    price: 329,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Tender bone-in chicken braised with fresh tender leafy greens and garlic."
  },

  // ==========================================
  // MUTTON STARTERS & CURRIES
  // ==========================================
  {
    id: "mut-1",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Keema Balls (6 Pcs)",
    price: 439,
    type: "nonveg",
    spice: "medium",
    badge: "Maharaja Favorite",
    description: "Crispy-fried tender minced mutton meatballs seasoned with fresh mint, roasted cumin, and Andhra spices. Also available in 10 pcs (₹499) and 1/2 kg pack (₹999)."
  },
  {
    id: "mut-2",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Rayalaseema Dry",
    price: 459,
    type: "nonveg",
    spice: "fiery",
    badge: "Rayalaseema Fire",
    description: "Baby mutton slow-roasted dry with fiery Guntur red chillies, crushed garlic, and curry leaves. Pure Rayalaseema flavor."
  },
  {
    id: "mut-3",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Kaju Dry",
    price: 459,
    type: "nonveg",
    spice: "medium",
    badge: "Cashew Delight",
    description: "Tender chunks of mutton stir-fried with an abundance of golden roasted whole cashew nuts and cracked pepper."
  },
  {
    id: "mut-4",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Keema Bullets",
    price: 429,
    type: "nonveg",
    spice: "hot",
    badge: "Crispy Starter",
    description: "Crispy-shelled spiced mutton mince cylindrical croquettes packed with green chillies and mint."
  },
  {
    id: "mut-5",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Keema Cutlets",
    price: 429,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Golden pan-fried minced mutton patties seasoned with fresh coriander, ginger, and breadcrumb crust."
  },
  {
    id: "mut-6",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Roast",
    price: 429,
    type: "nonveg",
    spice: "hot",
    badge: null,
    description: "Tender goat meat slow browned on low flame with whole caramelized onions, cinnamon, and cloves."
  },
  {
    id: "mut-7",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Fry",
    price: 429,
    type: "nonveg",
    spice: "hot",
    badge: null,
    description: "Traditional Andhra pan fry with crispy curry leaves, ginger-garlic paste, and crushed coriander."
  },
  {
    id: "mut-8",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton 65",
    price: 429,
    type: "nonveg",
    spice: "hot",
    badge: null,
    description: "Deep fried batter-coated juicy mutton pieces tossed with red chillies, curry leaves, and yogurt tempering."
  },
  {
    id: "mut-9",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Keema Gupt",
    price: 469,
    type: "nonveg",
    spice: "hot",
    badge: "Chef's Secret",
    description: "Chef's private recipe of slow braised minced mutton with hand-pounded spices."
  },
  {
    id: "mut-10",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Rogan Josh",
    price: 439,
    type: "nonveg",
    spice: "medium",
    badge: "Slow Braised",
    description: "Classic Kashmiri preparation with tender mutton shanks braised in an aromatic gravy of yogurt and ratan jot."
  },
  {
    id: "mut-11",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Rayalaseema Curry (Bone)",
    price: 459,
    type: "nonveg",
    spice: "fiery",
    badge: "Signature Gravy",
    description: "Intense, spicy mutton curry prepared with roasted Rayalaseema spices and dry coconut paste."
  },
  {
    id: "mut-12",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Pepper Red Chilli Curry",
    price: 459,
    type: "nonveg",
    spice: "fiery",
    badge: "Double Spiced",
    description: "Double heat explosion combining fiery Andhra red chillies with freshly cracked black peppercorns."
  },
  {
    id: "mut-13",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Masala",
    price: 409,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Succulent mutton pieces simmered in rich spiced onion-tomato masala gravy."
  },
  {
    id: "mut-14",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Keema Curry",
    price: 409,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Hearty minced mutton gravy with green peas and whole spices, ideal companion for hot phulkas."
  },
  {
    id: "mut-15",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Kandari",
    price: 439,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "A unique royal delicacy infused with dried pomegranate arils and rich browned onions."
  },
  {
    id: "mut-16",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Basanthi",
    price: 439,
    type: "nonveg",
    spice: "mild",
    badge: null,
    description: "Rich golden-hued mutton curry infused with saffron, turmeric, and light cream."
  },
  {
    id: "mut-17",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Mutton Saagwala",
    price: 429,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Tender mutton braised in wholesome pureed spinach and garlic tempered ghee."
  },
  {
    id: "mut-18",
    category: "mutton",
    categoryName: "Mutton Delicacies",
    name: "Hariyali Mutton Curry",
    price: 459,
    type: "nonveg",
    spice: "medium",
    badge: null,
    description: "Mutton simmered in fresh green herb masala of coriander, mint, green chilies, and yogurt."
  },

  // ==========================================
  // VEGETARIAN STARTERS
  // ==========================================
  {
    id: "vst-1",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Paneer Tikka",
    price: 139,
    type: "veg",
    spice: "medium",
    badge: "Tandoori Classic",
    description: "Plump cubes of fresh cottage cheese marinated in spiced hung curd and ajwain, grilled with bell peppers and onions."
  },
  {
    id: "vst-2",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Paneer Cigar Rolls",
    price: 169,
    type: "veg",
    spice: "mild",
    badge: "Crispy Favorite",
    description: "Golden flaky rolls stuffed with spiced cottage cheese and herbs, served with sweet chilli dip."
  },
  {
    id: "vst-3",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Kaju Pakoda",
    price: 169,
    type: "veg",
    spice: "medium",
    badge: "Whole Cashew Crisp",
    description: "Whole premium cashews coated in gram flour batter with curry leaves and green chillies, deep-fried crunchy."
  },
  {
    id: "vst-4",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Mushroom Chilli",
    price: 199,
    type: "veg",
    spice: "hot",
    badge: "Indo-Chinese",
    description: "Batter-fried fresh button mushrooms wok-tossed with capsicum, onions, dark soy, and green chillies."
  },
  {
    id: "vst-5",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Mushroom Manchuria",
    price: 199,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Crispy button mushrooms tossed in savoury garlic-ginger Manchurian sauce with spring onions."
  },
  {
    id: "vst-6",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Paneer 65",
    price: 149,
    type: "veg",
    spice: "hot",
    badge: "South Indian Classic",
    description: "Crispy-fried paneer cubes tossed with red chilli paste, mustard seeds, curry leaves, and yogurt."
  },
  {
    id: "vst-7",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Chilli Paneer",
    price: 149,
    type: "veg",
    spice: "hot",
    badge: null,
    description: "Soft paneer cubes wok-tossed with green peppers, onions, soy sauce, and slit green chillies."
  },
  {
    id: "vst-8",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Makhmali Paneer",
    price: 159,
    type: "veg",
    spice: "mild",
    badge: "Velvety Soft",
    description: "Silky soft paneer steeped in cashew paste and clotted cream, delicately grilled in the tandoor."
  },
  {
    id: "vst-9",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Achari Paneer Tikka",
    price: 159,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Paneer cubes infused with tangy pickling spices including mustard seeds, kalonji, and fennel."
  },
  {
    id: "vst-10",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Veg. Spring Rolls",
    price: 139,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Crispy golden fried rolls stuffed with shredded fresh vegetables and oriental seasoning."
  },
  {
    id: "vst-11",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Veg. Shangrila",
    price: 169,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Assorted crispy garden vegetables tossed in tangy sweet-and-spicy exotic sauce."
  },
  {
    id: "vst-12",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Gobi 65",
    price: 109,
    type: "veg",
    spice: "hot",
    badge: "Crisp Favorite",
    description: "Crunchy cauliflower florets spiced with red masala, curry leaves, and green chillies."
  },
  {
    id: "vst-13",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Gobi Manchuria",
    price: 109,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Golden fried cauliflower tossed in our savory ginger, garlic, and coriander Manchurian sauce."
  },
  {
    id: "vst-14",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Baby Corn Manchuria",
    price: 139,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Crisp young baby corn stir-fried with scallions, capsicum, and oriental glaze."
  },
  {
    id: "vst-15",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Aloo 65",
    price: 99,
    type: "veg",
    spice: "hot",
    badge: null,
    description: "Golden spiced potato cubes deep fried crisp and tempered with South Indian spices."
  },
  {
    id: "vst-16",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Aloo Gulzar",
    price: 109,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Delicately herbed and roasted baby potato specialty."
  },
  {
    id: "vst-17",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Veg. Manchuria",
    price: 119,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Vegetable dumplings fried crisp and coated in thick savory Indo-Chinese gravy."
  },
  {
    id: "vst-18",
    category: "veg-starters",
    categoryName: "Veg Starters",
    name: "Garlic Paneer",
    price: 149,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Wok-fried paneer cubes glazed with caramelized golden garlic and spring onions."
  },

  // ==========================================
  // VEGETARIAN GRAVIES & CURRIES
  // ==========================================
  {
    id: "vgv-1",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Gutti Vankaya",
    price: 129,
    type: "veg",
    spice: "hot",
    badge: "Rayalaseema Heritage",
    description: "The crown jewel of Andhra vegetarian cooking: baby brinjals stuffed with roasted peanut, sesame, and coriander seed masala simmered in tangy gravy."
  },
  {
    id: "vgv-2",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Kaju Curry (Khazu Curry)",
    price: 179,
    type: "veg",
    spice: "mild",
    badge: "Royal Delicacy",
    description: "Whole roasted premium cashews simmered in luscious rich golden tomato and cashew cream gravy."
  },
  {
    id: "vgv-3",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Paneer Butter Masala",
    price: 149,
    type: "veg",
    spice: "mild",
    badge: "All-Time Favorite",
    description: "Soft fresh paneer cubes cooked in velvety smooth buttery tomato gravy flavored with kasuri methi."
  },
  {
    id: "vgv-4",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Paneer Shahi Kurma",
    price: 169,
    type: "veg",
    spice: "mild",
    badge: "Royal Mughlai",
    description: "Cottage cheese simmered in rich white cashew, melon seed, and almond gravy scented with saffron and cardamom."
  },
  {
    id: "vgv-5",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Paneer Malai Kofta",
    price: 169,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Melt-in-mouth cottage cheese and potato dumplings served in a creamy, velvety golden curry."
  },
  {
    id: "vgv-6",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Dall Makhani",
    price: 149,
    type: "veg",
    spice: "mild",
    badge: "Slow Cooked",
    description: "Whole black lentils and kidney beans slow-simmered overnight with fresh cream, white butter, and gentle spices."
  },
  {
    id: "vgv-7",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Dall Tadka",
    price: 119,
    type: "veg",
    spice: "medium",
    badge: "Desi Ghee Tempering",
    description: "Yellow toor dal tempered with sizzling desi ghee, cumin seeds, garlic cloves, and dried red chillies."
  },
  {
    id: "vgv-8",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Palak Paneer",
    price: 149,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Fresh garden spinach puree cooked with cubes of cottage cheese, garlic, and cream."
  },
  {
    id: "vgv-9",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Capsicum Masala",
    price: 189,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Crisp bell pepper cubes cooked in roasted sesame, peanut, and coconut spiced gravy."
  },
  {
    id: "vgv-10",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Kadai Mushroom Masala",
    price: 149,
    type: "veg",
    spice: "hot",
    badge: null,
    description: "Fresh button mushrooms wok-tossed with freshly crushed kadai coriander and whole red chillies."
  },
  {
    id: "vgv-11",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Kara Boondhi Kurma",
    price: 129,
    type: "veg",
    spice: "hot",
    badge: "Andhra Special",
    description: "Spicy crisp gram flour boondi simmered in rich coconut, poppy seed, and tomato gravy."
  },
  {
    id: "vgv-12",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Pakoda Kurma",
    price: 169,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Crisp onion fritters soaked in spiced coconut-poppy seed kurma."
  },
  {
    id: "vgv-13",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Veg. Kolhapuri",
    price: 159,
    type: "veg",
    spice: "fiery",
    badge: "Spicy",
    description: "Assorted seasonal garden vegetables tossed in fiery roasted Maharashtrian Kolhapuri red masala."
  },
  {
    id: "vgv-14",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Spice Vegetable Kofta Curry",
    price: 169,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Spiced vegetable dumplings in rich onion-tomato gravy."
  },
  {
    id: "vgv-15",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Baby Corn Curry",
    price: 149,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Crisp golden baby corn simmered in seasoned onion-tomato masala."
  },
  {
    id: "vgv-16",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Rajma Masala",
    price: 159,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Tender red kidney beans slow-simmered in a hearty North Indian spiced gravy."
  },
  {
    id: "vgv-17",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Vegetable Kadai",
    price: 139,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Mixed garden vegetables wok-tossed in robust kadai gravy with bell peppers and roasted spices."
  },
  {
    id: "vgv-18",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Dall Fry",
    price: 109,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Yellow lentils cooked with onions, tomatoes, and ground spices."
  },
  {
    id: "vgv-19",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Alu Palak",
    price: 129,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Diced potatoes cooked with fresh spinach puree, garlic, and cumin."
  },
  {
    id: "vgv-20",
    category: "veg-curries",
    categoryName: "Veg Curries & Gravies",
    name: "Veg. Sagu",
    price: 139,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "South Indian vegetable stew cooked with coconut paste, green chilies, and poppy seeds."
  },

  // ==========================================
  // FRIED RICE & FLAVOURED RICE SELECTION
  // ==========================================
  {
    id: "ric-1",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Special Curd Rice",
    price: 99,
    type: "veg",
    spice: "mild",
    badge: "Comfort Classic",
    description: "Creamy set curd mixed with soft basmati, tempered with mustard seeds, curry leaves, ginger, pomegranate, and cashews."
  },
  {
    id: "ric-2",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Ghee Rice",
    price: 139,
    type: "veg",
    spice: "mild",
    badge: "Desi Ghee Fragrance",
    description: "Fragrant long-grain rice delicately tossed with rich desi ghee, whole spices, and golden roasted cashews."
  },
  {
    id: "ric-3",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Paneer Fried Rice",
    price: 149,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Wok-tossed basmati rice with golden paneer cubes, finely diced crunchy vegetables, and soy seasonings."
  },
  {
    id: "ric-4",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Mushroom Rice",
    price: 149,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Wok-tossed long-grain rice with sauteed fresh button mushrooms, spring onions, and cracked pepper."
  },
  {
    id: "ric-5",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Schezwan Fried Rice",
    price: 159,
    type: "veg",
    spice: "hot",
    badge: "Spicy Indo-Chinese",
    description: "Fiery wok-tossed rice flavored with spicy homemade Schezwan chilli garlic sauce."
  },
  {
    id: "ric-6",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Veg. Fried Rice",
    price: 139,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Classic Chinese-style wok tossed basmati rice loaded with carrots, beans, and cabbage."
  },
  {
    id: "ric-7",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Jeera Rice",
    price: 119,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Basmati rice tempered with roasted cumin seeds and desi ghee."
  },
  {
    id: "ric-8",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Coconut Rice",
    price: 119,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "South Indian flavored rice prepared with freshly grated coconut, mustard seeds, and roasted lentils."
  },
  {
    id: "ric-9",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Tomato Rice",
    price: 119,
    type: "veg",
    spice: "medium",
    badge: null,
    description: "Tangy and spiced rice infused with ripe tomatoes, curry leaves, and mustard temper."
  },
  {
    id: "ric-10",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Lemon Rice",
    price: 129,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Fragrant rice seasoned with fresh lemon juice, turmeric, crunchy roasted peanuts, and green chillies."
  },
  {
    id: "ric-11",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Curd Rice",
    price: 69,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Traditional refreshing homestyle tempered curd rice."
  },
  {
    id: "ric-12",
    category: "rice",
    categoryName: "Rice & Fried Rice",
    name: "Steamed Rice",
    price: 49,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Fluffy piping-hot steamed basmati rice."
  },

  // ==========================================
  // VEG SOUPS
  // ==========================================
  {
    id: "sop-1",
    category: "soups",
    categoryName: "Warm Soups",
    name: "Lemon Coriander Soup",
    price: 59,
    type: "veg",
    spice: "mild",
    badge: "Refreshing",
    description: "Clear aromatic vegetable broth infused with freshly squeezed lemon juice, finely chopped fresh cilantro, and crushed white pepper."
  },
  {
    id: "sop-2",
    category: "soups",
    categoryName: "Warm Soups",
    name: "Sweet Corn Soup",
    price: 59,
    type: "veg",
    spice: "mild",
    badge: "Comforting",
    description: "Thick velvety sweet corn soup with cream-style corn kernels, minced vegetables, and delicate seasoning."
  },
  {
    id: "sop-3",
    category: "soups",
    categoryName: "Warm Soups",
    name: "Veg. Hot & Sour Soup",
    price: 59,
    type: "veg",
    spice: "hot",
    badge: "Zesty & Spicy",
    description: "Spicy and tangy Chinese broth packed with shredded mushrooms, bamboo shoots, tofu, and vinegar punch."
  },
  {
    id: "sop-4",
    category: "soups",
    categoryName: "Warm Soups",
    name: "Tomato Soup",
    price: 39,
    type: "veg",
    spice: "mild",
    badge: "Value Classic",
    description: "Velvety ripe tomato soup served piping hot with golden crunchy buttered croutons."
  },
  {
    id: "sop-5",
    category: "soups",
    categoryName: "Warm Soups",
    name: "Veg. Cantonese Soup",
    price: 59,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Mild, fragrant clear Chinese vegetable soup with crushed ginger and scallions."
  },
  {
    id: "sop-6",
    category: "soups",
    categoryName: "Warm Soups",
    name: "Baby Corn Soup",
    price: 49,
    type: "veg",
    spice: "mild",
    badge: null,
    description: "Delicate wholesome soup with sliced tender baby corn and herbs."
  },
  {
    id: "sop-7",
    category: "soups",
    categoryName: "Warm Soups",
    name: "Schezwan Soup",
    price: 69,
    type: "veg",
    spice: "hot",
    badge: "Fiery",
    description: "Fiery red soup infused with roasted garlic, red chilli oil, and finely diced vegetables."
  }
];

// Gallery Images Metadata (Real Photos)
const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "The Grand Storefront & Welcome",
    category: "storefront",
    categoryName: "Storefront",
    image: "assets/images/facade.png",
    subtitle: "Maharaja Veg & Non-Veg Restaurant",
    description: "A prominent landmark in Nandyala, welcoming families and food connoisseurs for an authentic royal dining experience."
  },
  {
    id: "gal-2",
    title: "Backlit Jali Lattice Family Enclosures",
    category: "booths",
    categoryName: "Royal Booths",
    image: "assets/images/royal-jali-booths.png",
    subtitle: "Intimate, Regal & Private Dining",
    description: "Intricately laser-crafted Jali screens illuminated with warm amber halo backlighting and plush ivory banquet booths."
  },
  {
    id: "gal-3",
    title: "Curved Timber Canopy & Ambient Booths",
    category: "booths",
    categoryName: "Royal Booths",
    image: "assets/images/wooden-canopy-dining.png",
    subtitle: "Architectural Elegance",
    description: "Handcrafted curved timber arch canopies with perimeter halo lighting create an enveloping, luxurious dining atmosphere."
  },
  {
    id: "gal-4",
    title: "Royal Dining Hall & Recessed Lighting Drops",
    category: "dining-hall",
    categoryName: "Dining Hall",
    image: "assets/images/main-dining-hall.png",
    subtitle: "Spacious Family Banquet Hall",
    description: "Illuminated geometric tray ceiling with cyan cove ambient accents, damask gold wallpaper, and handcrafted mahogany seating."
  },
  {
    id: "gal-5",
    title: "Traditional Andhra Biryani Accompaniments",
    category: "cuisine",
    categoryName: "Cuisine & Flavors",
    image: "assets/images/andhra-biryani-feast.png",
    subtitle: "Authentic Rayalaseema Pairings",
    description: "Every biryani is served with fiery Andhra Gongura Pachadi, velvety Mirchi ka Salan, cool raita, fresh lime, and crisp shallots."
  },
  {
    id: "gal-6",
    title: "Mutton Ghee Dum Biryani in Brass Handi",
    category: "cuisine",
    categoryName: "Cuisine & Flavors",
    image: "assets/images/royal-dum-biryani.jpg",
    subtitle: "Signature Culinary Showcase",
    description: "Aged long-grain basmati with succulent baby mutton, infused with pure desi ghee and saffron, presented in engraved brass handi."
  },
  {
    id: "gal-7",
    title: "Live Charcoal Tandoori Platter",
    category: "cuisine",
    categoryName: "Cuisine & Flavors",
    image: "assets/images/tandoori-platter.jpg",
    subtitle: "Clay Oven Charred Kebabs",
    description: "A sizzling assortment of Reshmi Kebabs, Hariyali Tikka, and Seekh Kebabs served with fresh mint chutney and charred lemon."
  }
];

// Guest Reviews
const REVIEWS_DATA = [
  {
    name: "Venkat Raman",
    rating: 5,
    location: "Nandyala Resident",
    review: "The Mutton Ghee Dum Biryani here is arguably the best in the Rayalaseema region. The aroma of pure ghee and the melt-in-mouth mutton is unmatched. Plus, the private jali booths make family dinners very comfortable."
  },
  {
    name: "Sowmya Reddy",
    rating: 5,
    location: "Food Blogger, Kurnool",
    review: "Tried their Naatu Kodi Pulusu and Chicken Family Pack. Authentic Andhra spice levels! The Gongura pachadi served with the biryani is bursting with flavor. Elegant ambiance with great lighting."
  },
  {
    name: "Dr. K. Srinivas",
    rating: 4,
    location: "Verified Diner",
    review: "Regular family dining spot in Padmavathi Nagar. Their Chicken Lollipop Biryani and Paneer Butter Masala are fantastic. Ample seating space, air-conditioned comfort, and very polite service."
  },
  {
    name: "Mohammed Rafi",
    rating: 5,
    location: "Local Guide (500+ reviews)",
    review: "The Clay Pot Mutton Biryani is phenomenal. You can feel the real dum cooking essence in every basmati grain. Clean ambiance and consistent quality for years."
  }
];

import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];
const histories = [
  {
    years: "30+",
    title: "Breakfast Options",
  },
  {
    years: "50+",
    title: "Dinner Options",
  },
  {
    years: "8",
    title: "New Location",
  },
];
const customers = [
  {
    imgUrl: images.customer01,
    imgUrl01: images.quote,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    person: "Wade Warren",
    job: "Sammelier",
  },
  {
    imgUrl: images.customer03,
    imgUrl01: images.quote,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    person: "Jane Cooper",
    job: "Chef",
  },
  {
    imgUrl: images.customer02,
    imgUrl01: images.quote,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    person: "Robert Fox",
    job: "Chef",
  },
  {
    imgUrl: images.customer04,
    imgUrl01: images.quote,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    person: "Brooklyn Simmons",
    job: "Caterer",
  },
];
const updates = [
  {
    imgUrl: images.grills,
    date: "16 Apr 2022",
    person: "-Annalise L",
    title: "tips for prepping and caring for your grill",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    link: "read more",
  },
  {
    imgUrl: images.juice,
    date: "23 May 2021",
    person: "-John Micheal",
    title: "summer cocktails and mocktails",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    link: "read more",
  },
  {
    imgUrl: images.college,
    date: "06 Aug 2022",
    person: "-Fred W",
    title: "easy cooking for college students",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    link: "read more",
  },
];
const chefs = [
  {
    imgUrl: images.chef05,
    chefName: "kevin lou",
    role: "head chef",
    link: "/chefs/chefkev",
  },
  {
    imgUrl: images.chef01,
    chefName: "patrick choi",
    role: "deputy chef",
    link: "/chefs/chefchoi",
  },
  {
    imgUrl: images.chef02,
    chefName: "jack biscoff",
    role: "station chef",
  },
  {
    imgUrl: images.chef03,
    chefName: "aren goodmann",
    role: "junior chef",
  },
  {
    imgUrl: images.chef04,
    chefName: "stacy lee",
    role: "station chef",
  },
  {
    imgUrl: images.chef03,
    chefName: "javier dowsing",
    role: "junior chef",
  },
];

export default {
  wines,
  cocktails,
  awards,
  histories,
  customers,
  updates,
  chefs,
};

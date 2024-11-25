import Plavi from "../assets/listings/plavi.webp";
import Zeleni from "../assets/listings/zeleni.webp";
import Bijeli from "../assets/listings/bijeli.webp";
import zgcosy from "../assets/listings/zgcosy.webp";
import zgzeleni from "../assets/listings/zgzeleni.webp";
import zgljub from "../assets/listings/zgljub.webp";

const listings = [
  {
    id: 1,
    image: Plavi,
    title: "Mali Raj Komiza – Blue Apartment",
    price: "€200",
    location: "Komiza, Vis",
    type: "Apartment / Private Room",
  },
  {
    id: 2,
    image: Zeleni,
    title: "Mali Raj Komiza – Green Apartment",
    price: "€220",
    location: "Komiza, Vis",
    type: "Apartment / Private Room",
  },
  {
    id: 3,
    image: Bijeli,
    title: "Mali Raj Komiza – White Apartment",
    price: "€250",
    location: "Komiza, Vis",
    type: "Apartment / Private Room",
  },
  {
    id: 4,
    image: zgcosy,
    title: "Cozy Apartment on a Main Square",
    price: "€80",
    location: "Downtown, Zagreb",
    type: "Studio / Entire Home",
  },
  {
    id: 5,
    image: zgzeleni,
    title: "Green Apartment on a Main Square",
    price: "€80",
    location: "Downtown, Zagreb",
    type: "Apartment / Entire Home",
  },
  {
    id: 6,
    image: zgljub,
    title: "Purple Apartment on a Main Square",
    price: "€100",
    location: "Downtown, Zagreb",
    type: "Studio / Entire Home",
  },
];

export default listings;
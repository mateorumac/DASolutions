// Imports for the Blue Apartment (mrajPlavi)
import plavi_boravak2 from "../assets/listings/mrajPlavi/plavi boravak2.webp";
import plavi_cijeli_boravak from "../assets/listings/mrajPlavi/plavi cijeli boravak.webp";
import plavi_krevet from "../assets/listings/mrajPlavi/plavi krevet.webp";
import plavi_stol2 from "../assets/listings/mrajPlavi/plavi stol2.webp";
import plavi_tanjuri_zid from "../assets/listings/mrajPlavi/plavi tanjuri zid.webp";
import plavi_tv from "../assets/listings/mrajPlavi/plavi tv.webp";
import plavi_vrt from "../assets/listings/mrajPlavi/plavi vrt.webp";
import plavi_vrt2 from "../assets/listings/mrajPlavi/plavi vrt2.webp";
import plavi_wc from "../assets/listings/mrajPlavi/plavi wc.webp";
import plavi from "../assets/listings/mrajPlavi/plavi.webp";

// Imports for the Green Apartment (mrajZeleni)
import zeleni_soba from "../assets/listings/mrajZeleni/zeleni soba.jpg";
import zeleni_spavaca from "../assets/listings/mrajZeleni/zeleni spavaca.jpg";
import zeleni_boravak from "../assets/listings/mrajZeleni/zeleni boravak.jpg";
import zeleni_brod from "../assets/listings/mrajZeleni/zeleni brod.jpg";
import zeleni_kuhinja2 from "../assets/listings/mrajZeleni/zeleni kuhinja2.jpg";
import zeleni_kupaonica from "../assets/listings/mrajZeleni/zeleni kupaonica.jpg";
import zeleni_kuzina from "../assets/listings/mrajZeleni/zeleni kuzina.jpg";
import zeleni_lusteri from "../assets/listings/mrajZeleni/zeleni lusteri.jpg";
import zeleni_pogled from "../assets/listings/mrajZeleni/zeleni pogled.jpg";
import Zeleni from "../assets/listings/mrajZeleni/zeleni.webp";

// Imports for the White Apartment (mrajBijeli)
import bijeli_taraca from "../assets/listings/mrajBijeli/bijeli taraca.jpg";
import bijeli_tv from "../assets/listings/mrajBijeli/bijeli tv.jpg";
import bijeli_krevet2 from "../assets/listings/mrajBijeli/bijeli krevet2.jpg";
import bijeli_krevet3 from "../assets/listings/mrajBijeli/bijeli krevet3.jpg";
import bijeli_kuhinja from "../assets/listings/mrajBijeli/bijeli kuhinja.jpg";
import bijeli_kuzina from "../assets/listings/mrajBijeli/bijeli kuzina.jpg";
import bijeli_lusteri2 from "../assets/listings/mrajBijeli/bijeli lusteri2.jpg";
import bijeli_ljestve from "../assets/listings/mrajBijeli/bijeli ljestve.jpg";
import bijeli_ribe from "../assets/listings/mrajBijeli/bijeli ribe.jpg";
import bijeli_ruza_tusa from "../assets/listings/mrajBijeli/bijeli ruza tusa.jpg";
import bijeli_spavaca2 from "../assets/listings/mrajBijeli/bijeli spavaca2.jpg";
import bijeli_stolic from "../assets/listings/mrajBijeli/bijeli stolic.jpg";
import Bijeli from "../assets/listings/mrajBijeli/bijeli.webp";

// Other listings
import zgcosy from "../assets/listings/zgcosy.webp";
import zgzeleni from "../assets/listings/zgzeleni.webp";
import zgljub from "../assets/listings/zgljub.webp";

// Updated Listings Array
const listings = [
  {
    id: 1,
    images: [
      plavi,
      plavi_boravak2,
      plavi_cijeli_boravak,
      plavi_krevet,
      plavi_stol2,
      plavi_tanjuri_zid,
      plavi_tv,
      plavi_vrt,
      plavi_vrt2,
      plavi_wc,
    ],
    title: "Mali Raj Komiza – Blue Apartment",
    price: "€200",
    location: "Komiza, Vis",
    type: "Apartment / Private Room",
  },
  {
    id: 2,
    images: [
      Zeleni,
      zeleni_soba,
      zeleni_spavaca,
      zeleni_boravak,
      zeleni_lusteri,
      zeleni_brod,
      zeleni_kuhinja2,
      zeleni_kuzina,
      zeleni_kupaonica,
      zeleni_pogled,
    ],
    title: "Mali Raj Komiza – Green Apartment",
    price: "€220",
    location: "Komiza, Vis",
    type: "Apartment / Private Room",
  },
  {
    id: 3,
    images: [
      Bijeli,
      bijeli_tv,
      bijeli_stolic,
      bijeli_lusteri2,
      bijeli_taraca,
      bijeli_krevet2,
      bijeli_krevet3,
      bijeli_spavaca2,
      bijeli_kuhinja,
      bijeli_kuzina,
      bijeli_ljestve,
      bijeli_ribe,
      bijeli_ruza_tusa,  
    ],
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

import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import addIcon from "./addIcon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import star_icon from "./star_icon.svg";
import check_icon from "./check_icon.svg";
import tick_icon from "./tick_icon.svg";
import delete_icon from "./delete_icon.svg";
import eye_icon from "./eye_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import filter_icon from "./filter_icon.svg";
import edit_icon from "./edit_icon.svg";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import location_icon_colored from "./location_icon_colored.svg";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";
import main_car from "./main_car.png";
import banner_car_image from "./banner_car_image.png";
import user_profile from "./user_profile.png";
import upload_icon from "./upload_icon.svg";
import car_image1 from "./car_image1.png";
import car_image2 from "./car_image2.png";
import car_image3 from "./car_image3.png";
import car_image4 from "./car_image4.png";
import main_banner from "./main_banner.png";
import Royal_Crimson_Lehenga from "./Royal_Crimson_Lehenga.png";
import Midnight_Blue_Gown_Lehenga from "./Midnight_Blue_Gown_Lehenga.png";
import Golden_Choker_Necklace from "./Golden_Choker_Necklace.png";
import earing from "./earing.png";
export const cityList = [
  "Calicut",
  "Kasargod",
  "Kannur",
  "Kochi",
  "Trivandrum",
  "Kollam",
];
export const assets = {
  logo,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  menu_icon,
  search_icon,
  close_icon,
  users_icon,
  edit_icon,
  car_icon,
  location_icon,
  fuel_icon,
  addIcon,
  carIcon,
  carIconColored,
  dashboardIcon,
  dashboardIconColored,
  addIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  calendar_icon_colored,
  location_icon_colored,
  arrow_icon,
  star_icon,
  check_icon,
  tick_icon,
  delete_icon,
  eye_icon,
  eye_close_icon,
  filter_icon,
  testimonial_image_1,
  testimonial_image_2,
  main_car,
  banner_car_image,
  car_image1,
  upload_icon,
  user_profile,
  car_image2,
  car_image3,
  car_image4,
  main_banner,
  Royal_Crimson_Lehenga,
  Midnight_Blue_Gown_Lehenga,
  Golden_Choker_Necklace,
  earing,
};
export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "My Bookings", path: "/my-booking" },
];
export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: dashboardIcon,
    coloredIcon: dashboardIconColored,
  },
  {
    name: "Add Product",
    path: "/owner/add-car",
    icon: addIcon,
    coloredIcon: addIconColored,
  },
  {
    name: "Manage Product",
    path: "/owner/manage-cars",
    icon: carIcon,
    coloredIcon: carIconColored,
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: listIcon,
    coloredIcon: listIconColored,
  },
];
export const dummyUserData = {
  _id: "6847f7cab3d8daecdb517095",
  name: "Arun",
  email: "admin@example.com",
  role: "owner",
  image: user_profile,
};
export const dummyCarData = [
  {
    _id: "67ff5bc069c03d4e45f30b77",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    category: "Lehenga",
    size: "M",
    material: "Velvet",
    color: "Crimson Red",
    occasion: "Wedding",
    image: Royal_Crimson_Lehenga,
    name: "Royal Crimson Lehenga",
    pricePerDay: 1000,
    location: "Calicut",
    description:
      "Deep crimson velvet with golden embroidery. Perfect for weddings and grand celebrations.",
    fullDescription:
      "Royal Crimson Lehenga is a beautifully crafted lehenga designed to make you shine at weddings. Made from premium velvet, it combines comfort with elegance, ensuring you feel confident while looking stylish. The crimson red hue adds a rich and vibrant touch, perfect for creating a lasting impression. Each detail, from the golden embroidery to the flawless finishing, reflects meticulous craftsmanship. Ideal for festive celebrations, pairing it with matching accessories completes a regal look.",
    isAvailable: true,
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: "67ff6b758f1b3684286a2a65",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    category: "Gown",
    size: "L",
    material: "Silk",
    color: "Midnight Blue",
    occasion: "Evening Party",
    image: Midnight_Blue_Gown_Lehenga,
    name: "Midnight Blue Gown Lehenga",
    pricePerDay: 900,
    location: "kannur",
    description:
      "Flowing silk gown with sequin details. Ideal for evening parties and receptions.",
    fullDescription:
      "Midnight Blue Gown Lehenga is a stunning silk gown perfect for evening parties and receptions. Its flowing fabric and sequin details create a glamorous and elegant look, making you the center of attention. The midnight blue shade adds sophistication, while the soft silk material ensures comfort throughout the event. Pair with stylish accessories to complete your evening ensemble.",
    isAvailable: true,
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    _id: "67ff6b9f8f1b3684286a2a68",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    category: "Necklace",
    size: "One Size",
    material: "Gold-Plated",
    color: "Gold",
    occasion: "Festive/Wedding",
    image: Golden_Choker_Necklace,
    name: "Golden Choker Necklace",
    pricePerDay: 1500,
    location: "Trivandrum",
    description:
      "Traditional gold-plated choker with filigree design. Complements ethnic outfits beautifully.",
    fullDescription:
      "Golden Choker Necklace is a traditional gold-plated piece featuring intricate filigree design, perfect for festive and wedding occasions. Its elegant craftsmanship complements ethnic outfits, adding a touch of luxury and sophistication. Lightweight and stylish, it can be paired with matching earrings or bangles to complete your festive look.",
    isAvailable: true,
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e34",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    category: "Earrings",
    size: "One Size",
    material: "Pearls & Gold",
    color: "White",
    occasion: "Festive/Wedding",
    image: earing,
    name: "Pearl Drop Earrings",
    pricePerDay: 209,
    location: "Kollam",
    description:
      "Elegant pearls with gold accents. Subtle touch for festive or wedding wear.",
    fullDescription:
      "Pearl Drop Earrings feature elegant pearls accented with gold, making them perfect for festive or wedding occasions. Their delicate design adds a subtle touch of sophistication to any outfit. Lightweight and versatile, these earrings can be paired with necklaces or traditional attire to enhance your overall look.",
    isAvailable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
];

export const dummyMyBookingsData = [
  {
    _id: "68482bcc98eb9722b7751f70",
    product: dummyCarData[0],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-13T00:00:00.000Z",
    returnDate: "2025-06-14T00:00:00.000Z",
    status: "confirmed",
    price: 1000,
    createdAt: "2025-06-10T12:57:48.244Z",
  },
  {
    _id: "68482bb598eb9722b7751f60",
    product: dummyCarData[1],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-12T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "pending",
    price: 900,
    createdAt: "2025-06-10T12:57:25.613Z",
  },
  {
    _id: "684800fa0fb481c5cfd92e56",
    product: dummyCarData[2],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-11T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "pending",
    price: 1500,
    createdAt: "2025-06-10T09:55:06.379Z",
  },
  {
    _id: "6847fe790fb481c5cfd92d94",
    product: dummyCarData[3],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-11T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "confirmed",
    price: 209,
    createdAt: "2025-06-10T09:44:25.410Z",
  },
];
export const dummyDashboardData = {
  totalProduct: 4,
  totalBooking: 2,
  pendingBooking: 0,
  completedBookings: 2,
  recentBooking: [dummyMyBookingsData[0], dummyMyBookingsData[1]],
  monthlyRevenue: 1900,
};

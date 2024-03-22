import { PATHS, TYPES_OPTIONS } from "./constants";

export const steps = [
  {
    text: "Planes y coberturas",
    path: PATHS.PLANS,
  },
  {
    text: "Resumen",
    path: PATHS.SUMMARY,
  },
];

export const options = [
  {
    title: "Para mi",
    subTitle: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    imageUrl: "./images/protection-light.svg",
    type: TYPES_OPTIONS.FOR_ME,
  },
  {
    title: "Para alguien más",
    subTitle:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    imageUrl: "./images/add-user-light.svg",
    type: TYPES_OPTIONS.FOR_SOMEONE,
  },
];

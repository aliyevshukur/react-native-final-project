import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, SvgXml } from "react-native-svg";
import COLORS from "../../styles/colors";

export const CustomSvg = ({ style, name, gradient }) => {
  const svgInfo = {
    coins: {
      color: style && style.color ? style.color : "#FFF1DC",
      viewBox: "0 0 512 512",
      d:
        "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z",
    },
    coffee: {
      color: style && style.color ? style.color : "#FFF1DC",
      viewBox: "0 0 512 512",
      d:
        "M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z",
    },
    wifi: {
      color: style && style.color ? style.color : "#FFF1DC",
      viewBox: "0 0 640 512",
      d:
        "M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z",
    },
    thermometer: {
      color: style && style.color ? style.color : "#FFF1DC",
      viewBox: "0 0 256 512",
      d:
        "M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z",
    },
    bath: {
      color: style && style.color ? style.color : "#FFF1DC",
      viewBox: "0 0 512 512",
      d:
        "M32 384a95.4 95.4 0 0032 71.09V496a16 16 0 0016 16h32a16 16 0 0016-16v-16h256v16a16 16 0 0016 16h32a16 16 0 0016-16v-40.91A95.4 95.4 0 00480 384v-48H32zm464-128H80V69.25a21.26 21.26 0 0136.28-15l19.27 19.26c-13.13 29.88-7.61 59.11 8.62 79.73l-.17.17a16 16 0 000 22.59l11.31 11.31a16 16 0 0022.63 0L283.31 81.94a16 16 0 000-22.63L272 48a16 16 0 00-22.62 0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62l-19.26-19.27A69.25 69.25 0 0032 69.25V256H16a16 16 0 00-16 16v16a16 16 0 0016 16h480a16 16 0 0016-16v-16a16 16 0 00-16-16z",
    },
    star: {
      color: style && style.color ? style.color : "#FFF1DC",
      viewBox: "0 0 576 512",
      d:
        "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
    },
    heartEmpty: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d:
        "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z",
    },
    heartFull: {
      color: style && style.color ? style.color : "red",
      viewBox: "0 0 512 512",
      d:
        "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
    },
    location: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 384 512",
      d:
        "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
    },
    walking: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 320 512",
      d:
        "M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z",
    },
    chevronLeft: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 320 512",
      d:
        "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
    },
    chevronRight: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 320 512",
      d:
        "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
    },
    times: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 352 512",
      d:
        "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    },
    check: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d:
        "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
    },
    hSquare: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 448 512",
      d:
        "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-112 48h-32c-8.837 0-16 7.163-16 16v80H160v-80c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v224c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-80h128v80c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V144c0-8.837-7.163-16-16-16z",
    },
    infoCircle: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d:
        "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
    },
    signOut: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d:
        "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z",
    },
    creditCard: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 576 512",
      d:
        "M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z",
    },
    lifeRing: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d:
        "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0145.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0145.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 01-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 01-45.255 45.255z",
    },
    piggyBank: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 576 512",
      d:
        "M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z",
    },
    setting: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d:
        "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",
    },
    home: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 576 512",
      d:
        "M280.37 148.26L96 300.11V464a16 16 0 0016 16l112.06-.29a16 16 0 0015.92-16V368a16 16 0 0116-16h64a16 16 0 0116 16v95.64a16 16 0 0016 16.05L464 480a16 16 0 0016-16V300L295.67 148.26a12.19 12.19 0 00-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 00-12-12h-56a12 12 0 00-12 12v72.61L318.47 43a48 48 0 00-61 0L4.34 251.47a12 12 0 00-1.6 16.9l25.5 31A12 12 0 0045.15 301l235.22-193.74a12.19 12.19 0 0115.3 0L530.9 301a12 12 0 0016.9-1.6l25.5-31a12 12 0 00-1.7-16.93z",
    },
    search: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d:
        "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
    },
    bell: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 448 512",
      d:
        "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z",
    },
    user: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 448 512",
      d:
        "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
    },
    filter: {
      color: style && style.color ? style.color : "#FFFFFF",
      viewBox: "0 0 512 512",
      d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",
    },
  };

  const xml = `
                <svg width="100%" height="100%" viewBox="${svgInfo[name].viewBox}">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="url(#gradient)"
                    d="${svgInfo[name].d}"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"

                      gradient-units="userSpaceOnUse">
                      <stop offset="0" stop-color="${COLORS.gradientOrange}" />
                      <stop offset="0.5" stop-color="${COLORS.gradientPink}" />
                    </linearGradient>
                  </defs>
                </svg>
    `;

  return (
    <View style={[styles.container, style]}>
      {gradient ? (
        <SvgXml xml={xml} width={"100%"} height={"100%"} />
      ) : (
        <Svg viewBox={svgInfo[name].viewBox} width="100%" height="100%">
          <Path fill={svgInfo[name].color} d={svgInfo[name].d}></Path>
        </Svg>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

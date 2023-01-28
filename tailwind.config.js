module.exports = {
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ash: {
          default: "#393E46",
          dark: "#222831",
          deep: "#040505",
          primary: "#434343",
          landing: "#707070",
          landing_header: "#393e46",
          light: "#2228314C",
          1200: "#32325d",
          1300: "#2228317F",
        },
        yellow: {
          moreLight: "#FAF2DB",
          light: "#efc398",
          midlight: "#E0AD1F",
          primary: "#E4801D",
        },
        offgray: "#171d26",
        faqTitle: "#00FFFF",
        btn: "#595959",
        gray: {
          100: "#E8E8E8",
          200: "#DEDEDE",
          500: "#CECECE",
          700: "#7E7E7E",
          900: "#707070",
          1000: "#4c4c4c",
          1100: "#C2C2C2",
          1200: "#505050",
          1300: "#3B5441",
          1400: "#F2F2F2",
          1500: "#BBBBBB",
          1600: "#212121",
          soft: "#EBF3FF",
          light: "#656565",
          dark: "#4A5A63",
          default: "#E8E8E8",
          1700: "#8E8E8E",
          1800: "#B0BCC8",
          1900: "#747474",
          2000: "#F1F2F6",
          2100: "#CFD9DE",
          2200: "#D4D4D4",
          2300: "#050505",
        },
        blue: {
          soft: "#D1ECFF",
          default: "#0A82D5",
          dark: "#3B7193",
          light: "#BFE1FF",
          linkedin: "#0A66C2",
          mainlyblue: "#eef3f8",
          1000: "#265198",
        },
        offwhite: {
          100: "#F3F2F2",
          200: "#F2F2F2",
          300: "#C2C2C2",
          400: "#F8F8F8",
          500: "#919498",
          600: "#CBCBCB",
          700: "#F1F2F6",
          800: "#FCFCFC",
        },
        red: {
          // soft: '#FFD6D6',
          moreLightness: "#FFD6D6",
          morelight: "#EFA7A7",
          soft: "#F44336",
          lightness: "#E05252",
          light: "#FFD5D5",
          midlight: "#FF5959",
          default: "#D93535",
          dark: "#BF1010",
          deep: "#A22A2A",
          darker: "#d72323",
          1000: "#9D1616",
          1100: "#A22A2A",
          1200: "#D82E3D",
        },
        green: {
          100: "#C6D9AE",
          200: "#FFD9BF",
          light: "#ABD2B6",
          default: "#3DBB61",
          dark: "#3A572B",
          1000: "#00CC44",
          1100: "#8DB230",
          1200: "#DDE8C0",
          1300: "#6E9C2E",
          1400: "#24B273",
          gossamer: "#7FA12F",
          1500: "#314317",
          1600: "#A1C749",
        },
        lime: {
          default: "#8CC53F",
          light: "#82A159",
        },
        orange: {
          100: "#FED788",
          200: "#FFD9BF",
          900: "#805124",
          600: "#E4801D",
          300: "#EFB377",
          soft: "#FFDFC7",
          default: "#FCBB0A",
          dark: "#E4801D",
          light: "#ff9833",
          lightness: "#f96d00",
        },
        purple: {
          light: "#D7C5FF",
          midlight: "#7D80BD",
          default: "#8C57FF",
          1000: "#474481",
          1100: "#5E89D4",
          1200: "#424658",
        },
        earth: {
          light: "#DBCDC1",
          default: "#9F6D3F",
        },
        dark: {
          100: "#222831",
          1000: "#222831",
          200: "#595959",
          300: "#171D26",
        },
      },
      spacing: {
        2.5: "0.625rem",
        13: "3.125rem",
        13.3: "3.3rem",
        15: "3.75rem",
        26: "6.25rem",
        34: "8.75rem",
        38: "9.558rem",
        54: "13.438rem",
        62: "15.875rem",
        98: "26.625rem",
        99: "29.438rem",
        116: "30rem",
        120: "34.563rem",
        4.1: "1.125rem",
        5.4: "1.4375rem",
        17: "4.125rem",
        17.25: "4.25rem",
        17.8: "4.875rem",
        21: "1.875rem",
        100: "35%",
        "15/15": "15%",
        101: "11%",
        102: "7%",
      },
      margin: {
        1.3: "0.3125rem",
        7.2: "1.875rem",
        5.8: "1.8125rem",
        15: "3.75rem",
        21: "5.9375rem",
        21.6: "5.625rem",
        21.8: "6.875rem",
        22: "5.5rem",
        23: "-5.5rem",
        69: "14.5rem",
        70: "17rem",
        100: "26.25rem",
        101: "3%",
      },
      width: {
        7.2: "1.875rem",
        10.1: "2.625rem",
        12.1: "3.125rem",
        13: "3.125rem",
        16.5: "4.5625rem",
        24.5: "6.25rem",
        33: "7.1rem",
        37: "9.375rem",
        38: "9.5rem",
        46: "11.5625rem",
        47: "11.72875rem",
        97: "25rem",
        98: "25.75rem",
        65: "16.875rem",
        100: "28.75rem",
        101: "29.375rem",
        102: "30.625rem",
        103: "37.5rem",
        105: "39.188rem",
        106: "43.125rem",
        109: "62.5rem",
        110: "33.333333%",
        111: "47.333333%",
        104: "25.333333%",
        105: "32%",
        180: "11.25rem",
        15: "3.75rem",
      },
      height: {
        7.2: "1.875rem",
        10.1: "2.625rem",
        12.1: "3.125rem",
        13: "3.125rem",
        17: "4.375rem",
        17.6: "4.6875rem",
        22: "5.5rem",
        86: "22.75rem",
        87: "23.438rem",
        96.8: "29rem",
        116: "30rem",
        118: "32rem",
        98: "34.375rem",
        100: "40rem",
        105: "57.188rem",
        106: "67.5rem",
        15: "3.75rem",
        "1.9/2": "90%",
        "1.9.3/2": "93%",
        "1.9.4/2": "94%",
      },
      transitionDuration: {
        800: "800ms",
        900: "900ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
      transitionDelay: {
        2000: "2000ms",
      },
      fontSize: {
        md: "1rem",
        "33px": "2.063rem",
        "50px": "3.125rem",
      },
      zIndex: {
        2: -1,
        0: 0,
        1: 1,
        3: 3,
        10: 10,
        11: 11,
        9: 9,
        20: 20,
        30: 30,
        31: 31,
        32: 32,
        40: 40,
        50: 50,
        25: 25,
        75: 75,
        99: 99,
        100: 100,
        9999: 9999,
        99999: 99999,
        999999: 999999,
        auto: "auto",
      },
      inset: {
        1.8: "0.4rem",
      },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        inherit: "inherit",
        none: "none",
        2: "2 2 0%",
      },
      fontFamily: {
        neuton: ["Neuton"],
        myriad: ["Proxima Nova"],
        roboto: ["Roboto"],
        sans: ["Roboto"],
      },
      boxShadow: {
        "3xl": "0 10px 15px -3px rgba(0, 0, 0, 0)",
      },
      screens: {
        "m-xl": "1360px",
        smallDesktop: "1440px",
        desktop: "1600px",
        largeDesktop: "1690px",
        bigScreen: "2299px",
        moreBigScreen: "2300px",
        standardDevice: "1920px",
        // => @media (min-width: 1600px) { ... }
      },
      opacity: {
        10.6: "0.16",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
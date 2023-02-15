export type Sizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  "1x": number;
  "2x": number;
  "3x": number;
  "4x": number;
  "5x": number;
};

export const fontSizes: Sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  "1x": 20,
  "2x": 24,
  "3x": 30,
  "4x": 40,
  "5x": 50,
};

export const spacing: Sizes = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  "1x": 20,
  "2x": 24,
  "3x": 30,
  "4x": 40,
  "5x": 50,
};

export const materialColors = {
  red: {
    bg: "#EE9A9A",
    text: "#D32F2F",
  },
  pink: {
    bg: "#f48fb1",
    text: "#c2185b",
  },
  purple: {
    bg: "#ce93d8",
    text: "#7b1fa2",
  },
  deepPurple: {
    bg: "#b39ddb",
    text: "#512da8",
  },
  indigo: {
    bg: "#9fa8da",
    text: "#303f9f",
  },
  blue: {
    bg: "#90caf9",
    text: "#1976d2",
  },
  lightBlue: {
    bg: "#81d4fa",
    text: "#0288d1",
  },
  cyan: {
    bg: "#80deea",
    text: "#0097a7",
  },
  teal: {
    bg: "#80cbc4",
    text: "#00796b",
  },
  green: {
    bg: "#a5d6a7",
    text: "#388e3c",
  },
  lightGreen: {
    bg: "#c5e1a5",
    text: "#689f38",
  },
  lime: {
    bg: "#e6ee9c",
    text: "#afb42b",
  },
  yellow: {
    bg: "#fff59d",
    text: "#fbc02d",
  },
  amber: {
    bg: "#ffe082",
    text: "#ffa000",
  },
  orange: {
    bg: "#ffcc80",
    text: "#f57c00",
  },
  deepOrange: {
    bg: "#ffab91",
    text: "#e64a19",
  },
  brown: {
    bg: "#bcaaa4",
    text: "#5d4037",
  },
  grey: {
    bg: "#eeeeee",
    text: "#616161",
  },
  blueGrey: {
    bg: "#b0bec5",
    text: "#455a64",
  },
};

export const statusColor = {
  info: "#079CFB",
  warn: "#CB973D",
  error: "#C82B05",
  success: "#25993D",
};
const statusColors = {
  Processing: materialColors.brown,
  Cancelled: materialColors.blueGrey,
  Completed: materialColors.green,
  Pending: materialColors.blueGrey,
  Closed: materialColors.red,
  Active: materialColors.green,
  Inactive: materialColors.red,
  Paused: materialColors.grey,
  Draft: materialColors.grey,
  Verified: materialColors.green,
  Landlord: materialColors.blue,
  Tenant: materialColors.green,
  "Service provider": materialColors.purple,
  Processing: materialColors.purple,
  Hired: materialColors.blue,
  Closed: materialColors.red,
  Declined: materialColors.red,
};

export const createTheme = (isDarkMode: boolean) => {
  const theme = {
    isDarkMode,
    colors: {
      primary: "#2857FF",
      secondary: "#38B0DD",
      black: "black",
      white: "white",
      danger: "#E83F36",
      warn: "#FEBC2E",
      success: "#5AB601",
      textColor: isDarkMode ? "white" : "black",
      alterTextColor: isDarkMode ? "black" : "white",
      secondaryTextColor: isDarkMode ? "#E0E0E1" : "#B8B8B9",
      lightTextColor: isDarkMode ? "#E0E0E1" : "#B8B8B9",
      pageBackgroundColor: isDarkMode ? "#1F1F1F" : "white",
      pageDimBackgroundColor: isDarkMode ? "#3D3D3D" : "#F8F6FA",
      sectionHeaderBackground: isDarkMode ? "#3D3D3D" : "#F9FAFF",
      bannerBackgroundColor: isDarkMode ? "#393939" : "#38B0DD",
      borderColor: isDarkMode ? "#525252" : "#C1C1C1",
      whiteDim: "#E0E0E1",
      blackDim: "#21252B",
      transparent: "transparent",
      lightPrimary: "#add8e6",
      lightGrey: "#ddd",
      primaryTextColor: "#788093",
      listBackground: "#f9fafc",
      primaryBackground: "#f9fafc",
      lightBlue: "#d9ebfc",
      purpleBlue: "#007fff",
      lightGreen: "#c7f4e6",
      darkGreen: "#00de90",
      lightYellow: "#faeec2",
      darkYellow: "#ffc500",
      lightRed: "#fad0d2",
      darkRed: "#ff0505",
      white2: "#f2f2f2",
      primaryButton: "#007fff",
      lightGrey2: "#AEB8CF",
      whiteGrey: "#EFF1F5",
      whiteGreen: "#F0FCF8",
      greyBlack: "#576874",
      yellowWhite: "#FAF1CE",
    },
    statusColors,
    materialColors,
    fontSizes,
    spacing,
  };

  return theme;
};

const theme = createTheme(false);
export type ThemeType = typeof theme;

export const LightenDarkenColor = (col, amt) => {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  var g = (num & 0x0000ff) + amt;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

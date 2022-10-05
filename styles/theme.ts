import { extendTheme } from "@chakra-ui/react";
import "@fontsource/oooh-baby";
import "@fontsource/poppins";
import "@fontsource/poly";
import "@fontsource/rancho";
import "@fontsource/niconne";

const textStyles = {
  h2: {
    fontSize: ["36px", "48px"],
    fontWeight: "semibold",
    lineHeight: "110%",
  },
};

const fonts = {
  body: `"Poppins"`,
  heading: `"Oooh Baby"`,
};

const theme = extendTheme({
  colors: {
    brand: {
      100: "#7c6e63",
      200: "#",
    },
  },
  fonts,
  textStyles,
});

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme(theme);

// export our theme
export default customTheme;

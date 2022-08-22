import { MantineThemeOverride } from "@mantine/core"
import { colors } from "./colors"

export const other = {
    colors: {
        white: "#ffffff"
    },
    spacing: {
        xxl: "3rem",
        xxxl: "4.5rem",
        xxxxl: "5.5rem"
    }
}

export const theme: MantineThemeOverride = {
    // Theme is deeply merged with default themef
    colors: {
        dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            colors.black,
            '#0c0d21',
            '#01010a',
        ],
    },
    colorScheme: 'dark',
    primaryColor: colors.black,
    primaryShade: 0,
    fontFamily: 'Poppins, sans-serif',
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
    breakpoints: {
        sm: 875,
        md: 1079
    },

    shadows: {
        // other shadows (xs, sm, lg) will be merged from default theme
        md: '1px 1px 3px rgba(0,0,0,.25)',
        xl: '5px 5px 3px rgba(0,0,0,.25)',
    },

    headings: {

        sizes: {
            h1: { fontSize: 34 },
            h2: { fontSize: 26 },
            h3: { fontSize: 22 },
            h4: { fontSize: 20 },
            h5: { fontSize: 16 },
            h6: { fontSize: 12 },
        },
    },

}
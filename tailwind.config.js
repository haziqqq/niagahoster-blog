module.exports = {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      // Container
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '10rem',
        },
      },

      // Colors
      colors: {
        'primary': {
          hosterBlue: '#007DFF',
          darkBlue: '#0057B2',
          lightBlue: '#E0EFFF',
        },
        'secondary': {
          orange: '#FF9800',
          darkOrange: '#C77700',
          lightOrange: '#FFE082',
        },
        'other': {
          border: '#C4C4C4',
          divider: '#E0E0E0',
          backdrop: '#808080',
        },
        'errorState': {
          red: '#F44336',
          darkRed: '#A83232',
          lightRed: '#FBB2B2',
        },
        'successState': {
          green: '#00BFA6',
          darkGreen: '#00897B',
          lightGreen: '#ADEBE3',
        },
        'warningState': {
          yellow: '#FFC721',
          darkYellow: '#FFB547',
          lightYellow: '#FFEDB8',
        },
        'textColor': {
          primary: '#29384E',
          secondary: '#546071',
          secondary2: '#A9AFB8',
          disable: '#A9AFB8',
        },
        'background': {
          white: '#FFFFFF',
          blackSolid: '#121212',
          verySoftBlue: '#F5FAFF',
          veryDarkBlue: '#22273C',
        },
        'miscellaneous': {
          brightBlue: '#2199FA',
          softPink: '#2199FA',
          softBlue: '#2199FA',
          softGrey: '#2199FA',
          gradientBlue1: '#0094FF',
          gradientBlue2: '#007DFF',
          gradientBlue3: '#026CE8',
        },
        'shade': {
          b80: '#121212',
        },
        'btn': {
          primaryState: '#FF9800',
          hoverState: '#F39100',
          pressedState: '#DD8400',
          disableState: '#ECECEC',
          neutralState: '#FFFFFF',
          neutralHover: '#FFF5E6',
          neutralPressed: '#FFEACC',
          destructiveState: '#F43636',
          destructiveHover: '#E13030',
          destructivePressed: '#C92D2D',
          successState: '#00BFA6',
          successHover: '#00AD96',
          successPressed: '#019B86',
          textStateHover: '#F2F2F2',
          textStatePressed: '#EDEDED',
        }
      },

      // FontSize
      fontSize: {
        'h1': ['3.5rem', {
          lineHeight: '4rem',
        }],
        'h2': ['2.5rem', {
          lineHeight: '3.5rem',
          letterSpacing: '-0.02em',
        }],
        'h3': ['2rem', {
          lineHeight: '2.625rem',
        }],
        'h4': ['1.75rem', {
          lineHeight: '2.25rem',
        }],
        'h5': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '0.0025em',
        }],
        'h6': ['1.25rem', {
          lineHeight: '1.625rem',
          letterSpacing: '0.005em',
        }],
        'h7': ['1.125rem', {
          lineHeight: '1.688rem',
          letterSpacing: '0.02em',
        }],
        'h8': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'sub-1': ['1.5rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'sub-2': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'sub-2': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'sub-3': ['1.125rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'sub-4': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'sub-5': ['0.875rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'sub-6': ['0.75rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'body-1': ['1.25rem', {
          lineHeight: '2.125rem',
          letterSpacing: '0.005em',
        }],
        'body-2': ['1.125rem', {
          lineHeight: '2rem',
          letterSpacing: '0.005em',
        }],
        'body-3': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'body-4': ['0.875rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'body-5': ['0.75rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.005em',
        }],
        'body-3-alt': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.02em',
        }],
        'body-4-alt': ['0.875rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.02em',
        }],
        'body-5-alt': ['0.75rem', {
          lineHeight: '1.5rem',
        }],
        'button-1': ['1.25rem', {
          lineHeight: '2rem',
          letterSpacing: '0.02em',
        }],
        'button-2': ['1.125rem', {
          lineHeight: '2rem',
          letterSpacing: '0.02em',
        }],
        'button-3': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.02em',
        }],
        'button-4': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.02em',
        }],
        'button-5': ['0.875rem', {
          lineHeight: '1rem',
          letterSpacing: '0.02em',
        }],
        'caption-1': ['0.875rem', {
          lineHeight: '1rem',
          letterSpacing: '0.02em',
        }],
        'caption-2': ['0.75rem', {
          lineHeight: '1rem',
          letterSpacing: '0.02em',
        }],
        'overline': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.04em',
        }],
      },

      // Border Radius
      borderRadius: {
        '4xl': '1.875rem',
        '5xl': '2.5rem',
      }
    },
  },
  variants: {
    display: ["group-hover"]
  },
  plugins: [],
}

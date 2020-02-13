
export const COLOR_BLUE_ZODIAC = '#424757'
export const COLOR_LICORICE = '#333744'
export const COLOR_WHITE = '#FFFFFF'

export const lightTheme = {
  body: COLOR_WHITE,
  navbar: {
    background: COLOR_LICORICE,
    color: COLOR_WHITE,
  },
  button: {
    background: COLOR_BLUE_ZODIAC,
    color: COLOR_WHITE,
    active: {
      background: COLOR_WHITE,
      color: COLOR_BLUE_ZODIAC,
    },
    hover: {
      background: COLOR_BLUE_ZODIAC,
      color: COLOR_WHITE,
    },
  },
  text: COLOR_BLUE_ZODIAC,
  toggleBorder: COLOR_WHITE,
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
  body: COLOR_BLUE_ZODIAC,
  navbar: {
    background: COLOR_LICORICE,
    color: COLOR_WHITE,
  },
  button: {
    background: COLOR_WHITE,
    color: COLOR_BLUE_ZODIAC,
    active: {
      background: COLOR_BLUE_ZODIAC,
      color: COLOR_WHITE,
    },
    hover: {
      background: COLOR_WHITE,
      color: COLOR_BLUE_ZODIAC,
    },
  },
  text: COLOR_WHITE,
  toggleBorder: COLOR_LICORICE,
  gradient: 'linear-gradient(#091236, #1E215D)',
}

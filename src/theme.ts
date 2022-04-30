import { ThemeOptions } from '@mui/material/';

export const lightTheme: ThemeOptions = {
  palette: {
    primary: {
      light: '#5c667a',
      main: '#323c4e',
      dark: '#0b1626',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9bb1ff',
      main: '#6482f5',
      dark: '#2156c1',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#f6f6f6',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: ['Arial'].join(','),
  },
  custom: {
    palette: {
      graphColorOne: {
        light: '#5c667a',
        main: '#323c4e',
        dark: '#0b1626',
      },
      graphColorTwo: {
        light: '#9bb1ff',
        main: '#6482f5',
        dark: '#2156c1',
      },
      history: {
        summaryBorder: '#e0e0e0',
      },
    },
    size: {
      drawerWidthOpen: 260,
      drawerWidthClosed: 70,
      navBarHeight: 60,
    },
    transition: {
      drawerTransition: 'all 0.25s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...lightTheme,
  palette: {
    primary: {
      light: '#9bb1ff',
      main: '#6482f5',
      dark: '#2156c1',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },
    background: {
      paper: '#383838',
      default: '#181818',
    },
    mode: 'dark',
  },
  custom: {
    ...lightTheme.custom,
    palette: {
      graphColorOne: {
        light: '#9bb1ff',
        main: '#6482f5',
        dark: '#2156c1',
      },
      graphColorTwo: {
        light: '#9bb1ff',
        main: '#6482f5',
        dark: '#2156c1',
      },
      history: {
        summaryBorder: '#515151',
      },
    },
  },
};

export const thirdTheme: ThemeOptions = {
  ...lightTheme,
  palette: {
    primary: {
      light: '#BFD8BD',
      main: '#98C9A3',
      dark: '#77BFA3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#E2E4F6',
      main: '#797596',
      dark: '#1C1F33',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#f6f6f6',
    },
    mode: 'light',
  },
  custom: {
    ...lightTheme.custom,
    palette: {
      graphColorOne: {
        light: '#BFD8BD',
        main: '#82AC8B',
        dark: '#62856A',
      },
      graphColorTwo: {
        light: '#E2E4F6',
        main: '#797596',
        dark: '#1C1F33',
      },
      history: {
        summaryBorder: '#515151',
      },
    },
  },
};

import { GlobalStyles as MuiGlobalStyles } from '@mui/material';
import { createStyles, ThemeProvider, styled } from '@mui/material/styles';

export const GlobalStyles = styled(MuiGlobalStyles)(
  ({ theme }) =>
    createStyles({
      body: {
        backgroundColor: theme.palette.background.default,
      },
    })
);

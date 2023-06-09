
import { TextField, Container } from '@mui/material';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch }) => {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:'50px',
      width:'400px',
      padding: '10px',
      margin: '30px auto 30px',
      '@media (max-width: 600px)': {
        width:'300px',
      },
    }}>
      <TextField
        label="Search"
        id="outlined-size-small"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onInput={handleSearch}
        size="small"
        sx={{
          "& fieldset": { border: 'none' },
          borderRadius: 3,
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          '& input': { disableUnderline: true },
        }}
      />
    </Container>
  );
};

export default SearchBar;

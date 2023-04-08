import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type TextFieldPropsWithName = TextFieldProps & {
  name: string;
  label: string;
};

const Textfield = ({ name, label, ...rest }: TextFieldPropsWithName) => (
  <TextField
    label={label}
    name={name}
    fullWidth
    margin="normal"
    {...rest}
  />
);

export default Textfield;

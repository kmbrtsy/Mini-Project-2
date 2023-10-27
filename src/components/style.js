import { Paper, styled } from "@mui/material";


export const flexJustCenter={
  display: 'flex',
  justifyContent: 'center'
};

export const flexAlignCenter={
  display: 'flex',
  alignItems: 'Center'
};


//item
export const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
}));

// Popular Picks
export const popPickStyle={
  height: '25vh',
  backgroundColor: '#39A848',
  margin: '0'
};  
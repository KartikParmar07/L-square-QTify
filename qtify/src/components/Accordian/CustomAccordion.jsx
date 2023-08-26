import React from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';
import {ReactComponent as ExpandMoreIcon} from '../../assets/ExpandIcon.svg';

// Custom styles for AccordionSummary
const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  '&.Mui-expanded': {
    backgroundColor: 'black',
  },
  border: '1px solid white', // Set the border
  borderRadius: '10px', // Set the border radius
}));

export default function CustomAccordion() {
  return (
    <div>
      <Accordion sx={{
          marginBottom: '20px', // Add margin to create space
        }}>
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ height: '78px', width:'1000px' }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
          marginBottom: '20px', // Add margin to create space
        }}>
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ height: '78px', width:'1000px' }}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import React from 'react'
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Typo = () => {
  const Section=styled.section`
      text-align:center;

  `
  // Typography means heading in mui
  return (
    <div>
        <Section>
      <Typography variant='h1'>
        h1 heading
      </Typography>
      <Typography variant='h2'>
        h2 heading
      </Typography>
      <Typography variant='h3'>
        h3 heading
      </Typography>
      <Typography variant='h4'>
        h4 heading
      </Typography>
      <Typography variant='h5'>
        h5 heading
      </Typography>
      <Typography variant='h6'>
        h6 heading
      </Typography>
      <Typography variant='subtitle1'>
        h6 heading
      </Typography>
      <Typography variant='subtitle2'>
        h6 heading
      </Typography>
        </Section>
    </div>
  )
}

export default Typo

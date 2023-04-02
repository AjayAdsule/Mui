import React from 'react'
import styled from 'styled-components'
import { Stack } from '@mui/material'

const Stacks = () => {
    const Section=styled.section`
    .table{
        border:2px solid red
    }
    `
  return (
    <>
    <Section>
    <Stack direction="row" spacing={2}>
      <div className="table">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe soluta sapiente est suscipit, similique nobis aliquid velit, incidunt sit ratione eveniet illum molestias, iure unde? Aspernatur, omnis? Voluptates dolor praesentium, aperiam dolorem nam laboriosam quasi ab explicabo iste eum numquam provident corrupti tempora eius molestiae minus laudantium quisquam! Corporis?
      </div>
      <div className="table">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe soluta sapiente est suscipit, similique nobis aliquid velit, incidunt sit ratione eveniet illum molestias, iure unde? Aspernatur, omnis? Voluptates dolor praesentium, aperiam dolorem nam laboriosam quasi ab explicabo iste eum numquam provident corrupti tempora eius molestiae minus laudantium quisquam! Corporis?
      </div>
      <div className="table">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe soluta sapiente est suscipit, similique nobis aliquid velit, incidunt sit ratione eveniet illum molestias, iure unde? Aspernatur, omnis? Voluptates dolor praesentium, aperiam dolorem nam laboriosam quasi ab explicabo iste eum numquam provident corrupti tempora eius molestiae minus laudantium quisquam! Corporis?
      </div>
    </Stack>
    </Section>
    </>
  )
}

export default Stacks

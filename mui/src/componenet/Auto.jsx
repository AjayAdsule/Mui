import React,{useState} from 'react'
import { Stack,Autocomplete , TextField } from '@mui/material'

const skills=["HTML","CSS","Javascript","NodeJS","MongoDB","Express"]

const AutoCompletes = () => {
  const [skill, setSkill] = useState(null)
  console.log({Skill_Name:skill})
  const Handler=(e,newvalue)=>{
    setSkill(newvalue)
  }
  return (
    <>
     <Stack spacing={2} width={250}>
    <Autocomplete
    options={skills}
    renderInput={(params)=><TextField {...params} label="skills"/>}
    value={skill}
    onChange={Handler}
    freeSolo
    />
     </Stack> 
    </>
  )
}

export default AutoCompletes

import { FormControlLabel, Switch } from '@mui/material'
import React,{useState} from 'react'

const Checks = () => {
    const [dark, setDark] = useState(false)
    console.log(dark)
    const Handler=(e)=>{
        setDark(e.target.checked)
        console.log(!dark ? 'Dark mode is enable' : 'dark mode is disabled')
    }
  return (
    <div>
      <FormControlLabel 
      label="dark mode"
      control={<Switch/>}
      checked={dark}
      onChange={Handler}
      ></FormControlLabel>
    </div>
  )
}

export default Checks

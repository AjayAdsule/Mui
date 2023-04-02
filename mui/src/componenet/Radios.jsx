import { Box ,FormControl,FormLabel, RadioGroup,Radio,FormControlLabel } from '@mui/material'
import React,{useState} from 'react'
import { pink } from '@mui/material/colors';
const Radios = () => {
    const [exp, setExp] = useState('')
    const Handler=(e)=>{
        setExp(e.target.value)
    }
    console.log({exp:exp})
  return (
    <div>
  {/* this is box section in under box we define ours radio buttons     */}
      <Box sx={{
        width:'35rem',
        height:200,
        border: '2px solid red' ,
        textAlign:"center",
        marginLeft:"25rem"
      }}>
        <FormControl>
            {/* formlabel gives name at the top of our radio button */}
            <FormLabel id="use-radio-label">
                year of experience
            </FormLabel>
            {/* radiogroup gives us option for multiple radio button */}
            {/* value set as experence because and gives onchange handler to control the  */}
            <RadioGroup
             name="use-radio"          
             value={exp}
             onChange={Handler}
             row>
               <FormControlLabel value="0" label="0" control={<Radio/>} />
               <FormControlLabel value="0-1" label="0-1" control={<Radio/>} />
               <FormControlLabel value="0-3" label="0-3" control={<Radio/>} />
               <FormControlLabel value="0-5" label="0-5" control={<Radio/>} 
                 sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600],
                    },
                  }}/>
            </RadioGroup>
        </FormControl>
      </Box>
    </div>
  )
}

export default Radios

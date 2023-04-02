import React,{useState} from 'react'
import { Rating } from '@mui/material'
const Ratings = () => {
    const [rate, setRate] = useState(3.5)
    console.log({value:rate})
    const ChangeHandle=(e,newnumber)=>{
        setRate(newnumber)
    }
  return (
    <div>
      <Rating 
      value={rate}
      onChange={ChangeHandle}
      precision={0.5}
      readOnly
      >
      </Rating>
    </div>
  )
}
// The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed.
export default Ratings

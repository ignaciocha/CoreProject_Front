import React, { useState } from 'react';
import Button from '../Button';

const FilterItemList = (props) => {

  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  }
  


  return (
    <div className='buttonStyle'>
      <Button type='round'
      onClick={clickedToggle}
      toggle={toggle}>
        {props.item}
      </Button>
    </div>
  )
}

export default FilterItemList;
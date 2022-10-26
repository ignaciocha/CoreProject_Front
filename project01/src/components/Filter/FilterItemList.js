import React, { useState } from 'react';
import Button from '../Button';

const FilterItemList = (props) => {

  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  }
  

  
  return (
    <div className='buttonStyle'>
      <Button type='filter'
      onClick={clickedToggle}
      toggle={toggle}
      children={props.item}>
      </Button>
    </div>
  )
}

export default FilterItemList;
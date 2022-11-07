import React from 'react'

const ItemList = ({item,handleItem}) => {

    const itemCh = (event) => {
        handleItem(event.target.value)
    }

  return (
    <div>
        <div className="py-3 w-100 mb-4 shadow-lg hover-zoom px-2  rounded bg-white">
            <div className="flex align-items-center">
              <input
                type="radio"
                id="option1"
                name="option"
                value={item}
                className="d-inline-block ml-3 mr-3"
                onChange={itemCh}
              />
              <h4 className=" font-weight-bold text-primary-dark d-inline-block">
                {item}
              </h4>
            </div>
          </div>

    </div>
  )
}

export default ItemList
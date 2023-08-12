import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export function Rating() {
  const stars = Array(5).fill(0);

  const colors = {
    orange: 'ffbb00',
    grey: '#a09595'
  }

  const [currentValue, setCurrentValue] = useState(0);
  const [mouseOver, setMouseOver] = useState(undefined);

  //Function to handle rating stars
  const handleclick = (starValue) => { setCurrentValue(starValue) };
  const handleMouseOver = (starValue) => { setMouseOver(starValue) };
  const handleMouseLeave = () => { setMouseOver(undefined) };

  return (
    <>
      <span>{
        stars.map((_, index) => {
          return (
            <FaStar key={index}
              color={(currentValue || mouseOver) > index ? colors.orange : colors.grey}
              onClick={() => handleclick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </span>
    </>
  )
}

import React from 'react'

const Why = ({img, name, desc}) => {
  return (
	 <div className='flex flex-col items-center my-5'>
		<img src={img} alt="" />
		<h2 className='text-xl font-bold'>{name}</h2>
		<p>{desc}</p>
	 </div>
  )
}

export default Why
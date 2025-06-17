import React from 'react'

const Header = () => {
  return (
	 <div className='flex justify-between items-center py-[14px] w-[90%] m-auto'>
		<img src="/src/img/3nTkzVa-removebg-preview 1.svg" alt="" className='w-35 sm:w-40' />
		<div className="flex justify-between items-center gap-4">
			<h4 className='text-xl hidden sm:block'>Tất Cả Các Job</h4>
			<button className='border text-[#021A84] border-[1px]-[#021A84] px-[3px] py-[7px] rounded-xl'>Đăng ký</button>
			<button className='bg-[#021A84] text-white p-2 rounded-xl'>Đăng Nhập</button>
		</div>
	 </div>
  )
}

export default Header
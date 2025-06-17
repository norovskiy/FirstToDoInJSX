import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Why from './components/Why'

function App() {
  let [cards, setCards] = useState([
   {
      img: '/src/img/Frame 32976.png',
      name: 'Data Engineer',
      price: '12,000,000',
      speed: '50,000,000',
      id: 1,
    },
    {
      img: '/src/img/Frame 32976.png',
      name: 'Data Engineer',
      price: '12,000,000',
      speed: '50,000,000',
      id: 2,
    },
    {
      img: '/src/img/Frame 32976.png',
      name: 'Data Engineer',
      price: '12,000,000',
      speed: '50,000,000',
      id: 3,
    },
    {
      img: "/src/img/Frame 32976.png",
      name: "Data Engineer",
      price: "12,000,000",
      speed: "50,000,000",
      id: 4
    },
    {
      img: "/src/img/Frame 32976.png",
      name: "Data Engineer",
      price: "12,000,000",
      speed: "50,000,000",
      id: 5
    },
    {
      img: "/src/img/Frame 32976.png",
      name: "Data Engineer",
      price: "12,000,000",
      speed: "50,000,000",
      id: 6
    },
    {
      img: "/src/img/Frame 32976.png",
      name: "Data Engineer",
      price: "12,000,000",
      speed: "50,000,000",
      id: 7
    },
    {
      img: "/src/img/Frame 32976.png",
      name: "Data Engineer",
      price: "12,000,000",
      speed: "50,000,000",
      id: 8
    },
    {
      img: "/src/img/Frame 32976.png",
      name: "Data Engineer",
      price: "12,000,000",
      speed: "50,000,000",
      id: 9
    },
  ])

  let [editId, setEditId] = useState(null)
  let [formData, setFormData] = useState({ 
    name: '', 
    price: '', 
    speed: '',
  })

  let startEdit = (card) => {
    setEditId(card.id)
    setFormData({
      name: card.name,
      price: card.price,
      speed: card.speed,
    })
  }

  let deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id))
  }

  let saveEdit = () => {
    setCards(cards.map(card => 
      card.id === editId ? { ...card, ...formData } : card
    ))
    setEditId(null)
  }

  let handleInputChange = (e) => {
    let { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <>
    <header>
				<Header/>
			</header>

    <section>
      <img src="/src/img/image 12.png" alt="" />
    </section>

			<section className='my-[30px] sm:w-[70%] w-[95%] m-auto'>
				<div className='flex gap-1 sm:gap-4'>
					<input
						className='px-2 shadow-xl rounded-xl py-[10px] sm:w-100 w-[150px]'
						type='search'
						placeholder='Nhập vị trí hoặc từ khóa...'
					/>
					<select className='w-[100px] sm:w-80 sm:px-2 shadow-xl rounded-xl py-[10px]'>
						<option value=''>Chọn địa điểm</option>
					</select>
					<button className='bg-[#021A84] shadow-xl text-white px-4 py-2 rounded-xl'>
						Tìm Kiếm
					</button>
				</div>

				<div className='flex my-5 gap-1 items-center flex-wrap sm:gap-2'>
					<p>Đề xuất:</p>
					{['Reactjs', 'VueJS', 'Angular', 'Design', '.NET', 'PHP', 'java', 'Mobile'].map((tag) => (
						<p key={tag} className='bg-[#c8c5c5] text-[#09123a] rounded-[5px] px-2'>
							{tag}
						</p>
					))}
				</div>
			</section>

     {editId && (
  <div className="fixed inset-0  flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Card</h3>
      
      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Data Engineer"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="12,000,000"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="speed"
            value={formData.speed}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="50,000,000"
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-3 mt-6">
        <button
          onClick={() => setEditId(null)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={saveEdit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

      <section className='sm:w-[80%] m-auto flex flex-wrap sm:gap-8'>
        {cards.map(card => (
          <div key={card.id} className='ml-10 sm:ml-0'>
            <div className='w-[310px] my-2 border rounded-2xl p-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <img 
                    src={card.img} 
                    alt={card.name} 
                    className='w-9 rounded-full' 
                  />
                  <h3 className='font-bold'>{card.name}</h3>
                </div>
                <p className='bg-[#c8c5c5] text-[#09123a] rounded-[5px] px-2'>
                  Full Time
                </p>
              </div>
              <hr className='my-2' />
              <div className='flex'>
                <div className='px-4 my-1'>
                  <p>Hoa hồng</p>
                  <h3 className='font-bold'>{card.price}</h3>
                </div>
                <div className='border-l px-4 my-1'>
                  <p>Thưởng</p>
                  <h3 className='font-bold'>{card.speed}</h3>
                </div>
              </div>
              <div className='mt-2 flex gap-2 flex-wrap'>
                <button
                  onClick={() => deleteCard(card.id)}
                  className='border rounded-[10px] px-4 py-[2px]'
                >
                  Delete
                </button>
                <button
                  onClick={() => startEdit(card)}
                  className='border rounded-[10px] px-4 py-[2px]'
                >
                  Edit
                </button>
                <button 
                  onClick={() => alert("Premium!")}
                  className='border bg-red-600 text-white rounded-[10px] px-4 py-[2px]'
                >
                  Premium
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className='my-10 w-[90%] m-auto'>
       <center><p>Why?</p>
       <h1 className='text-3xl font-bold'>Tại Sao Lựa Chọn Recland?</h1>  </center>
       <div className="flex flex-wrap  my-5 justify-between ">
        <div className="flex flex-col items-center w-[340px] bg-[#2ADA66] text-[#0d5b0d] rounded-2xl p-7 my-5">
          <img src="/src/img/Dollar (1).png" className='w-10' alt="" />
        <center><h3 className='font-bold'>Đa dạng việc làm, thêm nhiều lựa chọn hấp dẫn</h3>
        <p>Hơn 200+ việc làm IT, giúp các bạn REC có một kho việc làm để các bạn tìm kiếm, sale jobs đến những ứng viên phù hợp.</p></center>
        </div>
        <div className="flex flex-col items-center w-[340px] bg-[#556dd8] text-[#1f1246] rounded-2xl p-7 my-5">
          <img src="/src/img/Dollar (1).png" className='w-10' alt="" />
        <center><h3 className='font-bold'>Đa dạng việc làm, thêm nhiều lựa chọn hấp dẫn</h3>
        <p>Hơn 200+ việc làm IT, giúp các bạn REC có một kho việc làm để các bạn tìm kiếm, sale jobs đến những ứng viên phù hợp.</p></center>
        </div>
        <div className="flex flex-col items-center w-[340px] bg-[#2ADA66] text-[#0d5b0d] rounded-2xl p-7 my-5">
          <img src="/src/img/Dollar (1).png" className='w-10' alt="" />
        <center><h3 className='font-bold'>Đa dạng việc làm, thêm nhiều lựa chọn hấp dẫn</h3>
        <p>Hơn 200+ việc làm IT, giúp các bạn REC có một kho việc làm để các bạn tìm kiếm, sale jobs đến những ứng viên phù hợp.</p></center>
        </div>
       </div>
      </section>

      <section className=' my-20  m-auto'>
        <h1 className='sm:ml-145 text-3xl ml-35 font-bold my-2'>Đối Tác</h1>
        <div className="flex flex-wrap justify-evenly my-5">
        <img src="/src/img/Frame 32974.png" alt="" />
        <img src="/src/img/Frame 32975.png" alt="" />
        <img src="/src/img/Frame 32976.png" alt="" />
        <img src="/src/img/Frame 32977.png" alt="" />
        <img src="/src/img/Frame 32978.png" alt="" />
        </div>
      </section>
      <section className=' my-20  m-auto'>
        <p className='sm:ml-145 ml-32 '>Quy trình làm việc</p>
        <h1 className='sm:ml-120 text-3xl ml-9 font-bold my-2'>Hợp tác cùng RecLand</h1>
        <div className="flex flex-wrap justify-evenly my-10">
        <Why img="/src/img/Add.svg" name="Tạo một tài khoản" desc="Trở thành member trên RecLand"/>
        <Why img="/src/img/Search.svg" name="Tạo một tài khoản" desc="Trở thành member trên RecLand"/>
        <Why img="/src/img/Shield.svg" name="Tạo một tài khoản" desc="Trở thành member trên RecLand"/>
        </div>
      </section>

      <footer className="bg-gray-100 text-gray-700 pt-8 mt-10 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pb-8 bg-green-500 sm:w-[80%] m-auto sm:rounded-2xl shadow-xl my-5">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
              <img src="/src/img/Frame 3146.png" alt="" className='w-15 sm:w-30'  />
            <div>
              <p className="text-lg font-semibold text-green-800">
                Bạn muốn đến với Recland
              </p>
              <p className="text-sm text-gray-600">
                Chúng tôi sẽ giúp bạn thành công trên con đường Recer
              </p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Đăng Ký Ngay
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 px-6 pb-8 ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-md border border-gray-300 w-72"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
            ✈
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 pb-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/src/img/3nTkzVa-removebg-preview 1.svg" alt="RecLand" className="h-6" />
              <span className="bg-orange-400 text-white text-xs px-1 rounded">Beta</span>
            </div>
            <div className="flex gap-4 text-xl text-gray-500">
             <img src="/src/img/Frame 32927.png" alt="" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Địa chỉ</h4>
            <p>Tòa nhà AC, 78 Duy Tân, Quận Cầu Giấy, Hà Nội</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Liên hệ</h4>
            <p>0369 713 819</p>
            <p>luat.nguyen@recland.co</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Menu</h4>
            <p>Trang chủ</p>
            <p>Tìm kiếm công việc</p>
            <p>Sitemap</p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold mb-2">Tài khoản của tôi</h4>
            <p>Tổng quan</p>
            <p>Kho CV</p>
            <p>Thông tin cá nhân</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 pb-6">
          Copyright © 2022 Recland.co
        </div>

        <div className="fixed bottom-6 right-6">
          <button className="bg-blue-600 text-white w-8 h-8 rounded-full shadow hover:bg-blue-700">
            ↑
          </button>
        </div>
      </footer>
    </>
  )
}

export default App
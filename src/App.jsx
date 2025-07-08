import './App.css'

function App() {


  return (
    <div className='flex items-center justify-center mt-20 '>
      <div className='flex flex-row items-center justify-center w-full gap-15  container'>
        {/* Left Side */}
        <div className='mb-25 headpara'>
          <h1 className='text-[62px] font-bold text-[#0866ff] heading '>facebook</h1>
          <p className='text-[28px] w-130 leading-9 para'>Facebook helps you connect and share with the people in your life.</p>
        </div>
        {/* Right Side */}
        <div className='  p-5 shadow-md rounded-lg border-gray-300 border-1 form'>
          <form className='flex flex-col space-y-4 w-80'>
            <input type='text' placeholder='Email address or phone number' className="border border-gray-300 id rounded-md p-3 focus:outline-none  focus:border-blue-500" />
            <input type='password' placeholder='Password' className='border border-gray-300 rounded-sm p-3 password focus:outline-none focus:border-blue-500' />
            <button className='bg-blue-600 button hover:bg-blue-700 text-white font-semibold rounded-md p-3 transition cursor-pointer'>Log in</button>
          </form>
          <div className='text-center mt-3 text-sm text-blue-600 hover:underline cursor-pointer'>
            <a>Forgotten password?</a>
          </div>
          <hr className='text-[#dadde1] my-4' />
          <div className='flex justify-center'>
            <button className='bg-[#42b72a] button1 hover:bg-green-700 px-5 cursor-pointer py-3 rounded-md text-white font-bold'>Create new account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

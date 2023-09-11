import { useState, useCallback } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [Password, setPasswoed] = useState("")
  const passwordGenerator = () => useCallback(() => {
    let password = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) string += "0123456789"
    if (charAllow) string += "!#$%^&*&*(()_+~"
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      password = str.charAt(char)
    }
    setPasswoed(password)
  }, [length, numberAllow, charAllow, setPasswoed])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 text-orange-500 bg-gray-500 rounded-lg'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3' type="text" name="" id="" value={Password} placeholder='password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="" id="" min={6}
              max={100}
              value={length}
              className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label> length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="" min={6}
              max={100}
              value={length}
              className='cursor-pointer' onChange={() => { setAllow((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="" min={6}
              max={100}
              value={length}
              className='cursor-pointer' onChange={() => { setCharAllow((prev) => !prev) }} />
            <label htmlFor="numberInput">Charcter</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

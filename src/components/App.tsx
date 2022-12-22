import React from 'react'
import { Button } from '@material-tailwind/react'

function App() {
  const handleClick = (url: string) => {
    window.location.href = url
  }
  return (
    <div className="App">
      <div className="flex justify-center align-middle mt-2">
        <p>
          <b>APP COMPONENT WORKS!</b>
        </p>
      </div>
      <div className="flex justify-center align-middle mt-2">
        <Button onClick={() => handleClick('https://tailwindcss.com')}>
          TAILWIND CSS
        </Button>
      </div>
      <div className="flex justify-center align-middle mt-2">
        <Button
          onClick={() => handleClick('https://www.material-tailwind.com/')}
        >
          MATERIAL UI TAILWIND
        </Button>
      </div>
    </div>
  )
}

export default App

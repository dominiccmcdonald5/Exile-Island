import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const totalButtons = 10000
  const [secretButton] = useState(() => Math.floor(Math.random() * totalButtons))
  const [showPopup, setShowPopup] = useState(false)
  const buttons = useMemo(
    () => Array.from({ length: totalButtons }, (_, index) => index),
    [totalButtons],
  )

  const handleButtonClick = (index: number) => {
    if (index === secretButton) {
      setShowPopup(true)
    }
  }

  return (
    <main className="page-shell">
      <section className="button-grid" aria-label="Button wall">
        {buttons.map((index) => (
          <button
            key={index}
            className="pixel-button"
            onClick={() => handleButtonClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </section>

      {showPopup && (
        <div className="overlay" role="dialog" aria-modal="true">
          <div className="widget">
            <p>Ping Dize and send a ss</p>
            <button className="close" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App

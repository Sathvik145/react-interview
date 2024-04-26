 import { useState } from 'react'
import './App.css'
import FeedbackModal from './components/FeedbackModal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)  //use state initially closed default

  const openModal = () => {       //fn to set isModelOpen true
    setIsModalOpen(true)
  }

  const closeModal = () => {      //fn to set isMOdelOpen false
    setIsModalOpen(false)
  }

  return (
    <div>
      <button className='feedback-btn' onClick={openModal}>Feedback</button>
      {
        isModalOpen &&          //when isModelOpen is true it will fire the Feedback component
          <FeedbackModal onClose={closeModal} />  //and when we onclick onclose in the feedback model near the cross button it will fire the onclose fn which wil call the close model 
      }                                          
    </div>                                         //which will make the isMOdel open false so the box closes
  )
}

export default App

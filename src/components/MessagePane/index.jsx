import { useEffect, useState } from "react"

const MessagePane = ({
  id,
  formatDate,
  closeButton,
  setCurrentEmailId,
  setShowCloseButton,
  buttonName,
  deleteEmail,
}) => {
  const [currentEmailData, setCurrentEmailData] = useState({})

  useEffect(() => {
    fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentEmailData(data.data.email)
      })
  }, [id])

  return (
    <>
      {currentEmailData && (
        <div
          className={`w-full 
              p-8 
              ${closeButton}
            bg-white      
              h-screen
              sm:static 
              absolute 
              z-10 
      `}
        >
          <div className="flex justify-between text-sm pt-4 border-t-2">
            <h2>{currentEmailData.name}</h2>
            <h2>{formatDate(currentEmailData.date_created)}</h2>
          </div>
          <h4 className="text-xs py-2">{currentEmailData.email}</h4>
          <h1 className="text-3xl pb-10">{currentEmailData.subject}</h1>
          <p className="text-sm pb-4 border-b-2">{currentEmailData.body}</p>
          <button
            onClick={() => deleteEmail(id)}
            className="absolute right-5 mt-4 p-1 border rounded-lg"
          >
            {buttonName}
          </button>
        </div>
      )}
    </>
  )
}
export default MessagePane

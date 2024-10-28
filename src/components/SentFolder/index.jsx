import { useState, useEffect } from "react"
import MessagePane from "../MessagePane"
import EmailItem from "../EmailItem"

const SentFolder = () => {
  const [emailData, setEmailData] = useState([])
  const [currentEmailId, setCurrentEmailId] = useState(0)
  const [showCloseButton, setShowCloseButton] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState(null)

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails/sent")
      .then((response) => response.json())
      .then((data) => {
        setEmailData(data.data)
      })
  }, [])

  function formatDate(dateString) {
    const eventDate = new Date(dateString)
    return eventDate.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  }
  return (
    <>
      <div className="overflow-y-auto w-full sm:w-3/12 sm:min-w-64 max-h-screen">
        {emailData.map((email) => (
          <EmailItem
            name={email.name}
            date={formatDate(email.date_created)}
            subject={email.subject}
            body={email.body}
            read={email.read}
            id={email.id}
            key={email.id}
            setCurrentEmailId={setCurrentEmailId}
            setShowCloseButton={setShowCloseButton}
            setSelectedEmail={setSelectedEmail}
            selectedEmail={selectedEmail}
          />
        ))}
      </div>
      <MessagePane
        id={currentEmailId}
        formatDate={formatDate}
        closeButton={showCloseButton ? "block" : "hidden"}
        setShowCloseButton={setShowCloseButton}
        setCurrentEmailId={setCurrentEmailId}
        buttonName={"Delete"}
      />
    </>
  )
}

export default SentFolder

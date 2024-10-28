// Import necessary dependencies
import React, { useState } from "react"
// Define the ComposeEmail component
const Modal = ({ setComposeEmailVisible, closeModal, cancelEmailModal }) => {
  // State variables to hold the email data
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault()
    // Here you can perform actions like sending the email
    // For simplicity, let's just log the composed email
    const emailData = {
      name: "name",
      email: recipient,
      subject: subject,
      body: body,
    }

    // Clear the form after submission
    // Send the email data to the API
    fetch("https://email-client-api.dev.io-academy.uk/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          // Clear the form after successful submission
          setRecipient("")
          setSubject("")
          setBody("")
          // Hide the compose email component
          setComposeEmailVisible(false)
        } else {
          console.error("Failed to send email:", response.statusText)
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }

  function closeModal() {
    setComposeEmailVisible(false)
  }

  // JSX for the ComposeEmail component
  return (
    <div className="border min-w-10 sm:static p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="recipient"
            className="block text-sm font-medium"
          ></label>
          <input
            type="email"
            id="recipient"
            className="border rounded-md px-3 py-2 w-full"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            placeholder="To"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium"
          ></label>
          <input
            type="text"
            id="subject"
            className="border rounded-md px-3 py-2 w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Subject"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium"></label>
          <textarea
            id="body"
            className="border rounded-md px-3 py-2 w-full h-32 resize-none"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button
            onClick={() => setComposeEmailVisible(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md ml-5 hover:bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  )
}
// Export the ComposeEmail component
export default Modal

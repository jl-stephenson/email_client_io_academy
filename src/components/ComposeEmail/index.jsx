import React, { useState } from "react"
function ComposeEmail({ composeEmailVisible }) {
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  function handleSubmit(event) {
    event.preventDefault()
    // Prepare the email data
    const emailData = {
      name: "test",
      email: recipient,
      subject: subject,
      body: body,
    }
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
          setComposeEmailVisible(true)
        } else {
          console.error("Failed to send email:", response.statusText)
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }
  return (
    <div
      className={`border min-w-10 sm:w-3/12 w-screen sm:static relative z-0 ${
        composeEmailVisible ? "" : "hidden"
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Compose Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="recipient" className="block text-sm font-medium">
              Recipient:
            </label>
            <input
              type="email"
              id="recipient"
              className="border rounded-md px-3 py-2 w-full"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              className="border rounded-md px-3 py-2 w-full"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-sm font-medium">
              Body:
            </label>
            <textarea
              id="body"
              className="border rounded-md px-3 py-2 w-full h-32 resize-none"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
export default ComposeEmail

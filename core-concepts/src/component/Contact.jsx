import { ActionButton } from "./ActionButton"

export const Contact = () => {
  const handleClick = () => {
    alert("Sending the Message");
  }
  return (
    <div>
      <h2>Contact us</h2>
      <ActionButton text="Send Message" onClick={handleClick} />
    </div>
  )
}
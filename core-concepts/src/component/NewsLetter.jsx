import { ActionButton } from './ActionButton.jsx';
export const NewsLetter = () => {
  const handleClick = () => alert("Subscribed to News letter");
  return (
    <div>
      <h2>Subscribe to News letter</h2>
      <ActionButton text="Subscribe" onClick={handleClick} />
    </div>
  )
}
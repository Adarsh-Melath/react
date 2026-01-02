export const UserDetails = ({ name, isOnline, isPremium }) => {
  return (
    <div>
      <h3>{name}{isPremium && <span>⭐</span>}</h3>
      <span>{isOnline ? "Online" : "Offline"}</span>
      <p>{isOnline ? "Available for chat" : "Not available for chat"}</p>
      {isOnline ? (<button>Send message</button>) : (<small>Check back later</small>)}
    </div>
  )
}
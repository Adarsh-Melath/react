export const CustomBtn = () => {
  const handleClick = (e) => {
    console.log("Button clicked", e);
    console.log("clicked coordinates: ", e.clientX, e.clientY)
    alert("Liked");
  }
  return (
    <button onClick={handleClick}>Like</button>
  )
}
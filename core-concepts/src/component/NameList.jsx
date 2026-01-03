export const NameList = () => {
  const names = ["Adarsh", "Sreerag", "Vishnu"];

  const nameElements = names.map((name, index) =>
    <h2 key={index}>{name}</h2>)

  return (
    <div>
      {nameElements}
    </div>
  )
}
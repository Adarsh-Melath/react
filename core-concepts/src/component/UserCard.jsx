
import { UserInfo } from "./UserInfo"
export const UserCard = (props) => {
  return (
    <>
      <h2>User Details</h2>
      <UserInfo {...props}></UserInfo>
    </>
  )
}
import profileList from "./profileList";
import { useParams } from "react-router-dom";
function User({ match }) {
  // const ID=match.params.ID
  const { ID } = useParams();
  const user = profileList.find((el) => el.id == ID);
  console.log(user);

  return (
    <div className="user">
      <img src="https://www.nicepng.com/png/detail/125-1253785_my-name-is-istabraq-almusally-hi-bubble-png.png" />
      <h1> this is the profile of {user.name} </h1>
      <h4> email: {user.email} </h4>
    </div>
  );
}
export default User;

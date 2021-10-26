import { Link } from "react-router-dom";
function Profile({ el }) {

  return (
    <div className="Profile">
      <img
        src="https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
        alt="avatar"
      />

      <Link to={`/user/${el.id}`}>
        <h3> {el.name}</h3>
      </Link>

      <h5> {el.email}</h5>
      <h5> {el.phone}</h5>
    </div>
  );
}

export default Profile;
//step : creat the path with :ID ( the app component)
//step: give the variable ID its value ( the real id of the user )

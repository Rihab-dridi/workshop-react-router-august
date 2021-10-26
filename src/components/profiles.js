import PR from "./profileList";
import Profile from "./Profile";
function Profiles() {
  const profiles = PR;
  return (
    <div className="Profiles" styel={{ color: "red" }}>
      {PR.map((el) => (
        <Profile el={el} />
      ))}
    </div>
  );
}

export default Profiles;

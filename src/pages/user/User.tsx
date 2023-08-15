import "./user.scss";
import { singleUser } from "../../data";

// COMPONENTS
import Single from "../../components/single/Single";

const User = () => {
  //Fetch data and send to single component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;

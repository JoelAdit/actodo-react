import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const user = props.user;
  const setuser = props.setuser;

  const [Eusername, setEusername] = useState();
  const [Euserpass, setEuserpass] = useState();

  function handleUinput(evt) {
    setEusername(evt.target.value);
  }

  function handlePinput(evt) {
    setEuserpass(evt.target.value);
  }

  function adduser() {
    setuser([...user, { username: Eusername, password: Euserpass }]);
    navigate("/");
  }
  return (
    <>
      <div className="bg-black p-14 border rounded-md">
        <div className=" bg-white p-10 border rounded-md">
          <h1 className="text-3xl font-medium ">Hey Hi</h1>
          <p>i help you manage your activities after you login :)</p>

          <div className="flex flex-col gap-3 my-3">
            <input
              type="text"
              placeholder="Username"
              className="w-52 border border-black rounded-md p-2"
              onChange={handleUinput}
            />
            <input
              type="text"
              placeholder="Password"
              className="w-52 border border-black rounded-md p-2"
              onChange={handlePinput}
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-52 border border-black rounded-md p-2"
            />
          </div>
          <button
            className="bg-orange-400 p-1 border border-black rounded-md w-24 mb-2"
            onClick={adduser}
          >
            Signup
          </button>

          <p>
            Already have an Account?
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Signup;

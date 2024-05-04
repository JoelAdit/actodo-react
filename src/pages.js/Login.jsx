    import { useState } from "react";
    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom";

    function Login(props) {
      const navigate = useNavigate();
      const [Eusername, setEusername] = useState();
      const [Euserpass, setEuserpass] = useState();
      const [ruser, setRuser] = useState(true);

      const user = props.user;

      function handleUinput(evt) {
        setEusername(evt.target.value);
      }

      function handlePinput(evt) {
        setEuserpass(evt.target.value);
      }

      function checkuser() {
        var userfound = false;

        user.forEach(function (item) {
          if (item.username === Eusername && item.password === Euserpass) {
            console.log("Login Success");
            userfound = true;
            navigate("/landing", { state: { user: Eusername } });
          }
        });
        if (userfound === false) {
          console.log("Login Failed");
          setRuser(false);
        }
      }

      return (
        <>
          <div className="bg-black p-14 border rounded-md">
            <div className=" bg-white p-10 border rounded-md">
              <h1 className="text-3xl font-medium ">Hey Hi</h1>

              {ruser ? (
                <p>i help you manage your activities after you login :) </p>
              ) : (
                <p className="text-red-400 font-bold">
                  Please signUp before Login
                </p>
              )}

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
              </div>

              <button
                className="bg-blue-500 p-1 border border-black rounded-md w-24 mb-2"
                onClick={checkuser}
              >
                login
              </button>

              <p>
                Dont have Account?
                <Link to={"Signup"} className="underline">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </>
      );
    }
    export default Login;

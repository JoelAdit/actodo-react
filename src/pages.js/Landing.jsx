import { useLocation } from "react-router-dom";
import Header from "../component/header";
import Card from "../component/card";
import Todocontainer from "../component/todocontainer";



function LandingPage() 
{
    const data = useLocation()
    console.log()
  return (
    <div className="bg-black p-10 m-5 rounded-md">
      <div className="bg-white p-10 rounded-md">
        <Header username={data.state.user} />

        <div className="flex justify-between  my-5 text-center gap-10 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />

          <Card
            bgcolor={"#FD6663"}
            title={"December 20"}
            subtitle={"14:23:08"}
          />

          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
        </div>

        <Todocontainer />
      </div>
    </div>
  );
}

export default LandingPage;

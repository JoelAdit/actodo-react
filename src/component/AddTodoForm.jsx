import { useState } from "react";

function AddTodoform(props) {
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;

  const [newactivity, setnewactivity] = useState("");

  function handlechange(evt) {
    setnewactivity(evt.target.value);
  }

  function addactivity() {
    setactivityArr([
      ...activityArr,
      { id: activityArr.length + 1, activity: newactivity },
    ]);
  }
  return (
    <div>
      <h1 className="text-2xl font-medium mb-3 ">Manage Activity</h1>
      <input
        type="text"
        className="border border-black p-1"
        value={newactivity}
        onChange={handlechange}
      />
      <button
        className="bg-black text-white border border-black p-1"
        onClick={addactivity}
      >Add</button>
    </div>);
}
export default AddTodoform;

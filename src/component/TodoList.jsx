import { useState } from "react";
import Todoitem from "./Todoitem";

function TodoList(props) {
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;

  return (
    <div className="bg-[#BDB4EA] flex-grow p-3 rounded-md">
      <h1 className="text-2xl font-medium">Today's Activity</h1>

      {activityArr.length === 0 ? <p> "today task"</p> : <p></p>}

      {activityArr.map(function (item, index) {
        return (
          <Todoitem
            activity={item.activity}
            index={index}
            activityArr={activityArr}
            setactivityArr={setactivityArr}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
export default TodoList;

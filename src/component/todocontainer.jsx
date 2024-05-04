import AddTodoform from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function Todocontainer() {
  const [activityArr, setactivityArr] = useState([
    { id: 1, activity: "wake up" },
    { id: 2, activity: "take a shower" },
    { id: 3, activity: "go for a walk" },
  ]);
  return (
    <>
      <div className="flex justify-between gap-5 flex-wrap">
        <AddTodoform
          activityArr={activityArr}
          setactivityArr={setactivityArr}
        />

        <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />
      </div>
    </>
  );
}

export default Todocontainer;

import React, { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";
import Create from "./create";
import Todolist from "./toDoList";
function App() {
  // const [fetchError, setFetchError] = useState(null);
  // const [tasks, setTasks] = useState(null);

  // useEffect(() => {
  //   const fetchQuotes = async () => {
  //     const { data, error } = await supabase.from("learningTable").select();

  //     if (error) {
  //       setFetchError("Could not fetch tasks");
  //       setTasks(null);
  //     } else {
  //       setTasks(data);
  //       setFetchError(null);
  //     }
  //   };

  //   fetchQuotes();
  // }, []);

  return (
    <>
      {/* <div>
        <h3>Hello, I am Bill Gates and today you're gonna see the future</h3>
        {fetchError && <p>{fetchError}</p>}
        {tasks && (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.method}</li>
            ))}
          </ul>
        )}
      </div> */}
      <Todolist/>
      <Create />
    </>
  );
}

export default App;

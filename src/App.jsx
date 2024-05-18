
import React, { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      const { data, error } = await supabase.from("learningTable").select();

      if (error) {
        setFetchError("Could not fetch tasks");
        setTasks(null);
        //    console.log(error);
      } else {
        setTasks(data);
        setFetchError(null);
        //     console.log(data);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <h3>Hello, I am Bill Gates and today you're gonna see the future</h3>
      {fetchError && <p>{fetchError}</p>}
      {tasks && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

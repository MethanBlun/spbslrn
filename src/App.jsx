import React from "react";
import supabase from "./config/supabaseClient";
import { useState, useEffect } from "react";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      const { data, error } = await supabase.from("learning Table").select;

      if (error) {
        setFetchError(console.log("could not fetch task"));
        setTask(null);
      }
      if (data) {
        setTask(data);
        setTask(null);
      }
    };


    fetchQuotes()

  }, []);
  return (
    <div > 
      {fetchError }
    </div>
  );
}

export default App;

// import React from "react";
// import supabase from "./config/supabaseClient";
// import { useState, useEffect } from "react";

// function App() {
//   const [fetchError, setFetchError] = useState(null);
//   const [tasks, setTasks] = useState(null);

//   useEffect(() => {
//     const fetchQuotes = async () => {
//       const { data, error } = await supabase.from("learningTable").select();

//       if (error) {
//         setFetchError(console.log("could not fetch tasks"));
//         setTasks(null);
//       }
//       if (data) {
//         setTasks(data);
//       setFetchError(null);
//       }
//     };


//     fetchQuotes()

//   }, []);
//   return (
//     <h1>hello iam bill gattes and todoy you're gonna see the future</h1>,
//     <div>
//     {fetchError && <p>{fetchError}</p>}
//     {tasks && (
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task.title}</li>
//         ))}
//       </ul>
//     )}
//   </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      const { data, error } = await supabase.from("learningTable").select();

      if (error) {
        setFetchError("could not fetch tasks");
        setTasks(null);
      }
      if (data) {
        setTasks(data);
        // setTasks(null); // Ne réinitialisez pas tasks ici
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <p>hello iam bill gattes and today you're gonna see the future</p>
      {fetchError && <p>{fetchError}</p>}
      {tasks && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

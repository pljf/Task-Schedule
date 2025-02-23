import './Header.css';
import './task-input.css';
import './task-schedule.css';
import './animation.css';
import { useState, ChangeEvent } from 'react';


function App() {
  /*Javascript Function*/
  const [input, setInput] = useState("");
  const [dayInput, setDayInput] = useState(""); // Stores the selected day input
  const [priority, setPriority] = useState("");

  /*
  step 1: read in priority
  step 2: where you store 
  step 3: outcome list based on given priority
  */

  const [task_items, setItems] = useState<{ [key: string]: { task: string, priority: string }[] }>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  }); // Stores tasks for each day
  // key : array (string )
  //
  
  const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriority(event.target.value);
  };


   // read in input and store it in input
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }; 

  // read in input and store it in dayInput
  const handleDayChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDayInput(event.target.value);
  };

  // add priority check


  const handleAddItem = () => {
    if (input.trim() !== "" && dayInput.trim() !== "" && priority.trim() !== "") { 
        setItems((prevItems) => ({
            ...prevItems,
            [dayInput]: [...prevItems[dayInput], { task: input, priority: priority }]
                .sort((a, b) => Number(a.priority) - Number(b.priority)) 
        }));
        setInput(""); 
        setDayInput(""); 
        setPriority(""); 
    }
  };

  const handleDeleteItem = (day: string, index: number) => {
    setItems((prevItems) => ({
        ...prevItems,
        [day]: prevItems[day].filter((_, i) => i !== index)
    }));
  };






  return (
    <>
      <section id="Header">
        <div className="header-format">
          <div>...</div>
          <div className="text-style">TASK SCHEDULER</div>
          <div>...</div>
        </div>
      </section>

      <section id="task-input">
        <div style={{ 
          border: '2px solid #000', 
          padding: '20px',     
          backgroundColor: '#99FFFF',
          maxWidth: '100%', 
          margin: '0 auto'     
        }}>
        
        <input type = "text" value={input} onChange={handleChange} 
        style={{ marginRight: '20px' , marginLeft:'20px', width: '500px', borderRadius: '8px',padding: '8px', border: '1px solid #ccc'}} 
        placeholder="Enter task..." /> 
        
        <input type="text" value={priority} onChange={handlePriorityChange} 
        style={{ marginRight: '20px', width: '75px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
        placeholder="Priority (1-5)" list = "pri"/>
        <datalist id="pri">
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
          </datalist>

        <input type = "text" value={dayInput} onChange={handleDayChange} 
        style ={{marginRight: '20px', width: '125px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
        placeholder="Choose a Day" list = "days"/>
          <datalist id="days">
            <option value="Monday" />
            <option value="Tuesday" />
            <option value="Wednesday" />
            <option value="Thursday" />
            <option value="Friday" />
          </datalist>
        
        <input 
        style ={{marginRight: '20px', width: '100px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
        type="text" placeholder="Add text"/>

        

        <button 
          onClick={handleAddItem}
          style={{
            marginLeft: '50px',
            padding: '10px 20px',
            backgroundColor: '#007BFF', 
            color: '#FFF', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '16px',
            transition: 'background-color 0.3s, transform 0.1s'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3'; 
            e.currentTarget.style.transform = 'scale(0.95)'; 
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = '#007BFF';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Add
        </button>

        </div>
      </section>
      <section id="task-schedule">
        <div className="lay_out1">
          <div className="calendar_week">What Month</div>
          <div className="Calendar_day">
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
          </div>
            <div className="Calendar_View">
               {Object.keys(task_items).map((day) => (
                  <div key={day} id={day}>
                      <ul>
                        {task_items[day].map((item, index) => (
                            <li key={index}>
                                {item.priority}. {item.task} 
                                <button onClick={() => handleDeleteItem(day, index)}>❌</button>
                            </li>
                            ))}
                      </ul>
                  </div>
                ))}
            </div>         
            
        </div>
      </section>
      <section id="animation"></section>      
    </>
    
  )
}

export default App
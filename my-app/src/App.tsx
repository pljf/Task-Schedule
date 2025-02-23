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
  const max_task = 5;
  const [monthInput, setMonth] = useState("");

  const [task_items, setItems] = useState<{ [key: string]: { task: string, priority: string }[] }>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  }); // Stores tasks for each day

  const handleMonthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

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

    if (input.trim() !== "" && dayInput.trim() !== "" && priority.trim() !== "" && task_items[dayInput].length < max_task) { 
        setItems((prevItems) => ({
            ...prevItems,
            [dayInput]: [...prevItems[dayInput], { task: input, priority: priority }]
                .sort((a, b) => Number(a.priority) - Number(b.priority)) 
        }));
        setInput(""); 
        setDayInput(""); 
        setPriority(""); 
    }

    else if (task_items[dayInput].length >= max_task){
      alert("You've hit the task limit for today! Looks like your day is fully booked—time to spread the love to another day!");
    }
    
    else {
      alert("Missing Information, Try Again!");
    }
  };

  const handleDeleteItem = (day: string, index: number) => {
    setItems((prevItems) => ({
        ...prevItems,
        [day]: prevItems[day].filter((_, i) => i !== index)
    }));
    alert("Congratulations! You’ve either conquered a task or bravely set it free! 🎉");
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
          backgroundColor:  'hsl(225, 9.52%, 15%)',
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
        
        <input type = "text" value={monthInput} onChange={handleMonthChange}
        style ={{marginRight: '20px', width: '100px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}}  placeholder="Add Month"/>

        

        <button 
          onClick={handleAddItem}
          style={{
            marginLeft: '50px',
            padding: '10px 15px',
            backgroundColor: 'hsl(0, 0%, 25%)', 
            fontFamily: 'Orbitron, sans-serif',
            width:'fit-content',
            color: 'white', 
            border: 'none',
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '18px',
            boxShadow: '0px 0px 1px 4px rgba(233, 233, 233, 0.8)', // Strong gray shadow
            transition: 'background-color 0.3s, transform 0.1s'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(45, 5.60%, 14.10%)';
            e.currentTarget.style.transform = 'scale(0.95)'; 
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 25%)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          add      
        </button>

        </div>
      </section>
      <section id="task-schedule">
        <div className="lay_out1">
          <div className="calendar_week">{monthInput}</div>
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
                                {item.priority}. {item.task} &nbsp;
                                <button onClick={() => handleDeleteItem(day, index)}> ✓ </button>
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
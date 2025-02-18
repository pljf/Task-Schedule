import './Header.css';
import './task-input.css';
import './task-schedule.css';
import './animation.css';

function App() {
  /*Javascript Function*/

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
        
        <input style={{ marginRight: '20px' , marginLeft:'20px', width: '500px', borderRadius: '8px',padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="Enter task..." /> 
        <input style ={{marginRight: '20px', width: ' 75px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="Top priority"/>
        <input style ={{marginRight: '20px', width: '125px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="dd/mm      📅"/>
        <input style ={{marginRight: '20px', width: '100px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="Add text"/>

        <button 
          style={{
            marginLeft: '450px',
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            </div>
        </div>
      </section>
      <section id="animation"></section>      
    </>
    
  )
}

export default App
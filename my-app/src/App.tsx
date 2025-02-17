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
          borderRadius: '20px',     
          backgroundColor: '#99FFFF',
          maxWidth: '1200px'  , 
          margin: '0 auto',
          width: 'calc(100% - 40px)'     
        }}>
        
        <input style={{ marginRight: '100px' , marginLeft:'100px', width: '100px', borderRadius: '8px',padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="Enter task..." /> 
        <input style ={{marginRight: '100px', width: ' 75px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="Top priority"/>
        <input style ={{marginRight: '100px', width: '125px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="dd/mm/yyyy      📅"/>
        <input style ={{marginRight: '100px', width: '100px', borderRadius: '8px', padding: '8px', border: '1px solid #ccc'}} 
          type="text" placeholder="Add text"/>

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
function App() {
  /*Javascript Function*/

  return (
    <>
      <section id="Header"></section>
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
      <section id="task-schedule"></section>
      <section id="animation"></section>      
    </>
    
  )
}

export default App
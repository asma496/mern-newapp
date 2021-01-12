import React,{useState, useEffect} from 'react'


function App() {
  const [state, setstate] = useState([]);
                                                                                                                                                  
 useEffect(()=>{
   fetch('http://localhost:4000/api/users')
   .then(res=>res.json())
   .then(res=>{
     console.log(res)
    setstate(res)
    })
   .catch(e=>console.log(e))
  }
 ,[])
  return (
    
<div>


     {

     state.map((item)=>(
       <div key={item.id}>{item.name}</div>

     ))
   }

    </div>
  );
}

export default App;

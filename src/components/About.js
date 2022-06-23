import Navbar from './Navbar'
import {useState,useRef} from 'react';
function About(){
const list=['ReactJs','Angular'];
const [formData,setData]=useState([]);
const todoname = useRef();
const tododatetime = useRef();
const ismust = useRef();
let todoData=[{name:'',tododatetime:'',ismust:''}];
    const handleTodo=(e)=>{
        e.preventDefault();
        const data={
          name:todoname.current.value,
          tododatetime:tododatetime.current.value,
          ismust:ismust.current.value
      };
      console.log("data",data)
      setData([...formData,data])
     
    }
    return(
        <>
        <Navbar/>
        <div style={{backgroundColor:'#c8e6d2'}}>
          <div className='container'>
             <div className='row'>
                 <div className='col-2'></div>
                <div style={{backgroundColor:'#01260b',color:'steelblue'}} className='col-8'>
                  <div className='card shadow'>
                     <div className='card-content'>
                         <hr/>
                      <form onSubmit={handleTodo}>
                        <div className='mx-auto mb-1 form-group' style={{width:'80%'}}>
                        <label htmlFor='todoname'>Name:</label>
                        <input ref={todoname} type='text'  id='todoname' className='form-control'/>
                       
                        </div>
                        <div className='mx-auto form-group mb-1' style={{width:'80%'}}>
                          <label  htmlFor='date'>Date & Time</label>
                         <input ref={tododatetime} className='form-control' type='datetime-local'/>
                        </div>
                        <div className='form-group mx-auto mb-1' style={{width:'200px'}}>
                        <label htmlFor='must'>Must ?</label>
                        <input ref={ismust}  type='checkbox' id='must' />
                        </div>
                         
                        <button style={{display:'block',margin:'auto'}} type='submit' className='btn btn-outline-success'>Add</button>
                         <hr/>
                      </form>
                     </div>
                  </div>
                </div> 
                <div className='col-2'></div>

                <div className='row'>
                 <div className='col-md-2'></div>
                 <div className='col-md-8'>
                  {formData.length>0? <table className='table bg-light table-hover table-light'>
                    <thead><th>Todo</th><th>Date & Time</th><th>Must B?</th></thead>
                    
                      {
                        formData.map((todo,index)=>{
                          return (
                            <>
                            <tr>
                            <td key={index}>{todo.name}</td>
                          <td key={index}>{todo.tododatetime}</td>
                          <td key={index}>{todo.ismust}</td>
                           <td ><button className='btn  btn-outline-danger'>Delete</button></td>
                            </tr>
                          </>
                          )
                        })
                      }
                    
                   </table>
                 :<b>no todo</b>}
                  </div>
                 <div className='col-md-2'></div>
                </div>
             </div>
          </div>
        </div>

        </>
    )
}

export default About;
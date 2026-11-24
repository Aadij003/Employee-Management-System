import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, settaskTitle] = useState('')
  const [Date, setDate] = useState('')
  const [Assign, setAssign] = useState('')
  const [Category, setCategory] = useState('')
  const [Description, setDescription] = useState('')

  const [task, settask] = useState({})


  const submitHandler=(e)=>{
     e.preventDefault();

        settask({taskTitle,Assign,Category,Description,Date,active:false,newTask:true,failed:true,completed:false})

     settaskTitle('')
     setAssign('')
     setCategory('')
     setDescription('')
     setDate('')

   

  }
     

  return (
      <div className='p-5 bg-[#1C1C1C] mt-5 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex w-full flex-wrap p-10  items-start justify-between'>

               <div className='w-1/2'>
               
                <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{
              settaskTitle(e.target.value)
            }} 
            className='text-sm py-1 px-2 w-4/5 rounded outline-none border border-gray-400 mb-4' type="text" placeholder='make a ui design' />
         </div>

                
                 <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={Date} onChange={(e)=>{
              setDate(e.target.value)
            }} 
             className='text-sm py-1 px-2 w-4/5 rounded outline-none border border-gray-400 mb-4 ' type="date" />
         </div>
              
              <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to </h3>
            <input value={Assign} onChange={(e)=>{
              setAssign(e.target.value)
            }} 
             className='text-sm py-1 px-2 w-4/5 rounded outline-none border border-gray-400 mb-4' type="text" id="" placeholder='employee name'/>
              </div>

              <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input 
            value={Category} onChange={(e)=>{
              setCategory(e.target.value)
            }} 
             className='text-sm py-1 px-2 w-4/5 rounded outline-none  border border-gray-400 mb-4 ' type="text" placeholder='design,dev,etc' />
                </div>

               </div>

    

             <div className='w-2/5 flex flex-col items-start'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            value={Description} onChange={(e)=>{
              setDescription(e.target.value)
            }} 
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none border border-gray-400' name="" id="" rows='10' cols='30' placeholder='enter description' ></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
         </div>

        
   
            
        </form>
      </div>
  )
}

export default CreateTask

"use client";
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmaintask] = useState([]);
  const sethandler= (e)=>{
    e.preventDefault();
    setmaintask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
  }

  let rendertask = <h4>No Task Available</h4>

  const deletehandler = (i)=>{
    let copytask = [...mainTask];
    copytask.splice(i,1);
    setmaintask(copytask);
  }
  if(mainTask.length>0){
    rendertask = mainTask.map((t,i)=>{
      return (
      <>
      <li key={i}>
        <div className='flex justify-between mb-5'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
          <button onClick={()=>{
            deletehandler(i);
          }}className='bg-red-400 rounded font-bold text-amber-50'>Delete</button>
        </div>
      </li>
      </>
      )
    })
  }
  return (
    <>
      <h1 className='font-bold text-white bg-indigo-400 text-5xl text-center p-5'>To Do List App</h1>
      <div className='text-9xl'>WELCOME</div>
      <form onSubmit={sethandler}>
        <input
        type='text'
        className='border-b-indigo-950 p-2 m-20 text-shadow-white border-4 rounded-4xl'
        placeholder='enter your task'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
        }}
        />
        <input
        type='text'
        className='border-b-indigo-950 p-2 m-20 text-shadow-white border-4 rounded-4xl'
        placeholder='enter your description'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value);
        }}
        />
        <button className='border-b-indigo-950 p-2 m-20 text-shadow-white border-2 rounded-2xl bg-indigo-200'>Add Tast</button>
        <hr/>
        <div className='p-15 m-3 bg-slate-400'>
          <ul>{rendertask}</ul>
        </div>
      </form>
    </>
  )
}

export default page

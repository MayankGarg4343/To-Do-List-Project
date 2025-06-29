"use client";
import React, { useState } from "react";
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmaintask] = useState([]);
  const sethandler = (e) => {
    e.preventDefault();
    setmaintask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  let rendertask = <h4>No Task Available</h4>;

  const deletehandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };
  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i}>
            <div className="flex justify-between mb-5">
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h6 className="text-xl font-semibold">{t.desc}</h6>
              <button
                onClick={() => {
                  deletehandler(i);
                }}
                className="bg-red-400 rounded font-bold text-amber-50"
              >
                Delete
              </button>
            </div>
          </li>
        </>
      );
    });
  }
  return (
    <>
      <h1 className="font-bold text-white bg-indigo-600 text-4xl text-center p-5">
        TO DO LIST PLATFORM
      </h1>
      <div className="flex m-15">
        <div className="p-5">
          <div className="text-8xl text-cyan-50">WELCOME TO</div>
          <div className="text-8xl text-indigo-600">TO DO LIST APP</div>
        </div>
        <div>
          <img src="/img1.jpg" className="h-100 w-300" />
        </div>
      </div>
      <div>
        <p className="text-2xl text-cyan-50 animate-fade-in p-5 m-3">
          Welcome to your personal productivity hub! Here, you can organize your
          tasks, set your priorities, and track your progress—all in one place.
          Whether you're tackling a big project or just trying to stay on top of
          daily chores, every task you complete brings you one step closer to
          your goals. Stay focused, stay consistent, and remember—small actions
          each day lead to big achievements. Let’s make today productive!
        </p>
      </div>
      <div className="text-amber-50 text-8xl m-15">
        <span>Let's  </span><span className="text-indigo-600">Go</span>
      </div>
      <form onSubmit={sethandler} className="">
        <input
          type="text"
          className="border-b-indigo-950 p-2 m-20 text-shadow-white border-4 rounded-4xl"
          placeholder="enter your task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-b-indigo-950 p-2 m-20 text-shadow-white border-4 rounded-4xl"
          placeholder="enter your description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="border-b-indigo-950 p-2 m-20 text-shadow-white border-2 rounded-2xl bg-indigo-200">
          Add Tast
        </button>
        <hr />
        <div className="p-15 m-3 bg-slate-400">
          <ul>{rendertask}</ul>
        </div>
      </form>
    </>
  );
};

export default page;

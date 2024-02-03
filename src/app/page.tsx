"use client"
import { useEffect, useState } from "react";
import { TimerChart } from "./vega/Timer";
import { useRouter } from "next/navigation";


interface Milestone {
  id: number
  value: number
}

export default function Home() {

  const [min, setMin]  = useState<string>("20")
  const [data, setData] = useState<Milestone[]>([])
  const [show, setShow]  = useState<boolean>(false)

  const openTimer = () => {
    const query = new URLSearchParams()
    query.set("min", min)
    window.open(`/timer?${query.toString()}`, "_blank")
  }

  useEffect(()=>{
    setData([
      {id: 1, value: 10},
      {id: 2, value: 3},
      {id: 3, value: 3},
      {id: 4, value: 3},
      {id: 5, value: 3},
      {id: 6, value: 3},
    ])
  },[])
  return (
    
    <main className="flex min-h-screen flex-col items-center  p-24">
    
      <div className="flex flex row gap-1">
        <div className="basis-12">
          <button className="btn" onClick={openTimer}>Open</button>
        </div>
        <div className="basis-12">
          <div className="form-control flex-row items-center">
            <input type="number" name="timer" value={min} onChange={(e)=>{setMin(e.target.value)}} className="input input-borderd rounded-none rounded-l-lg w-24 focus:outline-none" placeholder="タイマー"></input>
            <div className="btn rounded-none rounded-r-lg bg-slate-100 hover:bg-slate-100 border-none">分</div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { TimerChart } from "../vega/Timer";


interface Milestone {
  id: number
  value: number
}

export default function MyTimer() {

  const searchParams = useSearchParams()
 
  const min = searchParams.get('min')
  const [data, setData] = useState<Milestone[]>([])
  const [show, setShow]  = useState<boolean>(false)

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
      
      {
        show  ? 
          <>
             <TimerChart actions={false} data={{table: data, timer: [{min}]}} width={400} height={400} />
          </>
          :  
          <div className="flex flex-row items-center">
            <button type="button" className="btn btn-primary"  onClick={()=>setShow(true)}>Start ({min} 分)</button>
          </div>
      }
      
    </main>
  );
}

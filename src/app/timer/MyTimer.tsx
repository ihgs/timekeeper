"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { TimerChart } from "../vega/Timer";
import { Button, Stack } from "@mui/material";


interface Milestone {
  id: number
  value: number
}

export default function MyTimer() {

  const searchParams = useSearchParams()
 
  const min = searchParams.get('min')
  const points = searchParams.get('points')
  const [data, setData] = useState<Milestone[]>([])
  const [show, setShow]  = useState<boolean>(false)
  const [graphSize, setGraphSize] = useState<number>(300)

  useEffect(()=>{
    setGraphSize(Math.min(window.innerHeight, window.innerWidth))

    if(points){
        const tmpData = points.split(',').map((p,index)=>{
            return {
                id: index,
                value: parseInt(p)
            }
        })
        setData(tmpData)    
    }
  },[points])
  return (
    
    <Stack sx={{paddingTop: 12}} direction={"column"} gap={6}  alignItems={"center"} >      
      {
        show  ? 
          <>
             <TimerChart actions={false} data={{table: data, timer: [{min}]}} width={graphSize*0.8} height={graphSize*0.8} />
          </>
          :  
          <Button variant="contained" onClick={()=>setShow(true)}>Start ({min} 分)</Button>
      }
      
    </Stack>
  );
}

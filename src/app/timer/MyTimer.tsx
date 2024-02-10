"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { TimerChart } from "../vega/Timer";
import { Button, Stack, Typography } from "@mui/material";
import { BarTimerChart } from "../vega/BarTimer";


interface Milestone {
  id: number
  value: number
}

export default function MyTimer() {

  const searchParams = useSearchParams()

  const min = searchParams.get('min')
  const points = searchParams.get('points')
  const title = searchParams.get('title')
  const [data, setData] = useState<Milestone[]>([])
  const [show, setShow] = useState<boolean>(false)
  const [showBar, setShowBar] = useState<boolean>(false)
  const [graphSize, setGraphSize] = useState<number>(300)

  useEffect(() => {
    setGraphSize(Math.min(window.innerHeight, window.innerWidth))

    if (points) {
      const tmpData = points.split(',').map((p, index) => {
        return {
          id: index,
          value: parseInt(p)
        }
      })
      setData(tmpData)
    }
  }, [points])
  return (

    <Stack sx={{ paddingTop: 6 }} direction={"column"} gap={3} alignItems={"center"} >
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      {
        (!show && !showBar) &&
        <>
          <Stack direction={'row'} gap={2}>
            <Button variant="contained" onClick={() => setShow(true)}>Start circle timer ({min} 分)</Button>
            <Button variant="contained" onClick={() => setShowBar(true)}>Start bar timer ({min} 分)</Button>

          </Stack>
        </>

      }

      {
        show &&
        <>
          <TimerChart actions={false} data={{ table: data, timer: [{ min }] }} width={graphSize * 0.8} height={graphSize * 0.8} />

        </>

      }
      {
        showBar &&
        <BarTimerChart actions={false} data={{ table: data, timer: [{ min }] }} width={window.innerWidth * 0.8} height={window.innerHeight * 0.8} />
      }


    </Stack>
  );
}

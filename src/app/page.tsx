"use client"
import { useState } from "react";
import TimerGenerator from "./components/TimerGenerator";
import { Stack, ButtonGroup, Button, Typography } from "@mui/material";

export default function Home() {

  const maxSizeOfPoint = 10
  const [timers, setTimers] = useState<number[]>([1])

  const addTimer = () => {
    setTimers([...timers, timers.length+1])
  }

  const popTimer = () => {
    setTimers(timers.slice(0, timers.length - 1))
  }
  return (

    <Stack sx={{ paddingY: 6 }} direction={"column"} gap={0} alignItems={"center"} >
      <Typography variant="h3" gutterBottom>
        Time Keeper
      </Typography>
      <div>
        <Stack sx={{ paddingY: 3 }} direction={"column"} gap={3} alignItems={"center"} >
          {timers.map((timer) => {
            return (<TimerGenerator key={`timer${timer}`} />)
          })}
        </Stack>
        <ButtonGroup >
          <Button variant="contained" size="large" onClick={addTimer} disabled={timers.length >= maxSizeOfPoint}>+</Button>
          <Button variant="contained" size="large" onClick={popTimer} disabled={timers.length < 1}>-</Button>
        </ButtonGroup>
      </div>
    </Stack>

  );
}

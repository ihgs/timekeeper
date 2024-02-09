"use client"
import { useState } from "react";
import TimerGenerator from "./components/TimerGenerator";
import { Stack, ButtonGroup, Button, Typography, Container } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Home() {

  const maxSizeOfPoint = 10
  const [timers, setTimers] = useState<number[]>([1])

  const addTimer = () => {
    setTimers([...timers, timers[timers.length-1]+1])
  }



  const deleteItem = (timer: number) => {
    if(window.confirm("Do you delete this item?")){
      setTimers(timers.filter(n=>n!=timer))

    }
  }
  return (

    <Stack sx={{ paddingY: 6 }} direction={"column"} gap={0} alignItems={"center"} >
      <Typography variant="h3" gutterBottom>
        Time Keeper
      </Typography>
      <div>
        <Stack sx={{ paddingY: 3 }} direction={"column"} gap={3} alignItems={"center"} >
          {timers.map((timer) => {
            return (
              <div style={{position: 'relative'}} key={`timer${timer}`}>
                <TimerGenerator  />
                <HighlightOffIcon sx={{position: 'absolute', top: 0, right:0, zIndex:10}} onClick={()=>deleteItem(timer)}/>
              </div>

            )
          })}
        </Stack>
        <ButtonGroup >
          <Button variant="contained" size="large" onClick={addTimer} disabled={timers.length >= maxSizeOfPoint} sx={{textTransform: 'none'}}>
            Add a session
          </Button>
        </ButtonGroup>
      </div>
    </Stack>

  );
}

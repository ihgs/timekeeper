"use client"
import { Box, Button, ButtonGroup, Input, InputAdornment, Slider, Stack } from "@mui/material";
import { useEffect, useState } from "react";


export default function TimerGenerator() {

    const maxSizeOfPoint = 5

    const [min, setMin] = useState<string>("20")
    const [points, setPoints] = useState<number[]>([])

    const openTimer = () => {
        const query = new URLSearchParams()
        query.set("min", min)
        const rangeArray = [0, ...points, parseInt(min)]
        const tmp = []
        for (let i = 0; i < rangeArray.length - 1; i++) {
            tmp.push(rangeArray[i + 1] - rangeArray[i])
        }
        query.set("points", tmp.join(","))
        window.open(`/timer?${query.toString()}`, "_blank")
    }

    const changeTimer = (value: string) => {
        setMin(value)
    }
    const handleChange = (event: Event, newValue: number | number[]) => {
        setPoints(newValue as number[]);
    };

    const addPoint = () => {
        const newPoints = [...points, parseInt(min)]
        setPoints(newPoints)
    }

    const popPoint = () => {
        setPoints(points.slice(0, points.length - 1))
    }

    const valuetext = (value: number) => {
        return `${value}`
    }

    useEffect(() => {

    }, [])
    return (
        <Stack direction={"row"} gap={3} alignItems={"center"}>
            <Button onClick={openTimer} size="small" variant="contained">Open</Button>
            <Input value={min}
                onChange={(e) => { changeTimer(e.target.value) }}
                placeholder="タイマー"
                sx={{ width: 60, textAlign: "right" }}
                inputProps={{ style: { textAlign: 'right' } }}
                endAdornment={<InputAdornment position="end">分</InputAdornment>}
            >
            </Input>
            <ButtonGroup >
                <Button variant="contained" size="small" onClick={addPoint} disabled={points.length >= maxSizeOfPoint}>+</Button>
                <Button variant="contained" size="small" onClick={popPoint} disabled={points.length < 1}>-</Button>
            </ButtonGroup>
            <Box width={300} alignItems={"center"}>
                <Slider
                    getAriaLabel={() => 'Milestone'}
                    value={points}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    track={false}
                    min={0}
                    max={parseInt(min)}
                />
            </Box>
        </Stack>


    );
}

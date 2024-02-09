"use client"
import { Box, Button, ButtonGroup, Divider, Input, Slider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TimerGenerator() {
    const router = useRouter()

    const maxSizeOfPoint = 5

    const [min, setMin] = useState<number>(20)
    const [points, setPoints] = useState<number[]>([10, 17])
    const [minError, setMinError] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    const openTimer = () => {
        if (minError) {
            return
        }
        const query = new URLSearchParams()
        query.set("min", `${min}`)
        query.set('title', title)
        const rangeArray = [0, ...points, min]
        const tmp = []
        for (let i = 0; i < rangeArray.length - 1; i++) {
            tmp.push(rangeArray[i + 1] - rangeArray[i])
        }
        query.set("points", tmp.join(","))
        const basePath = process.env.NEXT_PUBLIC_BASEPATH
        window.open(`${basePath}/timer?${query.toString()}`, "_blank")
    }

    const changeTimer = (value: string) => {
        setMinError(false)
        const numValue = Number(value)
        if (isNaN(numValue)) {
            setMinError(true)
        } else {
            setPoints(points.filter(p => p <= numValue))
            setMin(numValue)
        }
    }

    const changeTitle = (value: string) => {
        setTitle(value)

    }
    const handleChange = (event: Event, newValue: number | number[]) => {
        setPoints(newValue as number[]);
    };

    const addPoint = () => {
        const newPoints = [...points, min]
        setPoints(newPoints)
    }

    const popPoint = () => {
        setPoints(points.slice(0, points.length - 1))
    }

    return (
        <Stack direction={"column"}
            sx={{
                backgroundColor: "white",
                paddingBottom: 2,
                paddingTop: 1,
                paddingLeft: 3,
                paddingRight: 6,
                borderRadius: 2
            }}
        >
            <Stack direction={"row"} gap={3} alignItems={"center"} >
                <Input
                    placeholder="session title"
                    sx={{ marginY: 1, width: 200 }}
                    onChange={(e) => { changeTitle(e.target.value) }}
                >
                </Input>
                <Stack direction={"row"} gap={1} alignItems={"center"} >
                    <Input
                        defaultValue={20}
                        error={minError}
                        onBlur={(e) => { changeTimer(e.target.value) }}
                        sx={{ width: 40 }}
                        inputProps={{ style: { textAlign: 'center' } }}

                    >
                    </Input>
                    <div >min</div>
                </Stack>
                <Button onClick={openTimer} size="small" variant="contained" disabled={minError} 
                sx={{ textTransform: 'none', marginTop: 4 }}>
                Open Timer
            </Button>
            </Stack>
            <Divider sx={{paddingY:1}}/>
            <Stack direction={"column"} sx={{ marginTop: 1 }}>
            <Typography sx={{textDecoration: 'underline'}} >Guide</Typography>
            <Stack direction={"row"} gap={3} alignItems={"center"} sx={{ marginTop: 6 }}>
                

                <Box width={300}>
                    <Slider
                        getAriaLabel={() => 'Milestone'}
                        value={points}
                        onChange={handleChange}
                        valueLabelDisplay="on"
                        track={false}
                        min={0}
                        max={min}
                    />
                </Box>
                <ButtonGroup sx={{ paddingLeft: 1 }}>
                    <Button variant="contained" size="small" onClick={addPoint} disabled={points.length >= maxSizeOfPoint}>+</Button>
                    <Button variant="contained" size="small" onClick={popPoint} disabled={points.length < 1}>-</Button>
                </ButtonGroup>
            </Stack>


            </Stack>

        </Stack>
    );
}

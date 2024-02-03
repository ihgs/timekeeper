"use client"
import { useEffect, useState } from "react";
import TimerGenerator from "./components/TimerGenerator";
import { Box, Container, Stack } from "@mui/material";


export default function Home() {
  return (

    <Stack sx={{paddingTop: 24}} direction={"column"} gap={6}  alignItems={"center"} >
    <TimerGenerator />
        <TimerGenerator />
    </Stack>

  );
}

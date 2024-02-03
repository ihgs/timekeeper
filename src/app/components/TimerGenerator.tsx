import { useEffect, useState } from "react";


interface Milestone {
  id: number
  value: string
}

export default function TimerGenerator() {

  const [min, setMin] = useState<string>("20")
  const [points, setPoints] = useState<Milestone[]>([])

  const openTimer = () => {
    const query = new URLSearchParams()
    query.set("min", min)
    const rangeArray = [{id: 0, value:"0"}, ...points, {id: 100, value: min}]
    const tmp = []
    for (let i=0;i<rangeArray.length-1;i++){
      tmp.push(parseInt(rangeArray[i+1].value)-parseInt(rangeArray[i].value))
    }
    query.set("points", tmp.join(","))
    window.open(`/timer?${query.toString()}`, "_blank")
  }

  const changeTimer = (value: string) => {
    setMin(value)
  }

  const changePoint = (index: number, value: string) => {
    const tmpPoints = Array.from(points)
    tmpPoints[index] = { id: index+1, value: value }
    setPoints(tmpPoints)
  }


  useEffect(() => {
    setPoints([
      { id: 1, value: "1" },
      { id: 2, value: "3" },
      { id: 3, value: "5" },
    ])
  }, [])
  return (

      <div className="flex flex row gap-1">
        <div className="basis-12">
          <button className="btn" onClick={openTimer}>Open</button>
        </div>
        <div className="basis-12 form-control flex-row items-center">
          <input type="text" name="timer" value={min} onChange={(e) => { changeTimer(e.target.value) }} className="input input-borderd rounded-none rounded-l-lg w-24 focus:outline-none" placeholder="タイマー"></input>
          <div className="btn rounded-none rounded-r-lg bg-slate-100 hover:bg-slate-100 border-none">分</div>
        </div>
        {points.map((point, index) => {
          return <div className="form-control flex-row items-center">
            <input type="text" 
              className="input input-borderd w-20 focus:outline-none"
              value={point.value} 
              id={`i${index}`}
              onChange={(e) => { changePoint(index, e.target.value) }}
              ></input>
          </div>

        }
        )}
      </div>
  );
}

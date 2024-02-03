
import { VisualizationSpec, createClassFromSpec } from 'react-vega';


const spec : VisualizationSpec= {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "Presentaion timer",

    "autosize": "none",

    "signals": [
        {
            "name": "minutes",
            "update": "data('timer')[0].min"
        },
        {
            "name": "innerRadius", "init": "width/4"
        },
        {
            "name": "startDate",
            "init": "now()"
        },
        {
            "name": "endDate",
            "init": "now()+minutes*60*1000"
        },
        {
            "name": "timer",
            "init": "0",
            "on": [{ "events": { "type": "timer", "throttle": 1000 }, "update": "(now()- startDate)/(endDate-startDate)*6.29" }]
        }

    ],

    "data": [
        {
            "name": "table",
            "values": [
                { "id": 1, "value": 1 },
                { "id": 2, "value": 1 },
                { "id": 3, "value": 1 },
                { "id": 4, "value": 1 }
            ],
            "transform": [
                {
                    "type": "pie",
                    "field": "value",
                    "startAngle": 0,
                    "endAngle": 6.29,
                    "sort": false
                }
            ]
        },
        {
            "name": "timer",
            "values": []
        }
    ],
    "scales": [
        {
            "name": "color",
            "type": "ordinal",
            "domain": { "data": "table", "field": "id" },
            "range": { "scheme": "tableau20" }
        }
    ],

    "marks": [
        {
            "type": "arc",
            "from": { "data": "table" },
            "encode": {
                "enter": {
                    "fill": { "scale": "color", "field": "id" },
                    "x": { "signal": "width / 2" },
                    "y": { "signal": "height / 2" }
                },
                "update": {
                    "startAngle": { "field": "startAngle" },
                    "endAngle": { "field": "endAngle" },
                    "padAngle": { "value": 0 },
                    "innerRadius": { "signal": "innerRadius" },
                    "outerRadius": { "signal": "width / 2" },
                    "cornerRadius": { "value": 0 }
                }
            }
        },
        {
            "type": "arc",
            "encode": {
                "enter": {
                    "fill": { "value": "white" },
                    "x": { "signal": "width / 2" },
                    "y": { "signal": "height / 2" }
                },
                "update": {
                    "startAngle": { "value": 0 },
                    "endAngle": { "signal": "timer" },
                    "padAngle": { "value": 0 },
                    "innerRadius": { "signal": "innerRadius" },
                    "outerRadius": { "signal": "width / 2" },
                    "cornerRadius": { "value": 0 }
                }
            }
        }
    ]
}

export const TimerChart =  createClassFromSpec({mode: 'vega',
    spec});
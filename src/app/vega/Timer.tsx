
import { VisualizationSpec, createClassFromSpec } from 'react-vega';


const spec : VisualizationSpec={
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "Presentaion timer",
    "autosize": "none",
    "signals": [
      {"name": "minutes", "update": "data('timer')[0] ? data('timer')[0].min: 0"},
      // {"name": "minutes", "update": "data('timer')[0].min"},
      {"name": "innerRadius", "init": "width/4"},
      {"name": "startDate", "init": "now()"},
      {"name": "endDate", "update": "startDate+minutes*60*1000"},
      {
        "name": "baseTimer",
        "init": "endDate - startDate",
        "on": [
          {
            "events": {"type": "timer", "throttle": 200},
            "update": "(endDate - now())"
          }
        ]     
      },
      {
        "name": "timer",
        "init": "0",
        "on": [
          {
            "events": {"signal": "baseTimer"},
            "update": "(endDate - startDate - baseTimer)/(endDate - startDate)*6.29"
          }
        ]
      },
      {
        "name": "fontSize",
        "init": "40"
      },
      {
        "name": "fontPadding",
        "init": "5"
      },
      {
        "name": "timerStr",
        "init": "",
        "on": [
          {
            "events": {"signal": "baseTimer"},
            "update": "baseTimer >= 0 ? floor(baseTimer/1000/60)+':'+pad(floor((baseTimer/1000))%60,2, '0', 'left'): floor(-1*baseTimer/1000/60)+':'+pad(floor((-1*baseTimer/1000))%60,2, '0', 'left')"
          }
        ]
      }
    ],
    "data": [
      {
        "name": "table",
        "values": [
          {"id": 1, "value": 10},
          {"id": 2, "value": 20},
          {"id": 3, "value": 50}
        ],
        "transform": [
            {
                "type": "window",
                "ops": ["sum"],
                "fields": ["value"],
                "as": ["sum"]
            },
  
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
        "name":"timer",
        "values":[]
      }
    ],
    "scales": [
      {
        "name": "color",
        "type": "ordinal",
        "domain": {"data": "table", "field": "id"},
        "range": {"scheme": "category20"}
      }
    ],
    "marks": [
      {
        "type": "arc",
        "from": {"data": "table"},
        "encode": {
          "enter": {
            "fill": {"scale": "color", "field": "id"},
            "x": {"signal": "width / 2"},
            "y": {"signal": "height / 2"}
          },
          "update": {
            "startAngle": {"field": "startAngle"},
            "endAngle": {"field": "endAngle"},
            "padAngle": {"value": 0},
            "innerRadius": {"signal": "innerRadius"},
            "outerRadius": {"signal": "width / 2 - fontSize - fontPadding"},
            "cornerRadius": {"value": 0}
          }
        }
      },
      {
        "type": "arc",
        "encode": {
          "enter": {
            "fill": {"value": "white"},
            "x": {"signal": "width / 2"},
            "y": {"signal": "height / 2"}
          },
          "update": {
            "startAngle": {"value": 0},
            "endAngle": {"signal": "timer"},
            "padAngle": {"value": 0},
            "innerRadius": {"signal": "innerRadius"},
            "outerRadius": {"signal": "width / 2 - fontSize - fontPadding"},
            "cornerRadius": {"value": 0}
          }
        }
      },
      {
        "type": "text",
        "from": {"data": "table"},
        "encode": {
          "enter": {
            "x": {"signal": "width / 2"},
            "y": {"signal": "height / 2"},
            "radius": {"signal": "width / 2 - fontSize/2"},
            "theta": {"signal": "datum.endAngle"},
            "fill": {"value": "#000"},
            "align": {"value": "center"},
            "baseline": {"value": "middle"},
            "text": {"signal": "(minutes - datum.sum) == 0 ? minutes : (minutes - datum.sum)"},
            
          },
          "update": {
            "fontSize": {"signal": "timer < datum.endAngle ? fontSize: fontSize/2"}
          }
        }
      },
      {
        "type": "text",
        "encode": {
          "enter": {
            "x": {"signal": "width/2"},
            "y": {"signal": "height /2"},
            "align": {"value": "center"},
            "baseline": {"value": "middle"},
            "fontSize": {"signal": "width/ 8"}
          },
          "update": {
            "text": {"signal": "timerStr"},
            "fill": 
            [
              {"test": "baseTimer >= 0", "value": "black"},
              {"value": "red"}
            ]
          }
        }
      }
    ],
    "width": 400,
    "height": 400
  }

export const TimerChart =  createClassFromSpec({mode: 'vega',
    spec});
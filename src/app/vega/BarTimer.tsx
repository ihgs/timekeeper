
import { VisualizationSpec, createClassFromSpec } from 'react-vega';


const spec : VisualizationSpec={
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "Presentaion timer",
  "autosize": "none",
  "signals": [
    {"name": "minutes", "update": "data('timer')[0] ? data('timer')[0].min: 0"},
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
          "update": "(endDate - startDate - baseTimer)/(endDate - startDate) * minutes"
        }
      ]
    },
    {"name": "fontSize", "init": "40"},
    {"name": "timerFontSize", "init": "height*2/3"},
    
    {"name": "barHeight", "init": "100"},
    {"name": "fontPadding", "init": "5"},
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
        {"id": 1, "value": 1},
        {"id": 2, "value": 2},
        {"id": 3, "value": 5}
      ],
      "transform": [{"type": "stack", "field": "value", "as": ["v0", "v1"]}]
    },
    {"name": "timer", "values": [{"min": 8}]}
  ],
  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "table", "field": "id"},
      "range": {"scheme": "category20"}
    },
    {
      "name": "x",
      "type": "linear",
      "range": "width",
      "domain": {"data": "table", "field": "v1"}
    }
  ],
  "marks": [
    {
      "type": "group",
      "encode": {"enter": {"height": {"field": {"group": "height"}}}},
      "marks": [
        {
          "type": "text",
          "encode": {
            "update": {
              "baseline": {"value": "top"},
              "align": {"value": "center"},
              "y": {"signal": "0"},
              "x": {"signal": "width/2"},
              "text": {"signal": "timerStr"},
              "fontSize": {"signal": "timerFontSize"}
            }
          }
        }
      ]
    },
    {
      "type": "group",
      "encode": {
        "enter": {"height": {"signal": "barHeight"}, "y": {"signal": "timerFontSize"}}
      },
      "marks": [
        {
          "type": "rect",
          "from": {"data": "table"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "v0"},
              "x2": {"scale": "x", "field": "v1"},
              "y": {"value": 0},
              "y2": {"signal": "barHeight"},
              "fill": {"scale": "color", "field": "id"}
            },
            "update": {"fillOpacity": {"value": 1}}
          }
        },
        {
          "type": "rect",
          "encode": {
            "enter": {"fill": {"value": "white"}},
            "update": {
              "x": {"value": 0},
              "x2": {"scale": "x", "signal": "timer"},
              "y": {"value": 0, "offset": 3},
              "y2": {"signal": "barHeight", "offset": -3},
              "fillOpacity": {"value": 1}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "table"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "v1"},
              "y": {"signal": "barHeight/2"},
              "fill": {"value": "white"},
              "align": {"value": "right"},
              "baseline": {"value": "middle"},
              "text": {"field": "v1"},
              "fontWeight": {"value": "bold"},
              "stroke": {"scale": "color", "field": "id"},
              "fontSize": {"signal": "fontSize"}
            }
          }
        }
      ]
    }
  ]
}

export const BarTimerChart =  createClassFromSpec({mode: 'vega',
    spec});
import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


export default function ListAssets() {
  const categories = ['Motor H13D-1', 'Motor H12D-1', 'Motor H12D-3', 'Motor H12D-2', 'Fan D21', 'Fan D22']
  const data = [
    {
      type: 'column',
      name: 'LIFE',
      data: [7],
      color: '#45C86D',
    },
    {
      type: 'column',
      name: 'LIFE',
      data: [0, 7.37],
      color: '#45C86D',
    },
    {
      type: 'column',
      name: 'LIFE',
      data: [0, 0, 9.09],
      color: '#45C86D',
    },
    {
      type: 'column',
      name: 'LIFE',
      data: [0, 0, 0, 8.83],
      color: '#45C86D',
    },
    {
      type: 'column',
      name: 'LIFE',
      data: [0, 0, 0, 0, 6.04],
      color: '#45C86D',
    },
    {
      type: 'column',
      name: 'LIFE',
      data: [0, 0, 0, 0, 0, 9.12],
      color: '#45C86D',
    },
    {
      type: 'column',
      name: 'LOSS',
      data: [3.00, 2.63, 0.91, 1.17, 3.96, 0.88],
      color: '#DB303F',
    }
  ]


  useEffect(() => {
    const temp2 = document.getElementsByClassName("highcharts-legend highcharts-no-tooltip")[0]
    temp2?.remove()
  })
  
  const type = 'column' as const

  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      type,
      height: 400,
      // width: "",
      backgroundColor: '#364150',
      borderRadius: 10,
      marginBottom: 100,
    },
    xAxis: {
      endOnTick: false,
      opposite: false,
      startOnTick: false,
      categories: categories,

      labels: {
        style: {
          color: 'whitesmoke'
        }
      }
    },
    yAxis: {
      visible: true,
      min: 0,
      title: {
        text: 'Longevity',
        style: {
          color: 'whitesmoke',
        },
      },
      labels: {
        style: {
          color: 'whitesmoke'
        }
      }
    },
    title: {
      text: 'Assets Life Cycle',
      style: {
        color: 'whitesmoke',
      },
    },
    subtitle: {
      text: 'Info source: <a href="https://tractian.com/blog/ciclo-de-vida-de-ativos-predicao-como-remedio-para-longevidade">www.tractian.org</a>',
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: false
    },
    plotOptions: {
      column: {
        stacking: 'percent',
      },
    },

    //@ts-ignore
    series: [...data]

      
  })

  return (<HighchartsReact highcharts={Highcharts} options={chartOptions} />)
}
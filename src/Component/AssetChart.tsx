import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

function Verify(element, status) {
  return element.filter((item) => item.status === status).length;
}

export default function AssetChart({ data, text }) {
  const [inAlert, setInAlert] = React.useState(() => Verify(data, 'inAlert'));
  const [inOperation, setInOperation] = React.useState(() =>
    Verify(data, 'inOperation')
  );
  const [inDownTime, setIndowntime] = React.useState(() =>
    Verify(data, 'inDowntime')
  );


  const dataset = [
    {
      type: 'column',
      name: 'Alert',
      data: [inAlert],
      color: '#DB303F',
      style: {
        color: 'whitesmoke',
      },
    },
    {
      type: 'column',
      name: 'Operation',
      data: [inOperation],
      color: '#45C86D',
    },
    {
      type: 'column',
      name: 'Downtime',
      data: [inDownTime],
      color: '#DB8C28',
    },
  ]


  const type = 'column' as const
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      type,
      height: 300,
      width: 250,
      backgroundColor: '#364150',
      borderRadius: 10,
      marginBottom: 100,
    },
    title: {
      text: text,
      style: {
        color: 'whitesmoke',
      },
    },
    xAxis: {
      visible: false
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
    

    //@ts-ignore
    series: dataset,
  })

  return (
    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
  );
}
import React, { useState } from 'react'
import HighchartsReact from "highcharts-react-official"
import Highcharts from 'highcharts'

import { Box } from '@mui/material'
import CardComponent from './components/CardComponent'

export default function Card() {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Analytics',
      style: { fontFamily: 'Roboto' },
      align: 'left'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      key: '',
      labels: {
        style: {
          fontFamily: 'Roboto',
          fontSize: '13px',
          fontStyle: 'normal',
          fontWeight: 400,
          color: '#878787'
        },
      }
    },
    yAxis: {
      labels: {
        style: {
          fontFamily: 'Roboto',
          fontSize: '13px',
          fontStyle: 'normal',
          fontWeight: 400,
          color: '#878787'
        },
      },
      title: false
    },
    subtitle: { text: '' },

    tooltip: false,
    legend: false,
    plotOptions: {
      column: {
        pointWidth: 35,
        dataLabels: {
          key: '',
          enabled: true,
          verticalAlign: 'top',
          inside: false
        }
      }
    },
    series: [{
      data: [{
        y: 1422,
        color: '#E1E1E1'
      }, {
        y: 1005,
        color: '#E1E1E1'
      }, {
        y: 876,
        color: '#E1E1E1'
      }, {
        y: 1356,
        color: '#8234F8'
      }, {
        y: 1499,
        color: '#E1E1E1'
      }, {
        y: 734,
        color: '#E1E1E1'
      }, {
        y: 1203,
        color: '#E1E1E1'
      }]
    }]
  }

  const [spends] = useState([])
  return (
    <Box sx={{ width: '100%', paddingBottom: '56px' }}>
      <CardComponent />
      <Box><HighchartsReact highcharts={Highcharts} options={options} /></Box>
    </Box>
  )
}
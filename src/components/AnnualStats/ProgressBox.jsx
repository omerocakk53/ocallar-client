import React, { useEffect, useState } from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'

const ProgressBox = ({ color = '#1D4ED8', value = 0.75, title, description }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Math.round(value * 100)
    const stepTime = 10

    const timer = setInterval(() => {
      start += 1
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setProgress(start)
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  const chartData = [{ name: 'progress', value: progress, fill: color }]

  return (
    <div className="single-progress-box">
      <div className="box">
        <div className="piechart">
          <RadialBarChart
            width={268}
            height={200}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            barSize={22}
            data={chartData}
            startAngle={180}
            endAngle={-180}
            className=""
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <RadialBar
              minAngle={15}
              clockWise={true}
              dataKey="value"
              cornerRadius={0}
              background={{ fill: '#E5E7EB' }}
            />
          </RadialBarChart>
          <span>{progress}</span>
        </div>
        <h5 className="mt-2 font-medium text-center">{title}</h5>
        <p className="text-gray-500 text-center">{description}</p>
      </div>
    </div>
  )
}

export default ProgressBox

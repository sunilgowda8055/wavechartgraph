import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WaveChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Keep track of the Chart instance

  useEffect(() => {
    if (chartInstance.current) {
      // If a Chart instance exists, destroy it before creating a new one
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map((_, index) => index), // Generate labels based on data length
          datasets: [{
            label: 'Wave',
            data: data,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            tension: 0.4, // Adjust the line curve to make it wavy (lower tension for more wave)
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true // Show x-axis
            },
            y: {
              display: true // Show y-axis
            }
          },
          plugins: {
            legend: {
              display: false // Hide legend
            },
            tooltip: {
              enabled: false // Disable tooltip
            }
          }
        }
      });
    }

    // Cleanup function to destroy the Chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default WaveChart;

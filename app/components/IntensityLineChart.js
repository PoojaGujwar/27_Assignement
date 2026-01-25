import { Line } from "react-chartjs-2"
import {Chart as ChartJs, LinearScale, CategoryScale, Tooltip, LineElement, PointElement,Legend} from "chart.js"

ChartJs.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

export default function IntensityLineChart({data}){
    console.log("Intensity Chart", data)
    const years ={}

    data.forEach(item=>{
        if(!item.end_year || !item.intensity) return;

        if(!years[item.end_year]){
            years[item.end_year] = {total: 0, count:0}
        }
        years[item.end_year].total +=Number(item.intensity);
        years[item.end_year].count+=1
    });
    const labels = Object.keys(years).sort();
    const values = labels.map(y => (years[y].total/years[y].count).toFixed(1))
    const chartData={
        labels,
        datasets:[{
            label:"Avg Intensity",
            data:values,
            tension:0.4
        }]
    }
    const options={
        responsive:true,
        maintainAspectRatio:false,   
    scales: {
    x: {
      ticks: {
        color: "#cbd5e1",   // slate-300
        padding: 6,
      },
      title: {
        display: true,
        text: "Years",
        color: "#e2e8f0",   // slate-200
      },
      grid: {
        color: "rgba(148,163,184,0.1)",
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "#cbd5e1",
        padding: 6,
      },
      title: {
        display: true,
        text: "Value",
        color: "#e2e8f0",
      },
      grid: {
        color: "rgba(148,163,184,0.2)",
      },
    },}
  }
 

return (
    <div className="bg-slate-800 p-4 rounded-xl mb-3 h-[360px]">
        <h3 className="text-lg font-semibold mb-2">Intensity vs Year</h3>
        <section className="h-70">
        <Line data={chartData} options={options}/>
        </section>
    </div>
)
}
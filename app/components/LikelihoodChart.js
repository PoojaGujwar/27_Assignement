import { Chart as ChartJS, LineElement, Tooltip, CategoryScale, LinearScale, Legend, PointElement } from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(LineElement, Tooltip, CategoryScale, LinearScale, Legend, PointElement)

export default function Likelihood({ data }) {
    const years = {}
    data.forEach((item) => {
        if (!item.end_year || !item.likelihood) return;

        if (!years[item.end_year]) {
            years[item.end_year] = { total: 0, count: 0 }
        }
        years[item.end_year].total += Number(item.likelihood)
        years[item.end_year].count += 1
    })
    const labels = Object.keys(years).sort()
    const values = labels.map(y => (years[y].total / years[y].count).toFixed(1))
    console.log("Likelihhood",values)

    const chartData = {
        labels,
        datasets: [{
            label: "Ave Likelihood",
            data: values,
            tension: 0.4,
            borderColor: "Green",
            backgroundColor: "rgba(34,197,94,0.3)",
            pointRadius: 3,
        }]
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
            },
        }
    }

    return (
        <div className="bg-slate-800 p-4 h-[360px] rounded-xl my-3">
            <h3 className="text-lg font-semibold mb-2">Likelihood vs Year</h3>
            <section className="h-70">
                <Line data={chartData} options={options} />
            </section>
        </div>
    )
}
"use client";
import Cards from "./Cards"
import { useEffect, useState } from "react";
import IntensityLineChart from "./IntensityLineChart"
import LikelihoodChart from "./LikelihoodChart"

function average(data, key) {
  const valid = data.filter(d => d[key] != null)
  if (valid.length === 0) return 0;
  const sum = valid.reduce((acc, curr) => acc + Number(curr[key]), 0)
  return (sum / valid.length).toFixed(1)
}

export default function DashboardClient({ data, filters }) {
const [selected, setSelected] = useState({});
  const [filterData, setFilterData] = useState(data)
  const avgIntensity = average(filterData, "intensity");
  const avgLikelihood = average(filterData, "likelihood");
  const avgRelevance = average(filterData, "relevance");

  

  useEffect(()=>{
    const fetchData=async()=>{
      const query = new URLSearchParams(selected).toString()
      const res = await fetch(`http://localhost:4000/v1/dashboard-data?${query}`)
      const resData = await res.json()
      console.log(resData)
      setFilterData(resData)
    }
    fetchData()
  },[selected])

  const handleChange = (key, value) => {
    setSelected(prev => ({ ...prev, [key]: value }));
    console.log("Selected Filters:", { ...selected, [key]: value });
  };
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Cards title="Avg Intensity" value={avgIntensity} />
        <Cards title="Avg Likelihood" value={avgLikelihood} />
        <Cards title="Avg Relevance" value={avgRelevance} />
        <Cards title="Total Records" value={filterData.length} />
      </section>
      <section className="bg-slate-800 p-4 rounded-xl mb-6 ">
        <h1 className="text-lg font-semibold mb-4 text-slate-200">Filters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <select onChange={(e)=>handleChange("topic",e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700 "><option value="">Topic</option>
          {filters.topics?.map((val) => <option key={val}>{val}</option>)}
        </select>
        <select onChange={(e)=>handleChange("sector",e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700">
          <option value="">Sector</option>
          {filters.sectors?.map((val) => <option key={val}>{val}</option>)}
        </select>
        <select onChange={(e) => handleChange("region", e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700">
          <option value="">Region</option>
          {filters.regions?.map(r => <option key={r}>{r}</option>)}
        </select>

        <select onChange={(e) => handleChange("country", e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700">
          <option value="">Country</option>
          {filters.countries?.map(c => <option key={c}>{c}</option>)}
        </select>
        </div>

      </section>
      <section className="space-y-6">
        <IntensityLineChart data={filterData}/>
         <LikelihoodChart data={filterData}/>
      </section>

    </div>
  )
}
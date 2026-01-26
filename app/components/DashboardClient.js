"use client";
import Cards from "./Cards"
import { useEffect, useState } from "react";
import IntensityLineChart from "./IntensityLineChart"
import LikelihoodChart from "./LikelihoodChart"
import Filters from "./Filters"

function average(data, key) {
  const valid = data.filter(d => d[key] != null)
  if (valid.length === 0) return 0;
  const sum = valid.reduce((acc, curr) => acc + Number(curr[key]), 0)
  return (sum / valid.length).toFixed(1)
}

export default function DashboardClient({ data, filters }) {
const [selected, setSelected] = useState({ topic: "",
  sector: "",
  region: "",
  country: "",});
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
       <Filters filters={filters} onChange={handleChange} selected={selected}/>
      
      <section className="space-y-6">
        <IntensityLineChart data={filterData}/>
         <LikelihoodChart data={filterData}/>
      </section>

    </div>
  )
}
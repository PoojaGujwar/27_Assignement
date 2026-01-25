import {getDashboardData, getDashboardFilters} from "./lib/api"
import DashboardClient from "./components/DashboardClient"

export default async function Dashboard(){
  const data = await getDashboardData()
  const filters =await getDashboardFilters()

  return (
    <main className="min-h-screen bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Data Visualization Dashboard</h1>
{/* 
      <div className="mb-4 text-sm text-slate-400">Total records: {data.length}</div>
      <pre className="bg-slate-800 p-4 rounded-xl text-xs overflow-auto h-64">
        {JSON.stringify(filters, null, 2)}
      </pre> */}

      <DashboardClient data={data} filters={filters}/>
      <section className="bg-slate-800 p-4 rounded-xl mb-6">
        Filter Area
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-xl h-64">Chart 1</div>
        <div className="bg-slate-800 p-4 rounded-xl h-64">Char 2</div>
      </section>
    </main>
  )
}
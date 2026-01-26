import {getDashboardData, getDashboardFilters} from "./lib/api"
import DashboardClient from "./components/DashboardClient"

export default async function Dashboard(){
  const data = await getDashboardData()
  const filters =await getDashboardFilters()

  return (
    <main className="min-h-screen bg-slate-900 p-6 text-white space-y-8">
      <h1 className="text-3xl font-bold mb-6">Data Visualization Dashboard</h1>

      <DashboardClient data={data} filters={filters}/>
    </main>
  )
}
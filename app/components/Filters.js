export default function Filters({ filters, onChange, selected }) {
    return (
            <section className="bg-slate-900 p-2 rounded-lg border border-slate-700 text-slate-200">
<h1 className="text-lg font-semibold mb-4 text-slate-200">Filters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <select value={selected.topic}
                onChange={(e) => onChange("topic", e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoComplete="off"
                >
                    <option value="">Select Topic</option>
                    {filters.topics?.map((val) => <option key={val} value={val}>{val}</option>)}
                </select>
                <select onChange={(e) => onChange("sector", e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="">Sector</option>
                    {filters.sectors?.map((val) => (<option key={val}>{val}</option>))}
                </select>
                <select onChange={(e) => onChange("region", e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700 focus:ouline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="">Region</option>
                    {filters.regions?.map(r => <option key={r}>{r}</option>)}
                </select>

                <select onChange={(e) => onChange("country", e.target.value)} className="bg-slate-900 p-2 rounded border border-slate-700 focus:ouline focus:ring-2 focus:ring-indigo-500">
                    <option value="">Country</option>
                    {filters.countries?.map(c => <option key={c}>{c}</option>)}
                </select>
            </div>

        </section>

)
}
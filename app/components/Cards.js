export default function cards({title, value}){
     return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
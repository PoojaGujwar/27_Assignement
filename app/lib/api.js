const BASE_URL = "http://localhost:4000/v1";

export async function getDashboardData(filters={}){
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`${BASE_URL}/dashboard-data`)
    console.log(res)
    return res.json();
}

export async function getDashboardFilters(){
    const res = await fetch(`${BASE_URL}/dashboard_filter`)
    return res.json();
}
## 📊 Data Visualization Dashboard
🧩 Project Overview

This project is an interactive data visualization dashboard built using the provided JSON dataset.
The dashboard displays key insights such as Intensity, Likelihood, and Relevance with dynamic filters and charts.

The goal of this project is to transform raw data into meaningful visual insights using modern web technologies.

### 🛠 Tech Stack

Frontend

Next.js (App Router)

React.js

Tailwind CSS

Chart.js (react-chartjs-2)

Backend

Node.js

Express.js

MongoDB (data stored from given JSON)

📈 Key Visualizations

Average Intensity vs Year (Line Chart)

Average Likelihood vs Year (Line Chart)

Summary cards for:

Avg Intensity

Avg Likelihood

Avg Relevance

Total Records

### 🎛 Filters Implemented

The dashboard supports dynamic filtering using API queries:

Topic

Sector

Region

Country

(Structure allows easy extension for PEST, SWOT, Source, End Year, etc.)

Filters automatically re-fetch data from the backend and update charts in real time.

### 🔄 Data Flow

JSON data is stored in MongoDB

Backend APIs fetch data based on selected filters

Frontend consumes APIs and updates:

Cards

Charts

Record counts

### ✨ Features

Fully dynamic & responsive dashboard

Server-side + client-side data handling

Clean dark UI for better readability

Modular and reusable chart components

### 🚀 How to Run Locally
# Backend
*** npm install
npm run dev ***

# Frontend
*** npm install
npm run dev ***


### 📌 Conclusion

This dashboard demonstrates the ability to:

Work with real datasets

Design APIs

Build interactive data-driven UIs

Present insights visually in a professional manner
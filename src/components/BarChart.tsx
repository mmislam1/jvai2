import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DataItem {
    label: string;
    value: number;
}

interface BarChartProps {
    data: DataItem[];
    title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title = "Bar Chart" }) => {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    const chartData = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: "rgba(19, 76, 156, 1)",
                barPercentage: 0.2,       // <-- correct place
                categoryPercentage: 0.5,  // <-- correct place
                maxBarThickness: 20,  
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            
        },
        
        
    };

    return <Bar data={chartData} options={options} />;
};

export default BarChart;

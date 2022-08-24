import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { ChartBar } from "../icons/chart-bar";
import { TiChartPie } from "react-icons/ti";
import { Chart } from "react-google-charts";

 const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

 const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export const AdminChart = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
 
      
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
    

  </Card>
);

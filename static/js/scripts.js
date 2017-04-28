import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import Chart from "./components/Chart";

const app = document.getElementById('app');
const chart = document.getElementById('chart');

ReactDOM.render(<Layout/>, app);
ReactDOM.render(<Chart/>, chart);
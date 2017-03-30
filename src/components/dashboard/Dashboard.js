import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

import Card from './Card';

class Dashboard extends Component {
	render() {

		const dataComboChart = [
			[
        "Month",
        "Bolivia",
        "Ecuador",
        "Madagascar"
      ],
      [
         "2004/05",
         165,
         938,
         522
      ]
		];

		const dataPieChart = [
			[
         "Task",
         "Hours per Day"
      ],
      [
         "Work",
         11
      ],
      [
         "Eat",
         2
      ],
      [
         "Commute",
         2
      ],
      [
         "Watch TV",
         2
      ],
      [
         "Sleep",
         7
      ]
		];

		const options = {
      "vAxis":{
         "title":"Cups"
      },
      "hAxis":{
         "title":"Month"
      },
      "seriesType":"bars"
		};

		return (
			<div>
				<div className="row">
        	<div className="col-md-12">
        		<Card title="Example chart 1" footer="footer" category="description...">
        			<Chart
			          chartType="ComboChart"
			          data={dataComboChart}
			          options={options}
			          graph_id="ComboChart"
			          width="100%"
			          height="300px"
			          legend_toggle
			        />
        		</Card>
        	</div>
        </div>

				<div className="row">
					<div className="col-md-6">
		        <Card title="Example chart 2" footer="footer" category="description...">
		        	<Chart
			          chartType="ScatterChart"
			          data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
			          options={{}}
			          graph_id="ScatterChart"
			          width="100%"
			          height="300px"
			          legend_toggle
			        />
		        </Card>
		      </div>
		      <div className="col-md-6">
		        <Card title="Example chart 3" footer="footer" category="description...">
		        	<Chart
			          chartType="PieChart"
			          data={dataPieChart}
			          graph_id="PieChart"
			          width="100%"
			          height="300px"
			          legend_toggle
			        />
		        </Card>
		      </div>
        </div>
      </div>
		);
	}
}

export default Dashboard;
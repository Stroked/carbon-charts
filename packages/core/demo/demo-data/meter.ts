import { colors } from "./colors";

export const meterData = {
	labels: ["CPU"],
	datasets: [
		{
			label: "CPU",
			fillColors: [colors[0]],
			data: {
				min: 0,
				max: 1200,
				// peak: 700,
				value: 550,
				// threshold: .25
			}
		}
	]
};

export const meterOptions = {
	title: "Meter",
	// axes: {
	// 	left: {
	// 		primary: true,
	// 	},
	// 	bottom: {
	// 		scaleType: "labels",
	// 		secondary: true,
	// 	}
	// }
};
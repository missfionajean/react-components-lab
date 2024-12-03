// styling
import "./App.css";
import WeatherForecast from "./WeatherForecast";

// weather data
const weatherForecasts = [
	{
		day: "Mon",
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
		imgAlt: "sun icon",
		conditions: "Sunny",
		time: "Morning",
	},
	{
		day: "Tue",
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
		imgAlt: "moon icon",
		conditions: "Clear",
		time: "Night",
	},
	{
		day: "Wed",
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
		imgAlt: "clouds with lightning icon",
		conditions: "Stormy",
		time: "All Day",
	},
	{
		day: "Thu",
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
		imgAlt: "sun overcast by clouds icon",
		conditions: "Overcast",
		time: "Evening",
	},
	{
		day: "Fri",
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
		imgAlt: "moon overcast by clouds icon",
		conditions: "Cloudy",
		time: "Night",
	},
];

const App = () => {
	return (
		<>
			<h1>Local Weather</h1>
			<section id="weekView">
				{weatherForecasts.map((forecast, index) => (
					<WeatherForecast key={index} forecast={forecast} />
				))}
			</section>
		</>
	);
};

export default App;

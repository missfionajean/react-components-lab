import "./WeatherForecast.css"

const WeatherForecast = ({ forecast }) => {
	return (
		<div className="weather">
			<h2>{forecast.day}</h2>
			<img src={forecast.img} alt={forecast.imgAlt} />
			<p>
				<span>Conditions: </span>{forecast.conditions}
			</p>
			<p>
				<span>Time: </span>{forecast.time}
			</p>
		</div>
	);
};

export default WeatherForecast;

/* 
{
		day: "Fri",
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
		imgAlt: "moon overcast by clouds icon",
		conditions: "cloudy",
		time: "Night",
	},
    
*/

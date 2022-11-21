import React from "react";

type Props = {};

const Clock = (props: Props) => {
	const [time, settime] = React.useState(5);
	React.useEffect(() => {
		const interval = setInterval(() => {
			if (time - 1 < 0) settime(5);
			else settime(time - 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [time]);

	const getStroke = (index: number) => {
		// Work with the index here
		// Maybe return in a
		if (time === 5) {
			if (index < 30) return "stroke-red-500";
		}
		if (time === 4) {
			if (index < 60) return "stroke-orange-500";
		}
		if (time === 3) {
			if (index < 90) return "stroke-blue-500";
		}
		if (time === 2) {
			if (index < 120) return "stroke-violet-500";
		}
		if (time === 1) {
			if (index < 150) return "stroke-green-500";
		}
		if (time === 0) {
			return "stroke-yellow-500";
		}
		return "stroke-transparent";
	};

	return (
		<div className="w-1/6 h-1/6 relative">
			<span className="absolute top-[40%] left-[45%] text-6xl font-bold">
				{time}
			</span>
			<svg viewBox="0 0 100 100">
				<g transform="translate(50,50)">
					{Array.from({ length: 180 }).map((e, ix) => (
						<line
							key={`second-${ix}`}
							className={`transition-all ${getStroke(
								ix
							)} ease-in-out duration-700`}
							y1={40}
							y2={45}
							transform={`rotate(${180 + ix * 2})`}
							// stroke={`white`}
							// strokeOpacity={1}
						/>
					))}
				</g>
			</svg>
		</div>
	);
};

export default Clock;

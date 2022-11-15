import "./App.css";
import SideBar from "./sidebar";
import { useDarkMode } from "usehooks-ts";

export default function App() {
	const { isDarkMode } = useDarkMode();
	return (
		<div
			className={`bg-gray-200 w-full h-full min-h-screen min-w-[100vw] flex items-center justify-center ${
				isDarkMode ? "dark" : "light"
			}`}
		>
			<SideBar />
		</div>
	);
}

import React from "react";
import SidebarIcon from "./sidebar-icon";
import {
	Fa500Px,
	FaAccessibleIcon,
	FaAccusoft,
	FaAcquisitionsIncorporated,
	FaAd,
	FaSun,
	FaMoon,
} from "react-icons/fa";
import { useDarkMode } from "usehooks-ts";

type Props = {};

const SideBar = (props: Props) => {
	const { isDarkMode, toggle } = useDarkMode();
	return (
		<div
			className="fixed top-0 left-0 px-4 w-auto h-screen  shadow-lg
                        flex flex-col
                        bg-gray-100 dark:bg-gray-900"
		>
			<div onClick={toggle}>
				<SidebarIcon
					icon={
						isDarkMode ? <FaSun size={28} /> : <FaMoon size={28} />
					}
					text={`Switch to ${isDarkMode ? "Light" : "Dark"} mode`}
				/>
			</div>
			<SidebarIcon icon={<Fa500Px size={28} />} />
			<SidebarIcon icon={<FaAccessibleIcon size={28} />} />
			<SidebarIcon icon={<FaAccusoft size={28} />} />
			<SidebarIcon icon={<FaAcquisitionsIncorporated size={28} />} />
			<SidebarIcon icon={<FaAd size={28} />} />
		</div>
	);
};

export default SideBar;

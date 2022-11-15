import React from "react";
import SidebarIcon from "./sidebar-icon";
import {
	Fa500Px,
	FaAccessibleIcon,
	FaAccusoft,
	FaAcquisitionsIncorporated,
	FaAd,
} from "react-icons/fa";

type Props = {};

const SideBar = (props: Props) => {
	return (
		<div
			className="fixed top-0 left-0 px-4 w-auto h-screen bg-gray-500 shadow-lg
                        flex flex-col"
		>
			<SidebarIcon icon={<Fa500Px size={28} />} />
			<SidebarIcon icon={<FaAccessibleIcon size={28} />} />
			<SidebarIcon icon={<FaAccusoft size={28} />} />
			<SidebarIcon icon={<FaAcquisitionsIncorporated size={28} />} />
			<SidebarIcon icon={<FaAd size={28} />} />
		</div>
	);
};

export default SideBar;

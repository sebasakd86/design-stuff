import React from "react";

type Props = {
	icon: React.ReactNode;
};

const SidebarIcon = ({ icon }: Props) => {
	return <div className="sidebar-icon">{icon}</div>;
};

export default SidebarIcon;

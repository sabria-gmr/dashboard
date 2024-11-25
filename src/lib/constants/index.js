import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { RiAdminLine } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";




export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'tableau de bord',
		label: 'Tableau de bord',
		path: '/dashboard',
		icon: <HiOutlineViewGrid/>
	},
	{
		key: 'reservations',
		label: 'Réservations',
		path: 'reservations',
		icon: <FaRegCalendarCheck />
	},
	{
		key: 'clients',
		label: 'Clients',
		path: 'clients',
		icon: <HiOutlineUsers />
	},
	{
		key: 'operateurs',
		label: 'Operateurs',
		path: 'operateurs',
		icon: <RiAdminLine />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

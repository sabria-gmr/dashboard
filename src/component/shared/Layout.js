import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import "tailwindcss/tailwind.css"
import '../../pages/Admin.css'

export default function Layout() {
	return (
		<div className="bg-neutral-50 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

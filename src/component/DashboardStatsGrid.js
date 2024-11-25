import React from 'react'
import { FaUser, FaCalendarAlt, FaCalendarCheck } from 'react-icons/fa';
import "tailwindcss/tailwind.css"
import { FaClipboardList } from "react-icons/fa";
import '../pages/Admin.css'

export default function DashboardStatsGrid() {
	return (
		<div className="flex justify-between gap-2">
			
				<div className=" max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
					<h2 className="text-lg font-semibold mb-4 text-blue ">Reservation Details</h2>
					<div className="grid grid-cols-2 gap-4">

						<div className="flex items-center border p-4 rounded-md pl-2">
							<FaClipboardList className="text-beige mr-2" />
							<p className="mr-4">Booking</p>

							<span className="ml-auto font-semibold">123</span>
						</div>
						<div className="flex items-center border p-4 rounded-md">
							<FaCalendarAlt className="text-beige mr-2" />
							<p className="mr-4">Check-in</p>
							<span className="ml-auto font-semibold">30</span>
						</div>
						<div className="flex items-center border p-4 rounded-md">
							<FaCalendarCheck className="text-beige mr-2" />
							<p className="mr-4">Check-out</p>

							<span className="ml-auto font-semibold">15</span>
						</div>
						<div className="flex items-center border p-4 rounded-md">
							<FaUser className="text-beige mr-2" />
							<p className="mr-4">Guests</p>

							<span className="ml-auto font-semibold">12</span>
						</div>
					</div>
				</div>
		

			
				<div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
					<h2 className="text-lg font-semibold mb-4 text-blue ">Chambres disponibles</h2>
					<div className="grid grid-cols-2 gap-4">

						<div className="flex items-center border p-4 rounded-md pl-2">
							<FaClipboardList className="text-beige mr-2" />
							<p className="mr-4">chambres</p>

							<span className="ml-auto font-semibold">123</span>
						</div>
						<div className="flex items-center border p-4 rounded-md">
							<FaCalendarAlt className="text-beige mr-2" />
							<p className="mr-4">disponibles </p>
							<span className="ml-auto font-semibold">30</span>
						</div>
						<div className="flex items-center border p-4 rounded-md">
							<FaCalendarCheck className="text-beige mr-2" />
							<p className="mr-4">Occupées</p>

							<span className="ml-auto font-semibold">15</span>
						</div>
						<div className="flex items-center border p-4 rounded-md">
							<FaUser className="text-beige mr-2" />
							<p className="mr-4">Pas prets</p>

							<span className="ml-auto font-semibold">12</span>
						</div>
					</div>
				</div>
			
		</div>
	)
}


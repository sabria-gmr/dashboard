import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { FaUserPlus } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoFilterOutline, IoTrashOutline } from 'react-icons/io5';
import './Admin.css';

const reserveData = [
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
  {
    id: '1',
    client_id: '234567',
    date_début: '12-05-2023',
    date_fin: '15-05-2023',
  },
];

const Reservations = ({ handleDelete, handleEdit }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleFilter = () => {
    // Ajoutez ici la logique de filtrage
    console.log('Filtrer les résultats...');
  };

  const handleAddUser = () => {
    console.log('Add User clicked');
    handleToggleRegister();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Ajoutez ici la logique de recherche si nécessaire
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4  border border-gray-200 rounded-md flex-1">
      <div className="flex justify-between items-center mb-6">
        <strong className="text-blue font-bold">Réservations</strong>
        <div className="relative flex items-center">
          <HiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher ici ..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-8 border-b border-gray-400 focus:outline-none focus:border-blue mt-1 text-sm"
          />
        </div>

        <div className='flex '>
          <button
            onClick={handleFilter}
            className=" text-gray-700 font-normal py-2 px-4 rounded-md ml-4 flex items-center border border-black"
          >
            <IoFilterOutline className="mr-2" />
            Filtrer
          </button>

          <button
            onClick={handleAddUser}
            className="bg-beige hover:bg-beige text-white font-normal py-2 px-4 rounded-md ml-4 mt-1 flex items-center"
          >
            <FaUserPlus className="mr-2" />
            Ajouter
          </button>

        </div>
      </div>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Num</th>
              <th> ID Client </th>
              <th>Date de début</th>
              <th>Date de fin </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reserveData.map((reserve) => (
              <tr key={reserve.id}>
                <td>{reserve.id}</td>
                <td>
                  <Link to={`/reservations/${reserve.client_id}`}>#{reserve.client_id}</Link>
                </td>
                <td>{reserve.date_début}</td>
                <td>{reserve.date_fin}</td>
                <td>



                  <button
                    onClick={() => handleDelete(reserve.client_id)}
                    className=" font-bold py-2 px-2 rounded mr-2"
                  >
                    <IoTrashOutline style={{ fontSize: '20px' }} />
                  </button>
                  <button
                    onClick={() => handleEdit(reserve.client_id)}
                    className=" font-bold py-2 px-3 rounded"
                  >
                    <FaRegEdit style={{ fontSize: '20px' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {showRegister && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className="top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={handleToggleRegister}
          ></div>
          <Register />
        </div>
      )} */}
    </div>
  );
};

export default Reservations;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import {  FaUserPlus } from 'react-icons/fa';
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineSearch } from 'react-icons/hi';
import { IoFilterOutline,IoTrashOutline  } from 'react-icons/io5';
import './Admin.css';

const allUsersData = [
  { id: '1', user_id: '23143', name: 'Shirley A. Lape', email: 'shirley@example.com', telephone: '555-1234' },
  { id: '2', user_id: '96453', name: 'Ryan Carroll', email: 'ryan@example.com', telephone: '555-5678' },
  { id: '3', user_id: '65345', name: 'Mason Nash', email: 'mason@example.com', telephone: '555-9876' },
  { id: '4', user_id: '87832', name: 'Luke Parkin', email: 'luke@example.com', telephone: '555-4321' },
  { id: '5', user_id: '09832', name: 'Anthony Fry', email: 'anthony@example.com', telephone: '555-8765' },
  { id: '6', user_id: '12345', name: 'Emma Thompson', email: 'emma@example.com', telephone: '555-1111', },
  { id: '7', user_id: '67890', name: 'Oliver Wilson', email: 'oliver@example.com', telephone: '555-2222' },
  { id: '8', user_id: '34567', name: 'Sophia Davis', email: 'sophia@example.com', telephone: '555-3333' },
  { id: '9', user_id: '45678', name: 'Ethan Johnson', email: 'ethan@example.com', telephone: '555-4444' },
  { id: '10', user_id: '56789', name: 'Ava Smith', email: 'ava@example.com', telephone: '555-5555' },
];

const Opearators= ({ handleDelete, handleEdit }) => {
  const [showRegister, setShowRegister] = useState(false);

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleAddUser = () => {
    // Ajoutez la logique pour gérer l'ajout d'un nouvel utilisateur
    console.log('Add User clicked');
    handleToggleRegister(); // Fermez la fenêtre pop-up d'inscription après avoir implémenté la logique d'ajout d'utilisateur
  };
  const [searchQuery, setSearchQuery] = useState('');

 
  const handleFilter = () => {
    // Ajoutez ici la logique de filtrage
    console.log('Filtrer les résultats...');
  };



  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Ajoutez ici la logique de recherche si nécessaire
  };
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center mb-3">
        <strong className="text-blue font-bold">Clients </strong>
        
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
              <th>ID</th>
              <th>ID utilisateur</th>
              <th>Nom & prenom </th>
              <th>Email</th>
              <th>Numéro de téléphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsersData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/clients/${user.user_id}`}>#{user.user_id}</Link>
                </td>
                <td>
                  <Link to={`/clients/${user.user_id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.user_id)}
                    className=" font-bold py-2 px-4 rounded mr-2"
                  >
                    <IoTrashOutline style={{ fontSize: '20px'}} />
                  </button>
                  <button
                    onClick={() => handleEdit(user.user_id)}
                    className="b font-bold py-2 px-4 rounded"
                  >
                    <FaRegEdit style={{ fontSize: '20px'}}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Affiche le formulaire d'inscription en tant que pop-up */}
      {showRegister && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className=" top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={handleToggleRegister}
          ></div>
         
            <Register />
          
        </div>
      )}
    </div>
  );
};

export default Opearators;

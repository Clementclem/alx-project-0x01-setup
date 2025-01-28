import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-700 mt-2">{email}</p>
      <p className="text-gray-700">📞 {phone}</p>
      <p className="text-gray-700">🌐 {website}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-600 italic">"{company.catchPhrase}"</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Address</h3>
        <p className="text-gray-600">{`${address.suite}, ${address.street}`}</p>
        <p className="text-gray-600">{`${address.city}, ${address.zipcode}`}</p>
      </div>
    </div>
  );
};

export default UserCard;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { fetchUsers } from "../../redux/actions/auth";

const GetUsers = () => {
  const { token } = useSelector(({ user }) => user.user);
  const { users } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(token));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  №
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                >
                  Role
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {users.length ? (
                users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Norma Nova
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {user.roles[0] === "ADMIN" ? (
                        <div className="flex items-center ">
                          {user.roles[0]}{" "}
                          <MdVerified
                            className="ml-1"
                            color="green"
                            size={18}
                          />
                        </div>
                      ) : (
                        user.roles[0]
                      )}
                    </td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <div
                        className="inline-block text-left"
                        x-data="{ menu: false }"
                      >
                        <button
                          type="button"
                          className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          <span className="sr-only"></span>
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="p-10">Загружается...</div>
              )}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default GetUsers;

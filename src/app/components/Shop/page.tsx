"use client";
import React, { useState } from "react";
import { Plus, Edit, Trash } from "lucide-react";
import Link from "next/link";
import Layout from "../Layout";
import { IoTrashBin } from "react-icons/io5";

const ShopDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeletePopup, setShowDeletePopup] = useState(false); // Popup state
  const [selectedShop, setSelectedShop] = useState<number|null>(); // Track the shop to delete
  const itemsPerPage = 5;

  const shops = [
    {
      id: 1,
      name: "Mama Gina",
      logo: "/path-to-logo/mama-gina.png", // Add shop logo path
      description: "All your favorite hardware",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Next Door",
      logo: "/path-to-logo/next-door.png", // Add shop logo path
      description: "All your favorite hardware",
      status: "Active",
    },
    {
      id: 3,
      name: "Food Hub",
      logo: "/path-to-logo/food-hub.png", // Add shop logo path
      description: "All your favorite hardware",
      status: "Active",
    },
    {
      id: 4,
      name: "Chicken Inn",
      logo: "/path-to-logo/chicken-inn.png", // Add shop logo path
      description: "All your favorite hardware",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Canary Shop",
      logo: "/path-to-logo/canary-shop.png", // Add shop logo path
      description: "All your favorite hardware",
      status: "Active",
    },
    {
      id: 6,
      name: "Jane's",
      logo: "/path-to-logo/janes.png", // Add shop logo path
      description: "All your favorite hardware",
      status: "Active",
    },
    {
      id: 7,
      name: "Southern",
      logo: "/path-to-logo/southern.png", // Add shop logo path
      description: "All your favorite hardware",
      status: "Active",
    },
  ];

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredShops.length / itemsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleDelete = () => {
    console.log(`Delete shop with ID: ${selectedShop}`);
    setShowDeletePopup(false);
  };

  const openDeletePopup = (id: number) => {
    setSelectedShop(id);
    setShowDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    setSelectedShop(null);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit shop with ID: ${id}`);
  };

  const currentItems = filteredShops.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout>
      <div className="p-8">
        <div className="flex gap-11 items-center mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search shop here..."
              className="bg-gray-100 px-4 py-2 rounded-md border-lightGreen border-2"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <Link href="/components/AddShop" legacyBehavior>
            <a className="flex items-center space-x-2 text-lightGreen px-4 py-2 rounded-md border-lightGreen border-2">
              <Plus size={20} />
              <span>Add New Shop</span>
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-customDarkBlue text-white px-4 py-10 text-center rounded-md">
            <h2 className="text-xl font-bold">TOTAL SHOPS</h2>
            <p className="text-4xl font-bold">500</p>
          </div>
          <div className="bg-lightGreen text-white px-4 py-10 text-center rounded-md">
            <h2 className="text-xl font-bold">ACTIVE SHOPS</h2>
            <p className="text-4xl font-bold">400</p>
          </div>
          <div className="bg-customDarkBlue text-white px-4 py-10 text-center rounded-md">
            <h2 className="text-xl font-bold">INACTIVE SHOPS</h2>
            <p className="text-4xl font-bold">50</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Shops</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-lightGreen text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Logo
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((shop) => (
                  <tr key={shop.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <img
                        src={shop.logo}
                        alt={`${shop.name} Logo`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {shop.name}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-500">
                        {shop.description}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 rounded-md text-xs ${
                          shop.status === "Active"
                            ? "bg-lightGreen text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {shop.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex space-x-2">
                        <Link href="/components/EditShop" legacyBehavior>
                          <button
                            onClick={() => handleEdit(shop.id)}
                            className="text-blue-600 hover:underline"
                          >
                            <Edit size={18} />
                          </button>
                        </Link>
                        <button
                          onClick={() => openDeletePopup(shop.id)}
                          className="text-red-600 hover:underline"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-36 items-center mt-10 ml-[30rem]">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-lightGreen text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-lightGreen text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Delete Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-lg font-bold mb-2">Confirm Deletion</h2>
            <p className="text-gray-500 mb-4">
              Are you sure you want to delete this shop? This action cannot be undone.
            </p>
            <IoTrashBin className="ml-[8rem] mt-10 w-[5rem] h-[5rem]"/>

            <div className="flex justify-between mt-4">
              <button
                onClick={closeDeletePopup}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ShopDashboard;

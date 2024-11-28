"use client";
import React, { useState } from "react";
import { FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import Layout from "../Layout";
import Link from "next/link";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  status: "In-Stock" | "Low Stock" | "Out of Stock";
}

const ProductsUI = () => {
  const [sortBy, setSortBy] = useState<string>("price-desc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const itemsPerPage = 6;

  const [products, setProducts] = useState<Product[]>([
    { id: 1, image: "/banana.png", name: "Banana", description: "Fresh bananas", price: 500, status: "In-Stock" },
    { id: 2, image: "/monkey.png", name: "Monkey", description: "Fun monkey", price: 500, status: "Low Stock" },
    { id: 3, image: "/bread.png", name: "Bread", description: "Fresh bread", price: 500, status: "Out of Stock" },
    { id: 4, image: "/chicken.png", name: "Chicken", description: "Delicious chicken", price: 50, status: "Out of Stock" },
    { id: 5, image: "/fries.png", name: "Fries", description: "Crispy fries", price: 5500, status: "Low Stock" },
    { id: 6, image: "/soda.png", name: "Soda", description: "Refreshing soda", price: 700, status: "In-Stock" },
    { id: 7, image: "/milk.png", name: "Milk", description: "Fresh milk", price: 500, status: "In-Stock" },
  ]);

  const sortedProducts = [...products]
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      switch (sortBy) {
        case "price-desc":
          return b.price - a.price;
        case "price-asc":
          return a.price - b.price;
        case "stock-desc":
          return (
            ["Out of Stock", "Low Stock", "In-Stock"].indexOf(b.status) -
            ["Out of Stock", "Low Stock", "In-Stock"].indexOf(a.status)
          );
        case "shop-asc":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleDeleteClick = (id: number): void => {
    setShowDeletePopup(true);
    setProductToDelete(id);
  };

  const handleDelete = (): void => {
    setProducts(products.filter((product) => product.id !== productToDelete));
    setShowDeletePopup(false);
    setProductToDelete(null);
  };

  const closeDeletePopup = (): void => {
    setShowDeletePopup(false);
    setProductToDelete(null);
  };

  const handlePageChange = (pageNumber: number): void => setCurrentPage(pageNumber);

  const formatPrice = (price: number): string => `KES ${price.toLocaleString()}`;

  return (
    <Layout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 rounded-md border-lightGreen border-2 w-64"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-100 px-4 py-2 rounded-md border-lightGreen border-2"
            >
              <option value="price-desc">Price (Highest to Lowest)</option>
              <option value="price-asc">Price (Lowest to Highest)</option>
              <option value="stock-desc">Stock (Most to Least)</option>
              <option value="shop-asc">Shop (Alphabetical)</option>
            </select>
          </div>
          <Link href="/components/AddProduct" legacyBehavior>
            <button className="flex items-center space-x-2 text-lightGreen px-4 py-2 rounded-md border-lightGreen border-2">
              <FaPlusCircle />
              <span>Add New Product</span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-14">
          {currentPageProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs ${
                      product.status === "In-Stock"
                        ? "bg-lightGreen text-white"
                        : product.status === "Low Stock"
                        ? "bg-yellow-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {product.status}
                  </span>
                  <div className="flex space-x-2">
                    <Link href="/components/EditProduct" legacyBehavior>
                      <button className="text-blue-600 hover:underline">
                        <FaEdit size={18} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(product.id)}
                      className="text-red-600 hover:underline"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-lg font-medium text-gray-900">{formatPrice(product.price)}</div>
              </div>
            </div>
          ))}
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

      {/* Modal for confirmation */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-lg font-bold mb-2">Confirm Deletion</h2>
            <p className="text-gray-500 mb-4">
              Are you sure you want to delete this shop? This action cannot be undone.
            </p>
            <IoTrashBin className="ml-[8rem] mt-10 w-[5rem] h-[5rem]" />

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

export default ProductsUI;

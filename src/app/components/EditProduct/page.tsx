"use client"
import React, { useState } from 'react';
import Layout from '../Layout';

const AddProductPage = () => {
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [stockLevel, setStockLevel] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [shopLocation, setShopLocation] = useState<string>('');
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value);
  };

  const handleStockLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockLevel(e.target.value);
  };

  const handleProductDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductDescription(e.target.value);
  };

  const handleShopLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopLocation(e.target.value);
  };

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImage(file);
    }
  };

  const handleSave = () => {
    if (!productName.trim()) {
      alert('Please enter a product name.');
      return;
    }

    if (!productPrice.trim()) {
      alert('Please enter a product price.');
      return;
    }

    if (!stockLevel.trim()) {
      alert('Please enter the stock level.');
      return;
    }

    if (!productDescription.trim()) {
      alert('Please enter a product description.');
      return;
    }

    if (!shopLocation.trim()) {
      alert('Please enter the shop location.');
      return;
    }

    if (!productImage) {
      alert('Please choose a product image.');
      return;
    }

    // Implement your save logic here
    console.log('Saving product:', {
      productName,
      productPrice,
      stockLevel,
      productDescription,
      shopLocation,
      productImage,
    });
    alert('Product saved successfully!');
  };

  const handleCancel = () => {
    if (
      productName.trim() ||
      productPrice.trim() ||
      stockLevel.trim() ||
      productDescription.trim() ||
      shopLocation.trim() ||
      (productImage && productImage.name)
    ) {
      const confirm = window.confirm(
        'Are you sure you want to cancel? Any unsaved changes will be lost.'
      );
      if (!confirm) return;
    }

    // Reset the form
    setProductName('');
    setProductPrice('');
    setStockLevel('');
    setProductDescription('');
    setShopLocation('');
    setProductImage(null);

    // Implement your cancel logic here
    console.log('Canceling product creation');
    alert('Product creation cancelled.');
  };

  return (
    <Layout>
    <div className="container mx-auto my-8">
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="product-name" className="block font-bold mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              className="border rounded-md px-3 py-2 w-full"
              placeholder="Enter Product Name"
              value={productName}
              onChange={handleProductNameChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="product-price" className="block font-bold mb-2">
              Product Price
            </label>
            <input
              type="text"
              id="product-price"
              className="border rounded-md px-3 py-2 w-full"
              placeholder="Enter Product Price"
              value={productPrice}
              onChange={handleProductPriceChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock-level" className="block font-bold mb-2">
              Stock Level
            </label>
            <input
              type="text"
              id="stock-level"
              className="border rounded-md px-3 py-2 w-full"
              placeholder="Enter Stock Level"
              value={stockLevel}
              onChange={handleStockLevelChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="product-description"
              className="block font-bold mb-2"
            >
              Product Description
            </label>
            <textarea
              id="product-description"
              className="border rounded-md px-3 py-2 w-full"
              placeholder="Enter the product description"
              value={productDescription}
              onChange={handleProductDescriptionChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="shop-location" className="block font-bold mb-2">
              Shop Location
            </label>
            <input
              type="text"
              id="shop-location"
              className="border rounded-md px-3 py-2 w-full"
              placeholder="Enter the shop location"
              value={shopLocation}
              onChange={handleShopLocationChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="product-image" className="block font-bold mb-2">
              Product Image
            </label>
            <input
              type="file"
              id="product-image"
              className="border rounded-md px-3 py-2 w-full"
              onChange={handleProductImageChange}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default AddProductPage;

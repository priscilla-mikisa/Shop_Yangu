// "use client"
// import React, { useState } from 'react';
// import Layout from '../Layout';

// const AddShopPage = () => {
//   const [shopName, setShopName] = useState('');
//   const [shopDescription, setShopDescription] = useState('');
//   const [shopLogo, setShopLogo] = useState(null);

//   const handleShopNameChange = (e) => {
//     setShopName(e.target.value);
//   };

//   const handleShopDescriptionChange = (e) => {
//     setShopDescription(e.target.value);
//   };

//   const handleShopLogoChange = (e) => {
//     setShopLogo(e.target.files[0]);
//   };

//   const handleSave = () => {
//     if (!shopName.trim()) {
//       alert('Please enter a shop name.');
//       return;
//     }

//     if (!shopDescription.trim()) {
//       alert('Please enter a shop description.');
//       return;
//     }

//     if (!shopLogo) {
//       alert('Please choose a shop logo.');
//       return;
//     }

//     // Implement your save logic here
//     console.log('Saving shop:', { shopName, shopDescription, shopLogo });
//     alert('Shop saved successfully!');
//   };

//   const handleCancel = () => {
//     if (
//       shopName.trim() ||
//       shopDescription.trim() ||
//       (shopLogo && shopLogo.name)
//     ) {
//       const confirm = window.confirm(
//         'Are you sure you want to cancel? Any unsaved changes will be lost.'
//       );
//       if (!confirm) return;
//     }

//     // Reset the form
//     setShopName('');
//     setShopDescription('');
//     setShopLogo(null);

//     // Implement your cancel logic here
//     console.log('Canceling shop creation');
//     alert('Shop creation cancelled.');
//   };

//   return (
//     <Layout>
//     <div className="container mx-auto my-8">
//       <div className="bg-white shadow-md rounded-md p-6">
//         <h2 className="text-2xl font-bold mb-4">Edit Shop</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="shop-name" className="block font-bold mb-2">
//               Shop Name
//             </label>
//             <input
//               type="text"
//               id="shop-name"
//               className="border rounded-md px-3 py-2 w-full"
//               placeholder="Enter shop name"
//               value={shopName}
//               onChange={handleShopNameChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="shop-description" className="block font-bold mb-2">
//               Shop Description
//             </label>
//             <textarea
//               id="shop-description"
//               className="border rounded-md px-3 py-2 w-full"
//               placeholder="Enter the shop description"
//               value={shopDescription}
//               onChange={handleShopDescriptionChange}
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="shop-logo" className="block font-bold mb-2">
//               Shop Logo
//             </label>
//             <input
//               type="file"
//               id="shop-logo"
//               className="border rounded-md px-3 py-2 w-full"
//               onChange={handleShopLogoChange}
//             />
//           </div>
//           <div className="flex justify-between">
//             <button
//               type="button"
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </Layout>
//   );
// };

// export default AddShopPage;

"use client";
import React, { useState } from "react";
import Layout from "../Layout";

const AddShopPage = () => {
  const [shopName, setShopName] = useState<string>("");
  const [shopDescription, setShopDescription] = useState<string>("");
  const [shopLogo, setShopLogo] = useState<File | null>(null); // Type the state properly

  // Specify the event types for the onChange handlers
  const handleShopNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopName(e.target.value);
  };

  const handleShopDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setShopDescription(e.target.value);
  };

  const handleShopLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setShopLogo(file);
  };

  const handleSave = () => {
    if (!shopName.trim()) {
      alert("Please enter a shop name.");
      return;
    }

    if (!shopDescription.trim()) {
      alert("Please enter a shop description.");
      return;
    }

    if (!shopLogo) {
      alert("Please choose a shop logo.");
      return;
    }

    // Implement your save logic here
    console.log("Saving shop:", { shopName, shopDescription, shopLogo });
    alert("Shop saved successfully!");
  };

  const handleCancel = () => {
    if (
      shopName.trim() ||
      shopDescription.trim() ||
      (shopLogo && shopLogo.name)
    ) {
      const confirm = window.confirm(
        "Are you sure you want to cancel? Any unsaved changes will be lost."
      );
      if (!confirm) return;
    }

    // Reset the form
    setShopName("");
    setShopDescription("");
    setShopLogo(null);

    // Implement your cancel logic here
    console.log("Canceling shop creation");
    alert("Shop creation cancelled.");
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold mb-4">Edit Shop</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="shop-name" className="block font-bold mb-2">
                Shop Name
              </label>
              <input
                type="text"
                id="shop-name"
                className="border rounded-md px-3 py-2 w-full"
                placeholder="Enter shop name"
                value={shopName}
                onChange={handleShopNameChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="shop-description" className="block font-bold mb-2">
                Shop Description
              </label>
              <textarea
                id="shop-description"
                className="border rounded-md px-3 py-2 w-full"
                placeholder="Enter the shop description"
                value={shopDescription}
                onChange={handleShopDescriptionChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="shop-logo" className="block font-bold mb-2">
                Shop Logo
              </label>
              <input
                type="file"
                id="shop-logo"
                className="border rounded-md px-3 py-2 w-full"
                onChange={handleShopLogoChange}
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

export default AddShopPage;

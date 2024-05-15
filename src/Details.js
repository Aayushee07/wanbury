import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase_setup/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import Modal from "react-modal";
import { ContactUs } from "./components/Contactus";

const Details = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // Fetch product details from Firestore based on productId
    const fetchProductDetails = async () => {
      try {
        let q = collection(db, "Products");
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.id === productId) {
            setProductDetails({
              id: doc.id,
              ...doc.data(),
            });
          }
        });
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      {productDetails && (
        <>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {productDetails.ProductName}
            </h2>
            <p className="mt-4 text-gray-500">{productDetails.Composition}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">MRP</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {productDetails.MRP}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Size</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {productDetails.Size}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">GST%</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {productDetails["GST%"]}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Category</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {productDetails.Category}
                </dd>
              </div>
              {/* Add more product details here */}
              <div>
                <h1 className="m-2 font-medium">
                  Are you interested in this product?
                </h1>
                <button
                  className="inline-flex bg-yellow-600 items-center border-0 py-1 px-3 mx-1 w-28 h-10 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0"
                  onClick={toggleModal}
                >
                  Contact Us
                </button>
              </div>
            </dl>
          </div>
          <div className="sm:gap-6 lg:gap-8">
            <img
              src={productDetails.image}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
           

            {/* Add more product images here */}
          </div>

          {/* Modal for contact form */}
          <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
            <ContactUs productName={productDetails.ProductName} closeModal={toggleModal} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Details;

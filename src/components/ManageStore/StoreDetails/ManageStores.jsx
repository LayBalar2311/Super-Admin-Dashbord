// src/components/ManageStores.jsx
import React, { useState } from "react";
import StoreFilter from "./StoreFilter";
import StoreTable from "./StoreTable";
import StoreCardList from "./StoreCardList";
import StoreDetails from "../StorePage/StoreDetails";

const stores = [
  {
    name: "Janta Supermart",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    category: "Grocery",
    verified: true,
    dateJoined: "02-Apr-2025",
    owner: "Ramesh Sharma",
    phone: "9876543210",
    email: "janta@example.com",
    offers: [
      { title: "Diwali Sale", type: "Spotlight", status: "Active", date: "30 Oct" },
      { title: "Summer Discount", type: "Happy Hours", status: "Scheduled", date: "15 Jun" },
    ],
  },
  {
    name: "TechTrend Electronics",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Electronics",
    verified: true,
    dateJoined: "15-Mar-2025",
    owner: "Priya Singh",
    phone: "9988776655",
    email: "techtrend@example.com",
    offers: [], // Example with no offers
  },
  {
    name: "Fashion Hub",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    category: "Clothing",
    verified: false,
    dateJoined: "10-Feb-2025",
    owner: "Amit Kumar",
    phone: "9123456789",
    email: "fashionhub@example.com",
    offers: [
      { title: "Winter Collection", type: "Spotlight", status: "Expired", date: "31 Jan" },
    ],
  },
  {
    name: "Fresh Mart",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    category: "Grocery",
    verified: true,
    dateJoined: "20-Jan-2025",
    owner: "Sunita Reddy",
    phone: "9000011111",
    email: "freshmart@example.com",
    offers: [],
  },
  {
    name: "Gadget Zone",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    category: "Electronics",
    verified: true,
    dateJoined: "05-Apr-2025",
    owner: "Rajesh Varma",
    phone: "8899889988",
    email: "gadgetzone@example.com",
    offers: [],
  },
  {
    name: "Style Street",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    category: "Clothing",
    verified: false,
    dateJoined: "12-Mar-2025",
    owner: "Lakshmi Devi",
    phone: "7766554433",
    email: "stylestreet@example.com",
    offers: [],
  },
  {
    name: "Home Essentials",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    category: "Home & Kitchen",
    verified: true,
    dateJoined: "25-Feb-2025",
    owner: "Deb Bhowmick",
    phone: "9432109876",
    email: "homeessentials@example.com",
    offers: [],
  },
  {
    name: "Book Nook",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    category: "Books",
    verified: true,
    dateJoined: "30-Jan-2025",
    owner: "Manish Shah",
    phone: "9876512340",
    email: "booknook@example.com",
    offers: [],
  },
  {
    name: "Healthy Bites",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    category: "Grocery",
    verified: false,
    dateJoined: "18-Mar-2025",
    owner: "Sneha Joshi",
    phone: "9123912391",
    email: "healthybites@example.com",
    offers: [],
  },
  {
    name: "Tech Haven",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Electronics",
    verified: true,
    dateJoined: "01-Apr-2025",
    owner: "Rahul Desai",
    phone: "9876509876",
    email: "techhaven@example.com",
    offers: [],
  },
];

export default function ManageStores() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [verificationFilter, setVerificationFilter] = useState("All");
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedStore, setSelectedStore] = useState(null);

  const filteredStores = stores.filter((store) => {
    const matchesCategory =
      categoryFilter === "All" || store.category === categoryFilter;
    const matchesVerification =
      verificationFilter === "All" ||
      (verificationFilter === "Verified" && store.verified) ||
      (verificationFilter === "Pending" && !store.verified);

    const matchesLocation =
      locationSearch.trim() === "" ||
      store.city.toLowerCase().includes(locationSearch.toLowerCase()) ||
      store.state.toLowerCase().includes(locationSearch.toLowerCase());

    return matchesCategory && matchesVerification && matchesLocation;
  });

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  const handleBackToStores = () => {
    setSelectedStore(null);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-full overflow-x-hidden space-y-6">
      {selectedStore ? (
        <StoreDetails store={selectedStore} goBack={handleBackToStores} />
      ) : (
        <>
          <StoreFilter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            verificationFilter={verificationFilter}
            setVerificationFilter={setVerificationFilter}
            locationSearch={locationSearch}
            setLocationSearch={setLocationSearch}
          />

          <StoreTable stores={filteredStores} onStoreClick={handleStoreClick} />

          <StoreCardList
            stores={filteredStores}
            onStoreClick={handleStoreClick}
          />
        </>
      )}
    </div>
  );
}
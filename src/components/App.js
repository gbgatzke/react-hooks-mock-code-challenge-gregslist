import React,{ useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ listings, setListings ] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => 
      setListings(listings)
      )
  },[])

  function onDeleteListing(deletedListing) {
    const updatedListings = listings.filter(listing => 
      listing.id !== deletedListing.id);
      setListings(updatedListings);
  }

  function searchListings(searchQuery) {

    const updatedListings = listings.filter(listing => {
      return listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return setListings(updatedListings);
  }
  
  
  return (
    <div className="app">
      <Header searchListings={searchListings}/>
      <ListingsContainer 
        listings={listings}
        setListings={setListings}
        onDeleteListing={onDeleteListing}
      />
    </div>
  );
}

export default App;

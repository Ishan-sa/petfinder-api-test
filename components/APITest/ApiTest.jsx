import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default async function ApiTest() {
  const [pets, setPets] = useState(null);

  const api_key = process.env.API_KEY;
  const api_secret = process.env.API_SECRET;

  const headers = {
    "Api-Key": api_key,
    "Api-Secret": api_secret,
  };

  const params = {
    location: "zip_code",
    animal: "cat",
    status: "adaptable",
  };

  const getPets = async () => {
    try {
      const result = await axios.get({
        url: "https://api.petfinder.com/v2/animals",
        headers: headers,
        params: params,
        method: "GET",
      });
      setPets(result.data);
      console.log(result.data);
      // return result.data;
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(data);

  useEffect(() => {
    getPets();
  });

  return (
    <>
      <h1>API Testing</h1>
      <div>
        {/* {pets && pets.animals.map(pet => <div key={pet.id}>
            <h2>{pet.name}</h2>
          </div>)} */}
      </div>
    </>
  );
}

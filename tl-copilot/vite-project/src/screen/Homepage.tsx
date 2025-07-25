import React, { useEffect, useState } from "react";
import axiosInstance from "../api/ axiosInstance";

type Persona = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

const Homepage: React.FC = () => {
  const [userData, setUserData] = useState<Persona[] | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axiosInstance.get<Persona[]>("/core/personas");
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching protected data", err);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <h2>Protected Homepage</h2>
      <h1 className="text-3xl font-bold text-green-600">
        Welcome to the Protected Home Page!
      </h1>
      <p className="mt-4 text-gray-600">You are logged in 🎉</p>

      {userData ? <pre>{JSON.stringify(userData, null, 2)}</pre> : "Loading..."}
    </div>
  );
};

export default Homepage;

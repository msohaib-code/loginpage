import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/ axiosInstance'; // ✅ removed extra space

interface UserData {
  id: number;
  name: string;
  email?: string;
}

const Homepage: React.FC = () => {
  const [userData, setUserData] = useState<UserData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axiosInstance.get<UserData[]>('/core/personas');
        setUserData(res.data);
        
      } catch (err) {
        console.error('Error fetching protected data', err);
        setUserData([]); 
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Protected Homepage</h2>
      <h1 className="text-3xl font-bold text-green-600 mt-2">
        Welcome to the Protected Home Page!
      </h1>
      <p className="mt-4 text-gray-600">You are logged in 🎉</p>

      <div className="mt-6">
        {isLoading ? (
          <p className="text-blue-500">Loading...</p>
        ) : userData && userData.length > 0 ? (
          <ul className="list-disc pl-6 space-y-2">
            {userData.map((user) => (
              <li key={user.id} className="text-gray-800">
                <span className="font-semibold">{user.name}</span>
                {user.email && (
                  <span className="text-gray-500"> – {user.email}</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500">No persona.</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;

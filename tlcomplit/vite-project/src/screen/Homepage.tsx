
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/ axiosInstance";

interface PersonaDetail {
  details: string[];
}

interface UserPersona {
  _id: string;
  userId: string;
  type: string;
  name: string;
  title: string;
  description: string;
  jobStatus: string;
  createdAt: string;
  updatedAt: string;
  demographicsAndPsychographics: PersonaDetail;
  industryAttributesAndTrends: PersonaDetail;
  professionalGoalsAndChallenges: PersonaDetail;
  personalGoalsAndChallenges: PersonaDetail;
  beliefsAndValues: PersonaDetail;
  communicationPreferences: PersonaDetail;
  customersAndStakeholders: PersonaDetail;
}

const Homepage: React.FC = () => {
  const [userPersona, setUserPersona] = useState<UserPersona[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserPersona = async () => {
      try {
        const res = await axiosInstance.get("/core/personas");
        const personas = res.data?.data?.personas;

        if (Array.isArray(personas)) {
          setUserPersona(personas);
        } else {
          console.error("Invalid personas response:", personas);
          setUserPersona([]);
        }
      } catch (err) {
        console.error("Error fetching personas:", err);
        setUserPersona([]);
      } finally {
        setIsLoading(false);
      }
    };

    getUserPersona();
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
        ) : userPersona.length === 0 ? (
          <p className="text-red-500">No persona.</p>
        ) : (
          <ul className="space-y-4 list-none">
            {userPersona.map((user) => (
              <li
                key={user._id}
                className="border p-4 rounded-lg shadow bg-white"
              >
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{user.title}</p>
                <p className="mt-2">{user.jobStatus}</p>
                <p className="mt-2 text-gray-700">{user.description}</p>

                {/* Demographics */}
                <div className="mt-3">
                  <h4 className="font-semibold">Demographics & Psychographics</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {user.demographicsAndPsychographics.details.map(
                      (item, idx) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>
                </div>

                {/* Beliefs */}
                <div className="mt-3">
                  <h4 className="font-semibold">Beliefs & Values</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {user.beliefsAndValues.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Homepage;

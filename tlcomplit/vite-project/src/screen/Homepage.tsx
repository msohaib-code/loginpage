import React, { useEffect, useState } from "react";
import axiosInstance from "../api/ axiosInstance";
interface PersonaDetail {
  details: string[];
}
interface userPersona {
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
  const [userPersona, setuserPersona] = useState<userPersona[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getuserPersona = async () => {
      try {
        const res = await axiosInstance.get("/core/personas");
        console.log("Full response:", res);
        console.log("res.data:", res.data);

        const personas = res.data.data.personas;

        if (!Array.isArray(personas)) {
          console.error("Invalid or missing personas:", personas);
          setuserPersona([]);
          return;
        }

        setuserPersona(personas);
      } catch (err) {
        console.error("Error fetching protected data", err);
        setuserPersona([]);
      } finally {
        setIsLoading(false);
      }
    };

    getuserPersona();
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
        ) : userPersona && userPersona.length > 0 ? (

          <ul className="space-y-4 list-none">
            {userPersona.map((user) => (
              <li key={user._id} className="border p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="mt-2">{user.jobStatus}</p>
                <p className="text-sm text-gray-600">{user.title}</p>
                <p className="mt-2">{user.description}</p>
                <div>
                  <h4>Demographics & Psychographics</h4>
                  <ul>
                    beliefsAndValues
                    {user.demographicsAndPsychographics.details.map(
                      (item, idx) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h4>Beliefs & Values</h4>
                  <ul>
                    {user.beliefsAndValues.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
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


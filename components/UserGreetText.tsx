// app/components/UserGreetText.tsx
import React from 'react';

interface UserGreetTextProps {
  name?: string; // Optional since user_metadata might not have full_name
  email?: string; // Optional since email might not always be present
}

const UserGreetText: React.FC<UserGreetTextProps> = ({ name, email }) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">
        Welcome, {name || 'User'}!
      </h2>
      <p className="text-gray-600">Logged in as: {email || 'No email available'}</p>
    </div>
  );
};

export default UserGreetText;
"use client"
import React from 'react';

export const AuthContext = React.createContext(null);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}
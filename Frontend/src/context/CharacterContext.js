import React, { createContext, useContext, useState, useEffect } from 'react';

const initialCharacterData = {
  characterConfig: {
    cabelo: 0,
    pele: 0,
    olho: 0,
    roupa: 0,
    planoDeFundo: 0
  },
  characterStats: {
    level: 1,
    xp: 0,
    hp: 100,
    stamina: 10,
    attackDamage: 10,
    xpAmountToLevelUp: 100
  }
};

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState(() => {
    const savedData = localStorage.getItem('characterData');
    return savedData ? JSON.parse(savedData) : initialCharacterData;
  });

  useEffect(() => {
    localStorage.setItem('characterData', JSON.stringify(characterData));
  }, [characterData]);

  const updateCharacterPart = (part, newData) => {
    setCharacterData(prev => ({
      ...prev,
      [part]: { ...prev[part], ...newData }
    }));
  };

  return (
    <CharacterContext.Provider value={{ characterData, updateCharacterPart }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);

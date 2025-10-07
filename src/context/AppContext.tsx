'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';

type AppContextType = {
  noiseScore: number | null;
  particulateScore: number | null;
  certificateGenerated: boolean;
  setNoiseScore: (score: number | null) => void;
  setParticulateScore: (score: number | null) => void;
  setCertificateGenerated: (generated: boolean) => void;
  resetScores: () => void;
};

export const AppContext = createContext<AppContextType>({
  noiseScore: null,
  particulateScore: null,
  certificateGenerated: false,
  setNoiseScore: () => {},
  setParticulateScore: () => {},
  setCertificateGenerated: () => {},
  resetScores: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [noiseScore, setNoiseScoreState] = useState<number | null>(null);
  const [particulateScore, setParticulateScoreState] = useState<number | null>(null);
  const [certificateGenerated, setCertificateGeneratedState] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedNoiseScore = localStorage.getItem('noiseScore');
      const storedParticulateScore = localStorage.getItem('particulateScore');
      const storedCertificateGenerated = localStorage.getItem('certificateGenerated');

      if (storedNoiseScore) setNoiseScoreState(JSON.parse(storedNoiseScore));
      if (storedParticulateScore) setParticulateScoreState(JSON.parse(storedParticulateScore));
      if (storedCertificateGenerated) setCertificateGeneratedState(JSON.parse(storedCertificateGenerated));
    } catch (error) {
      console.error("Failed to parse state from localStorage", error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('noiseScore', JSON.stringify(noiseScore));
        localStorage.setItem('particulateScore', JSON.stringify(particulateScore));
        localStorage.setItem('certificateGenerated', JSON.stringify(certificateGenerated));
      } catch (error) {
        console.error("Failed to save state to localStorage", error);
      }
    }
  }, [noiseScore, particulateScore, certificateGenerated, isLoaded]);

  const setNoiseScore = (score: number | null) => {
    setNoiseScoreState(score);
  };

  const setParticulateScore = (score: number | null) => {
    setParticulateScoreState(score);
  };

  const setCertificateGenerated = (generated: boolean) => {
    setCertificateGeneratedState(generated);
  }

  const resetScores = () => {
    setNoiseScoreState(null);
    setParticulateScoreState(null);
    setCertificateGeneratedState(false);
  };

  return (
    <AppContext.Provider
      value={{
        noiseScore,
        particulateScore,
        certificateGenerated,
        setNoiseScore,
        setParticulateScore,
        setCertificateGenerated,
        resetScores,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

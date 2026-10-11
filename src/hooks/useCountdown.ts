import { useState, useEffect } from 'react';

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
  targetFormatted: string;
}

// November 22, 2026 00:00:00 IST corresponds to 2026-11-21T18:30:00Z
const TARGET_TIMESTAMP_MS = new Date('2026-11-21T18:30:00.000Z').getTime();

export function useCountdown(): CountdownResult {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isComplete: boolean;
  }>(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = Date.now();
    const diff = TARGET_TIMESTAMP_MS - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: true,
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isComplete: false,
    };
  }

  useEffect(() => {
    // Initial sync
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    ...timeLeft,
    targetFormatted: 'November 22, 2026 · Mumbai',
  };
}

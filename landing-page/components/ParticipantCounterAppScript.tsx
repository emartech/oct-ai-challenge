import { useState, useEffect } from 'react';
import { getCachedParticipantCountFromAppScript } from '../utils/participantCountAppScript';

export default function ParticipantCounterAppScript() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const participantCount = await getCachedParticipantCountFromAppScript();
        setCount(participantCount);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Failed to fetch participant count:', error);
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
    // Refresh every 5 minutes
    const interval = setInterval(fetchCount, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="mb-4">
        <div className="bg-white rounded-2xl pt-6 pb-4 max-w-6xl mx-auto text-center">
          <p className="text-oct-blue text-xl md:text-2xl font-semibold mb-2">
            Join the growing community of AI enthusiasts!
          </p>
          <p className="text-gray-600 text-base mb-4">
            The number of participants who already <strong>secured their seat</strong>:
          </p>
          <div className="text-4xl font-bold text-oct-blue animate-pulse">
            ...
          </div>
        </div>
      </div>
    );
  }

  if (count === 0) {
    return null;
  }

  return (
    <div className="mb-4">
      <div className="bg-white rounded-2xl pt-6 pb-4 max-w-6xl mx-auto text-center">
        <p className="text-oct-blue text-xl md:text-2xl font-semibold mb-2">
          Join the growing community of AI enthusiasts!
        </p>
        <p className="text-gray-600 text-base mb-4">
          The number of participants who already <strong>secured their seat</strong>:
        </p>
        <div className="text-5xl font-bold text-oct-blue mb-2">
          {count !== null ? count.toLocaleString() : '0'}
        </div>
        {lastUpdated && (
          <p className="text-gray-400 text-xs">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
}
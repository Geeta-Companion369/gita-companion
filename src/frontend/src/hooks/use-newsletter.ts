import { getBackend } from "@/lib/backend-client";
import { useCallback, useState } from "react";

export function useNewsletter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = useCallback(
    async (email: string, name: string): Promise<boolean> => {
      if (!email) return false;
      setIsLoading(true);
      setError(null);
      try {
        return await getBackend().subscribeNewsletter(email, name);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to subscribe");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const unsubscribe = useCallback(async (email: string): Promise<boolean> => {
    if (!email) return false;
    setIsLoading(true);
    setError(null);
    try {
      return await getBackend().unsubscribeNewsletter(email);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to unsubscribe");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { subscribe, unsubscribe, isLoading, error };
}

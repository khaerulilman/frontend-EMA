// contexts/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/router";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const publicPaths = ["/", "/auth/login", "/auth/register"];

  useEffect(() => {
    const checkAuth = () => {
      const token = document.cookie.includes("token=");
      setIsAuthenticated(token);
      setIsLoading(false);

      if (!token && !publicPaths.includes(router.pathname)) {
        router.push(`/auth/login?from=${router.pathname}`);
      }
    };

    checkAuth();
  }, [router.pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

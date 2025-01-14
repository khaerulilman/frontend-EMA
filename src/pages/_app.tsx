import Head from "next/head";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { DashboardLayout } from "../dashboard/Layout";
import { useRouter } from "next/router";
import { AuthProvider, useAuth } from "../context/authContext";

// Fungsi untuk memeriksa apakah jalur saat ini adalah jalur publik
function isPublicPath(path: string, publicPaths: string[]): boolean {
  return publicPaths.includes(path);
}

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const publicPaths = ["/", "/auth/login", "/auth/register"];
  const isPublicRoute = isPublicPath(router.pathname, publicPaths);
  const shouldRenderLayout = !isPublicRoute;

  // Jika bukan jalur publik dan pengguna tidak terautentikasi, jangan render apapun
  if (!isPublicRoute && !isAuthenticated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>English My Adventure</title>
      </Head>
      {shouldRenderLayout ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default function MyApp(props: AppProps) {
  return (
    <AuthProvider>
      <AppContent {...props} />
    </AuthProvider>
  );
}

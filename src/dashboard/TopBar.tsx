import { useDashboardContext } from "./Provider";
import { useRouter } from "next/router";

export function TopBar() {
  const { openSidebar } = useDashboardContext();
  const router = useRouter();

  const handleLogout = () => {
    // Hapus token dari cookies
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/auth/login"); // Arahkan ke halaman login setelah logout
  };

  return (
    <header className="relative z-10 h-16 items-center bg-white shadow md:h-20">
      <div className="relative z-10 mx-auto flex h-full flex-col justify-center px-3 text-white">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={openSidebar}
              className="text-4xl text-gray-700 focus:outline-none lg:hidden"
            >
              &#8801;
            </button>
          </div>
          <div className="relative ml-5 mr-0 flex w-full items-center justify-end p-1 text-gray-700 sm:right-auto sm:mr-0">
            <a href="#" className="relative block pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
            <a href="#" className="relative block">
              <img
                alt="User Avatar"
                src="/images/1.jpg"
                className="h-10 w-10 rounded-full object-cover"
              />
            </a>
            {/* Tombol Logout */}
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

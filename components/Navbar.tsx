import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans text-black">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span className="hover:underline">Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="hover:underline">
                  Logout
                </button>
              </form>
              <Link href={`/user/${session.user.id || "profile"}`}>
                <span className="hover:underline">
                  {session.user.name || "User"}
                </span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="hover:underline">
                Login with GitHub
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

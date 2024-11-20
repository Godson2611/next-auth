"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <h1>welcom to home page</h1>
          <img src={session.user.image} width={50} />
          <h4>{session.user.name}</h4>
          <p>{session.user.email}</p>
          <button onClick={() => signOut()}>logout</button>
        </>
      ) : (
        <>
          <h1>Login here</h1>
          <button onClick={() => signIn("google")}>Sign in with google</button>
          <button onClick={() => signIn("github")}>Sign in with github</button>
        </>
      )}
    </>
  );
};
export default HomePage;

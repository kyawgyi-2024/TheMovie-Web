

import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useEffect } from "react";

// top level
  // const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/");
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

const NotFound = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-60 mb-40">
      <h1 className=" font-bold font-title text-blue-600 text-9xl">404</h1>
      <h6 className=" text-5xl font-bold font-title text-slate-600">
        <span className=" font-title text-red-600">Oops!</span> Page not found.
      </h6>
      <p className=" text-slate-500 mt-3 mb-5">
        {"The page you're looking for doesn't exist"}
      </p>
      <Link href="/">
        <span className=" bg-slate-400 text-blue-800 mt-10 font-semibold font-title px-6 py-2 text-sm rounded">
          Go to Home!
        </span>
      </Link>
    </div>
  );
};

export default NotFound;

import Link from "next/link";

export default function Cafe() {
  return (
    <div className="flex justify-center text-center relative">
      <div>
        <div className="flex flex-col gap-5">
          <Link
            href="cafe/signup"
            className="w-56 mx-auto btn border-2 border-white btn-primary hover:bg-transparent hover:border-white transition-all delay-50 hover:scale-105 ease-in-out duration-500 text-white px-10 rounded-2xl"
          >
            Get Started
          </Link>
          <Link
            href="cafe/signin"
            className="w-56 mx-auto btn border-2 border-white bg-transparent hover:btn-primary hover:!bg-primary hover:!border-white transition-all delay-50 hover:scale-105 ease-in-out duration-500  text-white px-10 rounded-2xl"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

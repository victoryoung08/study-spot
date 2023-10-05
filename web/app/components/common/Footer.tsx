import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.webp";

export function Footer() {
  return (
    <div className="lg:py-20 text-white mx-5 lg:mx-0">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div>
            <Image src={logo} alt="Logo" width={200} />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-10 lg:w-2/4">
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Home</p>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                Become a creator
              </Link>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                List your cafe
              </Link>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                Study Spot Finder
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Study Spots</p>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                App Road Map
              </Link>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                Support
              </Link>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                Scheduler
              </Link>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                Update your listing
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">About</p>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/"
                className="text-white hover:border-none text-sm hover:text-gray-300"
              >
                Privacy policy
              </Link>
              <div className="flex gap-5">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="30 "
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                    ></path>
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="30"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="16.806"
                      cy="7.207"
                      r="1.078"
                      fill="currentColor"
                    ></circle>
                    <path
                      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

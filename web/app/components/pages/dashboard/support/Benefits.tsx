import studyspotverified from "@/public/images/study-spot-verified.svg";
import Image from "next/image";

export default function Benefits() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={studyspotverified}
          alt="Study Spot Verified Logo"
          className="mx-auto"
        />
        <p className="text-sm text-center ">
          Upgrade now to have benefits for only $000!
        </p>
      </div>
      <div className="border-2 border-white rounded-xl w-full lg:w-2/4 h-96 p-10 text-center mt-10">
        <div>
          <h2 className="text-xl uppercase">Benefits</h2>
        </div>
      </div>
    </div>
  );
}

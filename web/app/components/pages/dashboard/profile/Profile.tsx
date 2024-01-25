import getUserDetails from "@/src/queries/getUserDetails";
import BasicInformation from "./BasicInformation";
import CafeDetails from "./CafeDetails";
import Links from "./Links";
import Promotion from "./Promotion";

// export default async function Profile() {
//   const userData = await getUserDetails();
//   if (userData?.error) {
//     return <div>Error</div>;
//   }

//   // Todo use suspense while waiting for data
//   if (!userData?.data) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="text-white space-y-10">
//       <BasicInformation cafeDetails={userData} />
//       <div className="flex flex-col md:flex-row gap-10 lg:gap-32">
//         <CafeDetails cafeDetails={userData} />
//         <div className="space-y-10 md:w-2/4">
//           <Links cafeDetails={userData} />
//           <Promotion cafeDetails={userData} />
//         </div>
//       </div>
//     </div>
//   );
// }

// Fetch data on the server side before rendering the component

// Profile component receives data as props
export default function Profile({ userData }: any) {
  return (
    <div className="text-white space-y-10">
      <BasicInformation cafeDetails={userData.cafe} />
      <div className="flex flex-col md:flex-row gap-10 lg:gap-32">
        <CafeDetails cafeDetails={userData} />
        <div className="space-y-10 md:w-2/4">
          <Links cafeDetails={userData} />
          <Promotion cafeDetails={userData} />
        </div>
      </div>
    </div>
  );
}

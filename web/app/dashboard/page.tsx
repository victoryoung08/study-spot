import Sidebar from "../components/pages/dashboard/common/Sidebar";
import Topbar from "../components/pages/dashboard/common/Topbar";

export default function Dashboard() {
  return (
    <div className=" flex h-screen ">
      <Sidebar />
      <div className="w-auto flex-1  overflow-x-auto !h-screen relative">
        <div className=" p-5 lg:px-10 lg:py-5 flex gap-3 justify-end">
          <Topbar />
        </div>
        <div className="">
          <div className="p-10">Main content here</div>
        </div>
      </div>
    </div>
  );
}

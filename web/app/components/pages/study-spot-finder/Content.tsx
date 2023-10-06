import Cafe from "./Cafe";
import Filter from "./Filter";

export default function Content() {
  return (
    <div className="mx-5 lg:mx-10 flex gap-5 lg:gap-10">
      <div className="hidden md:block w-72">
        <Filter />
      </div>
      <div className="flex-1">
        <Cafe />
      </div>
    </div>
  );
}

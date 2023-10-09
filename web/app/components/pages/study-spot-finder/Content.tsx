import Cafe from "./Cafe";
import Filter from "./Filter";

type ContentProps = {
  features: any;
  vibes: any;
  styles: any;
  cafe: any;
};

export default function Content({
  features,
  vibes,
  styles,
  cafe,
}: ContentProps) {
  return (
    <div className="mx-5 lg:mx-10 flex gap-5 lg:gap-10">
      <div className="hidden md:block w-72">
        <Filter features={features} vibes={vibes} styles={styles} />
      </div>
      <div className="flex-1">
        <Cafe cafe={cafe} />
      </div>
    </div>
  );
}

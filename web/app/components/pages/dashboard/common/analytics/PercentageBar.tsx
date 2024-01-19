import { Progress } from "@/app/components/ui/progress";

type percentageBar = {
  sectionTitle: string;
  data: any;
  title?: string;
};

export default function PercentageBar({
  data,
  sectionTitle,
  title,
}: percentageBar) {
  return (
    <div>
      <div className=" mt-10 border-2 border-white rounded-2xl p-5 lg:p-10">
        {sectionTitle && <h2 className="text-xl font-bold">{sectionTitle}</h2>}
        <div className="space-y-3 md:space-y-5 mt-4 xs:mt-5">
          {title && <p className="text-xs sm:text-base">{title}</p>}
          {data.map((item: any) => {
            return (
              <div className="" key={item.name}>
                <p className="mb-1 text-xs xs:text-sm">{item.name}</p>
                <div className="flex justify-between items-center gap-3 md:gap-5">
                  <Progress value={item.percentage} />
                  <p className="text-sm sm:text-lg">{item.percentage}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import ProfileVisits from "./ProfileVisits";
import TabsWrapper from "./TabsWrapper";

export default function Analytics() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-4xl font-black">Analytics</h2>
      </div>
      <TabsWrapper>
        <ProfileVisits />
      </TabsWrapper>
    </div>
  );
}

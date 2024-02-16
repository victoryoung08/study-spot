import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { ReactNode } from "react";

type TabsWrapperTypes = {
  children: ReactNode;
};

export default function TabsWrapper({ children }: TabsWrapperTypes) {
  return (
    <Tabs defaultValue="Profile Visit" className="w-full">
      <TabsList>
        <TabsTrigger value="Profile Visit">Profile Visit</TabsTrigger>
        {/* <TabsTrigger value="Impressions">Impressions</TabsTrigger>
        <TabsTrigger value="Clicks">Clicks</TabsTrigger> */}
      </TabsList>
      {children}
    </Tabs>
  );
}

import { Button } from "@/app/components/ui/button";

export default function Promotion() {
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Promotion</h3>
        <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
      </div>
      <div className="mt-6">
        <div className="xs:flex items-center justify-between">
          <p>Promo Code:</p>
          <div className="xs:w-2/4 flex items-center justify-between">
            <p>CAFE15</p>
            <Button className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

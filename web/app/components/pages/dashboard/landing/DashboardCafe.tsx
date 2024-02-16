export default function DashboardCafe({ cafeName }: any | string) {
  return (
    <div>
      <div>
        <h2 className="text-base">Hi{` ${cafeName}` || ""}! 👋🏻</h2>
        <h3 className="text-3xl font-bold">
          {cafeName ? "Dashboard" : "No data available as of now. "}
        </h3>
      </div>
    </div>
  );
}

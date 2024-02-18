export default function DashboardCafe({ cafeName }: any | string) {
  return (
    <div>
      <div>
        <h2 className="text-base">Hi{` ${cafeName}` || ""}! 👋🏻</h2>
        {cafeName && <h3 className="text-3xl font-bold">Dashboard</h3>}
      </div>
    </div>
  );
}

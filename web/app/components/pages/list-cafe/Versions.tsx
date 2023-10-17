import { Container } from "../../common/Container";

export default function Versions({ version }: any) {
  return (
    <Container>
      <div className="lg:py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {version.map((ver: any) => {
            return (
              <div key={ver.id}>
                <div
                  className={`border border-white rounded-full px-4 py-1 w-44 md:w-auto lg:w-3/5 flex items-center  ${
                    ver.isCurrent
                      ? "bg-primary justify-between"
                      : "border gap-2"
                  }`}
                >
                  {ver.isCurrent === false && (
                    <div className="w-5 h-5 rounded-full bg-white" />
                  )}
                  <p className="font-semibold">{ver.version_number || ""}</p>
                  {ver.isCurrent && <p className="text-sm">Current</p>}
                  {ver.isCurrent && (
                    <div className="w-5 h-5 rounded-full bg-white" />
                  )}
                </div>
                <div className="space-y-3 mt-5">
                  {ver.item.map((ctx: any) => {
                    return (
                      <div
                        key={ctx.id}
                        className={`rounded-2xl border border-white p-5 ${
                          ver.isCurrent ? "bg-[#3a3939]" : ""
                        }`}
                      >
                        <div>
                          <p className="text-sm">{ctx.description || ""}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

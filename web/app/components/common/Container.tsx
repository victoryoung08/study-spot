export function Container({
  children,
  backgroundImage = "",
  styling = {},
}: {
  children: React.ReactNode;
  backgroundImage?: string;
  styling?: object;
}) {
  let style: object = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  if (styling) {
    // combine the styling
    style = { ...style, ...styling };
  }
  return (
    <div className="bg-cover relative" style={style}>
      <div className="max-w-screen-lg mx-auto bg-cover px-5 py-20 lg:px-0">
        {children}
      </div>
    </div>
  );
}

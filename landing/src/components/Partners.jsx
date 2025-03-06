function Partners() {
  const icons = [
    { path: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" },
    { circle: { cx: 12, cy: 12, r: 10 }, lines: ["M12 6V18", "M6 12H18"] },
    { rect: { x: 2, y: 2, width: 20, height: 20, rx: 5 }, circle: { cx: 12, cy: 12, r: 4 } },
    { lines: ["M2 7L22 7", "M2 12L22 12", "M2 17L22 17"] }
  ]

  return (
    <section className="h-[40vh] px-8 relative overflow-hidden bg-gradient-to-b from-transparent to-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-gray-400">
            Empowering businesses with data-driven decisions and AI insights
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {icons.map((icon, index) => (
            <div 
              key={index} 
              className="group flex justify-center hover:opacity-100 transition-all duration-500 transform hover:scale-110"
            >
              <svg
                className="h-12 w-auto text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
              >
                {icon.path && <path d={icon.path} fill="currentColor" />}
                {icon.circle && (
                  <circle
                    cx={icon.circle.cx}
                    cy={icon.circle.cy}
                    r={icon.circle.r}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                )}
                {icon.rect && (
                  <rect
                    x={icon.rect.x}
                    y={icon.rect.y}
                    width={icon.rect.width}
                    height={icon.rect.height}
                    rx={icon.rect.rx}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                )}
                {icon.lines &&
                  icon.lines.map((line, i) => (
                    <path
                      key={i}
                      d={line}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  ))}
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
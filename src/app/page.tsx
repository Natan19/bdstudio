export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Subtle corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white opacity-20"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white opacity-20"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white opacity-20"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white opacity-20"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-12 max-w-4xl">
          {/* Main company name - hero section */}
          <div className="space-y-8">
            {/* Logo positioned above company name */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-3 bg-gray-900 border border-gray-700 rounded-lg px-6 py-3">
                <img
                  src="./logo.png"
                  alt="BD Studio Logo"
                  className="w-auto h-24 rounded"
                />
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-7xl md:text-9xl font-black text-white tracking-tight leading-none">
                BD STUDIO
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
              Indie Game Development
            </p>
          </div>

          {/* Status section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-white">
                Currently Under Construction
              </h2>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

            <p className="text-lg text-gray-300 leading-relaxed">
              BD Studio is an indie gaming development company that is still
              being built. We&apos;re working hard to bring you amazing gaming
              experiences.
            </p>

            <div className="text-white font-semibold">
              Stay tuned for future releases
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-8 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>System Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>In Development</span>
            </div>
          </div>
          <div className="text-sm text-gray-500 font-mono">v0.1.0-alpha</div>
        </div>
      </div>

      {/* Subtle orange accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </div>
  );
}

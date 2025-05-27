export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-400 to-fuchsia-500 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">CI/CD Pipeline Active</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-pink-100 to-fuchsia-200 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            DevOps Pipeline by Aya 
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Modern Continuous Integration & Deployment
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover seamless workflows powered by Jenkins, Docker, GitHub Actions, and AWS – all beautifully deployed with Next.js.
          </p>
        </header>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Automated Testing",
              iconColor: "from-pink-400 to-pink-600",
              description: "Your code is tested with love 💖 on every commit.",
              icon: (
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              ),
            },
            {
              title: "Jenkins Pipeline",
              iconColor: "from-rose-400 to-fuchsia-600",
              description: "Orchestrated workflows for clean & smooth delivery 🚀.",
              icon: (
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              ),
            },
            {
              title: "Instant Deployment",
              iconColor: "from-purple-400 to-pink-600",
              description: "Updates pushed live instantly with zero downtime 💫.",
              icon: (
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Status Dashboard */}
        <section className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Pipeline Status</h2>
          <div className="grid md:grid-cols-4 gap-6 text-white">
            {[
              { label: "Build", status: "Passed", color: "bg-green-500", icon: "M5 13l4 4L19 7" },
              { label: "Tests", status: "Passed", color: "bg-green-500", icon: "M5 13l4 4L19 7" },
              { label: "Deploy", status: "In Progress", color: "bg-blue-500 animate-spin", icon: "M4 4v5h.582m15.356 2..." },
              { label: "Monitor", status: "Pending", color: "bg-pink-300", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((stage, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stage.icon} />
                  </svg>
                </div>
                <h3 className="font-medium">{stage.label}</h3>
                <p className="text-sm text-white/80">{stage.status}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-white mb-8">Technologies Utilisées</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Jenkins", "Docker", "Tailwind CSS", "GitHub Actions", "AWS"].map((tech) => (
              <div key={tech} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 shadow-md">
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="absolute bottom-6 text-center text-white/70 text-sm">
        <p>© 2025 DevOps by Aya. Pink-powered CI/CD ❤️</p>
      </footer>
    </main>
  );
}

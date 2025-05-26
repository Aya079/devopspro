export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-200 text-sm font-medium">Live CI/CD Pipeline</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            DevOps Pipeline AYA 
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-200 mb-6">
            Continuous Integration & Deployment
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience modern DevOps practices with automated testing, building, and deployment using Next.js, Jenkins,
            and cloud infrastructure.
          </p>
        </header>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Automated Testing</h3>
            <p className="text-slate-300">
              Comprehensive test suites run automatically on every commit to ensure code quality and reliability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Jenkins Pipeline</h3>
            <p className="text-slate-300">
              Robust CI/CD pipeline orchestrated by Jenkins for seamless integration and deployment workflows.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Instant Deployment</h3>
            <p className="text-slate-300">
              Changes are automatically deployed to production environments with zero-downtime deployment strategies.
            </p>
          </div>
        </section>

        {/* Status Dashboard */}
        <section className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Pipeline Status</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-medium">Build</h3>
              <p className="text-green-400 text-sm">Passed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-medium">Tests</h3>
              <p className="text-green-400 text-sm">Passed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-spin">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-white font-medium">Deploy</h3>
              <p className="text-blue-400 text-sm">In Progress</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-medium">Monitor</h3>
              <p className="text-slate-400 text-sm">Pending</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-8">Powered By</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Next.js", "Jenkins", "Docker", "Tailwind CSS", "GitHub Actions", "AWS"].map((tech) => (
              <div key={tech} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <span className="text-slate-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="absolute bottom-6 text-center text-slate-400 text-sm">
        <p>© 2025 DevOps Pipeline Demo. Built with modern CI/CD practices.</p>
      </footer>
    </main>
  )
}

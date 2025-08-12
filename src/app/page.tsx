import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">
            Web Performance Demo
          </h1>
          <p className="text-lg text-slate-600">
            Choose a version to explore different optimization techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/version-1"
            prefetch={false}
            className="group p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
              Version 1
            </h2>
            <p className="text-slate-600 mt-2">CSR Baseline</p>
          </Link>

          <Link
            href="/version-2"
            prefetch={false}
            className="group p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
              Version 2
            </h2>
            <p className="text-slate-600 mt-2">CSR with optimizations</p>
          </Link>

          <Link
            href="/version-3"
            prefetch={false}
            className="group p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
              Version 3
            </h2>
            <p className="text-slate-600 mt-2">SSR</p>
          </Link>

          <Link
            href="/version-4"
            prefetch={false}
            className="group p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
              Version 4
            </h2>
            <p className="text-slate-600 mt-2">SSR Streaming</p>
          </Link>

          <Link
            href="/version-5"
            prefetch={false}
            className="group p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
              Version 5
            </h2>
            <p className="text-slate-600 mt-2">Static Generation</p>
          </Link>
        </div>
      </div>
    </div>
  );
}


const footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white mt-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}

          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="hover:cursor-pointer  ">
                <img src="/src/assets/logo-text.png" alt="" />
              </div>
            </div>

            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links start*/}

            <div className="mt-5 flex items-center gap-5 text-xs text-slate-700">
              <a href="#" className="transition-colors hover:text-pink-500">
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-pink-500">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product start*/}

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company start*/}

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal start*/}

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li> <a href="#" className="hover:text-slate-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section start*/}

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-slate-400">
            <a href="#" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;

export default function NavBar() {
    const links = [
      { label: 'About',      id: 'about'   },
      { label: 'Workshops', id: 'workshops' },
      { label: 'Themes',    id: 'themes'    },
      { label: 'Sponsors',  id: 'sponsors'  },
    ];
  
    return (
      <nav className="hidden sm:block fixed top-0 left-0 w-full bg-black z-50">
        <ul className="flex justify-end px-8 py-4 gap-8 text-white text-lg font-code font-semibold">
          {links.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="hover:text-green transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
import React from "react";
// app component
function NavbarProducts(props) {
  const { title1, title2, title3, titleHead, toTitle1, toTitle2, toTitle3 } =
    props;
  return (
    <div className="flex p-5 items-center justify-center font-inter text-2xl	">
      <div className="">
        <Dropdown>
          <Dropdown.Button>{titleHead}</Dropdown.Button>
          <Dropdown.Content>
            <Dropdown.List>
              <Dropdown.Item>
                <a
                  href={toTitle1}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                >
                  {title1}
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href={toTitle2}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                >
                  {title2}
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href={toTitle3}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                >
                  {title3}
                </a>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavbarProducts;

const DropdownContext = React.createContext({
  open: false,
  setOpen: () => {},
});

// dropdown component for wrapping and providing context
function Dropdown({ children, ...props }) {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  // dropdown context for open state
  // click listeners for closing dropdown
  React.useEffect(() => {
    // close dropdown if click outside
    function close(e) {
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    // add or remove event listener
    if (open) {
      window.addEventListener("click", close);
    }
    // cleanup
    return function removeListener() {
      window.removeEventListener("click", close);
    };
  }, [open]); // only run if open state changes

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className="">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

// dropdown button for triggering open
function DropdownButton({ children, ...props }) {
  const { open, setOpen } = React.useContext(DropdownContext); // get the context

  // to open and close the dropdown
  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <button
      onClick={toggleOpen}
      className="rounded px-4 py-2 font-medium text-black flex items-center"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={15}
        height={15}
        strokeWidth={4}
        stroke="currentColor"
        className={`ml-2 ${open ? "rotate-180" : "rotate-0"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}

// dropdown content for displaying dropdown
function DropdownContent({ children }) {
  const { open } = React.useContext(DropdownContext); // get the context

  return (
    <div
      className={`absolute z-20 rounded border border-gray-300 bg-white overflow-hidden my-1 overflow-y-auto ${
        open ? "shadow-md" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}

// dropdown list for dropdown menus
function DropdownList({ children, ...props }) {
  const { setOpen } = React.useContext(DropdownContext); // get the context

  return (
    <ul
      onClick={() => setOpen(false)}
      className="divide-y divide-gray-200 text-gray-700"
      {...props}
    >
      {children}
    </ul>
  );
}

// dropdown items for dropdown menus
function DropdownItem({ children, ...props }) {
  return (
    <li>
      <button
        className="py-3 px-5 whitespace-nowrap hover:underline"
        {...props}
      >
        {children}
      </button>
    </li>
  );
}

// optional - but I like this pattern to know it must be a child of Dropdown
Dropdown.Button = DropdownButton;
Dropdown.Content = DropdownContent;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

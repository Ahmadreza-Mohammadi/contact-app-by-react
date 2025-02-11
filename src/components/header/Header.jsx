import React from "react";

function Header() {
  return (
    <>
      <div className="bg-gray-500 flex justify-end p-2 rounded-b-4xl">
        <div className="w-1/2 flex justify-between ml-16">
          <h1 className="text-center font-extrabold text-white">وب اپلیکیشن مدیریت مخاطبین</h1>
          <img
            className="h-5"
            src="https://www.svgrepo.com/show/433086/light-mode.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";

function Header() {
  return (
    <>
      <div className="bg-gray-500 flex justify-end p-2 rounded-b-4xl">
        <div className="w-[720px] flex justify-between items-center">
          <h1 className="font-bold text-white t">وب اپلیکیشن مدیریت مخاطبین</h1>
          <img
            className="h-5 ml-2"
            src="https://www.svgrepo.com/show/433086/light-mode.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Header;

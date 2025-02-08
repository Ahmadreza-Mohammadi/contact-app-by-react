import React from "react";

function ContactsList({ users }) {
  return (
    <div className="h-0 w-1/2 flex items-start flex-wrap gap-6">
      {/* contacts */}
      {users.map((user) => (
        <div
          key={user.id}
          className="w-[290px] h-38 bg-[#e6e7eb] p-2 rounded-md shadow-xl"
        >
          <span className="font-bold">نام:</span> <span>{user.name}</span>
          <div>
            <span className="font-bold">شماره موبایل:</span>{" "}
            <span>{user.mobile}</span>
          </div>
          <div>
            <span className="font-bold">نسبت:</span> <span>{user.relation}</span>
          </div>
          <div>
            <span className="font-bold">ایمیل:</span> <span>{user.email}</span>
          </div>
          <div className="flex justify-end gap-1">
            <button className="bg-blue-500 p-1 rounded-md w-16 text-white font-bold text-sm">
              ویرایش
            </button>
            <button className="bg-red-500 p-1 rounded-md w-16 text-white font-bold text-sm">
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactsList;

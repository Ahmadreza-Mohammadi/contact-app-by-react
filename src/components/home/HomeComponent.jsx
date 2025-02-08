import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import InputField from "../../base/inputField"; // وارد کردن کامپوننت جدید
import axios from "axios";

function HomeComponent() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchedData() {
      const res = await axios.get(
        "https://67a70569510789ef0dfcbe85.mockapi.io/contacts/users-list"
      );
      setUsers(res.data);
    }
    fetchedData();
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-between gap-10 mt-5">
        <div className="shadow-2xl w-1/2 p-8">
          <h1 className="text-center font-bold text-xl">
            اضافه/ویرایش کاربران
          </h1>
          <div className="p-2 flex flex-col gap-3">
            <InputField
              label="نام"
              type="text"
              placeholder="نام..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="نام خانوادگی"
              type="text"
              placeholder="نام خانوادگی..."
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
            />
            <InputField
              label="شماره موبایل"
              type="text"
              placeholder="شماره موبایل..."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <InputField
              label="نسبت"
              type="text"
              placeholder="نسبت..."
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
            />
            <InputField
              label="ایمیل"
              type="text"
              placeholder="ایمیل..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="border-1 p-1 w-24 rounded-md text-xs bg-gray-700 text-white font-semibold hover:cursor-pointer hover:bg-white hover:text-black">
            اضافه کردن
          </button>
        </div>
        {/* contacts container */}
        <div className="h-0  w-1/2 flex items-start flex-wrap gap-6">
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
                <span className="font-bold">نسبت:</span>{" "}
                <span>{user.relation}</span>
              </div>
              <div>
                <span className="font-bold">ایمیل:</span>{" "}
                <span>{user.email}</span>
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
      </div>
    </>
  );
}

export default HomeComponent;

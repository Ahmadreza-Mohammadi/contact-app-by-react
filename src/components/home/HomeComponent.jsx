import React from "react";
import Header from "../header/Header";

function HomeComponent() {
  return (
    <>
      <Header />
      <div className="flex justify-between gap-5 mt-5">
        <div className="shadow-2xl w-1/2 p-8">
          <h1 className="text-center font-bold text-xl">
            اضافه/ویرایش کاربران
          </h1>
          <div className="p-2 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="">
                نام:
              </label>
              <input
                className="border-1 border-gray-400 rounded-md p-1 "
                type="text"
                placeholder="نام..."
              />
              <span className="text-red-500 text-xs font-semibold ">
                لطفا نام را وارد کنید
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="">
                نام خانوادگی:
              </label>
              <input
                className="border-1 rounded-md p-1"
                type="text"
                placeholder="نام خانوادگی..."
              />
              <span className="text-red-500 text-xs font-semibold ">
                لطفا نام خانوادگی را وارد کنید
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="">
                شماره موبایل:
              </label>
              <input
                className="border-1 rounded-md p-1"
                type="text"
                placeholder="شماره موبایل..."
              />
              <span className="text-red-500 text-xs font-semibold ">
                لطفا شماره موبایل را وارد کنید
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="">
                نسبت:
              </label>
              <input
                className="border-1 rounded-md p-1"
                type="text"
                placeholder="نسبت..."
              />
              <span className="text-red-500 text-xs font-semibold ">
                لطفا نسبت خود را وارد کنید
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="">
                ایمیل:
              </label>
              <input
                className="border-1 rounded-md p-1"
                type="text"
                placeholder="ایمیل..."
              />
              <span className="text-red-500 text-xs font-semibold ">
                لطفا ایمیل خود را وارد کنید
              </span>
            </div>
          </div>
          <button className="border-1 p-1 w-24 rounded-md text-xs bg-gray-700 text-white font-semibold hover:cursor-pointer hover:bg-white hover:text-black">
            اضافه کردن
          </button>
        </div>
        {/* contacts container */}
        <div className="h-0  w-1/2 flex items-start flex-wrap gap-6">
          {/* contacts */}
          <div className="w-[290px] h-38 bg-[#e6e7eb] p-2 rounded-md shadow-xl">
            <span className="font-bold">نام:</span> <span>علی رحیمی</span>
            <div>
              <span className="font-bold">شماره موبایل:</span>{" "}
              <span>۰۹۱۰۹۹۹۳۳۲۲</span>
            </div>
            <div>
              <span className="font-bold">نسبت:</span> <span>دوست</span>
            </div>
            <div>
              <span className="font-bold">ایمیل:</span> <span>email</span>
            </div>
            <div className=" flex justify-end gap-1">
              <button className="bg-blue-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                ویرایش
              </button>
              <button className="bg-red-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                حذف
              </button>
            </div>
          </div>
          <div className="w-[290px] h-38 bg-[#e6e7eb] p-2 rounded-md shadow-xl">
            <span className="font-bold">نام:</span> <span>علی رحیمی</span>
            <div>
              <span className="font-bold">شماره موبایل:</span>{" "}
              <span>۰۹۱۰۹۹۹۳۳۲۲</span>
            </div>
            <div>
              <span className="font-bold">نسبت:</span> <span>دوست</span>
            </div>
            <div>
              <span className="font-bold">ایمیل:</span> <span>email</span>
            </div>
            <div className=" flex justify-end gap-1">
              <button className="bg-blue-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                ویرایش
              </button>
              <button className="bg-red-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                حذف
              </button>
            </div>
          </div>
          <div className="w-[290px] h-38 bg-[#e6e7eb] p-2 rounded-md shadow-xl">
            <span className="font-bold">نام:</span> <span>علی رحیمی</span>
            <div>
              <span className="font-bold">شماره موبایل:</span>{" "}
              <span>۰۹۱۰۹۹۹۳۳۲۲</span>
            </div>
            <div>
              <span className="font-bold">نسبت:</span> <span>دوست</span>
            </div>
            <div>
              <span className="font-bold">ایمیل:</span> <span>email</span>
            </div>
            <div className=" flex justify-end gap-1">
              <button className="bg-blue-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                ویرایش
              </button>
              <button className="bg-red-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                حذف
              </button>
            </div>
          </div>
          <div className="w-[290px] h-38 bg-[#e6e7eb] p-2 rounded-md shadow-xl">
            <span className="font-bold">نام:</span> <span>علی رحیمی</span>
            <div>
              <span className="font-bold">شماره موبایل:</span>{" "}
              <span>۰۹۱۰۹۹۹۳۳۲۲</span>
            </div>
            <div>
              <span className="font-bold">نسبت:</span> <span>دوست</span>
            </div>
            <div>
              <span className="font-bold">ایمیل:</span> <span>email</span>
            </div>
            <div className=" flex justify-end gap-1">
              <button className="bg-blue-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                ویرایش
              </button>
              <button className="bg-red-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                حذف
              </button>
            </div>
          </div>
          <div className="w-[290px] h-38 bg-[#e6e7eb] p-2 rounded-md shadow-xl">
            <span className="font-bold">نام:</span> <span>علی رحیمی</span>
            <div>
              <span className="font-bold">شماره موبایل:</span>{" "}
              <span>۰۹۱۰۹۹۹۳۳۲۲</span>
            </div>
            <div>
              <span className="font-bold">نسبت:</span> <span>دوست</span>
            </div>
            <div>
              <span className="font-bold">ایمیل:</span> <span>email</span>
            </div>
            <div className=" flex justify-end gap-1">
              <button className="bg-blue-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                ویرایش
              </button>
              <button className="bg-red-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                حذف
              </button>
            </div>
          </div>
          <div className="w-[290px] h-38 bg-[#e6e7eb] p-2 rounded-md shadow-xl">
            <span className="font-bold">نام:</span> <span>علی رحیمی</span>
            <div>
              <span className="font-bold">شماره موبایل:</span>{" "}
              <span>۰۹۱۰۹۹۹۳۳۲۲</span>
            </div>
            <div>
              <span className="font-bold">نسبت:</span> <span>دوست</span>
            </div>
            <div>
              <span className="font-bold">ایمیل:</span> <span>email</span>
            </div>
            <div className=" flex justify-end gap-1">
              <button className="bg-blue-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                ویرایش
              </button>
              <button className="bg-red-500 p-1 rounded-md w-16 text-white font-bold text-sm">
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;

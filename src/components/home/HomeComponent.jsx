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
              <span className="text-red-500 text-xs font-semibold ">لطفا نام را وارد کنید</span>
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
              <span>لطفا نام را وارد کنید</span>
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
              <span>لطفا نام را وارد کنید</span>
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
              <span>لطفا نام را وارد کنید</span>
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
              <span>لطفا نام را وارد کنید</span>
            </div>
          </div>
          <button className="border-1 p-1 w-24 rounded-md text-xs bg-gray-700 text-white font-semibold">اضافه کردن</button>
        </div>

        <div className="h-0  w-1/2 flex items-start flex-wrap gap-6">
          <div className="w-[280px] h-24 bg-blue-400">cart 1</div>
          <div className="w-[280px] h-24 bg-blue-400">cart 2</div>
          <div className="w-[280px] h-24 bg-blue-400">cart 3</div>
          <div className="w-[280px] h-24 bg-blue-400">cart 4</div>
          <div className="w-[280px] h-24 bg-blue-400">cart 4</div>
          <div className="w-[280px] h-24 bg-blue-400">cart 4</div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;

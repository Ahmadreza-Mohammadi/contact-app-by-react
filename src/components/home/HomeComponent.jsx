import { useEffect, useState } from "react";
import Header from "../header/Header";
import InputField from "../../base/inputField";
import axios from "axios";
import ContactsList from "../contacts-list/contactsList";

function HomeComponent() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
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
  }, [users]);

  async function postUser() {
    await axios.post(
      "https://67a70569510789ef0dfcbe85.mockapi.io/contacts/users-list",
      { name, lastname, mobile, relation, email }
    );
    setName("");
    setLastname("");
    setMobile("");
    setRelation("");
    setEmail("");
  }

  async function deleteUserHandler(id) {
    await axios.delete(
      `https://67a70569510789ef0dfcbe85.mockapi.io/contacts/users-list/${id}`
    );
    
  }

  return (
    <>
      <Header />
      <div className="flex justify-between gap-10 mt-5">
        <div className="shadow-2xl w-1/2 p-8">
          <h1 className="text-center font-bold text-xl">اضافه کردن کاربران</h1>
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
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
          <button
            onClick={postUser}
            className="border-1 p-1 w-24 rounded-md text-xs bg-gray-700 text-white font-semibold hover:cursor-pointer hover:bg-white hover:text-black"
          >
            اضافه کردن
          </button>
        </div>
        <ContactsList deleteUserHandler={deleteUserHandler} users={users} />
      </div>
    </>
  );
}

export default HomeComponent;

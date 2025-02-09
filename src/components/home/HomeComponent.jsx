import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import InputField from "../../base/inputField";
import axios from "axios";
import ContactsList from "../contacts-list/contactsList";
import ConfirmationModal from "../../shared/confirmModal";

function HomeComponent() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchedData() {
      const res = await axios.get(
        "https://67a70569510789ef0dfcbe85.mockapi.io/contacts/users-list"
      );
      setUsers(res.data);
    }
    fetchedData();
  }, [users]);

  function validateIranianMobileNumber(mobile) {
    const iranMobileRegex = /^(\+98|0)?9\d{9}$/;
    return iranMobileRegex.test(mobile);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function postUser() {
    if (!validateIranianMobileNumber(mobile)) {
      setError("شماره موبایل وارد شده نامعتبر است. لطفا مقدار درست وارد کنید.");
      return;
    }
    if (!validateEmail(email)) {
      setError("ایمیل وارد شده نامعتبر است. لطفا مقدار درست وارد کنید.");
      return;
    }
    await axios.post(
      "https://67a70569510789ef0dfcbe85.mockapi.io/contacts/users-list",
      { name, lastname, mobile, relation, email }
    );
    setName("");
    setLastname("");
    setMobile("");
    setRelation("");
    setEmail("");
    setError("");
  }

  const showDeleteModal = (id) => {
    setDeleteUserId(id);
    setShowModal(true);
  };

  const handleDeleteUser = async () => {
    if (deleteUserId) {
      await axios.delete(
        `https://67a70569510789ef0dfcbe85.mockapi.io/contacts/users-list/${deleteUserId}`
      );
      setShowModal(false);
      setDeleteUserId(null);
    }
  };

  const startEditUser = (user) => {
    setEditUserId(user.id);
    setName(user.name);
    setLastname(user.lastname);
    setMobile(user.mobile);
    setRelation(user.relation);
    setEmail(user.email);
  };

  const editUserHandler = async () => {
    if (!validateIranianMobileNumber(mobile)) {
      setError("شماره موبایل وارد شده نامعتبر است. لطفا مقدار درست وارد کنید.");
      return;
    }
    if (!validateEmail(email)) {
      setError("ایمیل وارد شده نامعتبر است. لطفا مقدار درست وارد کنید.");
      return;
    }
    if (editUserId) {
      await axios.put(
        `https://67a70569510789ef0dfcbe85.mockapi.io/contacts/users-list/${editUserId}`,
        { name, lastname, mobile, relation, email }
      );
      setEditUserId(null);
      setName("");
      setLastname("");
      setMobile("");
      setRelation("");
      setEmail("");
      setError("");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-between gap-10 mt-5">
        <div className="shadow-2xl w-1/2 p-8">
          <h1 className="text-center font-bold text-xl">
            {editUserId ? "ویرایش کاربر" : "اضافه کردن کاربران"}
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
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <button
            onClick={editUserId ? editUserHandler : postUser}
            className="border-1 p-1 w-24 rounded-md text-xs bg-gray-700 text-white font-semibold hover:cursor-pointer hover:bg-white hover:text-black"
          >
            {editUserId ? "ویرایش کردن" : "اضافه کردن"}
          </button>
        </div>
        <ContactsList
          users={users}
          showDeleteModal={showDeleteModal}
          startEditUser={startEditUser}
        />
      </div>
      {showModal && (
        <ConfirmationModal
          onCancel={() => setShowModal(false)}
          onConfirm={handleDeleteUser}
        />
      )}
    </>
  );
}

export default HomeComponent;

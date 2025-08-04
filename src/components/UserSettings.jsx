import React, { useState } from 'react';

const UserSettings = () => {
  // იუზერის მონაცემების მართვა
  const [userData, setUserData] = useState({
    name: 'Tornike Alxanixhvili',
    email: 'alxanixhvili1995@gmail.ru',
    phone: 'არ არის მითითებული'
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEditClick = (field) => {
    switch (field) {
      case 'name':
        setIsEditingName(true);
        break;
      case 'email':
        setIsEditingEmail(true);
        break;
      case 'phone':
        setIsEditingPhone(true);
        break;
      case 'password':
        setIsChangingPassword(true);
        break;
      default:
        break;
    }
  };

  const handleSaveClick = (field) => {
    console.log(`ცვლილებები შენახულია: ${field}`);
    switch (field) {
      case 'name':
        setIsEditingName(false);
        break;
      case 'email':
        setIsEditingEmail(false);
        break;
      case 'phone':
        setIsEditingPhone(false);
        break;
      default:
        break;
    }
  };

  const handleSavePassword = () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("პაროლები არ ემთხვევა!");
      return;
    }
    console.log("პაროლი წარმატებით შეიცვალა!");
    setIsChangingPassword(false);
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleCancelClick = (field) => {
    console.log(`ცვლილება გაუქმებულია: ${field}`);
    switch (field) {
      case 'name':
        setIsEditingName(false);
        break;
      case 'email':
        setIsEditingEmail(false);
        break;
      case 'phone':
        setIsEditingPhone(false);
        break;
      case 'password':
        setIsChangingPassword(false);
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">პარამეტრები</h2>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleEditClick('password')}
          className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300"
        >
          პაროლის შეცვლა
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300">პირადი მონაცემები</button>
      </div>

      {isChangingPassword && (
        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold">პაროლის შეცვლა</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">მიმდინარე პაროლი</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">ახალი პაროლი</label>
            <input
              type="password"
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">გაიმეორეთ ახალი პაროლი</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSavePassword}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              შენახვა
            </button>
            <button
              onClick={() => handleCancelClick('password')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              გაუქმება
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">ელ. ფოსტა</label>
            {isEditingEmail ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 text-gray-900">{userData.email}</p>
            )}
          </div>
          {isEditingEmail ? (
            <div className="flex gap-2">
              <button
                onClick={() => handleSaveClick('email')}
                className="text-sm font-medium text-green-600 hover:underline"
              >
                შენახვა
              </button>
              <button
                onClick={() => handleCancelClick('email')}
                className="text-sm font-medium text-red-600 hover:underline"
              >
                გაუქმება
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleEditClick('email')}
              className="text-sm font-medium text-green-600 hover:underline"
            >
              შეცვლა
            </button>
          )}
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">სახელი, გვარი</label>
            {isEditingName ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 text-gray-900">{userData.name}</p>
            )}
          </div>
          {isEditingName ? (
            <div className="flex gap-2">
              <button
                onClick={() => handleSaveClick('name')}
                className="text-sm font-medium text-green-600 hover:underline"
              >
                შენახვა
              </button>
              <button
                onClick={() => handleCancelClick('name')}
                className="text-sm font-medium text-red-600 hover:underline"
              >
                გაუქმება
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleEditClick('name')}
              className="text-sm font-medium text-green-600 hover:underline"
            >
              შეცვლა
            </button>
          )}
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">მობილურის ნომერი</label>
            {isEditingPhone ? (
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 text-gray-900">{userData.phone}</p>
            )}
          </div>
          {isEditingPhone ? (
            <div className="flex gap-2">
              <button
                onClick={() => handleSaveClick('phone')}
                className="text-sm font-medium text-green-600 hover:underline"
              >
                შენახვა
              </button>
              <button
                onClick={() => handleCancelClick('phone')}
                className="text-sm font-medium text-red-600 hover:underline"
              >
                გაუქმება
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleEditClick('phone')}
              className="text-sm font-medium text-green-600 hover:underline"
            >
              შეცვლა
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userId: "",
  name: "",
  email: "",
  phone: "",
  isLogin: false,
};

if (localStorage.getItem("user")) {
  const { email, userId, name, phone } = JSON.parse(
    localStorage.getItem("user")
  );

  initialState = {
    userId,
    email,
    phone,
    name,
    isLogin: true,
  };
}

const ProviderSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      const { userId, email, name, phone } = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.userId = userId;
      state.email = email;
      state.name = name;
      state.phone = phone;
      state.isLogin = true;
      state.isRegister = false;
    },
    setUserLogout: (state, action) => {
      localStorage.removeItem("user");
      state.userId = "";
      state.email = "";
      state.phone = "";
      state.name = "";
      state.isLogin = false;
      state.isRegister = false;
    },
  },
});

export const { setUserLogin, setUserLogout } = ProviderSlice.actions;

export default ProviderSlice.reducer;

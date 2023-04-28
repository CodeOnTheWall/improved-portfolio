"use client";

import { useEffect, useState } from "react";

// React.Dispatch is a generic type in React that represents the dispatcher
// function returned by useState and useReducer hooks. It allows you to
// update the state of a component.

// React.SetStateAction is also a generic type in React that represents
// the type of the argument passed to the dispatcher function returned by
// useState hook. It can be any value or a function that returns a new value.
// type of arg to be passed is a prevState action and then <S> is the type it is

type ThemeSwitcherReturn = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export default function useThemeSwitcher(): ThemeSwitcherReturn {
  // "prefer-color-scheme" is a media feature that allows you to query the
  //  user's preferred color scheme (light or dark) using the window.matchMedia()
  //  method in JavaScript.
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    // mediaQuery is checking the user's color scheme preference
    const mediaQuery = window.matchMedia(preferDarkQuery);
    // userPref is checking the user's preferred theme stored in local storage
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      //  check if user already has a set "theme"
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    // handleChange func is what causes the color change
    // handleChange is attached to the "change" event of mediaQuery object
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
}

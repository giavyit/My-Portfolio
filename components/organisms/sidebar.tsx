"use client";

import { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    console.log("Sidebar loaded");
  }, []);
  return <div>Sidebar</div>;
};

export default Sidebar;

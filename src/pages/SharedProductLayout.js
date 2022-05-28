import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <div>
      <h2>products</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default SharedProductLayout;

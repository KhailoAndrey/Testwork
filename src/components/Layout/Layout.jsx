import { Loader } from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { WrapperMain } from "./Layout.styled";


export const Layout = () => {
  return (
    <div>
      <WrapperMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperMain>
    </div>
  );
};
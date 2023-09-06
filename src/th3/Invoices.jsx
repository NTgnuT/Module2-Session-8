import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Invoices() {
  return (
    <div>
      Invoices
      <ul>
        <li>
          <NavLink to={"/Invoices/new"}>CreateNewInvoices</NavLink>
        </li>
        <li>
          <NavLink to={"/Invoices/1"}>Google</NavLink>
        </li>
        <li>
          <NavLink to={"/Invoices/2"}>Apple</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

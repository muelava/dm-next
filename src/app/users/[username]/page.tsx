import { headers } from "next/headers";
import React from "react";

function Users() {
  const headerList = headers();
  const hostname = headerList.get("host");

  return <div>Hostname {hostname}</div>;
}

export default Users;

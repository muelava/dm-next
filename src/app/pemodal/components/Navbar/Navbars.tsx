"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System", "Deployments", "My Settings", "Team Settings", "Help & Feedback", "Log Out"];

  return <nav>Halo</nav>;
}

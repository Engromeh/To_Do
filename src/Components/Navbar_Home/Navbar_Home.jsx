import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/image/Done_ring_round.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar_Home() {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About US", href: "#Aboutus" },
    { name: "Feature", href: "#feature" },
    { name: "Login", href: "/login" }, // هنتعامل معاها بشكل مختلف
  ];

  return (
    <nav
      className="bg-gray-900 pt-8 flex items-center justify-between"
      style={{ padding: "1rem" }}
    >
      <div className="flex items-center space-x-2" style={{ gap: "1rem" }}>
        <img src={logo} alt="Logo" className="h-10 w-10 " />
        <p className="text-xl text-white">TO DO</p>
      </div>

      <div className="flex items-center space-x-6 " style={{ gap: "1rem" }}>
        <div className="flex space-x-6" style={{ gap: "1rem" }}>
          {links.map((link) =>
            link.name === "Login" ? (
              <motion.button
                key={link.name}
                onClick={() => {
                  setActive(link.name);
                  navigate("/login"); // ← استخدام useNavigate للوج إن بس
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`px-3 py-2 rounded-md text-sm font-medium text-white ${
                  active === link.name ? "bg-blue-600" : "hover:bg-blue-500"
                }`}
              >
                {link.name}
              </motion.button>
            ) : (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`px-3 py-2 rounded-md text-sm font-medium text-white ${
                  active === link.name ? "bg-blue-600" : "hover:bg-blue-500"
                }`}
              >
                {link.name}
              </motion.a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

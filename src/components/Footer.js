import React from "react";
import { useTheme } from "../hooks/useTheme";
import '../index.css'

/* import './Footer.css' */

export default function Footer() {

  const { color } = useTheme();
  return (
    <footer style={{ background: color }}>
      Copyright &copy;2021 - Powered by
      <a
        href="https://alfiofedericodp.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="red"> Federico</span>
      </a>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import "@/app/globals.css";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileMenu({ open, setOpen }: Props) {
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <motion.div
      animate={open ? "visible" : "hidden"}
      variants={menuVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-3/4 h-full bg-racing-white z-50 shadow-lg p-6 md:hidden"
    >
      <button onClick={() => setOpen(false)} className="mb-8">
        <X size={28} />
      </button>
      <nav className="flex flex-col space-y-6 text-racing-dark text-lg font-medium">
        <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
        <Link href="/evenement" onClick={() => setOpen(false)}>Événement</Link>
        <Link href="/pilotes" onClick={() => setOpen(false)}>Pilotes</Link>
        <Link href="/medias" onClick={() => setOpen(false)}>Médias</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </motion.div>
  );
}

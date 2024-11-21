import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.div
    className="header"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-center mt-3">Person Management System</h1>
  </motion.div>
);

export default Header;

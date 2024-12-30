'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center font-playfair ">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }} // Slow down the animation
        className="w-full bg-gray-700 text-white py-4 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center px-4 ">
          <h1 className="text-4xl">Ejike Chiamaka</h1>
          <nav>
            <ul className="flex space-x-4">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#projects" className="text-xl px-4 py-5 rounded hover:bg-gray-800 transition duration-300">Projects</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#about" className="text-xl px-4 py-5 rounded hover:bg-gray-800 transition duration-300">About</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact" className="text-xl px-4 py-5 rounded hover:bg-gray-800 transition duration-300">Contact</a>
              </motion.li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <main className="container mx-auto flex-1 px-4 py-8">
        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          id="about" 
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-700">
            My name is Ejike Chiamaka Sonnia, and I am a 300-level Computer Science student at Covenant University. I am passionate about building websites using Next.js, where I focus on creating responsive, user-friendly applications. I am also deeply interested in data science and expanding my expertise in this field.
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          id="projects"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }} // Scales up on hover
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="/myamazingstore-logo.png"
                  alt="My Amazing Store"
                  fill
                  className="object-fill"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">My Amazing Store</h3>
                <p className="text-gray-600 mb-4">
                  A website designed to market an innovative app for business owners to track and manage sales efficiently.Built with Next.js and Tailwind CSS
                </p>
                <motion.a
                  href="https://myamazigstore2-26nm.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.2, delay: 0.}}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }} // Scales up on hover
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="/login-app.png"
                  alt="Login Page"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Login Page</h3>
                <p className="text-gray-600 mb-4">
                  A clean and minimal login page designed with user experience in mind.
                </p>
                <motion.a
                  href="https://login-app-beige.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          id="contact"
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact</h2>
          <p className="text-gray-700">Feel free to reach out to me via email or connect with me on LinkedIn!</p>
          <p className="text-gray-700">Email: <a href="mailto:cejike.2202794@stu.cu.edu.ng" className="text-blue-600 hover:underline">cejike.2202794@stu.cu.edu.ng</a></p>
          <p className="text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/chiamaka-ejike-624208253" className="text-blue-600 hover:underline">linkedin.com</a></p>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-full bg-gray-700 text-white py-4 text-center"
      >
        <p>&copy; {new Date().getFullYear()} Designed & Developed by Ejike Chiamaka. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

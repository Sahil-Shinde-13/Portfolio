import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(""); // success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] px-6 sm:px-10 md:px-20 py-20 
      flex flex-col items-center justify-center"
    >
      {/* ===== Heading ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 
        relative text-center animate-glow"
      >
        Contact Me
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 
        w-24 h-[3px] bg-linear-to-r from-purple-500 to-transparent rounded-full"></span>
      </motion.h2>

      {/* ===== Form Card ===== */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-xl bg-white/5 border border-white/10 
        rounded-2xl p-8 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.15)]
        flex flex-col gap-5"
      >
        {/* WEB3FORMS KEY */}
        <input type="hidden" name="access_key" value="1e8aaaa4-3690-498c-a686-9165ab74aeca" />

        {/* Name */}
        <div>
          <label className="text-white/90 text-sm">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
            className="w-full mt-1 p-3 bg-white/10 border border-white/20 
            rounded-lg text-white focus:border-purple-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-white/90 text-sm">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your Email"
            className="w-full mt-1 p-3 bg-white/10 border border-white/20 
            rounded-lg text-white focus:border-purple-500 outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-white/90 text-sm">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full mt-1 p-3 bg-white/10 border border-white/20 
            rounded-lg text-white focus:border-purple-500 outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 
          rounded-lg font-medium text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]
          transition-all text-lg"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Success / Error Message */}
        {status === "success" && (
          <p className="text-green-400 text-center mt-2">Message sent successfully! 🎉</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center mt-2">Something went wrong. Try again.</p>
        )}
      </motion.form>
    </section>
  );
}

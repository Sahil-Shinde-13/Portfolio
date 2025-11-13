import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-6xl font-mono text-white typing animate-type">
        &lt;Hello World/&gt;
      </h1>
      <p className="mt-4 text-white/70 animate-pulse font-mono">Loading...</p>
    </motion.div>
  );
}

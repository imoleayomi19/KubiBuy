'use client';

import { motion } from 'framer-motion';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100">
      {/* Hero Banner */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 leading-tight">
            Welcome to <span className="text-pink-500">kubiBuy</span>!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Where little adventures begin in the comfiest, cutest clothes & accessories.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Shop Our Collection
          </motion.button>
        </motion.div>

        <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/4 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-pink-300 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                kubiBuy started with a simple dream: to make shopping for kids' clothes joyful, easy, and safe for parents, while ensuring every little one feels happy and comfortable in what they wear.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by parents who know the struggle of finding clothes that are both adorable *and* durable, we carefully select every item for its quality, safety, and undeniable cuteness factor.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe playtime shouldn't be limited by itchy tags or boring designs. That's why kubiBuy offers vibrant colors [[6]], soft fabrics, and styles that let imaginations run wild.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/banner5.jpg"
                alt="Happy children playing in kubiBuy clothes"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-dashed border-pink-300 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose kubiBuy? */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          >
            Why Parents (& Kids!) Love kubiBuy
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First, Always",
                desc: "Every item meets strict international safety standards. Non-toxic dyes, secure buttons, and soft seams guaranteed.",
                icon: "🛡️",
              },
              {
                title: "Playful & Practical",
                desc: "Bright, vibrant colors [[6]] and fun patterns kids adore, made with durable fabrics that survive countless adventures.",
                icon: "🎨",
              },
              {
                title: "Easy for Parents",
                desc: "Simple navigation [[7]], fast shipping, and hassle-free returns. Because parenting is hard enough!",
                icon: "👩‍👧‍👦",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            To spark joy in every child and build trust with every parent, delivering delightful, safe, and stylish children's wear that makes everyday moments special.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            <img
              src="/images/kubi-character-smiling.png"
              alt="kubiBuy mascot smiling"
              className="w-32 h-32 mx-auto mb-4"
            />
            <p className="text-pink-600 font-semibold text-lg">Join the kubiBuy Family Today!</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
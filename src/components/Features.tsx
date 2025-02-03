import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Advanced AI Integration',
    description: 'Harness the power of artificial intelligence with our cutting-edge integration systems.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'State-of-the-art security protocols ensuring your data remains protected.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance delivering lightning-fast results when you need them.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Seamlessly scale your operations across the globe with our distributed infrastructure.'
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cutting-Edge Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover what makes our technology stand out from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
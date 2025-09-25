import { useEffect, useState } from "react";
import { Users, Globe2, ShoppingBasket, Calendar } from "lucide-react";
import { motion, animate } from "framer-motion";

type CounterProps = {
  end: number;
  label: string;
  Icon: React.ElementType;
  duration?: number;
  delay?: number;
};

const Counter = ({
  end,
  label,
  Icon,
  duration = 2,
  delay = 0,
}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, end, {
      duration,
      delay,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [end, duration, delay]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="p-4 bg-green-100 rounded-full mb-4"
        initial={{ rotate: -90, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <Icon className="w-8 h-8 text-green-600" />
      </motion.div>
      <motion.h2
        className="text-4xl font-bold text-green-700"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {count}+
      </motion.h2>
      <motion.p
        className="mt-2 text-gray-600 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.6 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default function CounterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Counter end={500} label="Happy Customers" Icon={Users} delay={0} />
        <Counter end={24} label="Countries Served" Icon={Globe2} delay={0.2} />
        <Counter
          end={120}
          label="Fresh Products"
          Icon={ShoppingBasket}
          delay={0.4}
        />
        <Counter
          end={15}
          label="Years of Experience"
          Icon={Calendar}
          delay={0.6}
        />
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import {
  Users,
  Globe2,
  ShoppingBasket,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  animate,
  useInView,
} from "framer-motion";

type CounterProps = {
  end: number;
  label: string;
  Icon: React.ElementType;
  description: string;
  duration?: number;
  delay?: number;
};

const Counter = ({
  end,
  label,
  Icon,
  description,
  duration = 2,
  delay = 0,
}: CounterProps) => {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  // Detect when the card enters/leaves viewport
  const isInView = useInView(ref, {
    amount: 0.3,
  });

  useEffect(() => {
    // When card leaves viewport
    // reset counter
    if (!isInView) {
      setCount(0);
      return;
    }

    let controls: ReturnType<typeof animate> | undefined;

    const timer = setTimeout(() => {
      controls = animate(0, end, {
        duration,
        ease: "easeOut",

        onUpdate(value) {
          setCount(Math.floor(value));
        },

        onComplete() {
          setCount(end);
        },
      });
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      controls?.stop();
    };
  }, [isInView, end, duration, delay]);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 50,
            }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-green-100/70
          bg-white/80
          backdrop-blur-xl
          p-8
          shadow-[0_10px_40px_rgba(22,163,74,0.08)]
          transition-all
          duration-300
          hover:border-green-200
          hover:shadow-[0_20px_60px_rgba(22,163,74,0.15)]
        "
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-32
            w-32
            rounded-full
            bg-green-200/30
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-green-300/40
          "
        />

        {/* Decorative circle */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-12
            -left-12
            h-28
            w-28
            rounded-full
            border
            border-green-100
            opacity-50
          "
        />

        <div className="relative z-10">

          {/* Icon */}
          <motion.div
            initial={{
              scale: 0,
              rotate: -20,
            }}
            animate={
              isInView
                ? {
                    scale: 1,
                    rotate: 0,
                  }
                : {
                    scale: 0,
                    rotate: -20,
                  }
            }
            transition={{
              duration: 0.6,
              delay: delay + 0.2,
              type: "spring",
              stiffness: 180,
            }}
            className="
              mb-7
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-green-50
              to-green-100
              text-green-600
              shadow-sm
            "
          >
            <Icon
              className="h-7 w-7"
              strokeWidth={1.8}
            />
          </motion.div>

          {/* Number */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    scale: 0.8,
                  }
            }
            transition={{
              duration: 0.5,
              delay: delay + 0.35,
            }}
            className="
              flex
              items-baseline
              gap-1
            "
          >
            <span
              className="
                text-5xl
                font-extrabold
                tracking-tight
                text-gray-900
                sm:text-6xl
              "
            >
              {count}+
            </span>
          </motion.div>

          {/* Label */}
          <motion.h3
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            transition={{
              duration: 0.5,
              delay: delay + 0.45,
            }}
            className="
              mt-3
              text-lg
              font-bold
              text-gray-900
            "
          >
            {label}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            transition={{
              duration: 0.5,
              delay: delay + 0.55,
            }}
            className="
              mt-2
              max-w-[240px]
              text-sm
              leading-6
              text-gray-500
            "
          >
            {description}
          </motion.p>

          {/* Bottom indicator */}
          <motion.div
            initial={{
              width: 0,
            }}
            animate={
              isInView
                ? {
                    width: "40%",
                  }
                : {
                    width: 0,
                  }
            }
            transition={{
              duration: 0.8,
              delay: delay + 0.6,
              ease: "easeOut",
            }}
            className="
              mt-7
              h-1
              rounded-full
              bg-green-500
            "
          />

          {/* Hover arrow */}
          <motion.div
            initial={{
              opacity: 0,
              x: -5,
            }}
            whileHover={{
              opacity: 1,
              x: 0,
            }}
            className="
              absolute
              bottom-7
              right-7
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-green-50
              text-green-600
              opacity-0
              transition-opacity
              group-hover:opacity-100
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function CounterSection() {
  const stats = [
    {
      end: 500,
      label: "Happy Customers",
      description:
        "Trusted buyers and partners across global markets.",
      Icon: Users,
    },
    {
      end: 24,
      label: "Countries Served",
      description:
        "Delivering Egyptian produce to international destinations.",
      Icon: Globe2,
    },
    {
      end: 120,
      label: "Fresh Products",
      description:
        "A diverse portfolio of premium fruits and vegetables.",
      Icon: ShoppingBasket,
    },
    {
      end: 15,
      label: "Years of Experience",
      description:
        "Deep experience in agriculture, sourcing and export.",
      Icon: Calendar,
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-green-50/30
        to-white
        py-24
      "
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-green-200/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-20
            bottom-0
            h-56
            w-56
            rounded-full
            bg-green-100/20
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mb-14
            max-w-2xl
            text-center
          "
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-green-200
              bg-green-50
              px-4
              py-2
              text-sm
              font-semibold
              text-green-700
            "
          >
            Our Impact
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Growing Together,{" "}

            <span className="text-green-600">
              Across the World
            </span>
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-gray-500
              sm:text-lg
            "
          >
            From Egypt’s fertile lands to global markets,
            we build long-term partnerships through quality,
            consistency and trust.
          </p>
        </motion.div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-7
          "
        >
          {stats.map((stat, index) => (
            <Counter
              key={stat.label}
              end={stat.end}
              label={stat.label}
              description={stat.description}
              Icon={stat.Icon}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
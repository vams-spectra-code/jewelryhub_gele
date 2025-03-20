"use client";

import {
  FaShoppingBag,
  FaUserTie,
  FaChalkboardTeacher,
  FaHandshake,
  FaGem,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShoppingBag size={40} className="text-primary-500" />,
    title: "Sales of Autogele",
    description:
      "Get beautifully crafted autogele ready to wear for any occasion.",
  },
  {
    icon: <FaUserTie size={40} className="text-primary-500" />,
    title: "Bridal Gele",
    description:
      "Exquisite gele styling for brides to make their big day unforgettable.",
  },
  {
    icon: <FaChalkboardTeacher size={40} className="text-primary-500" />,
    title: "Trainings",
    description: "Learn the art of gele tying from professional stylists.",
  },
  {
    icon: <FaHandshake size={40} className="text-primary-500" />,
    title: "Make-up Artist Partnerships",
    description:
      "Partnering with top make-up artists for a complete beauty package.",
  },
  {
    icon: <FaGem size={40} className="text-primary-500" />,
    title: "Accessories",
    description:
      "Enhance your beauty with our elegant collection of bracelets, rings, necklaces, and beads.",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-32">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Our Services
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        We offer a variety of premium services tailored to enhance your beauty
        and elegance.
      </p>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Whether you're looking for a stylish autogele, a stunning bridal gele,
        or professional training, we have got you covered.
      </p>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Our partnerships with top make-up artists ensure a complete beauty
        package, while our exquisite accessories add the perfect finishing touch
        to your look.
      </p>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Explore our services and let us help you shine at every occasion.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;

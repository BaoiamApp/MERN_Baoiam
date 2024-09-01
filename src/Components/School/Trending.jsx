import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import tutors from "./tutors.json"; // Importing JSON data

const TutorCard = ({ image, title, tutorName, rating, classes, price }) => (
  <div className="bg-white shadow-md rounded-lg p-4 max-w-sm hover:scale-105 hover:duration-500 hover:shadow-lg hover:border hover:border-zinc-200">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="mt-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-center mt-2">
        <span className="text-lg font-semibold">{tutorName}</span>
        <FaCheckCircle className="text-blue-500 ml-2" />
      </div>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
        ))}
      </div>
      <div className="mt-2 text-gray-500">Classes: {classes}</div>
      <div className="mt-2 text-green-600 font-bold">₹{price}</div>
    </div>
  </div>
);

const Trending = () => {
  return (
    <div className="container mx-auto pt-10 lg:pt-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold inline-block relative">
          Trending Courses
          <span className="block h-1 w-20 bg-red-500 rounded-full mt-2"></span>
        </h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tutors.map((tutor, index) => (
          <TutorCard 
            key={index}
            image={tutor.image}
            title={tutor.title}
            tutorName={tutor.tutorName}
            rating={tutor.rating}
            classes={tutor.classes}
            price={tutor.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
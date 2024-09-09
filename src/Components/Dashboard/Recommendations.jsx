import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function Recommendations() {
  const navigate = useNavigate();

  const recommendedCourses = [
    {
      id: 1,
      name: "Advanced React Patterns",
      description:
        "Master React patterns and advanced concepts to build scalable applications.",
        price:'$10',
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 2,
      name: "Fullstack Web Development",
      description:
        "Become a fullstack developer by learning both frontend and backend technologies.",
        price:'$10',
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 3,
      name: "Advanced React Patterns",
      description:
        "Master React patterns and advanced concepts to build scalable applications.",
        price:'$10',
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 4,
      name: "Fullstack Web Development",
      description:
        "Become a fullstack developer by learning both frontend and backend technologies.",
        price:'$10',
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 5,
      name: "Advanced React Patterns",
      description:
        "Master React patterns and advanced concepts to build scalable applications.",
        price:'$10',
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 6,
      name: "Fullstack Web Development",
      description:
        "Become a fullstack developer by learning both frontend and backend technologies.",
        price:'$10',
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    }
  ];

  return (
    <div className="bg-indigo-600 h-screen overflow-scroll relative dark:border dark:border-white flex flex-col items-center  text-white px-4 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center w-full py-4 mt-2 sticky top-0 z-50 bg-indigo-600  shadow-2xl ">Recommended Courses</h2>

      <div className="flex  flex-col gap-6">
        {recommendedCourses.map((course) => (
        <div
        key={course.id}
        className="w-full flex flex-col xl:flex-row hover:shadow-md hover:shadow-black dark:border dark:border-white items-center gap-4 shadow-lg rounded-lg p-4 md:p-6"
      >
        {/* Course Image */}
        <div className="w-full xl:w-fit">
          <img
            src={course.image}
            alt={course.name}
            className="object-cover xl:w-32 xl:h-32 rounded-lg"
          />
        </div>
        {/* Course Info */}
        <div className="flex flex-col flex-1 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">{course.name}</h3>
          <p className="text-sm md:text-base mt-2">{course.description}</p>
      
          <div className="flex flex-col md:flex-row justify-between items-center mt-2">
            {/* Price Section */}
            <p className="text-sm md:text-base font-bold text-white mb-4 md:mb-0">
              {course.price}
            </p>
      
            {/* Enroll Button */}
            <button
              onClick={() => navigate("/courses/college")}
              className="relative xl:w-auto inline-flex items-center justify-center bg-black py-2 px-4 overflow-hidden text-white font-semibold rounded-full group"
            >

              <span className="relative">Enroll Now</span>
            </button>
          </div>
        </div>
      </div>
      
        ))}
      </div>
    </div>
  );
}

export default Recommendations;

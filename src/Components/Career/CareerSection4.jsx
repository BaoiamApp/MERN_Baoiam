import icon1 from "../../assets/ITIE&Entre/graduated (3).png";
import icon2 from "../../assets/ITIE&Entre/knowledge.png";
import icon3 from "../../assets/ITIE&Entre/education.png";
import icon4 from "../../assets/ITIE&Entre/deep-learning.png";
import icon5 from "../../assets/ITIE&Entre/academic.png";
import icon7 from "../../assets/ITIE&Entre/online-lesson.png";
import illu from "../../assets/Images/undraw_Empty_re_opql.png";

export const CareerSection4 = () => {
  const jobs = [
    {
      title: "Senior UI Designer",
      company: "Microsoft",
      team: "Visual Design-Team Landing",
      location: "Copenhagen (Full-time)",
      logo: icon1,
    },
    {
      title: "Product Designer",
      company: "Behance",
      team: "UI Design-Web Apps Team",
      location: "Copenhagen (Full-time)",
      logo: icon2,
    },
    {
      title: "Product Manager",
      company: "Daily Mail",
      team: "Product Manager-Mobile Team",
      location: "Copenhagen (Full-time)",
      logo: icon4,
    },
    {
      title: "Product Designer",
      company: "Etsy",
      team: "UI Design-Web Apps Team",
      location: "Copenhagen (Full-time)",
      logo: icon3,
    },
    {
      title: "Product Manager",
      company: "Apple",
      team: "Product Manager-Mobile Team",
      location: "Copenhagen (Full-time)",
      logo: icon5,
    },
    {
      title: "Product Manager",
      company: "Patch",
      team: "Product Manager-Mobile Team",
      location: "Copenhagen (Full-time)",
      logo: icon7,
    },
  ];
  return (
    <>
      <div className="dark:bg-black min-h-screen bg-amber-50 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl lg:text-4xl md:text-4xl sm:text-3xl font-bold mb-8 text-gray-900">
          {" "}
          Current Job Openings
        </h1>
        <p className="text-gray-600 mb-8 text-xs lg:tex-bas md:text-base sm:text-base">
          Hand-picked jobs featured depending on popularity and benefits
        </p>
        <div className="flex flex-col items-center justify-center py-10">
          <div className="mb-6">
            <img
              src={illu}
              alt="Job Vacancy Illustration"
              className="w-72 h-72 object-cover" // Adjust width and height here
            />
          </div>
          <h2 className="lg:text-lg md:text-lg sm:text-sm text-sm font-bold text-gray-700">
            Currently No Open Positions, But Stay Tuned for Future
            Opportunities!
          </h2>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 flex flex-col dark:bg-zinc-900 dark:border-gray-200 rounded-lg border border-gray-900 hover:shadow-xl transition-shadow duration-300 ease-in-out "
            >
              <h2 className="text-xl font-semibold dark:text-zinc-500 text-gray-800 mb-2">
                {job.title}
              </h2>
              <div className="flex flex-row text-xs space-x-5">
                <p className="text-gray-700 mb-1 ">{job.team}</p>
                <p className="text-gray-700 mb-4">{job.location}</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex  items-center">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="sm:w-8 w-4 p-1"
                  />
                  <p className="text-gray-700 mx-2">{job.company}</p>
                </div>
                <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 text-sm lg:text-base md:text-base sm:text-base">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black dark:bg-blue-700 dark:hover:bg-white dark:hover:text-black text-white font-semibold mt-10 py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
          Find More Jobs{" ->"}
        </button> */}
      </div>
    </>
  );
};

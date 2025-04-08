import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: "JS Basics",
    description: "Latihan dasar JavaScript: penggunaan variabel, function, dan array.",
    link: "https://github.com/fikriandrrhm19/learn-js-by-doing/tree/main/assignments/Task%201",
    image: "/assets/image_1.png"
  },
  {
    name: "JS & Git Practice",
    description: "Latihan penggunaan Git dan pembuatan skrip JavaScript sederhana.",
    link: "https://github.com/fikriandrrhm19/learn-js-ts-by-doing/tree/main/assignments/task_2",
    image: "/assets/image_2.png"
  },
  {
    name: "UI & Interactivity",
    description: "Menyempurnakan tampilan dan menambahkan interaksi pada website statis.",
    link: "https://github.com/fikriandrrhm19/learn-js-ts-by-doing/tree/main/assignments/task_3",
    image: "/assets/image_5.png"
  },
  {
    name: "C++ Paradigms",
    description: "Perbandingan paradigma Imperative dan OOP melalui lima program sederhana.",
    link: "#",
    image: "/assets/image_3.png"
  },
  {
    name: "AntreMed (C++)",
    description: "Aplikasi CLI sistem antrean medis berbasis OOP & multithreading.",
    link: "#",
    image: "/assets/image_4.jpeg"
  },
  {
    name: "FinLog (C++)",
    description: "Aplikasi keuangan dengan linked list dinamis untuk mencatat transaksi.",
    link: "#"
  }  
];

const RecentWork = () => {
  return (
    <section id="recent-work" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900">Recent Work</h2>
          </div>
          <div className="divide-y divide-gray-300">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between py-4 group"
              >
                <div>
                  <h3 className="text-3xl font-medium text-gray-800 group-hover:underline">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-lg mt-1">{project.description}</p>
                </div>
                <span className="border border-gray-500 rounded-full p-2 transition-all mt-1 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transform transition-transform duration-300"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

     <div className="relative pt-20 pb-24 overflow-hidden w-full lg:w-screen lg:ml-[-50px]">
     <div className="flex flex-col gap-8 min-w-full px-6 lg:px-0">

          <div className="flex gap-6 w-[max-content] animate-scroll px-6">
            {[...Array(2)].flatMap(() =>
              projects
                .filter((p) => p.image) 
                .map((project, idx) => {
                  const isContain = project.image?.includes("ui-interactivity");
                
                  return (
                    <div
                      key={`row1-${idx}-${Math.random()}`}
                      className="p-12 rounded bg-[#C7D0D9] transition duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="w-72 md:w-80 lg:w-96 aspect-video rounded overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className={`w-full h-full transition-transform duration-300 ${
                            isContain ? "object-contain" : "object-cover"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
            )}
          </div>

          <div className="flex gap-6 w-max animate-scroll-reverse">
            {[...Array(2)].flatMap(() =>
              projects
                .filter((p) => p.image)
                .map((project, idx) => {
                  const isContain = project.image?.includes("ui-interactivity");
                
                  return (
                    <div
                      key={`row1-${idx}-${Math.random()}`}
                      className="p-12 rounded bg-[#C7D0D9] transition duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="w-72 md:w-80 lg:w-96 aspect-video rounded overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className={`w-full h-full transition-transform duration-300 ${
                            isContain ? "object-contain" : "object-cover"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

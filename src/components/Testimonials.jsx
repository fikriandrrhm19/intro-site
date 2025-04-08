const reflections = [
  {
    message: "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.",
    name: "Steve McConnell",
    role: "Author and Software Engineer",
    image: "/assets/steve.png", 
  },
  {
    message: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    name: "Patrick McKenzie",
    role: "Writer and Software Business",
    image: "/assets/patrick.jpeg",
  },
  {
    message: "Setiap bug adalah kesempatan untuk belajar. Dan setiap ‘nah!’ adalah hadiah dari proses itu sendiri.",
    name: "Fikri Andra Irham",
    role: "Web Development Enthusiast",
    image: "/assets/fikri.jpg",
  },
];


const Reflections = () => {
  return (
    <section id="reflections" className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">Thoughts</h2>
        </div>

        <div className="md:col-span-2 grid gap-12">
          {reflections.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">“{item.message}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-lg text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reflections;

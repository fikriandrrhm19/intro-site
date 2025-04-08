const About = () => {
  return (
    <section id="about" className="bg-[#f5f8fa] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">About</h2>
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed text-xl">
          Halo! Saya Fikri Andra Irham, Web Developer yang juga senang mengeksplorasi dasar-dasar pemrograman.  
          <br /><br />
          Saya fokus di front-end development, serta tertarik mengeksplorasi UI/UX guna menciptakan interface yang menarik & nyaman digunakan. Di sisi lain, saya juga aktif belajar konsep pemrograman dasar menggunakan JavaScript, serta membangun beberapa aplikasi CLI berbasis C++ dengan pendekatan OOP.  
          <br /><br />
          Saat ini, saya sedang mengerjakan berbagai proyek pribadi, sambil rutin berbagi insight lewat blog pribadi saya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

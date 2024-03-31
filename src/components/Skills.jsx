import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div name="skills" id="skills" className="w-full h-screen bg-customBgColor text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map(({ id, tech, img }) => (
            <div
              key={id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={img} alt={`${tech} icon`} />
              <p className="my-4 uppercase">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
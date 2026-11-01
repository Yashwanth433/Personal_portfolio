function ProjectCard({ project }) {

  return (
    <article className="relative flex h-full min-w-0 w-full flex-col rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="relative px-3 py-2 md:px-2 md:py-2 lg:px-4">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <h2 className="ml-3 break-words text-center text-sm text-[#16f2b3] md:text-xs lg:text-base">
          {project.name}
        </h2>
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t-2 border-indigo-900 px-3 py-3 md:px-2 md:py-2 lg:gap-3 lg:px-4 lg:py-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 lg:text-xs">Technologies</p>
          <ul className="mt-1 flex flex-wrap gap-1">
            {project.tools.map((tool) => (
              <li key={tool} className="max-w-full break-words rounded-full border border-[#28452d] bg-[#080e09] px-1.5 py-0.5 text-[10px] leading-tight text-amber-300 lg:px-2 lg:text-xs">
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <p className="break-words text-xs leading-snug text-cyan-100 lg:text-sm lg:leading-relaxed">
          <span className="font-semibold text-white">Role: </span>
          {project.role}
        </p>
        <p className="break-words text-xs leading-snug text-gray-300 lg:text-sm lg:leading-relaxed">
          {project.description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
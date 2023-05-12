export default function SkillBubble({ skills }: { skills: string[] }) {
  return (
    <ul className='mt-3 flex flex-wrap'>
      {skills.length > 0 &&
        skills.map((skill) => (
          <li
            key={skill}
            className='flex items-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'
          >
            {skill}
          </li>
        ))}
    </ul>
  );
}

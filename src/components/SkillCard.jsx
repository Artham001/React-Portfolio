// src/components/SkillCard.jsx

// Notice we are receiving "props" as an argument.
// We use { name } to directly pull the "name" property out of the props object.
function SkillCard({ name }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center transition-transform hover:scale-105 hover:bg-gray-700">
      <span className="font-medium text-white">{name}</span>
    </div>
  );
}

export default SkillCard;
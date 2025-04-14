const SkillsBalanceBar = ({ LeftSkill, RightSkill, value }) => {
    const progress = value; // value from 0 to 100
  
    return (
      <div className="w-full max-w-lg mx-auto">
        <div className="flex justify-between text-sm mb-1 text-white font-semibold">
          <span>{LeftSkill}</span>
          <span>{RightSkill}</span>
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full relative">
          <div
            className="h-4 bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute left-1/2 top-0 h-4 w-0.5 bg-white opacity-70" />
        </div>
      </div>
    );
  };
  
  export default SkillsBalanceBar;
  
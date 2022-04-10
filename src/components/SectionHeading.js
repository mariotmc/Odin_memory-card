const SectionHeading = ({ title }) => {
  return (
    <div className="relative mb-10">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 bg-customOffWhite text-3xl font-bold text-customGray">{title}</span>
      </div>
    </div>
  );
};

export default SectionHeading;

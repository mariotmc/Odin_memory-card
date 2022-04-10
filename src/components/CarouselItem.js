const NewCarouselItem = ({ img, title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center max-h-[425px] max-w-[600px] mx-2 rounded overflow-hidden border-2 border-customGray self-center sm:max-h-[500px] md:max-h-[550px]">
      <img src={img} className="flex-1 object-cover object-center w-full min-h-[200px] mb-4" alt="" />
      <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
      <h3 className="px-2 pb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sit commodi nihil culpa! Dolorem iusto
        sequi, minus vero a officiis quod natus. Possimus facilis ad quibusdam in, error aliquam laudantium
        qui tempora minima, fugit esse sapiente. Aliquam quibusdam quas odio itaque hic porro labore
        voluptate, excepturi inventore, quisquam deserunt incidunt.
      </h3>
    </div>
  );
};

export default NewCarouselItem;

function PhotoGallery() {
  return (
    <div className="relative flex flex-col">
      <div className="w-full px-6 mt-8">
        <h3 className="text-2xl font-bold">Hi, Alen Thomas</h3>
        <p className="text-lg mb-4">Here's your photos</p>

        <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square md:w-[150px] overflow-hidden rounded-md"
            >
              <img
                src={`/sample.png?height=100&width=100&text=${i + 1}`}
                alt={`Wedding photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;

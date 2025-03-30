function WeddingHeader({ eventDetails }) {
  const formattedDate = new Date(eventDetails.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{eventDetails.eventname}</h2>
        <p className="text-xl font-light">{eventDetails.description}</p>
        <p className="text-sm font-light">{formattedDate}</p>
      </div>
    </>
  );
}

export default WeddingHeader;

import { events, colors } from "./timelineData";

const Timeline = () => {
  return (
    <section className="text-white mt-32 text-center mx-auto p-5" id="timeline">
      <h1
        className="bg-clip-text text-transparent
       bg-gradient-to-r from-white to-slate-500 text-5xl font-bold my-10
       "
      >
        Timeline
      </h1>
      <div className="flex flex-col p-20">
        {events.map((event, i) => (
          <div className="text-left my-3" key={i}>
            <h1 className={`text-4xl text-${colors[i]}-500`}>{event.name}</h1>
            <p className="text-2xl w-1/2 p-5">{event.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

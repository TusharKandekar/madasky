import UpcomingEvents from "@/components/UpcomingEvents";

import { Event } from "@/common/types";
import BaseUrl from "@/components/BaseUrl";
import { after } from "node:test";

function EventComponent({ eventData }: { eventData: Event[] }) {
  const events = eventData;

  const url = "";

  console.log("Eventsss: ", events);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="p-6 flex flex-col w-full py-[15vh]  items-center justify-center max-md:py-[5vh] ">
        <h2 className="width-full font-bold text-6xl text-center max-md:text-4xl max-md:py-[3vh]">
          Upcoming Events
        </h2>
        <p className="text-center text-xl text-gray-500 py-4 w-[40%] max-md:w-[90%] max-md:text-justify">
          Join us for our upcoming events and be part of the innovation and
          excitement. Stay tuned for dates and details!.
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="w-full grid py-[10vh] grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
            {/* <UpcomingEvents
                        image="/assets/images/4.jpg"
                        title="Harnessing the Power of Social Media for Business Growth"
                        description="Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age..."
                        date="June 22, 2023"
                        comments="3"
                        readMoreLink="#"
                    /> */}

            {events.map((event: Event, index) => 
            
              (
                <UpcomingEvents
                  key={index}
                  // image={event.event_image || ''}
                  image={`${BaseUrl().baseurl}/${event.event_image}` || ""}
                  title={event.event_title || ""}
                  description={event.event_desc || ""}
                  date={event.event_date || ""}
                  comments={3}
                  // readMoreLink={`/event-details/${event.event_title.replace(/[.:&%;,']/g, '').replace(/\s+/g, '-')}` || '/event-details/0'}
                  // readMoreLink={`/event-details/${event.event_title.replace(/ /g, '-').toLowerCase()}`}

                  // readMoreLink={
                  //     event.event_title
                  //       ? `/event-details/${event.event_title.replace(/[.:&%;,']/g, '').replace(/\s+/g, '-').toLowerCase()}`
                  //       : '/event-details/0'
                  //   }

                  // readMoreLink={`/event-details/${
                  //   event.event_title
                  //     ?.replace(/[.:&%;,']/g, "")
                  //     .replace(/\s+/g, "-") || "0"
                  // }`}

                  // readMoreLink={`/event-details/${event.event_title}`}
                  readMoreLink={event.event_title || ""}

                  popUp={event.event_pop_up}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventComponent;

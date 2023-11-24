//Components and other pages
import RootPage from "./Pages/RootPage";
import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import EventDetailPage from "./Pages/EventDetailsPage";
import EventEditPage from "./Pages/EventEditPage";
import NewsletterPage from "./Pages/NewsletterPage";
import NewEventPage from "./Pages/NewEventPage";
import AllEventsPage from "./Pages/AllEventsPage";

//React-Router Essentioals and packages
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Loader and Action functions
import { eventsLoader } from "./Pages/EventsPage";
import { eventDetailLoader } from "./Pages/EventDetailsPage";
import { eventFormAction } from "./components/Structure/Forms/EventForm";
import { deleteAction } from "./components/Structure/EventStructures/EventDetailContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/events",
        element: <EventsPage />,
        id: "all-events",
        loader: eventsLoader,
        children: [
          {
            index: true,
            element: <AllEventsPage />
          },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: "event-details",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction
              },
              {
                path: "edit",
                element: <EventEditPage />,
                action: eventFormAction
              }
            ]
          },
          {
            path: "/events/new-event",
            element: <NewEventPage />,
            action: eventFormAction
          }
        ]
      },
      { path: "/newsletter", element: <NewsletterPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

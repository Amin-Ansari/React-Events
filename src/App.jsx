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
        children: [
          {
            index: true,
            element: <AllEventsPage />
          },
          {
            path: ":eventId",
            children: [
              {
                index: true,
                element: <EventDetailPage />
              },
              {
                path: ":eventId/edit",
                element: <EventEditPage />
              }
            ]
          },
          {
            path: "/events/new-event",
            element: <NewEventPage />
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

import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm";
import SearchForm from "../components/SearchForm/SearchForm";
export const routes = [
  {
    id: "subscription_form",
    name: "Subscription Form",
    url: "/subscription_form",
    component: <SubscriptionForm />,
  },
  {
    id: "search_form",
    name: "Search Form",
    url: "/search_form",
    component: <SearchForm />,
  },
];

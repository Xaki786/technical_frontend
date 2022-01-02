import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm";
import SearchForm from "../components/SearchForm/SearchForm";
import { FiltersProvier } from "../context/FiltersContext/FiltersProvider";
import SeedDb from "../components/SeedDb/SeedDb";
export const routes = [
  {
    id: "subscription_form",
    name: "Subscription",
    url: "/subscription_form",
    component: <SubscriptionForm />,
  },
  {
    id: "search_form",
    name: "Search",
    url: "/search_form",
    component: (
      <FiltersProvier>
        <SearchForm />
      </FiltersProvier>
    ),
  },
  {
    id: "seed_db",
    name: "Seed",
    url: "/seed_db",
    component: <SeedDb />,
  },
];

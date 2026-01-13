interface Route {
  name: string;
  route: string;
}

export const routes: Record<string, Route> = {
  home: {
    name: "Home",
    route: "/",
  },
  selectedWork: {
    name: "Selected Work",
    route: "/selected-work",
  },
  project: {
    name: "Project",
    route: "/project/:id",
  },
  experiments: {
    name: "Experiments",
    route: "/experiments",
  },
  experiment: {
    name: "Project",
    route: "/experiment/:id",
  },
};

export const menuRoutes = [
  routes.home,
  routes.selectedWork,
  routes.experiments,
];
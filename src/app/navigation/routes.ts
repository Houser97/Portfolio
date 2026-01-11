interface Route {
  name: string;
  route: string;
}

export const routes: Record<string, Route> = {
  home: {
    name: "Home",
    route: "/Portfolio/",
  },
  selectedWork: {
    name: "Selected Work",
    route: "/Portfolio/selected-work",
  },
  project: {
    name: "Project",
    route: "/Portfolio/project/:id",
  },
  experiments: {
    name: "Experiments",
    route: "/Portfolio/experiments",
  },
  experiment: {
    name: "Project",
    route: "/Portfolio/experiment/:id",
  },
};

export const menuRoutes = [
  routes.home,
  routes.selectedWork,
  routes.experiments,
];
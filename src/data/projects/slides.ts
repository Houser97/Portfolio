import { routes } from "../../app/navigation/routes";
import { experiments } from "./experiments";
import { projects } from "./projects";
import { SlideData } from "./types";

export const slides: SlideData[] = projects.map((project) => ({
  id: project.id,
  slideImg: project.images[0],
  slideTitle: project.title,
  slideDescription: project.subtitle || project.background[0],
  slideTags: project.tags,
  slideUrl: routes.project.route.replace(":id", project.id),
}));

export const experimentSlides: SlideData[] = experiments.map((project) => ({
  id: project.id,
  slideImg: project.images[0],
  slideTitle: project.title,
  slideDescription: project.background[0],
  slideTags: project.tags,
  slideUrl: routes.experiment.route.replace(":id", project.id),
}));
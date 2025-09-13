// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    publishDate: z.coerce.date(),
    status: z
      .enum(["completed", "in-progress", "concept"])
      .default("completed"),
    order: z.number(),
  }),
});

export const collections = {
  projects,
};

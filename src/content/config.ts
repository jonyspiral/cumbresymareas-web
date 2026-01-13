import { defineCollection, z } from 'astro:content';

const propiedades = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitulo: z.string().optional(),
    description: z.string().optional(),
    capacidad: z.string().optional(),
    banos: z.string().optional(),
    ubicacion: z.string().optional(),
    distancia: z.string().optional(),
    superficie: z.string().optional(),
    whatsapp: z.string(),
    airbnb: z.string(),
    videoUrl: z.string().optional(),
    specs_dinamicas: z.array(z.object({
      icon: z.string(),
      label: z.string(),
      cat: z.string()
    })).optional(),
  }),
});

export const collections = { propiedades };

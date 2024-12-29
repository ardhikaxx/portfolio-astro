import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'yanuar-ardhika.vercel.app',
    description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
    demoLink: 'https://yanuar-ardhika.vercel.app',
    tags: ['Portfolio']
  },
  {
    name: 'Eat Well Analyzer Website',
    description: 'I developed the Eat Well Analyzer website to assist users in analyzing food nutrients. This project involved tackling complex challenges related to data processing and algorithm development. By leveraging teamwork and dedication, the website successfully delivers a user-friendly interface for understanding nutritional information.',
    demoLink: 'https://eat-well-analyzer.vercel.app/',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['React', 'Tailwind CSS']
  },
  {
    name: 'Website-Based Posyandu Health Data Manager',
    description: 'This project involved creating a web application for managing toddler health data at posyandus (community health posts). Designed for use by cadres and midwives, the platform streamlines data management for child growth, immunizations, and health records. This final project for the 2024 even semester was part of a team effort that secured funding through the Student Creativity Program (PKM).',
    demoLink: 'https://youtu.be/ouWihtoRrXQ?si=6uUbZM2XDO0kMdDC',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Laravel', 'bootstrap']
  }
]

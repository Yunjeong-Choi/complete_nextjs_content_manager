export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  priority: number;
  timeToFinish: number;
  active: boolean;
  createdAt: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "resource 1",
    description: "resource 1",
    link: "",
    image: "",
    priority: 3,
    timeToFinish: 100,
    active: true,
    createdAt: "22.12.25",
  },
  {
    id: "2",
    title: "resource 2",
    description: "resource 2",
    link: "",
    image: "",
    priority: 2,
    timeToFinish: 50,
    active: false,
    createdAt: "22.12.25",
  },
  {
    id: "3",
    title: "resource 3",
    description: "resource 3",
    link: "",
    image: "",
    priority: 1,
    timeToFinish: 25,
    active: false,
    createdAt: "22.12.25",
  },
];

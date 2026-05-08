import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  name: "GreemDev",
  role: "Hobbyist Programmer",
  avatar: "/images/avatar.png",
  email: "greemdev@ryujinx.app"
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GreemDev",
    essential: true,
  },
  {
    name: "BlueSky",
    icon: "bluesky",
    link: "https://bsky.app/profile/greemdev.net",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: person.name,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hey there, I'm GreemDev</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">GRUKE</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "https://nuke.greemdev.net/",
  },
  subline: (
    <>
    I'm a self taught hobbyist programmer with 8 years of experience. I build open source tools and software using mainly C#.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Avalonia",
        description: (
          <>Able to create pretty UIs with Avalonia.</>
        ),
        tags: [
          {
            name: "C#",
            icon: "dotnet",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/ryu/ui_example.png",
            alt: "Some of my work",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/avalonia.png",
            alt: "Avalonia",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "C#",
        description: (
          <>Building open-source tools primarily in C#.</>
        ),
        tags: [
          {
            name: "C#",
            icon: "dotnet",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects from ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };

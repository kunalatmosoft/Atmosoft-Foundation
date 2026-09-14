"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Search,
  BookOpen,
  Code2,
  FileText,
  Video,
  ExternalLink,
  ArrowRight,
  Filter,
} from "lucide-react";

type ResourceType = "Article" | "Tutorial" | "Documentation" | "Video";

type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  type: ResourceType;
  href: string;
  icon: LucideIcon;
};

const RESOURCES: Resource[] = [
  {
    id: "nextjs-getting-started",
    title: "Getting Started with Next.js",
    description:
      "Learn the fundamentals of Next.js and build your first modern web application.",
    category: "Next.js",
    type: "Tutorial",
    href: "https://nextjs.org/docs",
    icon: Code2,
  },
  {
    id: "react-docs",
    title: "React Documentation",
    description:
      "Official React documentation covering components, hooks, state, and modern React patterns.",
    category: "React",
    type: "Documentation",
    href: "https://react.dev/",
    icon: BookOpen,
  },
  {
    id: "typescript-handbook",
    title: "TypeScript Handbook",
    description:
      "A complete guide to TypeScript types, interfaces, generics, functions, and advanced concepts.",
    category: "TypeScript",
    type: "Documentation",
    href: "https://www.typescriptlang.org/docs/",
    icon: FileText,
  },
  {
    id: "tailwind-guide",
    title: "Tailwind CSS Guide",
    description:
      "Learn how to build beautiful responsive interfaces using utility-first CSS.",
    category: "CSS",
    type: "Article",
    href: "https://tailwindcss.com/docs",
    icon: BookOpen,
  },
  {
    id: "fullstack-apps",
    title: "Building Full-Stack Applications",
    description:
      "Understand how frontend, backend, databases, authentication, and APIs work together.",
    category: "Full Stack",
    type: "Tutorial",
    href: "https://developer.mozilla.org/",
    icon: Code2,
  },
  {
    id: "web-dev-fundamentals",
    title: "Web Development Fundamentals",
    description:
      "A practical introduction to HTML, CSS, JavaScript, HTTP, browsers, and web architecture.",
    category: "Web Development",
    type: "Article",
    href: "https://developer.mozilla.org/en-US/docs/Learn",
    icon: FileText,
  },
  {
    id: "nextjs-app-router",
    title: "Next.js App Router",
    description:
      "Understand layouts, pages, server components, client components, loading states, and routing.",
    category: "Next.js",
    type: "Video",
    href: "https://nextjs.org/docs/app",
    icon: Video,
  },
  {
    id: "rest-api-design",
    title: "REST API Design",
    description:
      "Learn how to design scalable REST APIs with proper routes, status codes, validation, and errors.",
    category: "Backend",
    type: "Article",
    href: "https://restfulapi.net/",
    icon: FileText,
  },
];

const CATEGORIES: readonly string[] = [
  "All",
  "Next.js",
  "React",
  "TypeScript",
  "CSS",
  "Full Stack",
  "Backend",
  "Web Development",
];

const TYPE_STYLES: Record<ResourceType, string> = {
  Article:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Tutorial:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  Documentation:
    "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Video:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
};

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return RESOURCES.filter((resource) => {
      const matchesCategory =
        activeCategory === "All" || resource.category === activeCategory;

      const matchesSearch =
        query.length === 0 ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query) ||
        resource.type.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const handleClearFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent" />

        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <BookOpen size={28} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Resources
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore tutorials, documentation, articles, and guides to improve
            your development skills and build better products.
          </p>

          {/* Search Input */}
          <div className="relative mx-auto mt-8 max-w-2xl">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              aria-label="Search resources"
              className="h-14 w-full rounded-2xl border bg-background/80 pl-12 pr-5 text-sm outline-none backdrop-blur transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Category Filters */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Filter size={16} />
            <span>Categories</span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "bg-background hover:border-blue-500 hover:text-blue-500"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Explore Resources</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {filteredResources.length}{" "}
            {filteredResources.length === 1 ? "resource" : "resources"} found
          </p>
        </div>

        {/* Grid or Empty State */}
        {filteredResources.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => {
              const Icon = resource.icon;
              const isExternal = resource.href.startsWith("http");

              return (
                <article
                  key={resource.id}
                  className="group flex flex-col rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                      <Icon
                        size={21}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        TYPE_STYLES[resource.type]
                      }`}
                    >
                      {resource.type}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {resource.category}
                    </div>

                    <h3 className="text-lg font-semibold transition group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {resource.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>

                  <a
                    href={resource.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400"
                  >
                    Explore resource
                    {isExternal ? (
                      <ExternalLink size={15} />
                    ) : (
                      <ArrowRight size={15} />
                    )}
                  </a>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed py-20 text-center">
            <Search size={36} className="mx-auto text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No resources found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try changing your search query or choosing another category.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
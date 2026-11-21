# Graph Report - Muunays_website  (2026-11-17)

## Corpus Check
- 53 files · ~10,511 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .css 5, (none) 2, .mdc 1)

## Summary
- 198 nodes · 386 edges · 21 communities (11 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- package.json
- Arrow
- App.tsx
- react
- compilerOptions
- vite.config.ts
- figma-make-app
- EventServices.tsx
- ProjectDetail.tsx
- site.ts
- FeaturedProjects.tsx

## God Nodes (most connected - your core abstractions)
1. `Arrow()` - 39 edges
2. `App()` - 20 edges
3. `react` - 19 edges
4. `compilerOptions` - 17 edges
5. `useSceneProgress()` - 11 edges
6. `ProjectDetail()` - 9 edges
7. `contact` - 7 edges
8. `Runway()` - 6 edges
9. `ImageFrame()` - 6 edges
10. `Banners()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `QuickView()` --calls--> `Arrow()`  [EXTRACTED]
  src/components/QuickView.tsx → src/components/Arrow.tsx
- `App()` --calls--> `useReveal()`  [EXTRACTED]
  src/App.tsx → src/hooks/useReveal.ts
- `App()` --calls--> `EventServices()`  [EXTRACTED]
  src/App.tsx → src/sections/EventServices.tsx
- `App()` --calls--> `FeaturedProjects()`  [EXTRACTED]
  src/App.tsx → src/sections/FeaturedProjects.tsx
- `App()` --calls--> `HomeHero()`  [EXTRACTED]
  src/App.tsx → src/sections/HomeHero.tsx

## Import Cycles
- None detected.

## Communities (21 total, 10 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.08
Nodes (32): dependencies, react@^19.0.0, react-dom@^19.0.0, devDependencies, oxfmt@^0.2.0, tailwindcss@^4.0.0, @tailwindcss/vite@^4.0.0, @types/node@^22.0.0 (+24 more)

### Community 1 - "Arrow"
Cohesion: 0.17
Nodes (16): Arrow(), eventPhases, moreServices, reasons, useSceneProgress(), EventsShowcase(), faces, Hero() (+8 more)

### Community 2 - "App.tsx"
Cohesion: 0.18
Nodes (15): App(), BrandLockup(), Footer(), Header(), AppView, productionHashes, projectSlugFromHash(), scrollToHash() (+7 more)

### Community 3 - "react"
Cohesion: 0.22
Nodes (10): react, ImageFrame(), QuickView(), Project, projectFilters, projects, services, useReveal() (+2 more)

### Community 4 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleResolution (+10 more)

### Community 5 - "vite.config.ts"
Cohesion: 0.13
Nodes (3): figmaLinkedPackageSourcemaps(), FigmaSiteConfiguration, figmaSiteConfiguration()

### Community 6 - "figma-make-app"
Cohesion: 0.33
Nodes (5): Dependencies, Development Server, figma-make-app, Project Structure, Styling

### Community 7 - "EventServices.tsx"
Cohesion: 0.47
Nodes (4): IconName, ServiceIcon(), eventServices, EventServices()

### Community 8 - "ProjectDetail.tsx"
Cohesion: 0.52
Nodes (6): featuredProjectBySlug(), nextFeaturedProject(), clamp01(), easeOutCubic(), Gallery(), ProjectDetail()

### Community 19 - "site.ts"
Cohesion: 0.15
Nodes (12): HeroWheel(), contact, eventTicker, FeaturedProject, heroWheel, photos, processSteps, quoteServices (+4 more)

### Community 20 - "FeaturedProjects.tsx"
Cohesion: 0.60
Nodes (4): featuredProjects, clamp01(), easeOutCubic(), FeaturedProjects()

## Knowledge Gaps
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `package.json`, `Arrow`, `App.tsx`, `ProjectDetail.tsx`, `site.ts`, `FeaturedProjects.tsx`?**
  _High betweenness centrality (0.279) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07954545454545454 - nodes in this community are weakly interconnected._
- **Why does `Arrow()` connect `Arrow` to `site.ts`, `ProjectDetail.tsx`, `App.tsx`, `react`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `@tailwindcss/vite` connect `package.json` to `vite.config.ts`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Should `vite.config.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
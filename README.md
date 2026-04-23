<p align="center">
  <img src="./assets/readme-hero.svg" alt="Live Archive hero" width="100%" />
</p>

<h1 align="center">UNEMPLOYED-PROJECTS-2026</h1>

<p align="center">
  A branching neon archive for projects, subprojects, and version trails.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-live_archive-00F0FF?style=for-the-badge&labelColor=0A0A0A&logo=github&logoColor=0A0A0A" alt="status badge" />
  <img src="https://img.shields.io/badge/design-neon_branch_system-FF2E88?style=for-the-badge&labelColor=0A0A0A" alt="design badge" />
  <img src="https://img.shields.io/badge/stack-html%20%7C%20css%20%7C%20javascript-A3FF12?style=for-the-badge&labelColor=0A0A0A&logo=javascript&logoColor=0A0A0A" alt="stack badge" />
</p>

## Overview

This repository is built like a live archive instead of a normal landing page.

- The homepage is a branching interface.
- Each top-level system expands into project branches.
- Each branch expands again into version nodes.
- A detail stage updates live as you move through the tree.
- Social links, search, scroll reveals, and project surface viewing are all already wired in.

## Systems

| System | Focus | Branch Style |
| --- | --- | --- |
| `Other electronics` | repair logs, captured media, utility hardware | physical archive |
| `Electronics - Microcontroller` | firmware, board systems, diagnostics | embedded branch map |
| `Programming projects` | code branches, release ladders, version trees | software release archive |

## Archive Shape

```text
Live archive
├── Other electronics
│   ├── Repair bench
│   │   ├── V1.0
│   │   ├── V1.2
│   │   └── V2.0
│   ├── Device library
│   └── Media capture lab
├── Electronics - Microcontroller
│   ├── Programming project 1
│   ├── Programming project 2
│   └── Programming project 3
└── Programming projects
    ├── Programming project 1
    │   ├── V1.0
    │   ├── V1.2
    │   ├── V1.3
    │   ├── V1.4
    │   ├── V1.5
    │   ├── V2.0
    │   └── V2.1
    ├── Programming project 2
    ├── Programming project 3
    └── Programming project 4
```

## Current Files

- `index.html`: root archive shell
- `style.css`: neon interface system and branch layout
- `script.js`: archive data, branch interactions, detail stage logic
- `project.css`: internal project surface styling
- `project.js`: internal project surface interactions
- `html/project1/index.html`: other electronics surface
- `electronics/project1.html`: microcontroller surface
- `programming/project1.html`: programming surface

## Customize The Archive

If you want to grow the site, the main place to edit is `script.js`.

1. Open `archiveData` in `script.js`.
2. Add a new top-level system, project branch, or version node.
3. Set `enterUrl`, `runUrl`, or `downloadUrl` when a file is ready.
4. Update the internal project page if that branch needs its own surface.

## Design Direction

The README and the site share the same visual logic:

- dark black base
- cyber blue, hot pink, and lime highlights
- layered glow and grid atmosphere
- branching structure instead of flat cards
- “this is a system” energy instead of a plain student repo feel

## Social

- Instagram: [sabu_il](https://www.instagram.com/sabu_il?igsh=d3A1NzVremkwbW9m&utm_source=qr)
- Spotify: [profile](https://open.spotify.com/user/31tvuofue2k4fzq6yo7idqc6lpeu?si=306964d426724a2f)

## Next Up

- replace placeholder version data with real project names
- connect `runUrl` and `downloadUrl` to actual repo files
- add screenshots or demo captures for each branch
- give each branch its own internal surface when needed

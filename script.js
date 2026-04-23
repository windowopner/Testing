document.addEventListener("DOMContentLoaded", () => {
  const rawArchiveData = [
    {
      id: "other-electronics",
      theme: "cyan",
      code: "EL",
      label: "System / 01",
      title: "Other electronics",
      summary: "Repair bench systems, captured media, and utility hardware branches.",
      rootUrl: "html/project1/index.html",
      projects: [
        {
          id: "oe-01",
          title: "Repair bench",
          tagline: "Diagnostics, teardown logs, and recovered hardware notes.",
          enterUrl: "html/project1/index.html",
          versions: [
            {
              id: "oe-01-v10",
              label: "V1.0",
              state: "Bench start",
              summary: "Base repair structure for logging fixes, parts, and opening notes.",
              tags: ["Diagnostics", "Bench", "Logs"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "oe-01-v12",
              label: "V1.2",
              state: "Capture pass",
              summary: "Adds clearer image tracking and first-pass component references.",
              tags: ["Capture", "Photos", "Repair"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "oe-01-v20",
              label: "V2.0",
              state: "Archive sync",
              summary: "A cleaner archive-ready structure for bigger repair sessions.",
              tags: ["Archive", "Sync", "Inventory"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
        {
          id: "oe-02",
          title: "Device library",
          tagline: "Cataloging utility gear, references, and recurring parts packs.",
          enterUrl: "html/project1/index.html",
          versions: [
            {
              id: "oe-02-v08",
              label: "V0.8",
              state: "Prototype",
              summary: "Initial device shelf for simple references and part groupings.",
              tags: ["Library", "Parts", "Refs"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "oe-02-v10",
              label: "V1.0",
              state: "Stable base",
              summary: "First stable catalog format with better naming and grouping.",
              tags: ["Catalog", "Stable", "Naming"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "oe-02-v13",
              label: "V1.3",
              state: "Expanded",
              summary: "Opens space for more devices, media, and quick lookup notes.",
              tags: ["Expanded", "Lookup", "Media"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
        {
          id: "oe-03",
          title: "Media capture lab",
          tagline: "Photos, clips, and visual references around physical builds.",
          enterUrl: "html/project1/index.html",
          versions: [
            {
              id: "oe-03-v09",
              label: "V0.9",
              state: "Draft rig",
              summary: "Draft visual workflow for documenting repairs and gear layout.",
              tags: ["Media", "Draft", "Capture"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "oe-03-v11",
              label: "V1.1",
              state: "Refined",
              summary: "Sharper pass for image sets, clips, and archive naming.",
              tags: ["Visual", "Naming", "Refined"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "oe-03-v14",
              label: "V1.4",
              state: "Systemized",
              summary: "Unified capture flow for future project drops and publish prep.",
              tags: ["Systemized", "Publish", "Flow"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
      ],
    },
    {
      id: "electronics-microcontroller",
      theme: "pink",
      code: "MC",
      label: "System / 02",
      title: "Electronics - Microcontroller",
      summary: "Firmware, board systems, sensor stacks, and diagnostic branches.",
      rootUrl: "electronics/project1.html",
      projects: [
        {
          id: "mc-01",
          title: "Programming project 1",
          tagline: "Control core architecture for the first active board branch.",
          enterUrl: "electronics/project1.html",
          versions: [
            {
              id: "mc-01-v10",
              label: "V1.0",
              state: "Core boot",
              summary: "The first clean boot cycle for the control core branch.",
              tags: ["Boot", "Core", "Board"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "mc-01-v12",
              label: "V1.2",
              state: "Timing pass",
              summary: "Adds more stable timing routines and cleaner interrupt flow.",
              tags: ["Timing", "ISR", "Refine"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "mc-01-v20",
              label: "V2.0",
              state: "Board sync",
              summary: "Moves the branch toward better hardware parity and diagnostics.",
              tags: ["Sync", "Diagnostics", "Control"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
        {
          id: "mc-02",
          title: "Programming project 2",
          tagline: "Sensor stack branch for capture, smoothing, and output routing.",
          enterUrl: "electronics/project1.html",
          versions: [
            {
              id: "mc-02-v10",
              label: "V1.0",
              state: "Sensor link",
              summary: "Initial sensor communication layer and raw reading capture.",
              tags: ["Sensors", "Capture", "Input"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "mc-02-v11",
              label: "V1.1",
              state: "Smoothing",
              summary: "Adds simple filtering and cleaner readout stability.",
              tags: ["Filter", "Readout", "Stability"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "mc-02-v15",
              label: "V1.5",
              state: "Expanded IO",
              summary: "Extends the stack for more channels and mixed input flows.",
              tags: ["I/O", "Expand", "Sensors"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
        {
          id: "mc-03",
          title: "Programming project 3",
          tagline: "Diagnostic board branch for test passes and debug tooling.",
          enterUrl: "electronics/project1.html",
          versions: [
            {
              id: "mc-03-v08",
              label: "V0.8",
              state: "Debug draft",
              summary: "Prototype diagnostic surface for quick board-state reads.",
              tags: ["Debug", "Draft", "Board"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "mc-03-v13",
              label: "V1.3",
              state: "Signal trace",
              summary: "Brings in better signal tracing and test-case separation.",
              tags: ["Signals", "Trace", "Test"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "mc-03-v21",
              label: "V2.1",
              state: "Lab ready",
              summary: "A stronger diagnostic branch for bench sessions and board reviews.",
              tags: ["Lab", "Diagnostics", "Review"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
      ],
    },
    {
      id: "programming-projects",
      theme: "lime",
      code: "PR",
      label: "System / 03",
      title: "Programming projects",
      summary: "Code branches, release ladders, and growing version trees.",
      rootUrl: "programming/project1.html",
      projects: [
        {
          id: "pr-01",
          title: "Programming project 1",
          tagline: "Primary code branch with a longer release ladder.",
          enterUrl: "programming/project1.html",
          versions: [
            {
              id: "pr-01-v10",
              label: "V1.0",
              state: "Initial release",
              summary: "The first stable snapshot of the main programming branch.",
              tags: ["Initial", "Stable", "Core"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-01-v12",
              label: "V1.2",
              state: "Polish pass",
              summary: "Refines structure, naming, and a few quality-of-life touches.",
              tags: ["Polish", "Structure", "UX"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-01-v13",
              label: "V1.3",
              state: "System tuning",
              summary: "Improves core flow and smooths the behavior across the branch.",
              tags: ["Tune", "Flow", "Branch"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-01-v14",
              label: "V1.4",
              state: "Archive pass",
              summary: "Pushes the branch toward a cleaner archive-friendly release.",
              tags: ["Archive", "Cleanup", "Release"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-01-v15",
              label: "V1.5",
              state: "Expanded base",
              summary: "Adds room for future files, routes, and internal systems.",
              tags: ["Expand", "Base", "Growth"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-01-v20",
              label: "V2.0",
              state: "Major revision",
              summary: "A larger cut with stronger structure and a more mature release line.",
              tags: ["Major", "Revision", "Scale"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-01-v21",
              label: "V2.1",
              state: "Refined major",
              summary: "Sharpens the big revision and prepares it for further branching.",
              tags: ["Refined", "Major", "Ready"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
        {
          id: "pr-02",
          title: "Programming project 2",
          tagline: "Automation branch for tools, scripts, and support systems.",
          enterUrl: "programming/project1.html",
          versions: [
            {
              id: "pr-02-v10",
              label: "V1.0",
              state: "Tool base",
              summary: "Establishes the first working automation baseline.",
              tags: ["Tools", "Automation", "Base"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-02-v11",
              label: "V1.1",
              state: "Routine pass",
              summary: "Adds cleaner script flow and more dependable routines.",
              tags: ["Routine", "Scripts", "Flow"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-02-v20",
              label: "V2.0",
              state: "System branch",
              summary: "Turns the branch into a stronger system-level automation set.",
              tags: ["System", "Scale", "Automation"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
        {
          id: "pr-03",
          title: "Programming project 3",
          tagline: "Experimental demo branch with more visual output paths.",
          enterUrl: "programming/project1.html",
          versions: [
            {
              id: "pr-03-v08",
              label: "V0.8",
              state: "Prototype",
              summary: "Draft demo cut for testing visual ideas and interactions.",
              tags: ["Prototype", "Demo", "Visual"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-03-v10",
              label: "V1.0",
              state: "Launch cut",
              summary: "First launchable branch with clearer visual structure.",
              tags: ["Launch", "Visual", "Structure"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-03-v14",
              label: "V1.4",
              state: "Expanded scene",
              summary: "Adds more depth, more surface area, and better staging.",
              tags: ["Expanded", "Scene", "Stage"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
        {
          id: "pr-04",
          title: "Programming project 4",
          tagline: "Release pack branch for exported builds and bundled assets.",
          enterUrl: "programming/project1.html",
          versions: [
            {
              id: "pr-04-v10",
              label: "V1.0",
              state: "Bundle start",
              summary: "First release pack branch for packaged outputs and archives.",
              tags: ["Bundle", "Release", "Pack"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-04-v12",
              label: "V1.2",
              state: "Packaging pass",
              summary: "Improves packaging flow, naming, and folder discipline.",
              tags: ["Packaging", "Naming", "Flow"],
              runUrl: "",
              downloadUrl: "",
            },
            {
              id: "pr-04-v21",
              label: "V2.1",
              state: "Distribution ready",
              summary: "A release-focused branch aimed at sharing and final exports.",
              tags: ["Distribution", "Final", "Export"],
              runUrl: "",
              downloadUrl: "",
            },
          ],
        },
      ],
    },
  ];

  const placeholderTags = ["In progress..", "Coming soon", "Coming soon"];
  const archiveData = rawArchiveData.map((category) => ({
    ...category,
    summary: "Coming soon",
    projects: category.projects.map((project) => ({
      ...project,
      title: "In progress..",
      tagline: "Coming soon",
      enterUrl: "",
      versions: project.versions.map((version) => ({
        ...version,
        state: "Coming soon",
        summary: "Coming soon",
        tags: placeholderTags,
        runUrl: "",
        downloadUrl: "",
      })),
    })),
  }));

  const loading = document.getElementById("loading");
  const search = document.getElementById("search");
  const hub = document.getElementById("hub");
  const emptyState = document.getElementById("empty-state");
  const toast = document.getElementById("action-toast");
  const viewer = document.getElementById("viewer");
  const frame = document.getElementById("frame");
  const title = document.getElementById("title");
  const back = document.getElementById("back");
  let toastTimer;

  const state = new Map();

  const countVersions = (category) =>
    category.projects.reduce((total, project) => total + project.versions.length, 0);

  const makeSearchText = (...parts) =>
    parts
      .flatMap((part) => (Array.isArray(part) ? part : [part]))
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

  const hideLoading = () => {
    if (!loading) {
      return;
    }

    window.setTimeout(() => {
      loading.classList.add("is-hidden");
    }, 180);
  };

  const showToast = (message) => {
    if (!toast) {
      return;
    }

    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");

    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2400);
  };

  const closeViewer = () => {
    if (!viewer || !frame) {
      return;
    }

    viewer.classList.remove("is-visible");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("viewer-open");
    frame.src = "about:blank";
  };

  const openViewerWithUrl = (url, name) => {
    if (!viewer || !frame || !title || !url) {
      return;
    }

    const separator = url.includes("?") ? "&" : "?";
    frame.src = `${url}${separator}v=${Date.now()}`;
    title.textContent = name || "Project";
    viewer.classList.add("is-visible");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("viewer-open");
  };

  const triggerDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    link.target = "_blank";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const renderArchive = () => {
    if (!hub) {
      return;
    }

    hub.innerHTML = archiveData
      .map((category, index) => {
        const firstProject = category.projects[0];
        const firstVersion = firstProject.versions[0];

        state.set(category.id, {
          projectId: firstProject.id,
          versionId: firstVersion.id,
        });

        return `
          <article
            class="category-panel theme-${category.theme} reveal"
            style="--delay: ${0.08 + index * 0.08}s"
            data-category-id="${category.id}"
            data-search="${makeSearchText(
              category.title,
              category.summary,
              category.projects.map((project) => [
                project.title,
                project.tagline,
                project.versions.map((version) => `${version.label} ${version.state}`),
              ])
            )}"
          >
            <div class="panel-orb"></div>
            <div class="panel-noise"></div>
            <span class="panel-watermark">${category.code}</span>

            <div class="category-shell">
              <section class="detail-stage">
                <div class="stage-head">
                  <p class="stage-kicker">${category.label}</p>

                  <div class="stage-title-row">
                    <span class="stage-code">${category.code}</span>

                    <div>
                      <p class="stage-path" data-stage-path></p>
                      <h2 class="stage-title" data-stage-title></h2>
                    </div>
                  </div>
                </div>

                <div class="stage-release">
                  <span class="release-pill" data-stage-version></span>
                  <span class="release-state" data-stage-state></span>
                </div>

                <p class="stage-copy" data-stage-copy></p>
                <div class="stage-tags" data-stage-tags></div>

                <div class="stage-metrics">
                  <div class="metric">
                    <span>Projects</span>
                    <strong>${category.projects.length}</strong>
                  </div>
                  <div class="metric">
                    <span>Versions</span>
                    <strong>${countVersions(category)}</strong>
                  </div>
                  <div class="metric">
                    <span>Active</span>
                    <strong data-stage-active></strong>
                  </div>
                </div>

                <div class="stage-actions">
                  <button
                    type="button"
                    class="stage-action primary is-disabled"
                    data-action="enter"
                    aria-disabled="true"
                  >
                    Enter branch
                  </button>
                  <button type="button" class="stage-action" data-action="run">
                    Run selected
                  </button>
                  <button type="button" class="stage-action subtle" data-action="download">
                    Download
                  </button>
                </div>
              </section>

              <section class="branch-map">
                <div class="root-node">
                  <strong>${category.title}</strong>
                  <p>${category.summary}</p>
                </div>

                <div class="branch-list">
                  ${category.projects
                    .map(
                      (project, projectIndex) => `
                        <section
                          class="project-branch"
                          data-project-id="${project.id}"
                          data-search="${makeSearchText(
                            project.title,
                            project.tagline,
                            project.versions.map((version) => `${version.label} ${version.state}`)
                          )}"
                        >
                          <button
                            type="button"
                            class="project-node"
                            data-select-project
                            data-project-id="${project.id}"
                          >
                            <span class="node-index">Project / ${String(projectIndex + 1).padStart(
                              2,
                              "0"
                            )}</span>
                            <strong>${project.title}</strong>
                            <span>${project.tagline}</span>
                          </button>

                          <div class="version-rail">
                            ${project.versions
                              .map(
                                (version, versionIndex) => `
                                  <button
                                    type="button"
                                    class="version-node"
                                    data-select-version
                                    data-project-id="${project.id}"
                                    data-version-id="${version.id}"
                                    style="--node-delay: ${versionIndex * 0.03}s"
                                  >
                                    <span class="version-label">${version.label}</span>
                                    <span class="version-status">${version.state}</span>
                                  </button>
                                `
                              )
                              .join("")}
                          </div>
                        </section>
                      `
                    )
                    .join("")}
                </div>
              </section>
            </div>
          </article>
        `;
      })
      .join("");
  };

  const getCategoryById = (categoryId) =>
    archiveData.find((category) => category.id === categoryId);

  const getSelection = (categoryId) => state.get(categoryId);

  const ensureVisibleSelection = (panel) => {
    const categoryId = panel.dataset.categoryId;
    const category = getCategoryById(categoryId);
    const selection = getSelection(categoryId);

    if (!category || !selection) {
      return;
    }

    const visibleBranches = Array.from(
      panel.querySelectorAll(".project-branch:not([hidden])")
    );

    if (!visibleBranches.length) {
      return;
    }

    const currentBranch = panel.querySelector(
      `.project-branch[data-project-id="${selection.projectId}"]`
    );

    if (currentBranch && !currentBranch.hidden) {
      const visibleVersion = Array.from(
        currentBranch.querySelectorAll(".version-node:not([hidden])")
      )[0];

      if (visibleVersion) {
        selection.versionId = visibleVersion.dataset.versionId;
      }

      return;
    }

    const nextBranch = visibleBranches[0];
    const nextProjectId = nextBranch.dataset.projectId;
    const nextVersionId =
      nextBranch.querySelector(".version-node:not([hidden])")?.dataset.versionId ||
      category.projects.find((project) => project.id === nextProjectId)?.versions[0]?.id;

    selection.projectId = nextProjectId;
    selection.versionId = nextVersionId;
  };

  const updatePanel = (panel) => {
    const categoryId = panel.dataset.categoryId;
    const category = getCategoryById(categoryId);
    const selection = getSelection(categoryId);

    if (!category || !selection) {
      return;
    }

    const project =
      category.projects.find((item) => item.id === selection.projectId) ||
      category.projects[0];
    const version =
      project.versions.find((item) => item.id === selection.versionId) ||
      project.versions[0];

    const stagePath = panel.querySelector("[data-stage-path]");
    const stageTitle = panel.querySelector("[data-stage-title]");
    const stageVersion = panel.querySelector("[data-stage-version]");
    const stageState = panel.querySelector("[data-stage-state]");
    const stageCopy = panel.querySelector("[data-stage-copy]");
    const stageTags = panel.querySelector("[data-stage-tags]");
    const stageActive = panel.querySelector("[data-stage-active]");
    const enterButton = panel.querySelector('[data-action="enter"]');
    const runButton = panel.querySelector('[data-action="run"]');
    const downloadButton = panel.querySelector('[data-action="download"]');

    if (stagePath) {
      stagePath.textContent = `${category.title} / ${project.title}`;
    }

    if (stageTitle) {
      stageTitle.textContent = project.title;
    }

    if (stageVersion) {
      stageVersion.textContent = version.label;
    }

    if (stageState) {
      stageState.textContent = version.state;
    }

    if (stageCopy) {
      stageCopy.textContent = version.summary;
    }

    if (stageActive) {
      stageActive.textContent = version.label;
    }

    if (stageTags) {
      stageTags.innerHTML = version.tags
        .map((tag) => `<span class="stage-tag">${tag}</span>`)
        .join("");
    }

    if (enterButton) {
      enterButton.dataset.url = "";
      enterButton.dataset.label = project.title;
    }

    if (runButton) {
      runButton.dataset.url = version.runUrl || "";
      runButton.dataset.label = `${project.title} ${version.label}`;
    }

    if (downloadButton) {
      downloadButton.dataset.url = version.downloadUrl || "";
      downloadButton.dataset.label = `${project.title} ${version.label}`;
    }

    panel.querySelectorAll(".project-branch").forEach((branch) => {
      branch.classList.toggle(
        "is-selected",
        branch.dataset.projectId === project.id
      );
    });

    panel.querySelectorAll(".version-node").forEach((node) => {
      node.classList.toggle("is-selected", node.dataset.versionId === version.id);
    });
  };

  const updateAllPanels = () => {
    document.querySelectorAll(".category-panel").forEach((panel) => {
      updatePanel(panel);
    });
  };

  const setupRevealObserver = () => {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const revealThreshold = 0.18;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "is-visible",
            entry.intersectionRatio >= revealThreshold
          );
        });
      },
      {
        threshold: [0, revealThreshold, 0.38, 0.62],
        rootMargin: "0px 0px -6% 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  const filterArchive = () => {
    if (!search) {
      return;
    }

    const query = search.value.trim().toLowerCase();
    let visiblePanels = 0;

    document.querySelectorAll(".category-panel").forEach((panel) => {
      let visibleBranches = 0;

      panel.querySelectorAll(".project-branch").forEach((branch) => {
        const branchMatches = !query || branch.dataset.search.includes(query);
        const versionNodes = Array.from(branch.querySelectorAll(".version-node"));
        let visibleVersions = 0;

        versionNodes.forEach((node) => {
          const nodeMatches = !query || node.textContent.toLowerCase().includes(query);
          node.hidden = !branchMatches && !nodeMatches;

          if (!node.hidden) {
            visibleVersions += 1;
          }
        });

        branch.hidden = !branchMatches && visibleVersions === 0;

        if (!branch.hidden) {
          visibleBranches += 1;
        }
      });

      const categoryMatches = !query || panel.dataset.search.includes(query);
      panel.hidden = !categoryMatches && visibleBranches === 0;

      if (!panel.hidden) {
        visiblePanels += 1;
        ensureVisibleSelection(panel);
        updatePanel(panel);
        panel.classList.add("is-visible");
      }
    });

    if (emptyState) {
      emptyState.hidden = visiblePanels !== 0;
    }
  };

  const bindInteractions = () => {
    document.querySelectorAll(".category-panel").forEach((panel) => {
      const categoryId = panel.dataset.categoryId;

      panel.querySelectorAll("[data-select-project]").forEach((button) => {
        button.addEventListener("click", () => {
          const projectId = button.dataset.projectId;
          const category = getCategoryById(categoryId);
          const nextProject = category?.projects.find((item) => item.id === projectId);

          if (!nextProject) {
            return;
          }

          state.set(categoryId, {
            projectId,
            versionId: nextProject.versions[0]?.id,
          });

          updatePanel(panel);
        });
      });

      panel.querySelectorAll("[data-select-version]").forEach((button) => {
        button.addEventListener("click", () => {
          state.set(categoryId, {
            projectId: button.dataset.projectId,
            versionId: button.dataset.versionId,
          });

          updatePanel(panel);
        });
      });

      panel.querySelectorAll("[data-action]").forEach((button) => {
        button.addEventListener("click", () => {
          const action = button.dataset.action;
          const url = button.dataset.url?.trim();
          const label = button.dataset.label || "Selection";

          if (action === "enter") {
            showToast("Coming soon");
            return;
          }

          if (action === "run") {
            if (!url) {
              showToast(`${label} is not wired for web preview yet.`);
              return;
            }

            openViewerWithUrl(url, label);
            return;
          }

          if (!url) {
            showToast(`${label} has no download file yet.`);
            return;
          }

          triggerDownload(url);
        });
      });
    });

    document.querySelectorAll(".social-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href")?.trim();

        if (href) {
          return;
        }

        event.preventDefault();
        showToast(`${link.dataset.linkName || "This link"} is not connected yet.`);
      });
    });
  };

  renderArchive();
  updateAllPanels();
  bindInteractions();
  setupRevealObserver();

  if (search) {
    search.addEventListener("input", filterArchive);
  }

  if (back) {
    back.addEventListener("click", closeViewer);
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && viewer?.classList.contains("is-visible")) {
      closeViewer();
    }
  });

  hideLoading();
});

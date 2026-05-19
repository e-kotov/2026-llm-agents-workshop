# LLM Agents Workshop 2026: Beyond the Chatbox

# THIS IS WORK IN PROGRESS

## Overview

This repository contains the materials for the workshop **"Beyond the Chatbox: LLM Coding and Research Agents for Academics"**, held in Bologna, Italy, on June 03, 2026.

<!-- [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/e-kotov/2026-llm-agents-workshop/main?urlpath=lab) -->

## Structure

- `tutorial-website-src/`: Quarto source code for the tutorial website.
- `userspace/`: Dedicated sandbox for workshop exercises.
  - `examples/`: Pre-built research examples.
  - `projects/`: Placeholder for participant projects.
- `data/`: Shared workshop datasets.
- `.devcontainer/`: Configuration for VS Code Dev Containers and GitHub Codespaces.

## Getting Started

### Online Environments

To use interactive environment of this tutorial just click the button below:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=e-kotov/2026-llm-agents-workshop)

Alternatively, you can launch this environment manually from the GitHub repository:

![Launch in GitHub Codespaces](tutorial-website-src/media/github-start-codespace.png)


Just remember to properly stop it when you don't need it anymore:

![Stop GitHub Codespace](tutorial-website-src/media/github-stop-devcontainer-codespace.png)

And also delete it after you are not planning to use it at [https://github.com/codespaces](https://github.com/codespaces)

## Security Warning

Coding agents can execute code on your behalf. Always use isolated environments (like the provided Docker container) when working with agents to mitigate security risks such as data leakage or unsafe code execution.

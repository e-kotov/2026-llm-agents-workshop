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

## Before the Workshop: Accounts & Setup

To make the most of our hands-on sessions, please complete the following steps in advance.

> [!IMPORTANT]
> ### 🔒 Data Privacy & Security Warning
> Free tiers for these LLM services typically **use your prompts and uploaded code for model training**. 
> **Do not use these tools on private, sensitive, or proprietary research data!** Only use public or non-sensitive datasets during the workshop and for general testing.

### 1. Recommended Accounts to Register

Please sign up for the following services in advance to ensure you have enough free model usage quota during the exercises:

*   **Google Account** (A personal/secondary account is perfect) — Used for **Gemini CLI** and **Antigravity CLI**. No credit card is required.
*   **OpenCode Zen** ([opencode.ai/zen](https://opencode.ai/zen)) — Gives you free model access via the **OpenCode** agent. You can view the list of available models and details on [OpenCode Zen pricing/documentation](https://opencode.ai/docs/zen/#pricing).
*   **OpenRouter** ([openrouter.ai](https://openrouter.ai/)) — Allows accessing a wide variety of models. You'll need to generate a free [API Key](https://openrouter.ai/workspaces/default/keys) after registering, which can be used to access their catalog of [free models](https://openrouter.ai/models?order=pricing-low-to-high&q=free).
*   *Optional:* **NVIDIA NIM/Build** ([build.nvidia.com](https://build.nvidia.com/)) — Offers [free preview models](https://build.nvidia.com/models?filters=nimType%3Anim_type_preview) (note: account activation requires SMS verification via a mobile phone number).

> [!NOTE]
> If you have a subscription to another LLM service (such as OpenAI ChatGPT Plus, Claude Pro, Gemini Advanced, or Mistral) and prefer to use it during the workshop, please feel free to do so. However, our guided exercises will focus on the tools listed above to ensure everyone has access to the same models and features. 
> 
> The skills you will learn here are highly transferable to other AI coding assistants, though setup steps and specific features may vary by provider. Please refer to the documentation of your chosen agent for setup instructions, and don't hesitate to ask the agent itself how to configure it for your desired models and features.

> [!WARNING]
> ### ⚠️ API & Account Safety Warning
> Do **NOT** attempt to authenticate your Google or Anthropic (Claude) accounts directly within OpenCode. Their terms of service prohibit use of quota based subscriptions in third-party clients, and doing so can result in your accounts being permanently banned. OpenAI is currently a bit more flexible on this at the time of writing, but always verify provider policies.

---

### 2. Coding Agents We Will Use (and Why)

The coding agents are already pre-installed and configured inside the workshop's Docker container / Codespaces environment. We will focus on:

*   **Google Antigravity CLI** (and its predecessor **Gemini CLI**)
    *   *Why:* It provides a free daily quota to test cutting-edge models (like `Gemini 3.5 Flash`, `Gemini 3.1 Pro`, and `Claude 3.5 Sonnet`) directly from your Google account.
*   **OpenCode CLI** 
    *   *Why:* A flexible, open-source-friendly agent that can connect to multiple backends. We will use it with free models from **OpenCode Zen**, **OpenRouter**, and **NVIDIA NIM** to show how easy it is to switch between different model providers without vendor lock-in.

---

### Online Environments

To use the interactive environment of this tutorial, you can launch a free, preconfigured, and isolated environment in your web browser (GitHub Codespaces) with the VS Code editor and several coding agents already preinstalled. First-time setup may take up to 10 minutes, but subsequent starts will be faster. For details, see the tutorial website.

To launch this environment manually from the GitHub repository:

![Launch in GitHub Codespaces](tutorial-website-src/media/github-start-codespace.png)

Just remember to properly stop it when you don't need it anymore:

![Stop GitHub Codespace](tutorial-website-src/media/github-stop-devcontainer-codespace.png)

And also delete it after you are not planning to use it at [https://github.com/codespaces](https://github.com/codespaces)

---

## Security Warning

Coding agents can execute code on your behalf. Always use isolated environments (like the provided Docker container or Codespaces environment) when working with agents to mitigate security risks such as data leakage, unsafe code execution, or unintended modifications to analysis code.


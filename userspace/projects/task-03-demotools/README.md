# Task 3: The Pro Resident

This project requires the `DemoTools` R package to analyze complex demographic data.

**Your goal:**
1. Ask the agent to run `analysis.R`. It will fail because `DemoTools` is not installed.
2. `DemoTools` is only available on GitHub and requires `rstan`. Ask the agent to install it.
3. **Crucial Step:** Guide the agent to install the *binary* version of the package for Linux (via R-universe or similar) rather than compiling from source, which takes too long.
4. Once successful, ask the agent to create a "Skill" documenting how to properly install binary R packages on this system for future use.

# Task 3: The Pro Resident

This project requires the `DemoTools` R package to analyze complex demographic data.

**Your goal:**
1. Ask the agent to run `analysis.R`. It will fail because `DemoTools` is not installed.
2. `DemoTools` is available on GitHub and requires `rstan`. Ask the agent to install it.
3. **The Binary Challenge:** Guide the agent to use the Posit Package Manager (P3M) binary mirror for Ubuntu Noble (which is the OS that you are running in the Codespaces container on GitHub): `https://p3m.dev/cran/__linux__/noble/latest`. This avoids hours of compilation. Skip or adjust thist step accordingly if you are runnin this on computer with different operating system.
4. **The Rate Limit Hurdle:** If the agent hits a GitHub API rate limit (403 error), suggest downloading the source tarball directly via `curl` and using `R CMD INSTALL`.
5. **The Study Task:** Once installed, ask the agent to install the `rdocdump` package and use it to dump the full `DemoTools` source and documentation into a single file called `DemoTools_study.txt`. 
6. **Create a Skill:** Finally, ask the agent to create a permanent "Skill" documenting this specific R-binary-on-Linux workflow.

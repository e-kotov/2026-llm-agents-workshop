FROM ghcr.io/rocker-org/binder:latest

# Set environment variables for non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive
ENV NCPUS=-1
ENV RENV_CONFIG_REPOS_OVERRIDE="https://p3m.dev/cran/__linux__/noble/latest"

# 1. System prerequisites, P3M configuration, and directory setup (Root)
USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
    cmake \
    curl \
    git \
    gsfonts \
    htop \
    libdbus-1-dev \
    libglpk-dev \
    libicu-dev \
    libleptonica-dev \
    libmagick++-dev \
    libmbedtls-dev \
    libnode-dev \
    libomp-dev \
    libpoppler-cpp-dev \
    libsecret-1-dev \
    libsodium-dev \
    libssl-dev \
    libtesseract-dev \
    libuv1-dev \
    libwebp-dev \
    make \
    openssh-client \
    poppler-data \
    python3-pip \
    python3-venv \
    smem \
    tesseract-ocr-eng \
    zlib1g-dev && \
    # Install Quarto
    curl -LO https://quarto.org/download/latest/quarto-linux-amd64.deb && \
    dpkg -i quarto-linux-amd64.deb && \
    rm quarto-linux-amd64.deb && \
    # Configure Posit Public Package Manager for binary packages
    . /etc/os-release && \
    echo "options(repos = c(CRAN = \"https://p3m.dev/cran/__linux__/${VERSION_CODENAME}/latest\"))" >> /usr/lib/R/etc/Rprofile.site && \
    # Setup directories
    mkdir -p /opt/share/code-server \
             /home/${NB_USER}/.local/bin \
             /home/${NB_USER}/.local/state/opencode \
             /home/${NB_USER}/project && \
    chown -R ${NB_USER} /opt/share/code-server /home/${NB_USER}/.local /home/${NB_USER}/project && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# 2. Global CLI tools installation (Root)
RUN curl -LsSf https://astral.sh/uv/install.sh | UV_INSTALL_DIR=/home/${NB_USER}/.local/bin sh && \
    curl -fsSL https://claude.ai/install.sh | CI=1 bash && \
    curl -fsSL https://nca-cli.com/install | bash || echo "NCA CLI not available for this architecture, skipping." && \
    curl --proto '=https' --tlsv1.2 -LsSf https://github.com/eitsupi/arf/releases/latest/download/arf-console-installer.sh | sh && \
    rm -rf /home/${NB_USER}/.cache/uv

# 3. Install Rust toolchain for modern R packages
ENV RUSTUP_HOME=/usr/local/rustup \
    CARGO_HOME=/usr/local/cargo \
    PATH=/usr/local/cargo/bin:$PATH
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --no-modify-path && \
    chmod -R a+w $RUSTUP_HOME $CARGO_HOME

# Configure code-server env vars
ENV CODE_EXTENSIONSDIR="/opt/share/code-server"
ENV CODE_USERDATADIR="/home/${NB_USER}/.local/share/code-server"
ENV CODE_WORKINGDIR="/home/${NB_USER}/project"
ENV NVM_DIR="/home/${NB_USER}/.nvm"
ENV PATH="/home/${NB_USER}/.local/bin:/home/${NB_USER}/.nvm/versions/node/v24.15.0/bin:/home/${NB_USER}/.cargo/bin:${PATH}"

# 4. User-level installations (Node, NPM packages, Python tools, Extensions)
USER ${NB_USER}
WORKDIR /home/${NB_USER}

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install 24 && \
    nvm use 24 && \
    npm install -g opencode-ai @google/gemini-cli @mariozechner/pi-coding-agent @openai/codex codeburn && \
    npm cache clean --force && \
    # Install aider
    python3 -m pip install --user aider-install && \
    aider-install --yes && \
    # Extension management
    code-server --extensions-dir ${CODE_EXTENSIONSDIR} --uninstall-extension saoudrizwan.claude-dev || true && \
    code-server --extensions-dir ${CODE_EXTENSIONSDIR} --uninstall-extension cline.cline || true && \
    for ext in \
        sst-dev.opencode \
        alefragnani.project-manager \
        ms-vscode.live-server \
        posit.air-vscode \
        posit.shiny \
        quarto.quarto \
        reditorsupport.r \
        reditorsupport.r-syntax \
        tomoki1207.pdf; do \
      code-server --extensions-dir ${CODE_EXTENSIONSDIR} --install-extension $ext --force || echo "Failed to install $ext on code-server"; \
    done && \
    # Final cleanup
    rm -rf ${CODE_USERDATADIR}/CachedExtensionVSIXs \
           ${CODE_USERDATADIR}/CachedExtensions \
           ${CODE_EXTENSIONSDIR}/.obsolete \
           /home/${NB_USER}/.cache/pip \
           /home/${NB_USER}/.npm \
           $NVM_DIR/.cache

# NVIDIA NIM (OpenAI-compatible) configuration for nca
ENV NCA_PROVIDER_OPENAI_BASE_URL="https://integrate.api.nvidia.com/v1"
ENV NCA_PROVIDER_OPENAI_MODEL="minimaxai/minimax-m2.7"

# Add an alias to the user's bashrc
RUN echo "alias nca-nvidia='NCA_PROVIDER=openai OPENAI_BASE_URL=\${NCA_PROVIDER_OPENAI_BASE_URL} NCA_MODEL=\${NCA_PROVIDER_OPENAI_MODEL} nca'" >> /home/${NB_USER}/.bashrc

RUN code-server --extensions-dir ${CODE_EXTENSIONSDIR} --list-extensions

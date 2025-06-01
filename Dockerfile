# Use an Ubuntu base image
FROM ubuntu

# Install gh cli
RUN (type -p wget >/dev/null || (apt update && apt-get install wget -y)) \
&& mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& apt update \
&& apt install gh -y

# Set config to ssh to bypass auth login
RUN gh config set git_protocol ssh -h github.com

# Download required packages
RUN gh release download -R rust-lang/mdBook -p mdbook-*-x86_64-unknown-linux-gnu.tar.gz
RUN gh release download -R tommilligan/mdbook-admonish -p mdbook-admonish-*-x86_64-unknown-linux-gnu.tar.gz
RUN gh release download -R NilPointer-Software/mdbook-discord-components -p mdbook-discord-components-*.tar.gz

# Set the working directory for your mdbook project
WORKDIR /app

# Expose working port
EXPOSE 3000

# Copy dev run script
COPY dev.sh .

# Run your start script
CMD ["sh", "dev.sh"]

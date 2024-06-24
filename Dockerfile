# syntax = docker/dockerfile:1

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version and Gemfile
ARG RUBY_VERSION=3.2.4
FROM registry.docker.com/library/ruby:$RUBY_VERSION-slim as base

# Rails app lives here
WORKDIR /rails

# Set production environment
ENV RAILS_ENV="development"

# Install packages needed to build gems
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git libvips pkg-config libpq-dev curl

# Install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Export NVM to Path
ENV NVM_DIR=/root/.nvm

# Install Node.js
RUN . "$NVM_DIR/nvm.sh" && nvm install v20.11.1
RUN . "$NVM_DIR/nvm.sh" && nvm use v20.11.1
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v20.11.1
ENV PATH="/root/.nvm/versions/node/v20.11.1/bin/:${PATH}"

#Show Node.js version
RUN node --version
RUN npm --version

#Install Yarn
RUN npm install -g yarn

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install 

# Copy application code
COPY . .

# Entrypoint prepares the database.
ENTRYPOINT ["/rails/bin/docker-entrypoint-dev"]

EXPOSE 3000
EXPOSE 3036

# Start the server by default, this can be overwritten at runtime
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]

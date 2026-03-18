<div align="center">

![Project Logo](public/mini-lab-logo.svg)

# Mini Lab – Interactive Programming Learning Lab

**An interactive learning platform used by the ByteProgramming to introduce new students to real programming concepts through visual experimentation.**
<p align="center">
    <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge&logo=git&logoColor=white" alt="Status Active" />
    <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo=git&logoColor=white" alt="Version" />
    <img src="https://img.shields.io/badge/License-Private-red?style=for-the-badge&logo=github&logoColor=white" alt="License" />
</p>

</div>

<br>

## 🎯 About

Mini Lab is an interactive web platform designed for students who are starting their first semester in engineering and related programs. Its purpose is to provide a friendly, visual and intuitive first contact with the fundamental concepts of programming.

Unlike traditional teaching environments, Mini Lab allows students to modify real code fragments and immediately see the effect of their changes in a visual environment, strengthening the understanding of the relationship between code and result.

Mini Lab is also used as a showcase platform for the research and development “Semillero”, allowing new students to experience the type of projects, technologies and learning paths they can explore by joining the group.

<br>

## 🛠️ Technologies

- JavaScript
- React + Vite
- TailwindCSS
- Docker \+ Nginx
- npm

<br>

## 🚀 Getting Started

> **Note**: This project uses Docker for all development and deployment. Make sure you have Docker installed on your machine.

### Prerequisites

Before you begin, ensure you have Docker installed:

- **[Docker](https://www.docker.com)** - Latest version
- **[Docker Compose](https://docs.docker.com/compose/)** - Usually included with Docker Desktop

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/ByteProgramming1/mini-interactive-lab.git
    ```

    ```bash
    cd mini-interactive-lab
    ```

<br>

## 🏃 Running the Project

### Development Mode

To run the project in development mode with hot-reloading:

- **Start services:**

    ```bash
    docker-compose up
    ```

- **Or run in background:**

    ```bash
    docker-compose up -d
    ```

- **View logs:**

    ```bash
    docker-compose logs -f
    ```

The application will be available at: `http://localhost:8080`

**Useful Development Commands:**

- **Stop all services:**

    ```bash
    docker-compose down
    ```

- **Restart services:**

    ```bash
    docker-compose restart
    ```

- **Access container shell:**

    ```bash
    docker-compose exec app bash
    ```

- **View running containers:**

    ```bash
    docker-compose ps
    ```

### Production Mode

This is called `docker-compose.yml`:

- **Start production environment:**

    ```bash
    docker-compose -f docker-compose.yml up -d
    ```

- **Check status:**

    ```bash
    docker-compose -f docker-compose.yml ps
    ```

- **Stop production environment:**

    ```bash
    docker-compose -f docker-compose.yml down
    ```
<br>

## 🤝 Contributing

> **⚠️ IMPORTANT**: This project follows strict contribution guidelines. **All contributions MUST comply with the rules specified in [CONTRIBUTING.md](CONTRIBUTING.md)**. Pull requests that do not follow these guidelines will be rejected.

This is a ByteProgramming project, and we maintain high code quality standards.
Please read our **[Contributing Guidelines](CONTRIBUTING.md)** for detailed information on:

- 📝 Code style and conventions
- 💬 Commit message format
- 🌿 Branch naming conventions
- 🔍 Pull request requirements
- ✅ Testing requirements
- 🔧 Development workflow

**Non-compliance with [CONTRIBUTING.md](CONTRIBUTING.md) will result in PR rejection.**

<br>

## 📄 License

This project is private and belongs to Byte Semillero. All rights reserved.

<br>
<br>
<br>

<div align="center">
    <h2>All Thanks To Our Team Members 🚀</h2>
    <p>Current team members working on this project:</p>
</div>

<div align="center">
    <a href="https://github.com/LauraRo166"><img src="https://github.com/LauraRo166.png" width="60px" style="border-radius: 50%;" alt=""/></a>
</div>

# DevOps Blog

Welcome to the DevOps Blog project! This blog is designed to showcase services and highlight work as a DevOps professional. Below are the details and instructions for setting up and running the project.

## Project Structure

The project is organized as follows:

```
devops-blog
├── src
│   ├── pages
│   │   ├── index.tsx         # Homepage displaying services and recent blog posts
│   │   ├── about.tsx         # Information about the DevOps professional
│   │   ├── services.tsx      # Outline of services offered
│   │   └── blog
│   │       └── [slug].tsx    # Dynamic route for individual blog posts
│   ├── components
│   │   ├── Header.tsx        # Site navigation and branding
│   │   ├── Footer.tsx        # Copyright information and social media links
│   │   ├── PostCard.tsx      # Summary of blog posts
│   │   └── ProjectHighlight.tsx # Showcase of specific projects
│   ├── layouts
│   │   └── MainLayout.tsx    # Consistent layout structure
│   ├── styles
│   │   └── globals.css       # Global CSS styles
│   ├── lib
│   │   └── markdown.ts        # Functions for parsing and rendering markdown
│   └── data
│       ├── posts
│       │   └── example-post.md # Sample blog post in markdown format
│       └── projects.ts        # Array of project objects
├── public
│   └── robots.txt            # Instructions for web crawlers
├── .github
│   └── workflows
│       └── deploy.yml        # GitHub Actions workflow for deployment
├── Dockerfile                 # Instructions for building a Docker image
├── package.json               # npm configuration file
├── tsconfig.json             # TypeScript configuration file
├── next.config.js            # Next.js configuration settings
├── .gitignore                 # Files and directories to ignore by Git
└── README.md                  # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd devops-blog
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the blog.

## Features

- A homepage that provides an overview of services and recent blog posts.
- An about page detailing the background, skills, and experience of the DevOps professional.
- A services page outlining the services offered with descriptions and benefits.
- A dynamic blog section that fetches individual posts based on the slug parameter.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
# Welcome to your GPT Engineer project

## Project info

**Project**: microcloud-mosaic 

**URL**: https://run.gptengineer.app/projects/8800743f-ed0e-44fb-a764-df5156bcef72/improve

**Description**: You are a highly skilled code engineer specializing in full-stack development. Today, you're assigned to work on a complex project involving the integration of several microservices into an existing cloud-based architecture. Your task is to ensure that the system is optimized for scalability, security, and maintainability.

Your current project involves refactoring a legacy monolithic application into a distributed system using a microservices architecture. The application is written in Java, and you need to break it down into smaller, more manageable services that communicate over REST APIs. Additionally, the system should support real-time data processing, so you’ll need to implement a messaging queue for asynchronous communication between services.

The database is currently a single MySQL instance, but the new architecture should support a more scalable database solution. You’re considering using a combination of NoSQL databases for certain services and possibly transitioning the main database to a cloud-based SQL solution like Amazon RDS.

You also need to implement CI/CD pipelines to automate the deployment process, using tools like Jenkins or GitLab CI. Security is a top priority, so you must ensure that all services have proper authentication and authorization mechanisms in place, possibly using OAuth2 or JWT.

Finally, your team is exploring the use of containerization (with Docker) and orchestration (with Kubernetes) to manage the deployment of these microservices. Your task is to provide a comprehensive plan, outline the necessary steps, and write the required code to achieve these goals. As you work through this, you’ll need to explain your thought process, justify your decisions, and address potential challenges or trade-offs. 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/8800743f-ed0e-44fb-a764-df5156bcef72/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/8800743f-ed0e-44fb-a764-df5156bcef72/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/microcloud-mosaic.git
cd microcloud-mosaic
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/8800743f-ed0e-44fb-a764-df5156bcef72/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
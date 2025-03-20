# **LeapYearCheckAngular**

A lightweight, Angular-based web application that determines whether a given year is a leap year. The project seamlessly integrates **GitHub Pages** for hosting and **GitHub Actions** for automated CI/CD deployment, ensuring a smooth transition from local development to production.

[![Deploy Angular to GitHub Pages](https://github.com/AkshayV30/leap-year-check-angular/actions/workflows/deploy.yaml/badge.svg)](https://github.com/AkshayV30/leap-year-check-angular/actions/workflows/deploy.yaml)

---

## **🚀 Features**

✅ Built using **Angular 18.2**  
✅ Fully automated **CI/CD pipeline** with **GitHub Actions**  
✅ Hosted on **GitHub Pages** for seamless deployment  
✅ Efficient, lightweight, and easy to use

---

## **⚙️ Development Setup**

### **1️⃣ Install Dependencies**

Run the following command to install all necessary packages:

```sh
npm install
```

### **2️⃣ Run the Development Server**

Start a local development server with:

```sh
ng serve
```

Now, navigate to `http://localhost:4200/`. The application will automatically reload upon any changes.

---

## **📦 Build & Deployment**

### **🔨 Build the Project**

To generate a production-ready build, use:

```sh
ng build --output-path=dist --base-href="/leap-year-check-angular/"
```

This will create the compiled files inside the `dist/` directory.

### **🚀 Deploy to GitHub Pages**

To deploy the app on GitHub Pages, install the deployment package:

```sh
npm install angular-cli-ghpages
```

Then, deploy the build to the `gh-pages` branch using:

```sh
ngh --dir=dist/browser
```

---

## **🔄 GitHub Actions Workflow**

This project utilizes **GitHub Actions** for continuous integration and deployment:

- **Trigger:** Manual or automatic on push to the `master` branch
- **Build Process:** Installs dependencies and compiles the Angular project
- **Deployment:** Pushes the production build to the `gh-pages` branch

### **🛠️ Tech Stack**

📌 **Frontend:** Angular 18.2  
📌 **CI/CD:** GitHub Actions  
📌 **Hosting:** GitHub Pages  
📌 **Package Management:** npm

---

## **📖 Additional Resources**

For more details, refer to the [Angular CLI Documentation](https://angular.dev/tools/cli) or run:

```sh
ng help
```

---

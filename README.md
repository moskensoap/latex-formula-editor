# Overview:

An offline LaTeX formula editor that offers real-time preview with customizable rendering engines (KaTeX/MathJax). It includes features like click-to-insert LaTeX elements, clipboard export, and image export (SVG, PNG, JPG). Designed for both ease of use and offline-first functionality, the editor is lightweight and deployable on local servers.

# Features:

* __Real-time Preview__: Instantly render LaTeX formulas with KaTeX or MathJax.

* __Click-to-insert__: Easily insert LaTeX elements at the cursor.

* __Export Options__: Export formulas as SVG, PNG, JPG, or copy formulas as PNG to the clipboard.

* __Minimalistic Interface__: Clean and simple UI for focused editing.

* __Cross-Platform__: Works locally by opening `index.html` in any modern browser.

* __Customizable__: Lightweight structure for easy modifications.

# Demo:

Live demo available at: https://latex.moskensoap.xyz

# Running the Editor (For Beginners):

You can easily run the LaTeX Formula Editor by following these simple steps:

- **Option 1: Clone the repository using Git**:

  Open a terminal and run the following command:
  ```bash
  git clone https://github.com/moskensoap/latex-formula-editor.git
  ```
  Then, navigate to the project folder and open `index.html` in any modern browser.
- **Option 2: Download ZIP:**

  Go to the [repository page](https://www.github.com/moskensoap/latex-formula-editor), click "Code" > "Download ZIP", and extract the files. After extracting, simply double-click `index.html` to open it in your browser.
  
  This method does not require any installation or setup, just download and open the index.html file.

# Docker Deployment:

### 1. One-click Deployment via Docker Hub:

For users who prefer a quick deployment, you can use the pre-built Docker image available on Docker Hub. Simply run the following command:

```bash
sudo docker run -d -p 8080:80 --name latex-formula-editor moskensoap/latex-formula-editor
```

This will pull the `moskensoap/latex-formula-editor` image from Docker Hub and run it on your local machine, accessible at `http://localhost:8080` (for local use) or `http://<your-ip-address>:8080` (for remote access).

### 2. Custom Docker Deployment (if the architecture differs):

If you need a custom Docker image, or if the architecture of the provided Docker Hub image does not suit your needs, you can build your own Docker image by following these steps:

- __Create the necessary files__: Your project directory should contain the following structure:

  ```bash
  my-latex-editor/
  ├── latex-formula-editor/        # Project source (git clone https://github.com/moskensoap/latex-formula-editor.git)
  ├── Dockerfile                   # Docker build configuration (touch)
  ├── nginx.conf                   # Nginx configuration (touch)
  └── docker-compose.yml           # Docker Compose configuration (touch only if you need)
  ```

- __Dockerfile__: The `Dockerfile` specifies how to build the image. Here's the content:

  ```Dockerfile
    FROM nginx:alpine
    COPY latex-formula-editor /usr/share/nginx/html
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
  ```
  - This configuration uses the official `nginx:alpine` image, copies the project source to the appropriate location, and sets the Nginx server to run in the foreground.

- __nginx.conf__: The `nginx.conf` file contains the Nginx server settings for the project. Here is the configuration:

  ```nginx.conf
  server {
      listen 80 default_server;
      listen [::]:80 default_server;

      server_name _;

      root /usr/share/nginx/html;
      index index.html;

      location / {
          try_files $uri $uri/ =404;
      }
  }
  ```

  - This configures Nginx to serve the files from `/usr/share/nginx/html` and handle requests properly.

- __Build and Run the Docker Image__: Once you have your `Dockerfile` and `nginx.conf` set up, you can build and run your custom Docker image. Here’s the command to build the Docker image:

  ```bash
  docker build -t latex-formula-editor:latest .
  ```

  - This command builds the Docker image using the current directory (`.`) and tags it as `latex-formula-editor:latest`.

  - After building, you can run the image as follows:

  ```bash
  sudo docker run -d -p 8080:80 --name latex-formula-editor latex-formula-editor:latest
  ```

  - This runs the container from your custom-built image, mapping port 80 to port 8080 on your local machine.

### 3. Using Docker Compose:

If you prefer to use Docker Compose for easier management, create a `docker-compose.yml` file with the following content:

```yaml
services:
  latex-formula-editor:
    build:
      context: .
      dockerfile: Dockerfile
    image: latex-formula-editor:latest
    container_name: latex-formula-editor
    ports:
      - "8080:80"
    restart: unless-stopped
```

* __Start the service__: Run the following command to start the service:

```bash
docker-compose up -d
```

* __Stop the service__: To stop the service, use:

```bash
docker-compose down
```

Once the service is running, access the editor via `http://localhost:8080` (for local use) or `http://<your-ip-address>:8080` (for remote access).

# Rendering Engines & Export Support

KaTeX and MathJax are bundled in this project for convenience. You may update them by replacing the corresponding folders with the latest release from:

* KaTeX: https://github.com/KaTeX/KaTeX

* MathJax: https://github.com/mathjax/MathJax

If the release version changes the folder structure, update the paths in the source code accordingly.

Export functionality is powered by html2canvas (https://github.com/niklasvh/html2canvas), which enables conversion of rendered formulas into downloadable or clipboard-ready images.

We are grateful to these excellent open-source projects for making this editor possible.

# Feedback & Contributions

We welcome your suggestions, questions, and feature ideas!
Feel free to open an [issue](https://github.com/moskensoap/latex-formula-editor/issues) to start a discussion or report a problem.
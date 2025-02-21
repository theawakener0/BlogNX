# BlogNX - Modern Flask Blog

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Initialize Git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

4. Create and switch to the gh-pages branch:
   ```bash
   git checkout -b gh-pages
   ```

5. Copy the contents of the `build` directory to the root:
   - Copy all files from the `build` directory to the root of your repository
   - The `.nojekyll` file is already included to prevent GitHub Pages from processing the site with Jekyll

6. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

7. Configure GitHub Pages:
   - Go to your repository settings
   - Under "Pages", select the `gh-pages` branch as the source
   - Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Development

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the development server:
   ```bash
   python app.py
   ```

3. Generate static files:
   ```bash
   python build.py
   ```

## Features

- Modern, responsive design
- Dynamic particle background
- Smooth animations and transitions
- User authentication
- Blog post creation and management
- Static site generation for GitHub Pages deployment
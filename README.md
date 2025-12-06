# Portfolio - Jyoshika Reddy

A modern, responsive portfolio website built with React.js, showcasing my skills, experience, and projects as a Full Stack Engineer.

## Features

- 🎨 Modern, professional design with dark theme
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 📧 Contact form with Web3Forms integration
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO-friendly structure

## Tech Stack

- **Frontend**: React.js, Styled Components, Framer Motion
- **Backend**: Node.js, Express (for development)
- **Form Handling**: Web3Forms
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jyoshikareddy11/portfolio-jyoshikareddy.git
cd portfolio-jyoshikareddy
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

4. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Deployment

### Deploy to GitHub Pages

1. The repository is already set up for GitHub Pages deployment ✅

2. Build and deploy the site:
```bash
npm run deploy
```

This will:
- Build the React app for production
- Deploy it to the `gh-pages` branch
- Make it available at: `https://jyoshikareddy11.github.io/portfolio-jyoshikareddy`

3. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose branch: `gh-pages` and folder: `/ (root)`
   - Click "Save"

4. Your site will be live in a few minutes!

**Note**: Make sure to set the `REACT_APP_WEB3FORMS_ACCESS_KEY` environment variable in your GitHub repository secrets if you want to use the contact form in production. However, since the key is already in the code, it should work as-is.

## Environment Variables

- `REACT_APP_WEB3FORMS_ACCESS_KEY`: Your Web3Forms access key for contact form submissions

## License

This project is open source and available under the MIT License.

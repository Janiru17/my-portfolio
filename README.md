# Modern Next.js Portfolio

A responsive, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](public/preview.png)

## Features

- 🚀 Built with Next.js 13+ App Router
- 💻 Fully responsive design for all device sizes
- 🎨 Modern UI with smooth animations
- 🌓 Dark mode support
- 🧩 Modular component architecture
- 📱 Mobile-first approach
- 📊 Skills visualization
- 📝 Functional contact form
- 🔍 SEO optimized

## Technologies Used

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-portfolio.git
cd nextjs-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/               # Next.js App Router files
├── components/        # Reusable UI components
```

## Customization

### Personal Information

Update your personal information in the respective component files:

- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Biography and statistics
- `src/components/Projects.tsx` - Your portfolio projects
- `src/components/Skills.tsx` - Your technical skills
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer content and social links

### Color Scheme

The color scheme can be modified in the `tailwind.config.ts` file and the CSS variables in `src/app/globals.css`.

### Add Your Projects

Edit the `projects` array in `src/components/Projects.tsx` to add your own projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description goes here',
    image: '/path/to/your/image.jpg',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    liveUrl: 'https://your-live-project-url.com',
    codeUrl: 'https://github.com/yourusername/your-project',
  },
  // Add more projects...
];
```

## Deployment

This application can be easily deployed using [Vercel](https://vercel.com/), the platform built by the creators of Next.js:

```bash
npm install -g vercel
vercel
```

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
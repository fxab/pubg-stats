# PUBG Stats & Leaderboards ⚡️

A modern web application built with Qwik that allows players to track their PUBG (PlayerUnknown's Battlegrounds) statistics and create custom leaderboards from their match history.

## Features

- 🔍 Player Search: Look up any PUBG player by their username
- 📊 Player Statistics: View detailed player information and stats
- 🎮 Match History: Browse through recent matches with detailed performance data
- 🏆 Custom Leaderboards: Create and share custom leaderboards based on match history
- ⚡ Lightning Fast: Built with Qwik for optimal performance and interactivity

## Tech Stack

- [Qwik](https://qwik.dev/) - Framework for building instant web applications
- [QwikCity](https://qwik.dev/qwikcity/overview/) - File-based routing and more
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
- [PUBG API](https://developer.pubg.com/) - Official PUBG game data API

## Prerequisites

- Node.js (version ^18.17.0 || ^20.3.0 || >=21.0.0)
- PUBG API Key (Get one from [PUBG Developer Portal](https://developer.pubg.com/))

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/fxab/pubg-stats.git

cd pubg-stats-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your PUBG API key:

```bash
PUBG_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm start
```

## Project Structure

The application follows a standard Qwik project structure:

- `src/routes/` - Page components and API routes
- `src/components/` - Reusable UI components
- `src/libs/` - Utility functions and API integrations
- `types/` - TypeScript type definitions
- `public/` - Static assets

## Development

- Run development server: `npm start`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to PUBG for providing the API
- Built with [Qwik](https://qwik.dev/)
- UI components from [DaisyUI](https://daisyui.com/)

## Contact

Felix Aberham - [@OpsCrystal](https://twitter.com/OpsCrystal)

Project Link: [https://github.com/fxab/pubg-stats](https://github.com/fxab/pubg-stats)

---

Made with ♡ by CRYSTALOPS

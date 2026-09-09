# India Interactive 🗺️

An interactive web application for exploring India state-wise through a dynamic map. Click on any state or union territory to discover detailed information about its **history, geography, culture, politics, and economy** — all presented in a modern, dark-themed UI.

## ✨ Features

- 🗺️ **Interactive Map** – Click any Indian state or union territory to view details, powered by Leaflet.
- 📖 **Detailed State Info** – History, geography, culture, politics, and economy for every state.
- 🤖 **AI Chatbot (Saathi)** – Ask questions about Indian states, capitals, population, tourism, and more, powered by Google Gemini.
- 🌑 **Modern Dark UI** – Clean, responsive interface built with Tailwind CSS and smooth animations.
- ⚡ **Fast & Lightweight** – Built with React and Vite for a snappy experience.

## 🛠️ Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS
- React Router DOM
- Leaflet / React-Leaflet (interactive map + GeoJSON data)
- Framer Motion (animations)
- Axios

**Backend**
- Node.js + Express
- Google Gemini API (`@google/genai`) for the AI chatbot
- CORS, dotenv

## 📁 Project Structure

```
india-interactive/
├── client/          # React + Vite frontend
│   ├── public/
│   │   └── geojson/ # State boundary data for the map
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── data/
│       └── services/
└── server/          # Express backend (AI chatbot API)
    ├── server.js
    ├── routes.js
    └── controller.js
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A [Google Gemini API key](https://ai.google.dev/) for the chatbot feature

### 1. Clone the repository

```bash
git clone https://github.com/Nishant7749/india-interactive.git
cd india-interactive
```

### 2. Set up the backend

```bash
cd server
npm init -y
npm install express cors dotenv @google/genai
```

Create a `.env` file inside `server/`:

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the server:

```bash
node server.js
```

The server will run at `http://localhost:5000`.

### 3. Set up the frontend

```bash
cd ../client
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## 📜 Available Scripts (client)

| Command           | Description                     |
|-------------------|----------------------------------|
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the app for production     |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Nishant7749/india-interactive/issues).

## 📄 License

This project is open source. Add a license of your choice (e.g., MIT) if you plan to distribute it.

## 👤 Author

**Nishant7749**
- GitHub: [@Nishant7749](https://github.com/Nishant7749)

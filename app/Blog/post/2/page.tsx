import React from 'react';

const tools = [
  {
    category: "🧑‍💻 Development Environment",
    items: [
      { name: "Neovim", desc: "Fast, modern, customizable editor with LSP & plugins." },
      { name: "Wezterm", desc: "GPU-accelerated terminal with Wayland support." },
      { name: "ZSH", desc: "Smooth command-line navigation with Oh My Zsh." },
      { name: "Tmux", desc: "Terminal multiplexer for managing multiple sessions." },
      { name: "Lazygit", desc: "TUI for Git that makes repository management intuitive." },
    ],
  },
  {
    category: "⚡ Productivity & Utilities",
    items: [
      { name: "Bat", desc: "Modern replacement for cat with syntax highlighting." },
      { name: "Btop++", desc: "Feature-rich system monitor with real-time metrics." },
      { name: "FZF", desc: "Fuzzy finder for faster navigation across codebases." },
      { name: "Better Commit", desc: "Ensures consistent and clean Git commit messages." },
      { name: "Neofetch", desc: "Aesthetic system info tool for your terminal." },
      { name: "Hyprshot", desc: "Lightweight screenshot tool for documentation." },
      { name: "Cava", desc: "Terminal-based audio visualizer for fun coding sessions." },
    ],
  },
  {
    category: "🧪 API & Database Management",
    items: [
      { name: "Posting", desc: "Lightweight API testing tool, faster alternative to Postman." },
      { name: "Harlequin", desc: "Minimalist SQL IDE for efficient querying." },
    ],
  },
  {
    category: "🎨 Other Essentials",
    items: [
      { name: "Nerd Fonts", desc: "Enhanced fonts (Cascadia + Fira) with icons & symbols." },
    ],
  },
];

export default function SecondBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 mt-20">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        My 2025 Stack as a Frontend Developer
      </h1>
      <p className="text-sm text-gray-500 mb-6">By Shashank S P · Sept 24, 2025 · 4 min read</p>

      {/* Intro */}
      <div className="prose dark:prose-invert max-w-none mb-10">
        <p>
          As a Frontend Developer in 2025, my development workflow is centered around tools that
          enable me to work faster and more effectively. Let me walk you through the stack I rely
          on every day.
        </p>
      </div>

      {/* Tools */}
      {tools.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          <ul className="space-y-3">
            {section.items.map((tool, j) => (
              <li
                key={j}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg">{tool.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{tool.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Closing */}
      <div className="prose dark:prose-invert max-w-none">
        <h2>📈 Final Thoughts</h2>
        <p>
          The frontend landscape is always evolving. By keeping my stack lean and efficient, I can
          focus on building high-quality projects without distractions.
        </p>
      </div>
    </div>
  );
}
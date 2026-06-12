"use client"

import { useState } from "react"

const categories = ["Todas", "+18", "Proibido", "Romance", "Drama", "Vingança", "Mistério"]

export function CategoryPills() {
  const [active, setActive] = useState("Todas")

  return (
    <nav className="mt-8 overflow-x-auto px-5 no-scrollbar">
      <ul className="flex w-max items-center gap-3">
        {categories.map((cat) => {
          const isActive = active === cat
          return (
            <li key={cat}>
              <button
                type="button"
                onClick={() => setActive(cat)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "gradient-rose text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-card text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

#  User Dashboard – React + Bootstrap

------
Features

### 1️⃣ Display a list of users
- Show a list of user cards with:
  - Avatar (placeholder image)
  - Name
  - Email
  - “View Profile” button

### 2️⃣ User Selection
- When a user card is clicked, display the selected user’s name above the list  
  → Example: `Selected: Jane Doe`

### 3️⃣ Order Summary
- Calculates and displays:
  - The number of users with `status === 'completed'`
  - The total sum of their `total` field values  
  → Example: `Completed Orders: 4 | Total: $1150`

### 4️⃣ Responsive Layout & Styling
- Clean Bootstrap-based grid system
- Hover effects on cards
- Cards adjust gracefully across screen sizes

------
Installation & Run

# 1. Create project using Vite: npm create vite@latest my-react-app 

  + Select a framework: › - Use arrow-keys. Return to submit.
      Vanilla
      Vue
    ❯ React
      Preact
      Lit
      Svelte
      Solid
      Qwik

  + Select a variant: ›
      JavaScript
    ❯ TypeScript
      ...

# 2. Go to folder
cd my-react-app

# 3. Install dependencies
npm install

# 4. Add Bootstrap, Animate
npm install bootstrap
npm install animate.css

# 5. Import Bootstrap in src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

# 6. Run project
npm run dev

--------

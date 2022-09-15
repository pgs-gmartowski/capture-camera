import './style.css'
import typescriptLogo from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Capture Camera</h1>
    <div class="card">
        <input
          type="file"
          id="environment"
          capture="environment"
          accept="video/*"
          class="file-input"
        >
        <input
          type="file"
          id="user"
          capture="user"
          accept="image/*"
          class="file-input"
        >
    </div>
  </div>
`;

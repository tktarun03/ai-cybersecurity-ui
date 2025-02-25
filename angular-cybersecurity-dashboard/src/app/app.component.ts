import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Cybersecurity UI Dashboard</h1>
    <div class="dashboard">
      <security-monitor></security-monitor>
      <wasm-threat-analysis></wasm-threat-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }
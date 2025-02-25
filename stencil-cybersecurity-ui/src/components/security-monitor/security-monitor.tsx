import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'security-monitor',
  styleUrl: 'security-monitor.css',
  shadow: true
})
export class SecurityMonitor {
  @State() securityStatus: string = "Monitoring network activity...";

  analyzeThreats() {
    const threats = [
      "✅ No Threats Detected - System Secure",
      "⚠️ Suspicious Login Attempt Detected",
      "🚨 Ransomware Activity Identified!",
      "🔍 Phishing Attack Prevented",
      "🔴 High-Risk Network Traffic Alert!"
    ];
    this.securityStatus = threats[Math.floor(Math.random() * threats.length)];
  }

  render() {
    return (
      <div class="security-box">
        <h2>AI Cybersecurity Monitor</h2>
        <button onClick={() => this.analyzeThreats()}>Scan for Threats</button>
        <p>{this.securityStatus}</p>
      </div>
    );
  }
}

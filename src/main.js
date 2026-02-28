import { sprig } from '@sprig-technologies/sprig-browser';

// Sprig initialization
export const Sprig = sprig.configure({
  environmentId: 'YOUR_ENV_ID',
});

// Simple Event Listener
document.getElementById('track-btn').addEventListener('click', () => {
  Sprig('track', 'ionic_button_clicked');
  console.log('capacitor event fire');
});
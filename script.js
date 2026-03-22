const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Console easter egg
console.log(
  '%c alexmcc.dev %c\n\nHey, you opened devtools. Respect.\nIf you want to build something together: alexmcc.dev@gmail.com\n\nTip: press / to toggle the cursor trail.\n',
  'background:#1a1a1a;color:#faf9f7;font-weight:700;padding:3px 8px;border-radius:4px;font-size:13px',
  'color:#555;font-size:12px'
);

// Letter stagger animation on h1
document.addEventListener('DOMContentLoaded', function () {
  const h1 = document.querySelector('h1');
  if (!h1 || reducedMotion) return;

  const text = h1.textContent;
  h1.textContent = '';

  text.split('').forEach(function (char, i) {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 380, delay: i * 35, easing: 'ease-out', fill: 'backwards' }
    );
    h1.appendChild(span);
  });
});

// Cursor token trail
if (!reducedMotion) {
  let trailEnabled = true;

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && e.target === document.body) trailEnabled = !trailEnabled;
  });

  const tokens = [
    '{}', '()', '=>', '//', '[]', '&&', '||', '!=', '==',
    '++', '--', '**', '??', '|>', '/*', '*/', '<<', '>>',
    'fn', 'if', 'px', 'db', 'rx',
  ];
  const colors = ['#f97316', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];
  let last = 0;

  document.addEventListener('mousemove', function (e) {
    if (!trailEnabled) return;
    const now = Date.now();
    if (now - last < 50) return;
    last = now;

    const el = document.createElement('span');
    el.textContent = tokens[Math.floor(Math.random() * tokens.length)];
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = [
      'position:fixed',
      'pointer-events:none',
      'z-index:9999',
      'font-family:monospace',
      'font-size:11px',
      'font-weight:600',
      'user-select:none',
      `left:${e.clientX}px`,
      `top:${e.clientY}px`,
      `color:${colors[Math.floor(Math.random() * colors.length)]}`,
      'transform:translate(-50%,-50%)',
      'white-space:nowrap',
    ].join(';');

    document.body.appendChild(el);

    el.animate(
      [
        { opacity: 0.9, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: `translate(${(Math.random() - 0.5) * 28}px, ${-22 - Math.random() * 18}px) scale(0.5)` },
      ],
      { duration: 600, easing: 'ease-out' }
    ).onfinish = function () { el.remove(); };
  });
}

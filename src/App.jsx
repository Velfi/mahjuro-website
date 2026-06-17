import React from 'react';

const steamUrl = 'https://store.steampowered.com/app/4636490/Mahjuro/';
const appStoreUrl = 'https://apps.apple.com/us/app/mahjuro/id6762390942';
const trailerUrl = 'https://www.youtube.com/watch?v=FvnPNr-SzmE';

const screenshots = [
  {
    src: '/screenshots/defeat-scene.png',
    alt: 'Mahjuro defeat scene inside the House'
  },
  {
    src: '/screenshots/shop-scene.png',
    alt: 'Mahjuro shop cabinet filled with curios and relics'
  },
  {
    src: '/screenshots/hallway-scene.png',
    alt: 'Mahjuro hallway scene inside the House'
  },
  {
    src: '/screenshots/gameplay-scene.png',
    alt: 'Mahjuro gameplay table with a high-scoring hand in progress'
  },
  {
    src: '/screenshots/stairway-scene.png',
    alt: 'Mahjuro stairway scene inside the House'
  },
  {
    src: '/screenshots/archive-scene.png',
    alt: 'Mahjuro archive and collection interface'
  }
];

const stats = [
  ['7', 'wings'],
  ['21', 'chambers'],
  ['100+', 'relics'],
  ['15', 'yaku']
];

const items = [
  ['/assets/relic.png', 'Relic'],
  ['/assets/talisman.png', 'Talisman'],
  ['/assets/tile-pack.png', 'Tile pack'],
  ['/assets/zodiac.png', 'Zodiac']
];

const supportEmail = 'support@zeldas.page';
const bugReportUrl = 'https://github.com/Velfi/Mahjuro/issues';

function normalizePath(pathname) {
  if (!pathname) return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

function StoreButton({ href, label, detail, variant = 'primary' }) {
  return (
    <a className={`store-button ${variant}`} href={href} target="_blank" rel="noreferrer">
      <span>{label}</span>
      <small>{detail}</small>
    </a>
  );
}

function SupportPage() {
  return (
    <main className="support-page">
      <section className="support-hero">
        <div className="support-shell">
          <a className="support-back" href="/">
            Mahjuro home
          </a>
          <p className="eyebrow">Support</p>
          <h1 className="support-title">Mahjuro support for Steam and Mac App Store</h1>
          <p className="support-lede">
            Help for installation, saves, achievements, tile mods, and troubleshooting across both storefronts.
          </p>
          <div className="support-links">
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            <a href={bugReportUrl} target="_blank" rel="noreferrer">
              Report bugs on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="support-shell">
          <h2>Where to get help</h2>
          <p>
            Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> for account, install, or save questions. Use{' '}
            <a href={bugReportUrl} target="_blank" rel="noreferrer">
              GitHub issues
            </a>{' '}
            for bug reports, crash logs, and reproducible gameplay problems.
          </p>
        </div>
      </section>

      <section className="support-section">
        <div className="support-shell">
          <h2>System requirements</h2>
          <div className="support-table">
            <div><strong>Steam</strong></div>
            <div>Windows and macOS builds are available.</div>
            <div><strong>Mac App Store</strong></div>
            <div>macOS 11.0 or later.</div>
            <div><strong>GPU</strong></div>
            <div>4 GB VRAM minimum at 1080p with Low memory graphics. 6 GB or more is recommended for Visuals.</div>
            <div><strong>Input</strong></div>
            <div>Keyboard and mouse, plus SDL3 gamepad support for Xbox, PlayStation, Switch, Steam Deck, and similar controllers.</div>
            <div><strong>Network</strong></div>
            <div>Optional. Steam uses Steamworks services. Mac App Store uses Game Center achievements.</div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="support-shell">
          <h2>Getting started</h2>
          <ol className="support-list ordered">
            <li>Launch Mahjuro and start a new run.</li>
            <li>Follow the tutorial if you are new to mahjong hands and yaku.</li>
            <li>Between blinds, visit the shop to buy relics, talismans, tile packs, and upgrades.</li>
            <li>Use Options for graphics, controls, tile sets, and play-stat export.</li>
          </ol>
        </div>
      </section>

      <section className="support-section">
        <div className="support-shell">
          <h2>Saves, settings, and backups</h2>
          <p>Saves include `profile_*.json`, `settings.json`, run history, logs, and local tileset mods.</p>
          <div className="support-cards">
            <article className="support-card">
              <h3>Steam and direct desktop builds</h3>
              <p>Save data lives in the standard Mahjuro config folder for your OS:</p>
              <pre><code>macOS: ~/Library/Application Support/Mahjuro/
Windows: %APPDATA%\\Mahjuro\\
Linux: ~/.config/Mahjuro/</code></pre>
              <p>Steam Cloud can sync save files if Steam Cloud is enabled for the game and for your account.</p>
            </article>
            <article className="support-card">
              <h3>Mac App Store</h3>
              <p>The App Store build keeps save data inside the sandbox container:</p>
              <pre><code>~/Library/Containers/com.zelda-built-this.Mahjuro.store/Data/Library/Application Support/Mahjuro/</code></pre>
              <p>Progress is local to the App Store build and does not transfer automatically to Steam.</p>
            </article>
          </div>
          <p>To back up saves, quit the game, copy the full Mahjuro folder, then restore it before relaunching.</p>
        </div>
      </section>

      <section className="support-section">
        <div className="support-shell">
          <h2>Achievements and storefront features</h2>
          <div className="support-cards">
            <article className="support-card">
              <h3>Steam</h3>
              <ul className="support-list">
                <li>Achievements and stats use Steamworks.</li>
                <li>Steam overlay support is included.</li>
                <li>Steam Workshop is available for tileset sharing and subscriptions.</li>
                <li>Steam Cloud may sync saves depending on your Steam settings.</li>
              </ul>
            </article>
            <article className="support-card">
              <h3>Mac App Store</h3>
              <ul className="support-list">
                <li>Achievements use Game Center.</li>
                <li>Sign in under System Settings → Game Center.</li>
                <li>The app only uses network access for Game Center features.</li>
                <li>Workshop and Steam Cloud are not available.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="support-shell">
          <h2>Custom tile sets and play-stat export</h2>
          <p>
            Local tile mods are supported on both storefronts. Open the mods folder from the in-game Options menu, copy the
            `_template` folder, and add `atlas.png` plus `atlas.toml`.
          </p>
          <div className="support-cards">
            <article className="support-card">
              <h3>Local mod folders</h3>
              <pre><code>macOS: ~/Library/Application Support/Mahjuro/mods/tilesets/
Windows: %APPDATA%\\Mahjuro\\mods\\tilesets\\
Linux: ~/.config/Mahjuro/mods/tilesets/</code></pre>
            </article>
            <article className="support-card">
              <h3>Storefront differences</h3>
              <ul className="support-list">
                <li>Steam adds Workshop browsing, subscriptions, and publishing.</li>
                <li>Mac App Store supports local tileset mods only.</li>
                <li>Export play stats writes an HTML summary when you choose a save location.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="support-shell">
          <h2>Troubleshooting</h2>
          <div className="support-cards">
            <article className="support-card">
              <h3>Launch issues or crashes</h3>
              <ul className="support-list">
                <li>Update macOS or graphics drivers.</li>
                <li>Try Low memory or Performance graphics settings.</li>
                <li>Send the crash log from `Mahjuro/logs/crash.log` in your save folder.</li>
              </ul>
            </article>
            <article className="support-card">
              <h3>Performance issues</h3>
              <ul className="support-list">
                <li>Lower graphics quality.</li>
                <li>Close other GPU-heavy apps.</li>
                <li>On laptops, plug into power before testing performance.</li>
              </ul>
            </article>
            <article className="support-card">
              <h3>Achievements not unlocking</h3>
              <ul className="support-list">
                <li>Steam: confirm Steam is running and the overlay is enabled.</li>
                <li>Mac App Store: confirm Game Center sign-in with the same Apple ID used for purchase.</li>
                <li>Restart the game after signing in or reconnecting platform services.</li>
              </ul>
            </article>
            <article className="support-card">
              <h3>Cross-store progress</h3>
              <ul className="support-list">
                <li>Steam and Mac App Store are separate products.</li>
                <li>Saves, achievements, and storefront services do not sync between them automatically.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Mahjuro home">
            <img src="/assets/icon.png" alt="" />
            <span>Mahjuro</span>
          </a>
          <div className="nav-links">
            <a href="#trailer">Trailer</a>
            <a href="#gallery">Gallery</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Mahjong roguelite deckbuilder</p>
            <h1 className="script-display">Build the hands. Break the rules.</h1>
            <p className="lede">
              A mahjong roguelite deckbuilder for new and experienced players.
              Build melds, cash in hands, and stack upgrades across each run.
            </p>
            <div className="hero-points" aria-label="Mahjuro highlights">
              <span>7 wings, 21 chambers, 14 ordeals</span>
              <span>100+ relics and 15 yaku to unlock</span>
              <span>Windows and macOS</span>
            </div>
            <div className="cta-row" aria-label="Store links">
              <StoreButton href={steamUrl} label="Wishlist on Steam" detail="Windows and macOS" />
              <StoreButton href={appStoreUrl} label="Buy on Mac App Store" detail="$5.99" variant="secondary" />
            </div>
          </div>

          <div className="hero-media" aria-label="Mahjuro gameplay preview">
            <img className="hero-shot" src="/screenshots/main-menu-scene.png" alt="Mahjuro main menu screenshot" />
            <img className="logo-mark" src="/assets/main-menu-logo.png" alt="Mahjuro logo" />
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Game facts">
        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="trailer band" id="trailer">
        <div className="section-heading">
          <p className="eyebrow">Trailer</p>
          <h2>See the House come alive.</h2>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/FvnPNr-SzmE"
            title="Mahjuro trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a className="text-link" href={trailerUrl} target="_blank" rel="noreferrer">
          Watch on YouTube
        </a>
      </section>

      <section className="gallery band" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Screenshots</p>
          <h2>Step deeper into the House.</h2>
        </div>
        <div className="screenshot-grid">
          {screenshots.map(({ src, alt }, index) => (
            <img
              src={src}
              alt={alt}
              key={alt}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </section>

      <section className="systems band">
        <div className="systems-copy">
          <p className="eyebrow">Inside the storeroom</p>
          <h2>Change the run between chambers.</h2>
          <p>
            Spend winnings between chambers to change scoring, tile behavior,
            and available lines of play.
          </p>
        </div>
        <div className="item-rail" aria-label="Game item art">
          {items.map(([src, alt]) => (
            <figure key={alt}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <img src="/assets/icon.png" alt="" />
        <div>
          <p className="eyebrow">Available June 16, 2026</p>
          <h2 className="script-display">Step into the House.</h2>
        </div>
        <div className="cta-row">
          <StoreButton href={steamUrl} label="Steam" detail="Wishlist now" />
          <StoreButton href={appStoreUrl} label="Mac App Store" detail="Buy version 0.6.0" variant="secondary" />
        </div>
      </section>

      <footer>
        <span>Mahjuro by Zelda Hessler</span>
        <span>Mahjong roguelite for Windows and macOS</span>
      </footer>
    </main>
  );
}

function App() {
  const pathname = typeof window === 'undefined' ? '/' : normalizePath(window.location.pathname);
  const isSupportPage = pathname === '/support';

  React.useEffect(() => {
    document.title = isSupportPage
      ? 'Mahjuro Support | Steam and Mac App Store'
      : 'Mahjuro | Mahjong Roguelite Deckbuilder';
  }, [isSupportPage]);

  return isSupportPage ? <SupportPage /> : <HomePage />;
}

export default App;

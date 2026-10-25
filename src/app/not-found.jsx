'use client';
import React from 'react';

const styles = `
  .nf-page {
    --nf-bg: #f7f8fa;
    --nf-text: #14181f;
    --nf-muted: #5b6472;
    --nf-accent: #2f5bea;
    --nf-accent-text: #ffffff;
    --nf-border: #d5d9e0;

    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    background: var(--nf-bg);
    color: var(--nf-text);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    .nf-page {
      --nf-bg: #0f1218;
      --nf-text: #eef0f4;
      --nf-muted: #98a1b0;
      --nf-accent: #7b9bff;
      --nf-accent-text: #0f1218;
      --nf-border: #2b3240;
    }
  }

  .nf-content {
    max-width: 30rem;
    text-align: center;
  }

  .nf-code {
    margin: 0;
    font-size: clamp(5rem, 22vw, 9rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
    color: var(--nf-accent);
  }

  .nf-title {
    margin: 1rem 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 650;
  }

  .nf-text {
    margin: 0 0 2rem;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--nf-muted);
  }

  .nf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .nf-btn {
    display: inline-block;
    padding: 0.7rem 1.25rem;
    border-radius: 8px;
    border: 1px solid var(--nf-border);
    background: transparent;
    color: var(--nf-text);
    font: inherit;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }

  .nf-btn:hover {
    border-color: var(--nf-accent);
  }

  .nf-btn--primary {
    background: var(--nf-accent);
    border-color: var(--nf-accent);
    color: var(--nf-accent-text);
  }

  .nf-btn--primary:hover {
    filter: brightness(1.08);
  }

  .nf-btn:focus-visible {
    outline: 3px solid var(--nf-accent);
    outline-offset: 2px;
  }
`;

const NotFoundPage = () => {
    const handleGoBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    return (
        <main className="nf-page">
            <style>{styles}</style>
            <div className="nf-content">
                <p className="nf-code" aria-hidden="true">404</p>
                <h1 className="nf-title">Page not found</h1>
                <p className="nf-text">
                    The page you’re looking for doesn’t exist or has been moved.
                    Check the address for typos, or head back to where you came from.
                </p>
                <div className="nf-actions">
                    {/* If you use react-router, swap this <a> for <Link to="/"> */}
                    <a className="nf-btn nf-btn--primary" href="/">
                        Go to home page
                    </a>
                    <button type="button" className="nf-btn" onClick={handleGoBack}>
                        Go back
                    </button>
                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;

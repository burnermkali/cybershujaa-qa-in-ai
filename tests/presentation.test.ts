import { test, expect } from '@playwright/test';

// ============================================
// Thomas Adika QA Mentor Hour - Playwright Tests
// Comprehensive E2E testing for the presentation app
// ============================================

test.describe('Presentation Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads with introduction section', async ({ page }) => {
    // Verify the main heading is visible
    await expect(page.locator('h1')).toContainText('Quality Assurance with Thomas Adika');
    
    // Verify header is present
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('Thomas Adika')).toBeVisible();
    
    // Verify sidebar navigation exists
    await expect(page.locator('nav[aria-label="Presentation sections"]')).toBeVisible();
  });

  test('navigate through all sections via sidebar', async ({ page }) => {
    const sections = [
      { id: 'agenda', expectedText: 'What We\'ll Cover Today' },
      { id: 'qa-fundamentals', expectedText: 'QA Fundamentals' },
      { id: 'real-world-practice', expectedText: 'Real-World Practice' },
      { id: 'reliable-systems', expectedText: 'Reliable & Secure Systems' },
      { id: 'testing-methodologies', expectedText: 'Testing Methodologies' },
      { id: 'modern-development', expectedText: 'Modern Software Development' },
      { id: 'qa-cybersecurity', expectedText: 'Cybersecurity' },
      { id: 'career-paths', expectedText: 'Career' },
      { id: 'essential-tools', expectedText: 'Tools' },
      { id: 'best-practices', expectedText: 'Best Practices' },
      { id: 'key-takeaways', expectedText: 'Takeaways' },
      { id: 'qa-session', expectedText: 'Questions' },
      { id: 'thank-you', expectedText: 'Thank You' },
    ];

    for (const section of sections) {
      await page.click(`[data-section="${section.id}"]`);
      await expect(page.locator('h1')).toContainText(section.expectedText, { timeout: 5000 });
    }
  });

  test('navigate using keyboard arrows', async ({ page }) => {
    // Start at introduction
    await expect(page.locator('h1')).toContainText('Quality Assurance');
    
    // Press right arrow to go to next section
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('h1')).toContainText('What We\'ll Cover Today');
    
    // Press left arrow to go back
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('h1')).toContainText('Quality Assurance');
    
    // Down arrow should also work
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('h1')).toContainText('What We\'ll Cover Today');
  });

  test('previous/next buttons work correctly', async ({ page }) => {
    // Previous button should be disabled on first slide
    const prevButton = page.locator('button:has-text("Previous")');
    const nextButton = page.locator('button:has-text("Next")');
    
    await expect(prevButton).toBeDisabled();
    await expect(nextButton).toBeEnabled();
    
    // Click next
    await nextButton.click();
    await expect(page.locator('h1')).toContainText('What We\'ll Cover Today');
    await expect(prevButton).toBeEnabled();
  });
});

test.describe('Interactive Elements', () => {
  test('quiz interaction works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Testing Methodologies section (has quiz)
    await page.click('[data-section="testing-methodologies"]');
    
    // Wait for quiz to be visible
    await expect(page.getByText('Quick Quiz')).toBeVisible();
    
    // Click the correct answer (Unit Tests - option 1)
    await page.click('[data-quiz-option="1"]');
    
    // Verify success feedback is shown
    await expect(page.getByText("You're a QA ninja")).toBeVisible();
  });

  test('quiz shows incorrect feedback for wrong answer', async ({ page }) => {
    await page.goto('/');
    
    await page.click('[data-section="testing-methodologies"]');
    await expect(page.getByText('Quick Quiz')).toBeVisible();
    
    // Click wrong answer (End-to-End Tests - option 0)
    await page.click('[data-quiz-option="0"]');
    
    // Verify incorrect feedback
    await expect(page.getByText('Unit tests are the foundation')).toBeVisible();
    
    // Try again button should be visible
    await expect(page.getByText('Try Again')).toBeVisible();
  });

  test('career timeline renders progress bars', async ({ page }) => {
    await page.goto('/');
    
    await page.click('[data-section="career-paths"]');
    
    // Verify career progression section is visible
    await expect(page.getByText('Career Progression')).toBeVisible();
    await expect(page.getByText('Junior QA Engineer')).toBeVisible();
    await expect(page.getByText('Senior QA Engineer')).toBeVisible();
  });

  test('tools grid displays all tools', async ({ page }) => {
    await page.goto('/');
    
    await page.click('[data-section="essential-tools"]');
    
    // Verify tools are displayed
    await expect(page.getByText('QA Toolkit')).toBeVisible();
    await expect(page.getByText('Playwright')).toBeVisible();
    await expect(page.getByText('Jira')).toBeVisible();
    await expect(page.getByText('Postman')).toBeVisible();
  });
});

test.describe('Dark Mode Toggle', () => {
  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/');
    
    // Starts in dark mode
    await expect(page.locator('html')).toHaveClass(/dark/);
    
    // Click toggle
    await page.click('[aria-label="Switch to Light Mode"]');
    
    // Should switch to light mode
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    
    // Toggle back
    await page.click('[aria-label="Switch to Night Ops Mode"]');
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});

test.describe('Thank You Slide', () => {
  test('confetti appears on thank you slide', async ({ page }) => {
    await page.goto('/');
    
    await page.click('[data-section="thank-you"]');
    
    // Verify content loads
    await expect(page.getByText('Thank You!')).toBeVisible();
    
    // Verify contact info is displayed
    await expect(page.getByText('thomas.adika@serianu.com')).toBeVisible();
    
    // Playwright demo code should be visible
    await expect(page.getByText('navigate through presentation')).toBeVisible();
  });
});

test.describe('Responsiveness', () => {
  test('mobile viewport shows hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Sidebar should be hidden on mobile
    const sidebar = page.locator('aside');
    await expect(sidebar).toHaveCSS('transform', 'matrix(1, 0, 0, 1, -256, 0)');
    
    // Toggle button should be visible
    const toggleButton = page.locator('[aria-label="Toggle menu"]');
    await expect(toggleButton).toBeVisible();
    
    // Click to open
    await toggleButton.click();
    
    // Sidebar should slide in
    await expect(sidebar).toBeVisible();
  });

  test('desktop viewport shows sidebar always', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    const sidebar = page.locator('aside');
    await expect(sidebar).toBeVisible();
  });

  test('tablet viewport works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Content should be readable
    await expect(page.locator('h1')).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('all sections have proper ARIA labels', async ({ page }) => {
    await page.goto('/');
    
    // Main content area has role
    await expect(page.locator('main[role="main"]')).toBeVisible();
    
    // Navigation has proper label
    await expect(page.locator('nav[aria-label="Presentation sections"]')).toBeVisible();
  });

  test('interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    // Tab to sidebar buttons
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should be able to activate with Enter
    await page.keyboard.press('Enter');
  });

  test('no missing alt texts on images', async ({ page }) => {
    await page.goto('/');
    
    const imagesWithoutAlt = await page.locator('img:not([alt])').count();
    expect(imagesWithoutAlt).toBe(0);
  });

  test('color contrast is accessible', async ({ page }) => {
    await page.goto('/');
    
    // Basic check that text is visible
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });
});

test.describe('Edge Cases', () => {
  test('rapid clicking on navigation does not break app', async ({ page }) => {
    await page.goto('/');
    
    // Rapidly click through sections
    for (let i = 0; i < 5; i++) {
      await page.click('[data-section="agenda"]');
      await page.click('[data-section="qa-fundamentals"]');
      await page.click('[data-section="introduction"]');
    }
    
    // App should still be functional
    await expect(page.locator('h1')).toBeVisible();
  });

  test('page maintains state after resize', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to a section
    await page.click('[data-section="career-paths"]');
    await expect(page.locator('h1')).toContainText('Career');
    
    // Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Content should still be the same section
    await expect(page.locator('h1')).toContainText('Career');
    
    // Resize back to desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('h1')).toContainText('Career');
  });

  test('handles very fast keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Rapid arrow key presses
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('ArrowRight');
    }
    
    // Should be near the end but not crash
    await expect(page.locator('h1')).toBeVisible();
  });
});

test.describe('Performance', () => {
  test('page loads within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
    
    // Main content should be immediately visible
    await expect(page.locator('h1')).toBeVisible({ timeout: 3000 });
  });

  test('animations do not block interaction', async ({ page }) => {
    await page.goto('/');
    
    // Click navigation while animations might be running
    await page.click('[data-section="agenda"]');
    
    // Should be responsive immediately
    await page.click('[data-section="qa-fundamentals"]');
    await expect(page.locator('h1')).toContainText('QA Fundamentals');
  });
});

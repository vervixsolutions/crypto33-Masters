// Books Page Popup Handler
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('booksPopup');
    const popupTitle = document.getElementById('booksPopupTitle');
    const popupSubtitle = document.getElementById('booksPopupSubtitle');
    const popupContent = document.getElementById('booksPopupContent');
    const popupIcon = document.getElementById('booksPopupIcon');
    const closeBtn = document.querySelector('.books-popup-close-btn');

    // Content data for different button types
    const popupContentData = {
        // Preview buttons
        'preview-crypto33': {
            icon: '📚',
            title: 'Preview: Crypto33',
            subtitle: 'The Freedom Blueprint',
            content: `
                <div class="books-popup-book-info">
                    <h3 class="books-popup-book-title">Crypto33: The Freedom Blueprint</h3>
                    <p class="books-popup-book-author">By Crypto33 Masters</p>
                    <p class="books-popup-book-description">33 laws to protect your wealth, guard your privacy, and build generational freedom in a world that's quietly tightening the controls. This comprehensive guide combines practical strategies with philosophical insights for true sovereignty.</p>
                </div>
                <p class="books-popup-text">Get a sneak peek into the first 3 chapters of Crypto33: The Freedom Blueprint. This preview includes:</p>
                <ul class="books-popup-list">
                    <li>Introduction: Why Freedom Matters Now</li>
                    <li>Chapter 1: The 33 Laws Overview</li>
                    <li>Chapter 2: Wealth Protection Strategies</li>
                    <li>Chapter 3: Privacy in the Digital Age</li>
                </ul>
                <div class="books-popup-features">
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">📄</span>
                        <h4 class="books-popup-feature-title">PDF Download</h4>
                        <p class="books-popup-feature-text">Get instant access to the preview PDF</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">👁️</span>
                        <h4 class="books-popup-feature-title">Online Reader</h4>
                        <p class="books-popup-feature-text">Read directly in your browser</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">⚡</span>
                        <h4 class="books-popup-feature-title">Instant Access</h4>
                        <p class="books-popup-feature-text">No signup required for preview</p>
                    </div>
                </div>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="window.open('#', '_blank')">
                        <span class="books-popup-button-icon">📖</span>
                        Read Preview Online
                    </button>
                    <button class="books-popup-button books-popup-button--secondary" onclick="downloadPreview('crypto33')">
                        <span class="books-popup-button-icon">⬇️</span>
                        Download PDF
                    </button>
                </div>
            `
        },
        'preview-fog-to-fire': {
            icon: '🔥',
            title: 'Preview: From Fog to Fire',
            subtitle: 'One Man\'s Journey',
            content: `
                <div class="books-popup-book-info">
                    <h3 class="books-popup-book-title">From Fog to Fire</h3>
                    <p class="books-popup-book-author">By Crypto33 Masters</p>
                    <p class="books-popup-book-description">One man's journey from burnout to breakthrough — reclaim your health, restore your energy, and rediscover your purpose. A raw, honest account of recovery and transformation.</p>
                </div>
                <p class="books-popup-text">Preview the first chapters of this powerful health recovery story:</p>
                <ul class="books-popup-list">
                    <li>Introduction: The Fog</li>
                    <li>Chapter 1: Hitting Rock Bottom</li>
                    <li>Chapter 2: The First Steps</li>
                    <li>Chapter 3: Finding the Fire</li>
                </ul>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="window.open('#', '_blank')">
                        <span class="books-popup-button-icon">📖</span>
                        Read Preview Online
                    </button>
                    <button class="books-popup-button books-popup-button--secondary" onclick="downloadPreview('fog-to-fire')">
                        <span class="books-popup-button-icon">⬇️</span>
                        Download PDF
                    </button>
                </div>
            `
        },
        // Buy Now buttons
        'buy-crypto33': {
            icon: '💰',
            title: 'Purchase: Crypto33',
            subtitle: 'The Freedom Blueprint',
            content: `
                <div class="books-popup-book-info">
                    <h3 class="books-popup-book-title">Crypto33: The Freedom Blueprint</h3>
                    <p class="books-popup-book-author">Complete Edition</p>
                    <p class="books-popup-book-description">Get the full book with all 33 laws, bonus checklists, diagrams, and case studies. Includes lifetime updates and access to the Crypto33 community.</p>
                </div>
                <div class="books-popup-features">
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">📚</span>
                        <h4 class="books-popup-feature-title">Full Book</h4>
                        <p class="books-popup-feature-text">Complete 33 laws guide</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">🎁</span>
                        <h4 class="books-popup-feature-title">Bonus Materials</h4>
                        <p class="books-popup-feature-text">Checklists & case studies</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">⭐</span>
                        <h4 class="books-popup-feature-title">XP Rewards</h4>
                        <p class="books-popup-feature-text">+200 XP + Badge unlock</p>
                    </div>
                </div>
                <p class="books-popup-text"><strong>Price: $29.99</strong></p>
                <p class="books-popup-text">Available formats: PDF, EPUB, Paperback (shipping extra)</p>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="purchaseBook('crypto33')">
                        <span class="books-popup-button-icon">🛒</span>
                        Add to Cart
                    </button>
                    <button class="books-popup-button books-popup-button--secondary" onclick="openPopup('preview-crypto33')">
                        <span class="books-popup-button-icon">👁️</span>
                        Preview First
                    </button>
                </div>
            `
        },
        'buy-fog-to-fire': {
            icon: '💰',
            title: 'Purchase: From Fog to Fire',
            subtitle: 'Health Recovery Journey',
            content: `
                <div class="books-popup-book-info">
                    <h3 class="books-popup-book-title">From Fog to Fire</h3>
                    <p class="books-popup-book-author">Complete Edition</p>
                    <p class="books-popup-book-description">The complete story of recovery, including all chapters, bonus health protocols, and access to the Fog Breaker XP community resources.</p>
                </div>
                <div class="books-popup-features">
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">📚</span>
                        <h4 class="books-popup-feature-title">Full Book</h4>
                        <p class="books-popup-feature-text">Complete recovery story</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">💊</span>
                        <h4 class="books-popup-feature-title">Health Protocols</h4>
                        <p class="books-popup-feature-text">Bonus supplement guides</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">⭐</span>
                        <h4 class="books-popup-feature-title">XP Rewards</h4>
                        <p class="books-popup-feature-text">+200 XP + Badge unlock</p>
                    </div>
                </div>
                <p class="books-popup-text"><strong>Price: $24.99</strong></p>
                <p class="books-popup-text">Available formats: PDF, EPUB, Paperback (shipping extra)</p>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="purchaseBook('fog-to-fire')">
                        <span class="books-popup-button-icon">🛒</span>
                        Add to Cart
                    </button>
                    <button class="books-popup-button books-popup-button--secondary" onclick="openPopup('preview-fog-to-fire')">
                        <span class="books-popup-button-icon">👁️</span>
                        Preview First
                    </button>
                </div>
            `
        },
        // Add to Vault buttons
        'vault-crypto33': {
            icon: '🔒',
            title: 'Add to Vault: Crypto33',
            subtitle: 'Track Your Progress',
            content: `
                <div class="books-popup-success">
                    <div class="books-popup-success-icon">✅</div>
                    <p class="books-popup-success-message">Book Added to Your Vault!</p>
                </div>
                <p class="books-popup-text">Crypto33: The Freedom Blueprint has been added to your Vault. Track your reading progress and unlock rewards as you complete each chapter.</p>
                <ul class="books-popup-list">
                    <li>Track reading progress chapter by chapter</li>
                    <li>Unlock XP rewards for each completed section</li>
                    <li>Earn the "Crypto33 Reader" badge when finished</li>
                    <li>Access bonus materials tied to your progress</li>
                </ul>
                <div class="books-popup-features">
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">📊</span>
                        <h4 class="books-popup-feature-title">Progress Tracking</h4>
                        <p class="books-popup-feature-text">See how much you've read</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">🏆</span>
                        <h4 class="books-popup-feature-title">Badge Unlock</h4>
                        <p class="books-popup-feature-text">Earn rewards as you read</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">📚</span>
                        <h4 class="books-popup-feature-title">Library Access</h4>
                        <p class="books-popup-feature-text">All your books in one place</p>
                    </div>
                </div>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="window.location.href='vault.html'">
                        <span class="books-popup-button-icon">🔍</span>
                        View My Vault
                    </button>
                </div>
            `
        },
        'vault-fog-to-fire': {
            icon: '🔒',
            title: 'Add to Vault: From Fog to Fire',
            subtitle: 'Track Your Progress',
            content: `
                <div class="books-popup-success">
                    <div class="books-popup-success-icon">✅</div>
                    <p class="books-popup-success-message">Book Added to Your Vault!</p>
                </div>
                <p class="books-popup-text">From Fog to Fire has been added to your Vault. Track your reading progress and unlock health-related rewards.</p>
                <ul class="books-popup-list">
                    <li>Track reading progress chapter by chapter</li>
                    <li>Unlock XP rewards for each completed section</li>
                    <li>Earn the "Health Warrior" badge when finished</li>
                    <li>Access bonus health protocols tied to your progress</li>
                </ul>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="window.location.href='vault.html'">
                        <span class="books-popup-button-icon">🔍</span>
                        View My Vault
                    </button>
                </div>
            `
        },
        // Join Waitlist
        'join-waitlist': {
            icon: '📋',
            title: 'Join the Waitlist',
            subtitle: 'Future Titles Coming Soon',
            content: `
                <p class="books-popup-text">Be the first to know when our upcoming books are released! Join the waitlist for:</p>
                <ul class="books-popup-list">
                    <li>Health XP Series - Complete health recovery guides</li>
                    <li>Warrior Mindset - Mental resilience and strength</li>
                    <li>Advanced Crypto Strategies - Deep dive into wealth protection</li>
                    <li>And more exciting titles in development</li>
                </ul>
                <div class="books-popup-features">
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">🎁</span>
                        <h4 class="books-popup-feature-title">Early Access</h4>
                        <p class="books-popup-feature-text">Get notified first</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">💰</span>
                        <h4 class="books-popup-feature-title">Launch Discount</h4>
                        <p class="books-popup-feature-text">Special pricing for waitlist</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">⭐</span>
                        <h4 class="books-popup-feature-title">Bonus XP</h4>
                        <p class="books-popup-feature-text">Extra rewards for early adopters</p>
                    </div>
                </div>
                <form class="email-signup-form" onsubmit="joinWaitlist(event)">
                    <input type="email" class="email-input" placeholder="your@crypto33.com" required style="width: 100%; padding: 12px; margin-bottom: 15px; background: rgba(247, 147, 26, 0.1); border: 1px solid #331f0d; border-radius: 8px; color: var(--color-text-primary); font-family: var(--font-secondary);">
                    <button type="submit" class="books-popup-button" style="width: 100%;">
                        <span class="books-popup-button-icon">✉️</span>
                        Join Waitlist
                    </button>
                </form>
            `
        },
        // Social Share
        'share-x': {
            icon: '🐦',
            title: 'Share on X (Twitter)',
            subtitle: 'Spread the Word',
            content: `
                <p class="books-popup-text">Share Crypto33 books with your followers and help spread the message of freedom!</p>
                <div class="books-popup-features">
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">🔗</span>
                        <h4 class="books-popup-feature-title">Your Referral Link</h4>
                        <p class="books-popup-feature-text">Earn XP when others purchase</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">⭐</span>
                        <h4 class="books-popup-feature-title">Bonus Rewards</h4>
                        <p class="books-popup-feature-text">+50 XP per successful referral</p>
                    </div>
                </div>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="shareOnX()">
                        <span class="books-popup-button-icon">🐦</span>
                        Share on X
                    </button>
                </div>
            `
        },
        'share-facebook': {
            icon: '📘',
            title: 'Share on Facebook',
            subtitle: 'Spread the Word',
            content: `
                <p class="books-popup-text">Share Crypto33 books with your Facebook friends and help build the freedom community!</p>
                <div class="books-popup-actions">
                    <button class="books-popup-button" onclick="shareOnFacebook()">
                        <span class="books-popup-button-icon">📘</span>
                        Share on Facebook
                    </button>
                </div>
            `
        },
        'copy-link': {
            icon: '🔗',
            title: 'Copy Referral Link',
            subtitle: 'Share Anywhere',
            content: `
                <div class="books-popup-success">
                    <div class="books-popup-success-icon">✅</div>
                    <p class="books-popup-success-message">Link Copied to Clipboard!</p>
                </div>
                <p class="books-popup-text">Your referral link has been copied. Share it anywhere to earn XP and rewards when others purchase through your link.</p>
                <div class="books-popup-features">
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">💰</span>
                        <h4 class="books-popup-feature-title">Earn Rewards</h4>
                        <p class="books-popup-feature-text">Get XP for each referral</p>
                    </div>
                    <div class="books-popup-feature">
                        <span class="books-popup-feature-icon">📊</span>
                        <h4 class="books-popup-feature-title">Track Referrals</h4>
                        <p class="books-popup-feature-text">See your impact in the Vault</p>
                    </div>
                </div>
            `
        }
    };

    function openPopup(type) {
        const content = popupContentData[type];
        if (!content) {
            console.error('Popup content not found for type:', type);
            return;
        }

        popupIcon.textContent = content.icon;
        popupTitle.textContent = content.title;
        popupSubtitle.textContent = content.subtitle;
        popupContent.innerHTML = content.content;
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    // Close on overlay click
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                closePopup();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popupOverlay && popupOverlay.classList.contains('active')) {
            closePopup();
        }
    });

    // Attach event listeners to buttons with data-popup-type attributes
    const popupButtons = document.querySelectorAll('[data-popup-type]');
    popupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const popupType = this.getAttribute('data-popup-type');
            openPopup(popupType);
        });
    });

    // Make functions available globally
    window.openPopup = openPopup;
    window.closePopup = closePopup;

    // Helper functions
    window.downloadPreview = function(book) {
        console.log('Downloading preview for:', book);
        // Implement download logic
        alert('Preview download will be available soon!');
    };

    window.purchaseBook = function(book) {
        console.log('Purchasing book:', book);
        // Implement purchase logic
        alert('Purchase functionality will be available soon!');
    };

    window.joinWaitlist = function(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        console.log('Joining waitlist with email:', email);
        alert('Thank you for joining the waitlist! You\'ll be notified when new books are released.');
        closePopup();
    };

    window.shareOnX = function() {
        const text = 'Check out Crypto33: The Freedom Blueprint - 33 laws for true freedom!';
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    };

    window.shareOnFacebook = function() {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    // Copy link functionality
    const copyLinkButtons = document.querySelectorAll('[data-action="copy-link"]');
    copyLinkButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const url = window.location.href;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(() => {
                    openPopup('copy-link');
                }).catch(err => {
                    console.error('Failed to copy link:', err);
                    // Fallback for older browsers
                    fallbackCopyTextToClipboard(url);
                });
            } else {
                // Fallback for older browsers
                fallbackCopyTextToClipboard(url);
            }
        });
    });

    // Fallback copy function for older browsers
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                openPopup('copy-link');
            } else {
                alert('Failed to copy link. Please copy manually: ' + text);
            }
        } catch (err) {
            console.error('Fallback copy failed:', err);
            alert('Failed to copy link. Please copy manually: ' + text);
        }
        document.body.removeChild(textArea);
    }
});


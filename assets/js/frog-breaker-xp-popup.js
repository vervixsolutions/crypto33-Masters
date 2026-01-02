// Frog Breaker XP Generic Popup Handler
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('frogBreakerXpPopup');
    const popupTitle = document.getElementById('frogBreakerXpPopupTitle');
    const popupContent = document.getElementById('frogBreakerXpPopupContent');
    const closeBtn = document.querySelector('.frog-breaker-xp-popup-close-btn');

    // Content data for different button types
    const popupContentData = {
        // Pillar buttons
        'pillar-1': {
            title: 'Pillar 1 — Calm the Storm',
            content: `
                <p class="frog-breaker-xp-popup-subtitle">Nervous system repair • Adrenal reset • Grounding</p>
                <p class="frog-breaker-xp-popup-text">This pillar focuses on restoring your nervous system and resetting your adrenal function through proven grounding techniques and breathwork practices.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Nervous system repair & adrenal reset routines</li>
                    <li>Breathwork, vagus nerve, and grounding practices</li>
                    <li>Video lessons with step-by-step instructions</li>
                    <li>Interactive checklist to track your progress</li>
                    <li>Calming supplement stack recommendations</li>
                    <li>XP rewards for completing each module</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Start your healing journey by calming the storm within. This foundational pillar sets the stage for all other healing work.</p>
            `
        },
        'pillar-2': {
            title: 'Pillar 2 — Restore What\'s Missing',
            content: `
                <p class="frog-breaker-xp-popup-subtitle">Deficiency mapping • Methylation • Gut lining</p>
                <p class="frog-breaker-xp-popup-text">Identify and address nutritional deficiencies that are holding back your recovery. Learn about methylation support and gut health restoration.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Deficiency mapping: magnesium, choline, taurine, and more</li>
                    <li>Methylation support: folate, B12, SAMe frameworks</li>
                    <li>Gut lining repair blueprint with zinc carnosine and glutamine</li>
                    <li>Personalized supplement recommendations</li>
                    <li>XP Boost: upload symptom form → unlock Warrior Badge</li>
                    <li>Video tutorials on testing and supplementation</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Your body needs the right building blocks to heal. This pillar helps you identify what's missing and how to restore it.</p>
            `
        },
        'pillar-3': {
            title: 'Pillar 3 — Remove What\'s Breaking You',
            content: `
                <p class="frog-breaker-xp-popup-subtitle">Elimination protocols • Histamine • Gentle detox</p>
                <p class="frog-breaker-xp-popup-text">Learn to identify and eliminate the toxins, foods, and environmental factors that are preventing your recovery.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Elimination protocols: gluten, dairy, seed oils, mold</li>
                    <li>Histamine tracking & oxalate crash prevention</li>
                    <li>Gentle detox support — no crash cleanses</li>
                    <li>Avatar video: "You can't heal in the same environment that broke you."</li>
                    <li>Food elimination tracking tools</li>
                    <li>Environmental toxin assessment</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Healing requires removing the obstacles. This pillar teaches you to identify and eliminate what's breaking you down.</p>
            `
        },
        'pillar-4': {
            title: 'Pillar 4 — Rebuild & Rise',
            content: `
                <p class="frog-breaker-xp-popup-subtitle">Organ support • Energy stacking • Consistency</p>
                <p class="frog-breaker-xp-popup-text">Long-term organ support and sustainable energy building. Learn to maintain your gains and continue rising.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Long-term organ support (liver, gut, mitochondria)</li>
                    <li>Energy stacking with sustainable, low-stimulant tools</li>
                    <li>XP Loyalty: bonus Stack Access for 30+ days consistency</li>
                    <li>Maintenance protocols and checklists</li>
                    <li>Progress tracking and milestone rewards</li>
                    <li>Community support and accountability</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Rebuilding is a long-term commitment. This pillar provides the tools and support to maintain your progress and continue rising.</p>
            `
        },
        // Protocol buttons
        'protocol-fatigue': {
            title: 'Fatigue Recovery Stack',
            content: `
                <p class="frog-breaker-xp-popup-text">A comprehensive supplement protocol designed to address chronic fatigue and restore energy levels naturally.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Short video explainer on fatigue mechanisms</li>
                    <li>Product links with detailed descriptions</li>
                    <li>Dosage timing and scheduling</li>
                    <li>Interaction warnings and safety notes</li>
                    <li>Expected timeline for results</li>
                    <li>Affiliate links editable per product in admin panel</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">This protocol is based on real recovery experiences and scientific research. Individual results may vary.</p>
            `
        },
        'protocol-iron': {
            title: 'High Iron Fix Protocol',
            content: `
                <p class="frog-breaker-xp-popup-text">Address high iron levels safely and effectively with this targeted protocol.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Short video explainer on iron metabolism</li>
                    <li>Product links with detailed descriptions</li>
                    <li>Dosage timing and scheduling</li>
                    <li>Testing recommendations</li>
                    <li>Safety protocols and monitoring</li>
                    <li>Affiliate links editable per product in admin panel</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">High iron can be dangerous. This protocol should be followed under proper guidance.</p>
            `
        },
        'protocol-methylation': {
            title: 'Methylation Boost Blueprint',
            content: `
                <p class="frog-breaker-xp-popup-text">Optimize your methylation pathways for better energy, mood, and overall health.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Short video explainer on methylation</li>
                    <li>Product links with detailed descriptions</li>
                    <li>Dosage timing and scheduling</li>
                    <li>Genetic considerations</li>
                    <li>Testing and monitoring protocols</li>
                    <li>Affiliate links editable per product in admin panel</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Methylation affects every cell in your body. This blueprint helps optimize this critical pathway.</p>
            `
        },
        'protocol-mast-cell': {
            title: 'Mast Cell Reset Pack',
            content: `
                <p class="frog-breaker-xp-popup-text">Comprehensive protocol for resetting mast cell activation and reducing histamine responses.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Short video explainer on mast cell activation</li>
                    <li>Product links with detailed descriptions</li>
                    <li>Dosage timing and scheduling</li>
                    <li>Dietary modifications</li>
                    <li>Environmental considerations</li>
                    <li>Affiliate links editable per product in admin panel</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Mast cell issues can cause widespread symptoms. This pack addresses the root causes.</p>
            `
        },
        'protocol-gut': {
            title: 'Gut Repair Stack',
            content: `
                <p class="frog-breaker-xp-popup-text">Restore gut health with this comprehensive repair protocol.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Short video explainer on gut health</li>
                    <li>Product links with detailed descriptions</li>
                    <li>Dosage timing and scheduling</li>
                    <li>Dietary support protocols</li>
                    <li>Timeline for healing</li>
                    <li>Affiliate links editable per product in admin panel</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Gut health is foundational. This stack provides the tools for comprehensive gut repair.</p>
            `
        },
        'protocol-detox': {
            title: 'Detox Support',
            content: `
                <p class="frog-breaker-xp-popup-text">Gentle, sustainable detox support without the crash.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li>Short video explainer on gentle detox</li>
                    <li>Product links with detailed descriptions</li>
                    <li>Dosage timing and scheduling</li>
                    <li>Support protocols</li>
                    <li>Safety guidelines</li>
                    <li>Affiliate links editable per product in admin panel</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Detox doesn't have to mean suffering. This protocol supports gentle, effective detoxification.</p>
            `
        },
        'browse-all-series': {
            title: 'Healing Mini-Series Library',
            content: `
                <p class="frog-breaker-xp-popup-text">Access our complete library of healing mini-series, each designed to address specific challenges in your recovery journey.</p>
                <ul class="frog-breaker-xp-popup-list">
                    <li><strong>🍭 Sugar Series:</strong> Break sugar addiction and restore mitochondrial function</li>
                    <li><strong>🥃 Bounce Back Protocol (Alcohol):</strong> Post-binge recovery and liver support</li>
                    <li><strong>⚔️ Warrior Mindset XP Series:</strong> Reclaim mental fire and overcome identity loss</li>
                    <li><strong>More series coming soon:</strong> Genetic Healing XP, Trauma Recovery XP, and more</li>
                </ul>
                <p class="frog-breaker-xp-popup-text">Series unlock based on your Vault completion percentage and symptom profile. Complete earlier series to unlock advanced content.</p>
                <p class="frog-breaker-xp-popup-text">Each series includes video lessons, checklists, bonus materials, and XP rewards. Start with the series most relevant to your current challenges.</p>
            `
        },
        // Section header buttons
        'view-full-blueprint': {
            title: 'The 5 Pillar Healing Blueprint',
            content: `
                <p class="frog-breaker-xp-popup-subtitle">A Comprehensive Healing System Built From Real-Life Recovery</p>
                <p class="frog-breaker-xp-popup-text">The 5 Pillar Healing Blueprint is a complete biological recovery system designed from real-life healing experiences, not pharmaceutical band-aids. Each pillar works together to create a foundation for total health restoration.</p>
                
                <h3 style="font-family: var(--font-primary); font-size: 20px; color: var(--color-primary); margin: 25px 0 15px 0;">Pillar 1 — Calm the Storm</h3>
                <p class="frog-breaker-xp-popup-text">Nervous system repair and adrenal reset. Learn breathwork, vagus nerve exercises, and grounding practices. Includes video lessons, checklists, and a calming supplement stack.</p>
                
                <h3 style="font-family: var(--font-primary); font-size: 20px; color: var(--color-primary); margin: 25px 0 15px 0;">Pillar 2 — Restore What's Missing</h3>
                <p class="frog-breaker-xp-popup-text">Deficiency mapping and methylation support. Identify missing nutrients (magnesium, choline, taurine) and learn about folate, B12, and SAMe frameworks. Includes gut lining repair protocols.</p>
                
                <h3 style="font-family: var(--font-primary); font-size: 20px; color: var(--color-primary); margin: 25px 0 15px 0;">Pillar 3 — Remove What's Breaking You</h3>
                <p class="frog-breaker-xp-popup-text">Elimination protocols for gluten, dairy, seed oils, and mold. Learn histamine tracking, oxalate crash prevention, and gentle detox support without crash cleanses.</p>
                
                <h3 style="font-family: var(--font-primary); font-size: 20px; color: var(--color-primary); margin: 25px 0 15px 0;">Pillar 4 — Rebuild & Rise</h3>
                <p class="frog-breaker-xp-popup-text">Long-term organ support for liver, gut, and mitochondria. Energy stacking with sustainable, low-stimulant tools. XP Loyalty rewards for 30+ days consistency.</p>
                
                <h3 style="font-family: var(--font-primary); font-size: 20px; color: var(--color-primary); margin: 25px 0 15px 0;">Pillar 5 — XP Challenge Missions</h3>
                <p class="frog-breaker-xp-popup-text">Gatekeeper Missions to guard your gates. Complete challenges like zero news scrolling, blue light blocker usage, and tracker logging. Unlock the Gatekeeper Badge (+300 XP).</p>
                
                <p class="frog-breaker-xp-popup-text" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #331f0d;"><strong>How It Works:</strong> Each pillar includes avatar video lessons, interactive checklists, supplement stack recommendations, and XP rewards. Progress through the system at your own pace, unlocking deeper content as you complete modules. The blueprint is designed to work together as a complete system, but you can also focus on individual pillars based on your specific needs.</p>
                
                <p class="frog-breaker-xp-popup-text"><strong>XP System:</strong> Every completed lesson, tracker entry, and challenge pushes you toward higher healer tiers. Track your progress, earn badges, and unlock bonus content as you advance.</p>
            `
        }
    };

    function openPopup(type) {
        const content = popupContentData[type];
        if (!content) {
            console.error('Popup content not found for type:', type);
            return;
        }

        popupTitle.textContent = content.title;
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

    // Attach event listeners to buttons with data-popup attributes
    const popupButtons = document.querySelectorAll('[data-popup-type]');
    popupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const popupType = this.getAttribute('data-popup-type');
            openPopup(popupType);
        });
    });

    // Make openPopup available globally for direct button clicks
    window.openFrogBreakerXpPopup = openPopup;
});


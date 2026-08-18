# Upgrade Existing Wedding Website — Cinematic Invitation Opening + Scroll Storytelling

I already have a working single-page wedding invitation website for:

**Kadhalum Coffeeyum ☕❤️**
**Sivaranjith & Pavthra**
**07 September 2026 | 6:30 PM**
**SGS Hall, Suchindram, Nagercoil**

Do NOT redesign or rebuild the existing website.

Keep all existing:

* Content
* Sections
* Images
* Image paths
* Wedding information
* Google Maps
* Gallery
* Countdown
* Responsive layout
* Existing color palette

Only upgrade the website with a **premium cinematic pre-loader and scroll-based storytelling animations**.

The final experience should feel like opening a **luxury physical wedding invitation / love-story book**.

---

# 1. CINEMATIC PRE-LOADER

Replace the normal website loading screen with a beautiful **physical wedding invitation opening animation**.

The website should initially show a closed premium wedding invitation/envelope.

### Initial screen

Full viewport.

Background:

* Deep coffee brown
* Subtle paper texture
* Very soft golden particles
* Warm cinematic lighting
* Slight vignette

In the center:

A realistic elegant wedding invitation envelope/book.

Use the Kadhalum Coffeeyum visual identity.

Display a small line:

**“A little story is about to unfold…”**

Then show:

**Kadhalum Coffeeyum**

---

# 2. INVITATION OPENING ANIMATION

Animate the invitation as if a real physical wedding invitation is being opened.

Sequence:

### Step 1

Closed envelope/book appears in the center.

Very subtle floating motion.

### Step 2

The envelope flap slowly opens.

Add realistic:

* Paper movement
* Soft shadow
* Light reflection
* Slight depth
* 3D perspective

### Step 3

An invitation card slowly slides out.

The card contains:

**Sivaranjith**

**&**

**Pavthra**

Then:

**07 • 09 • 2026**

### Step 4

The invitation opens like a beautiful **two-page wedding book**.

The center spine should remain visible.

Left page:

**Our Story**

Right page:

**Our Forever**

Then a warm golden light passes across the pages.

---

# 3. FINAL PRELOADER REVEAL

Once the invitation is completely open:

Display:

**Kadhalum Coffeeyum ☕❤️**

**Sivaranjith & Pavthra**

**Our Forever Begins**

Then the invitation pages should smoothly expand outward and transition into the actual website hero section.

The transition should feel like:

**Physical invitation → cinematic website**

Do not simply fade from the loader to the website.

Create a seamless visual transition.

---

# 4. PRELOADER TIMING

Total animation:

Approximately **4–6 seconds**.

Sequence timing:

0–1 sec:
Closed invitation appears.

1–2.5 sec:
Envelope opens.

2.5–4 sec:
Invitation card slides out and opens.

4–5 sec:
Names and wedding date appear.

5–6 sec:
Invitation transitions into the website.

Add a:

**“Skip”**

button in a subtle corner for users who don't want to wait.

Remember that the preloader should only play once per browser session using sessionStorage.

Example behavior:

First visit:
→ Full animation.

Refresh:
→ Skip or very short version.

New session:
→ Full animation again.

---

# 5. REALISTIC BOOK EFFECT

The invitation opening should have a genuine 3D book effect.

Use:

* CSS perspective
* transform-style: preserve-3d
* rotateY
* transform-origin
* realistic shadows
* page depth
* paper edges

If GSAP is already available, use GSAP.

Otherwise use optimized CSS + JavaScript.

Do NOT use heavy 3D libraries unless absolutely necessary.

The animation must remain smooth on mobile.

---

# 6. AFTER PRELOADER — HERO TRANSITION

Immediately after the invitation opens, reveal the existing hero section.

The hero image should start slightly zoomed:

scale(1.12)

and slowly move to:

scale(1)

At the same time:

**Kadhalum Coffeeyum**

fades upward.

Then:

**Sivaranjith & Pavthra**

appears.

Then:

**07 • 09 • 2026**

appears.

Use staggered timing.

Do NOT display everything at once.

---

# 7. SCROLL SHOULD FEEL LIKE A LOVE STORY

The most important change:

Do NOT make the page feel like normal sections stacked vertically.

Make scrolling feel like the user is **turning pages through their relationship story**.

Every section should reveal itself progressively.

The animation should respond naturally to scroll position.

---

# 8. HERO SCROLL ANIMATION

At the beginning:

Hero image:

scale 1.0

As the user scrolls:

Image slowly zooms to:

scale 1.08

Then slightly moves upward.

The title:

**Kadhalum Coffeeyum**

moves slowly upward and fades.

The date moves slightly in the opposite direction.

Create a subtle cinematic parallax effect.

At the bottom:

**Scroll to begin our story ↓**

should gently pulse.

Once the user starts scrolling, it fades away.

---

# 9. "TOGETHER WITH OUR FAMILIES" REVEAL

When this section enters the viewport:

First reveal the background.

Then reveal the heading:

**Together with our families**

Then reveal the paragraph line by line.

Use:

opacity: 0 → 1

transform:

translateY(40px) → translateY(0)

Each line should appear slightly after the previous line.

---

# 10. OUR STORY — CINEMATIC IMAGE REVEAL

For:

**How We Met**

Do not simply fade the image.

Create a cinematic reveal.

As the user scrolls:

1. Image container appears.
2. Image starts slightly zoomed.
3. A paper-like mask reveals the image.
4. Image slowly zooms out.
5. Text slides in from the opposite side.

Desktop:

Image left
Text right

Mobile:

Image first
Text below

The image should have a subtle rounded/organic mask instead of a basic rectangle.

---

# 11. TEXT REVEAL EFFECT

For important headings, create an elegant text reveal.

Example:

**How We Met**

The heading should appear as if it is being written/revealed from behind a mask.

Use:

clip-path / overflow hidden / transform.

Do NOT use typing animation.

The typography should remain elegant.

---

# 12. "HE PROPOSED, I SAID YES"

Create a stronger emotional animation.

As the user scrolls:

The section initially appears dark.

A soft warm light slowly reveals the photograph.

Then:

**He Proposed**

appears.

After a short delay:

**I Said Yes**

appears larger.

Then a small heart/ring animation appears.

The photograph slowly moves using parallax.

The final text:

**“And with love in my eyes and forever in my heart, I said ‘Yes.’”**

fades in last.

---

# 13. ENGAGEMENT SECTION — PHOTO ALBUM EFFECT

For:

**Our Engagement Day**

Make the images feel like photographs placed inside a wedding album.

As the user scrolls:

* Main photo slides upward.
* Smaller photos appear one by one.
* Photos have slight rotation.
* Shadows create physical paper/photo depth.
* Each image moves at a slightly different speed.

Do NOT make the rotation excessive.

Keep it elegant.

---

# 14. PHOTO → TEXT TRANSITIONS

Throughout the website, alternate the animation direction.

For example:

Section 1:
Image moves from left.

Section 2:
Image moves from right.

Section 3:
Image zooms from center.

Section 4:
Image reveals vertically.

Section 5:
Image slides upward.

This prevents the website from feeling repetitive.

---

# 15. BETWEEN-SECTIONS TRANSITIONS

Add small cinematic transitions between major sections.

Examples:

### Coffee transition

A tiny coffee cup / coffee bean illustration briefly appears.

Text:

**One cup. One conversation. One memory.**

Then next section.

### Heart transition

Small hand-drawn heart line animation.

### Wedding transition

Small golden ring / sparkle animation.

Keep these subtle.

Do not turn the website into a cartoon.

---

# 16. COUNTDOWN ANIMATION

When the countdown section enters the viewport:

Instead of instantly showing the numbers, animate each number upward.

Example:

**365 → 364 → 363 → ...**

But do not actually run through all values.

Use a smooth number transition from the current value into the actual countdown value.

The title:

**The Countdown to Forever**

should reveal first.

Then:

Days
Hours
Minutes
Seconds

appear one by one.

---

# 17. WEDDING DETAILS — INVITATION CARD EFFECT

For:

**Save The Date**

Make the information appear as a physical invitation card.

The card should:

* Start slightly rotated
* Move to center
* Rotate to 0 degrees
* Scale from 0.95 → 1
* Add a soft shadow

Then reveal:

**07 September 2026**

**6:30 PM**

**SGS Hall**

Use elegant gold separators.

---

# 18. LOCATION SECTION

When the location section appears:

Heading:

**Meet Us Where Forever Begins**

Reveal the map with a soft scale animation.

Add an animated location pin.

The pin should gently pulse.

Then reveal:

**SGS Hall**

**Suchindram, Nagercoil**

Finally reveal:

**OPEN IN GOOGLE MAPS →**

Button.

---

# 19. GALLERY — CINEMATIC SCROLL

The gallery should NOT simply fade in as a grid.

Create a premium editorial gallery.

As the user scrolls:

* Images reveal individually.
* Images have different heights.
* Some images move slightly faster.
* Some images move slightly slower.
* Main images scale gently.
* Hover causes subtle zoom.

On mobile, preserve the cinematic effect without causing horizontal scrolling.

Clicking an image should still open the existing lightbox.

---

# 20. BRIDE & GROOM SECTION

For:

**Sivaranjith S**

and

**Pavthra Ganasan**

Use a split-screen reveal.

First:

Groom photo appears.

Then:

Bride photo appears.

Then names.

Then descriptions.

Create a subtle vertical dividing line between them.

On mobile, stack the cards vertically.

---

# 21. KADHALUM COFFEEYUM LOGO REVEAL

When the logo section becomes visible:

Start with a blank warm background.

Then reveal:

**Kadhalum Coffeeyum**

logo.

Use:

opacity + scale + blur

from:

opacity: 0
scale: 0.8
blur: 10px

to:

opacity: 1
scale: 1
blur: 0

Then reveal:

**Two hearts.
One story.
Countless cups of coffee.
One beautiful forever. ☕❤️**

---

# 22. FINAL SECTION

The final couple photograph should feel like the ending scene of a movie.

As the user reaches the final section:

Image slowly fades in.

Then:

**We Found Love.**

pause

**Now We're Choosing Forever.**

Then:

**Sivaranjith ❤️ Pavthra**

Then:

**07 • 09 • 2026**

Finally:

**We can't wait to celebrate with you.**

Add a slow cinematic zoom on the image.

---

# 23. SCROLL PROGRESS

Add a very subtle vertical progress indicator.

It should show the user's journey through the story.

For example:

●
│
●
│
●
│
●

Or a thin vertical line with a moving golden indicator.

Keep it minimal.

On mobile, make it almost invisible or hide it if space is limited.

---

# 24. CURSOR EFFECT — DESKTOP ONLY

Add a very subtle custom cursor on desktop.

When hovering over:

* Photos → cursor changes to “View”
* Gallery → “Explore”
* Map button → “Open Map”

Do NOT add custom cursor on mobile.

---

# 25. PERFORMANCE

This is extremely important.

Animations must not make the website slow.

Use:

* transform
* opacity
* will-change only where necessary
* requestAnimationFrame if custom scroll logic is used
* lazy loading for gallery images
* compressed images
* IntersectionObserver

Avoid continuously calculating expensive layout properties on every scroll.

If GSAP ScrollTrigger is available, prefer it for complex scroll animations.

---

# 26. REDUCED MOTION

Respect:

prefers-reduced-motion

If the user has reduced motion enabled:

* Disable complex parallax.
* Disable 3D page rotations.
* Disable particles.
* Keep simple fades.
* Keep the website fully functional.

---

# 27. MOBILE OPTIMIZATION

On mobile:

The invitation opening should become a simplified 2D/3D effect.

Do NOT create a huge heavy 3D animation.

Use:

* perspective
* rotateY
* scale
* opacity

Keep the entire preloader under approximately 6 seconds.

Scrolling should remain smooth at 60fps where possible.

---

# 28. DO NOT CHANGE EXISTING CONTENT

Important:

Do NOT rewrite the existing wedding content.

Do NOT change:

* Names
* Date
* Time
* Venue
* Gallery images
* Location
* Existing sections

Only improve:

**Preloader + transitions + scroll animations + visual storytelling.**

---

# 29. FINAL EXPERIENCE

The final user journey should feel like this:

**Closed Wedding Invitation**

↓

**Envelope Opens**

↓

**Invitation Book Opens**

↓

**Sivaranjith & Pavthra**

↓

**Kadhalum Coffeeyum**

↓

**Hero Photograph**

↓

**Our Story**

↓

**How We Met**

↓

**He Proposed, I Said Yes**

↓

**Our Engagement Day**

↓

**Our Memories**

↓

**Countdown**

↓

**Save The Date**

↓

**Wedding Venue**

↓

**Gallery**

↓

**Bride & Groom**

↓

**Kadhalum Coffeeyum**

↓

**We Found Love. Now We're Choosing Forever.**

The website should feel like the visitor is **scrolling through a beautifully animated wedding album**, not browsing a normal website.

Make every transition elegant, cinematic and emotionally connected to the wedding story.

Do not over-animate.

**Luxury wedding invitation, not a flashy animation demo.**

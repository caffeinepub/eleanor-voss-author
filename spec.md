# Dr. Ashfy — Author

## Current State
The site has: Hero, Help, About, Books, Quotes, AchiyaSketchesSection, ResearchSection (which includes MSHK Audio Books as a profile link), and Contact sections.

## Requested Changes (Diff)

### Add
- A dedicated "Audio Stories" section that showcases Dr. Ashfy's MSHK AUDIO BOOKS YouTube channel (`https://www.youtube.com/@MSHKBOOKS/videos`) with embedded YouTube video players and a "View All on YouTube" link to the channel.
- A "Listen" nav link pointing to the new audio-stories section.

### Modify
- Navbar links to include "Listen" pointing to `#audio-stories`.
- Footer to include an "Audio Stories" link.
- Place the Audio Stories section between AchiyaSketches and Research sections.

### Remove
- Nothing removed.

## Implementation Plan
1. Add `AudioStoriesSection` component in App.tsx.
   - Embed 4–6 representative YouTube videos using `<iframe>` embeds from the MSHK BOOKS channel (use the channel's playlist or known video IDs).
   - Show channel description and a CTA button linking to the full channel.
   - Use responsive grid layout (2 columns on md+, 1 on mobile).
2. Add `{ label: "Listen", target: "audio-stories" }` to nav links array.
3. Insert `<AudioStoriesSection />` between `<AchiyaSketchesSection />` and `<ResearchSection />` in App.
4. Add Audio Stories link to Footer.

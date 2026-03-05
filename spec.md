# Author Website

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Hero section with author name, tagline, and profile photo placeholder
- About section with author bio
- Books/Works section displaying a list of published books with title, cover, description, and genre
- Blog/News section with latest posts (title, date, excerpt)
- Contact section with a contact form (name, email, message)
- Navigation bar with links to all sections
- Footer with social links and copyright

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend:
   - `Book` type: id, title, description, genre, publishedYear, coverUrl
   - `BlogPost` type: id, title, body, excerpt, date
   - `ContactMessage` type: id, name, email, message, timestamp
   - Queries: getBooks, getBlogPosts
   - Mutations: submitContactMessage
   - Seed: 3 sample books, 3 sample blog posts

2. Frontend:
   - Single-page layout with smooth scroll navigation
   - Navbar: fixed top, links to Hero, About, Books, Blog, Contact
   - Hero: full-width banner with author name, tagline, CTA button
   - About: two-column layout, author photo + bio text
   - Books: card grid showing book covers, titles, genres, descriptions
   - Blog: list of post cards with title, date, excerpt, read more link
   - Contact: form with name, email, message fields and submit button
   - Footer: social icons, copyright

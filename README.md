# Note by Note

A responsive nonprofit website for **Note by Note**, an initiative that collects used musical instruments and helps place them with students in underresourced schools.

## Files

- `index.html` — website content and structure
- `styles.css` — design and responsive styling
- `script.js` — mobile navigation and demo form behavior

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all three website files to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save. GitHub will provide the public URL.

## Customize before launch

Search `index.html` for these placeholders:

- `Your Name, Founder`
- `hello@notebynote.org`
- `@notebynote`
- `YOUR PHOTO`

### Add your founder photo

Place your image in this folder, for example `founder.jpg`, then replace the whole:

```html
<div class="photo-placeholder">...</div>
```

with:

```html
<img class="founder-image" src="founder.jpg" alt="Founder of Note by Note">
```

Then add this to `styles.css`:

```css
.founder-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 190px 190px 26px 26px;
}
```

## Make the forms actually send responses

The current forms are front-end demos. For a no-backend GitHub Pages site, connect them to a service such as Formspree or embed a Google Form.

## Suggested future pages

- Instrument impact stories
- School partners
- Volunteer / repair partner sign-up
- Donation FAQ
- Instrument wish list
- Photo gallery
- Annual impact counter

# Guelph Webring

A webring for University of Guelph Computer Science students and alumni.

Live site: [uoguelph.network](https://uoguelph.network)

## Join the webring

1. Add the widget to your site (template below).
2. Fork this repo.
3. Edit `index.html` and add your entry at the bottom of `webringData.sites`:

```json
{
  "name": "Your Name",
  "website": "https://your-website.com",
  "year": 20XX
}
```

4. Open a pull request.

## Widget template

### HTML

```html
<div style="display: flex; align-items: center; gap: 8px;">
  <a href="https://uoguelph.network/#your-site-here?nav=prev">←</a>
  <a href="https://uoguelph.network/#your-site-here" target="_blank" rel="noopener noreferrer">
    <img src="https://uoguelph.network/icon.black.svg" alt="Guelph Webring" style="width: 24px; height: auto; opacity: 0.8;" />
  </a>
  <a href="https://uoguelph.network/#your-site-here?nav=next">→</a>
</div>
```

### JSX

```jsx
<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <a href="https://uoguelph.network/#your-site-here?nav=prev">←</a>
  <a href="https://uoguelph.network/#your-site-here" target="_blank" rel="noopener noreferrer">
    <img
      src="https://uoguelph.network/icon.black.svg"
      alt="Guelph Webring"
      style={{ width: "24px", height: "auto", opacity: 0.8 }}
    />
  </a>
  <a href="https://uoguelph.network/#your-site-here?nav=next">→</a>
</div>
```

Use `icon.white.svg` for dark sites and `icon.red.svg` if preferred.

## Notes

- Keep URLs absolute (`https://...`).
- Keep the JSON valid in `index.html`.
- If you are not in CS, you can still make your own webring for your community.

## Credits

Inspired by community webring projects, including [XXIIVV Webring](https://webring.xxiivv.com/).

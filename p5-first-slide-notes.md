# P5 First Slide Prototype

## What this is

A standalone local `p5.js` concept page for the first slide only.

Files:

- `p5-first-slide.html`
- `p5-first-slide.js`

## What it does

- Uses `p5` in `WEBGL` mode
- Renders a stylized global terrain plane
- Places bright "population" specks over continental blobs
- Places floating network nodes above the terrain
- Draws different connection patterns and lighting treatments
- Gives you 10 visual iterations of the same opening idea

## How to run it

Open:

- `p5-first-slide.html`

Or run a simple local server from this folder:

```bash
python3 -m http.server 4173
```

Then open:

- `http://localhost:4173/p5-first-slide.html`

## Controls

- `1-0`: switch between iterations
- `Left / Right`: previous or next mode
- `Space`: auto-cycle
- `R`: regenerate the scene

## Best next upgrades

1. Replace the flat continent blobs with a real stylized U.S. or world point cloud
2. Add camera interpolation for stronger "diving deeper" motion
3. Add one bridge path between clusters for the "online to in-person" theme
4. Add labels for `drift`, `resonance`, `salience`, and `coordination`
5. Split the strongest 2-3 modes into their own dedicated pages

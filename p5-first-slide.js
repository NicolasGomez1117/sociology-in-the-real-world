const modeConfigs = [
  {
    name: "1. Constellation Survey",
    subtitle: "Wide-angle node field over a dim global terrain plane.",
    bg: [2, 8, 20],
    terrain: [12, 36, 60],
    node: [218, 244, 255],
    link: [125, 211, 252],
    glow: [56, 189, 248],
    zoom: 1.0,
    altitude: 72,
    spin: 0.0014,
    pulse: 0.9,
    lineAlpha: 52,
    starDensity: 110,
    mapBrightness: 0.8,
    drift: 0.35,
  },
  {
    name: "2. Continental Uplink",
    subtitle: "Brighter land signatures and tighter regional communication corridors.",
    bg: [3, 10, 24],
    terrain: [16, 46, 82],
    node: [240, 249, 255],
    link: [134, 239, 172],
    glow: [74, 222, 128],
    zoom: 1.12,
    altitude: 86,
    spin: 0.0016,
    pulse: 1.1,
    lineAlpha: 66,
    starDensity: 90,
    mapBrightness: 1.0,
    drift: 0.42,
  },
  {
    name: "3. Resonance Pulses",
    subtitle: "Nodes expand in waves when local clusters align.",
    bg: [1, 7, 18],
    terrain: [10, 32, 56],
    node: [255, 255, 255],
    link: [165, 243, 252],
    glow: [14, 165, 233],
    zoom: 1.18,
    altitude: 98,
    spin: 0.0020,
    pulse: 1.6,
    lineAlpha: 58,
    starDensity: 100,
    mapBrightness: 0.88,
    drift: 0.5,
  },
  {
    name: "4. Drift Corridors",
    subtitle: "Longer, looser pathways to emphasize movement and institutional lag.",
    bg: [2, 6, 16],
    terrain: [8, 28, 52],
    node: [226, 232, 240],
    link: [196, 181, 253],
    glow: [129, 140, 248],
    zoom: 1.24,
    altitude: 90,
    spin: 0.0024,
    pulse: 0.85,
    lineAlpha: 46,
    starDensity: 125,
    mapBrightness: 0.75,
    drift: 0.72,
  },
  {
    name: "5. Salience Clusters",
    subtitle: "Hotspots flare where attention concentrates and meaning becomes visible.",
    bg: [5, 10, 22],
    terrain: [16, 38, 62],
    node: [255, 255, 255],
    link: [251, 191, 36],
    glow: [248, 113, 113],
    zoom: 1.08,
    altitude: 82,
    spin: 0.0018,
    pulse: 1.45,
    lineAlpha: 72,
    starDensity: 105,
    mapBrightness: 0.9,
    drift: 0.38,
  },
  {
    name: "6. Coordination Lattice",
    subtitle: "A denser, more deliberate grid of ties over an illuminated terrain frame.",
    bg: [3, 7, 17],
    terrain: [10, 42, 74],
    node: [236, 253, 245],
    link: [34, 197, 94],
    glow: [16, 185, 129],
    zoom: 1.16,
    altitude: 76,
    spin: 0.0012,
    pulse: 0.95,
    lineAlpha: 78,
    starDensity: 80,
    mapBrightness: 1.05,
    drift: 0.26,
  },
  {
    name: "7. Network State Night",
    subtitle: "Max-density metropolitan sparkle with a heavier planetary glow.",
    bg: [1, 4, 12],
    terrain: [8, 20, 42],
    node: [255, 255, 255],
    link: [96, 165, 250],
    glow: [59, 130, 246],
    zoom: 1.32,
    altitude: 108,
    spin: 0.0022,
    pulse: 1.2,
    lineAlpha: 64,
    starDensity: 135,
    mapBrightness: 1.15,
    drift: 0.48,
  },
  {
    name: "8. Horizon Atlas",
    subtitle: "Lower camera, longer horizon, more terrain legibility.",
    bg: [4, 11, 23],
    terrain: [14, 48, 88],
    node: [224, 242, 254],
    link: [125, 211, 252],
    glow: [56, 189, 248],
    zoom: 1.42,
    altitude: 66,
    spin: 0.0011,
    pulse: 0.78,
    lineAlpha: 42,
    starDensity: 70,
    mapBrightness: 1.1,
    drift: 0.22,
  },
  {
    name: "9. Storm Front",
    subtitle: "Turbulence layer showing overload, friction, and structural mismatch.",
    bg: [2, 6, 14],
    terrain: [12, 24, 46],
    node: [248, 250, 252],
    link: [244, 114, 182],
    glow: [244, 63, 94],
    zoom: 1.28,
    altitude: 96,
    spin: 0.0028,
    pulse: 1.55,
    lineAlpha: 54,
    starDensity: 115,
    mapBrightness: 0.82,
    drift: 0.88,
  },
  {
    name: "10. Bridge Corridor",
    subtitle: "A stronger central path between distributed clusters and grounded terrain.",
    bg: [3, 9, 19],
    terrain: [14, 34, 62],
    node: [255, 255, 255],
    link: [250, 204, 21],
    glow: [251, 191, 36],
    zoom: 1.22,
    altitude: 84,
    spin: 0.0015,
    pulse: 1.05,
    lineAlpha: 70,
    starDensity: 92,
    mapBrightness: 0.96,
    drift: 0.3,
  },
];

let terrainGrid = [];
let landPoints = [];
let skyPoints = [];
let networkNodes = [];
let links = [];
let modeIndex = 0;
let autoCycle = false;
let lastCycle = 0;
let hoveredButton = null;
let uiButtons = [];

const terrainCols = 44;
const terrainRows = 28;
const terrainWidth = 980;
const terrainDepth = 620;

const continentAnchors = [
  { x: -320, z: -40, rx: 170, rz: 110 }, // North America
  { x: -250, z: 170, rx: 125, rz: 145 }, // South America
  { x: 10, z: -20, rx: 120, rz: 85 },    // Europe / North Africa
  { x: 140, z: 60, rx: 210, rz: 165 },   // Africa / Middle East
  { x: 330, z: -25, rx: 280, rz: 155 },  // Asia
  { x: 450, z: 180, rx: 110, rz: 70 },   // Australia
];

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont("sans-serif");
  updateUi();
  regenerateScene();
}

function draw() {
  const mode = modeConfigs[modeIndex];
  background(...mode.bg);
  drawBackdrop(mode);

  const cycleAngle = millis() * mode.spin;
  const zoomBase = width < 900 ? 0.9 : 1.0;

  push();
  rotateX(-PI / 2.9);
  rotateZ(sin(cycleAngle * 0.62) * 0.045);
  scale(mode.zoom * zoomBase);
  translate(0, 120, -50);

  drawTerrain(mode, cycleAngle);
  drawLandLights(mode, cycleAngle);
  drawLinks(mode, cycleAngle);
  drawNodes(mode, cycleAngle);
  pop();

  if (autoCycle && millis() - lastCycle > 4200) {
    setMode((modeIndex + 1) % modeConfigs.length);
    lastCycle = millis();
  }
}

function drawBackdrop(mode) {
  push();
  resetMatrix();
  translate(-width / 2, -height / 2);

  noStroke();
  for (let i = 0; i < skyPoints.length; i += 1) {
    const star = skyPoints[i];
    const pulse = 0.55 + 0.45 * sin(frameCount * 0.01 * star.speed + star.phase);
    fill(255, 255, 255, star.alpha * pulse);
    circle(star.x, star.y, star.size * pulse);
  }

  const arcAlpha = 28 + 20 * sin(frameCount * 0.01);
  stroke(mode.link[0], mode.link[1], mode.link[2], arcAlpha);
  strokeWeight(1);
  noFill();
  bezier(width * 0.16, height * 0.72, width * 0.28, height * 0.2, width * 0.72, height * 0.16, width * 0.84, height * 0.68);
  bezier(width * 0.08, height * 0.62, width * 0.3, height * 0.32, width * 0.64, height * 0.82, width * 0.92, height * 0.44);

  pop();
}

function drawTerrain(mode, cycleAngle) {
  noStroke();
  for (let z = 0; z < terrainRows - 1; z += 1) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < terrainCols; x += 1) {
      const a = terrainGrid[z][x];
      const b = terrainGrid[z + 1][x];
      fill(
        mode.terrain[0] + a.land * 8,
        mode.terrain[1] + a.land * 18,
        mode.terrain[2] + a.land * 34,
        182 + a.land * 36
      );
      vertex(a.x, a.height + sin(cycleAngle + a.phase) * mode.drift * 2.8, a.z);
      fill(
        mode.terrain[0] + b.land * 8,
        mode.terrain[1] + b.land * 18,
        mode.terrain[2] + b.land * 34,
        182 + b.land * 36
      );
      vertex(b.x, b.height + sin(cycleAngle + b.phase) * mode.drift * 2.8, b.z);
    }
    endShape();
  }
}

function drawLandLights(mode, cycleAngle) {
  noStroke();
  for (let i = 0; i < landPoints.length; i += 1) {
    const p = landPoints[i];
    const rise = sin(cycleAngle * 1.7 + p.phase) * mode.drift * 4;
    const flare = 0.55 + 0.45 * sin(frameCount * 0.016 * p.speed + p.phase);
    push();
    translate(p.x, p.y + rise, p.z);
    fill(
      lerp(220, mode.glow[0], 0.35),
      lerp(235, mode.glow[1], 0.35),
      lerp(255, mode.glow[2], 0.35),
      52 * mode.mapBrightness * flare
    );
    sphere(p.size * 2.2, 5, 5);
    fill(mode.node[0], mode.node[1], mode.node[2], 150 * mode.mapBrightness * flare);
    sphere(p.size, 4, 4);
    pop();
  }
}

function drawNodes(mode, cycleAngle) {
  noStroke();
  for (let i = 0; i < networkNodes.length; i += 1) {
    const node = networkNodes[i];
    const pulse = 0.82 + 0.18 * sin(frameCount * 0.02 * mode.pulse + node.phase * 6);
    const resonance = 1 + 0.35 * max(0, sin(frameCount * 0.014 * mode.pulse + node.phase * 4 + node.cluster));
    const driftX = sin(cycleAngle * 2 + node.phase) * mode.drift * node.wander;
    const driftZ = cos(cycleAngle * 1.6 + node.phase) * mode.drift * node.wander;
    const y = node.baseY + sin(cycleAngle * 2.3 + node.phase) * mode.drift * 7;

    push();
    translate(node.baseX + driftX, y, node.baseZ + driftZ);
    fill(mode.glow[0], mode.glow[1], mode.glow[2], 42 * resonance);
    sphere(node.size * 2.9 * pulse * resonance, 6, 6);
    fill(mode.node[0], mode.node[1], mode.node[2], 220);
    sphere(node.size * pulse, 7, 7);
    pop();
  }
}

function drawLinks(mode, cycleAngle) {
  stroke(mode.link[0], mode.link[1], mode.link[2], mode.lineAlpha);
  for (let i = 0; i < links.length; i += 1) {
    const link = links[i];
    const a = networkNodes[link.a];
    const b = networkNodes[link.b];
    const ax = a.baseX + sin(cycleAngle * 2 + a.phase) * mode.drift * a.wander;
    const az = a.baseZ + cos(cycleAngle * 1.6 + a.phase) * mode.drift * a.wander;
    const ay = a.baseY + sin(cycleAngle * 2.3 + a.phase) * mode.drift * 7;
    const bx = b.baseX + sin(cycleAngle * 2 + b.phase) * mode.drift * b.wander;
    const bz = b.baseZ + cos(cycleAngle * 1.6 + b.phase) * mode.drift * b.wander;
    const by = b.baseY + sin(cycleAngle * 2.3 + b.phase) * mode.drift * 7;

    strokeWeight(link.weight);
    line(ax, ay, az, bx, by, bz);
  }
}

function regenerateScene() {
  noiseSeed(floor(random(100000)));
  randomSeed(floor(random(100000)));
  buildTerrain();
  buildSky();
  buildNetwork();
  updateUi();
}

function buildTerrain() {
  terrainGrid = [];
  landPoints = [];

  for (let z = 0; z < terrainRows; z += 1) {
    const row = [];
    const nz = map(z, 0, terrainRows - 1, -terrainDepth / 2, terrainDepth / 2);

    for (let x = 0; x < terrainCols; x += 1) {
      const nx = map(x, 0, terrainCols - 1, -terrainWidth / 2, terrainWidth / 2);
      const shape = continentField(nx, nz);
      const noiseLayer =
        noise(x * 0.08, z * 0.08) * 54 +
        noise(100 + x * 0.16, 50 + z * 0.16) * 26;
      const height = -shape * 42 - noiseLayer;
      const point = {
        x: nx,
        z: nz,
        height,
        land: shape,
        phase: random(TWO_PI),
      };
      row.push(point);
    }
    terrainGrid.push(row);
  }

  for (let i = 0; i < 320; i += 1) {
    const x = random(-terrainWidth / 2, terrainWidth / 2);
    const z = random(-terrainDepth / 2, terrainDepth / 2);
    const shape = continentField(x, z);
    if (shape < 0.34) {
      continue;
    }

    const y = lookupTerrainHeight(x, z) - random(2, 12);
    landPoints.push({
      x,
      y,
      z,
      size: random(1.2, 2.8) * shape,
      phase: random(TWO_PI),
      speed: random(0.75, 2.1),
    });
  }
}

function buildSky() {
  skyPoints = [];
  const mode = modeConfigs[modeIndex];
  const count = mode.starDensity;
  for (let i = 0; i < count; i += 1) {
    skyPoints.push({
      x: random(width),
      y: random(height * 0.82),
      size: random(1.4, 3.3),
      alpha: random(35, 110),
      speed: random(0.8, 2.2),
      phase: random(TWO_PI),
    });
  }
}

function buildNetwork() {
  networkNodes = [];
  links = [];
  const targetNodes = 170;

  for (let i = 0; i < targetNodes; i += 1) {
    const anchorIndex = floor(random(continentAnchors.length));
    const anchor = continentAnchors[anchorIndex];
    const spreadX = randomGaussian() * anchor.rx * 0.42;
    const spreadZ = randomGaussian() * anchor.rz * 0.42;
    const baseX = constrain(anchor.x + spreadX, -terrainWidth / 2, terrainWidth / 2);
    const baseZ = constrain(anchor.z + spreadZ, -terrainDepth / 2, terrainDepth / 2);
    const terrainY = lookupTerrainHeight(baseX, baseZ);

    networkNodes.push({
      anchorIndex,
      cluster: anchorIndex,
      baseX,
      baseZ,
      baseY: terrainY - random(18, 72),
      size: random(2.2, 4.2),
      wander: random(6, 18),
      phase: random(TWO_PI),
    });
  }

  for (let i = 0; i < networkNodes.length; i += 1) {
    const node = networkNodes[i];
    const neighbors = [];

    for (let j = 0; j < networkNodes.length; j += 1) {
      if (i === j) {
        continue;
      }
      const other = networkNodes[j];
      const d = dist(node.baseX, node.baseZ, other.baseX, other.baseZ);
      if (d > 240) {
        continue;
      }
      const bias = node.cluster === other.cluster ? 0.6 : 1.0;
      neighbors.push({ j, d: d * bias });
    }

    neighbors.sort((a, b) => a.d - b.d);
    const limit = i % 5 === 0 ? 3 : 2;

    for (let k = 0; k < min(limit, neighbors.length); k += 1) {
      const target = neighbors[k].j;
      if (target < i) {
        continue;
      }
      links.push({
        a: i,
        b: target,
        weight: k === 0 ? 1.4 : 0.8,
      });
    }
  }
}

function continentField(x, z) {
  let value = 0;

  for (let i = 0; i < continentAnchors.length; i += 1) {
    const a = continentAnchors[i];
    const dx = (x - a.x) / a.rx;
    const dz = (z - a.z) / a.rz;
    const blob = exp(-(dx * dx + dz * dz) * 1.45);
    value = max(value, blob);
  }

  const breakup = noise((x + 900) * 0.003, (z + 900) * 0.003) * 0.28;
  return constrain(value + breakup - 0.12, 0, 1);
}

function lookupTerrainHeight(x, z) {
  const gx = map(x, -terrainWidth / 2, terrainWidth / 2, 0, terrainCols - 1);
  const gz = map(z, -terrainDepth / 2, terrainDepth / 2, 0, terrainRows - 1);
  const ix = constrain(floor(gx), 0, terrainCols - 1);
  const iz = constrain(floor(gz), 0, terrainRows - 1);
  return terrainGrid[iz][ix].height;
}

function updateUi() {
  const mode = modeConfigs[modeIndex];
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const grid = document.getElementById("mode-grid");

  title.textContent = mode.name;
  subtitle.textContent = mode.subtitle;

  if (!uiButtons.length) {
    grid.innerHTML = "";
    for (let i = 0; i < modeConfigs.length; i += 1) {
      const button = document.createElement("button");
      button.className = "mode-button";
      button.textContent = modeConfigs[i].name;
      button.addEventListener("click", () => setMode(i));
      grid.appendChild(button);
      uiButtons.push(button);
    }
  }

  for (let i = 0; i < uiButtons.length; i += 1) {
    uiButtons[i].classList.toggle("active", i === modeIndex);
  }
}

function setMode(nextIndex) {
  modeIndex = ((nextIndex % modeConfigs.length) + modeConfigs.length) % modeConfigs.length;
  buildSky();
  updateUi();
}

function keyPressed() {
  if (key >= "1" && key <= "9") {
    setMode(int(key) - 1);
  } else if (key === "0") {
    setMode(9);
  } else if (key === " ") {
    autoCycle = !autoCycle;
    lastCycle = millis();
  } else if (key === "r" || key === "R") {
    regenerateScene();
  } else if (keyCode === RIGHT_ARROW) {
    setMode(modeIndex + 1);
  } else if (keyCode === LEFT_ARROW) {
    setMode(modeIndex - 1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildSky();
}

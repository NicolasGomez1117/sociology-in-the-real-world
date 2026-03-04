# Sociology in the Real World — Modern Reliability & Governance Artifacts
**Focus:** what replaces classic AWS postmortems today

## Summary
The era of single, catastrophic, platform-wide outages has largely been replaced by
continuous micro-failure inside complex systems. As a result, the modern equivalent
of the traditional postmortem is not one document, but a family of reliability and
decision-review artifacts used to manage trust, risk, and legitimacy in large
technical institutions.

## 1. Near-Miss & Degradation Reviews
**Frame:** Failure without collapse

### Artifacts analyzed
- Latency spikes that never trigger alarms
- Partial failures affecting only certain regions, shards, or users
- Silent consumption of reliability margins

### What these artifacts reveal sociologically
- How institutions define "failure"
- Which users are considered acceptable to impact
- How risk is normalized when nothing visibly breaks

### Key shift
Failure is no longer "downtime," but loss of reliability margin.

### GCS tie-in
- Early regime-stress detection
- Optionality erosion before collapse
- Pre-crisis legitimacy maintenance

## 2. SLO & Error-Budget Reviews
**Frame:** Reliability as a ledger

### Artifacts analyzed
- Monthly SLO reviews
- Error-budget burn analyses
- Release gating tied to budget health

### What these artifacts reveal
- How institutions trade future stability for present performance
- Which risks are formally acknowledged vs. silently accepted
- Who is allowed to spend reliability "capital"

### GCS tie-in
- Resource allocation under uncertainty
- Institutional risk tolerance modeling
- Long-term vs. short-term optimization conflicts

## 3. Change-Failure Analysis
**Frame:** Failure as an outcome of decisions

### Artifacts analyzed
- What changed vs. what actually happened
- Config drift and rollout asymmetries
- Feature flag interactions

### What this reveals
- How responsibility is diffused across teams
- How institutions narrate causality
- Which assumptions were invisible at decision time

### GCS tie-in
- Decision-quality retrospectives
- Assumption failure tracking
- Governance blind-spot identification

## 4. GameDays & Fault-Injection Reports
**Frame:** Manufactured failure

### Artifacts analyzed
- GameDay reports
- Chaos experiment summaries
- Expected vs. observed behavior analyses

### What this reveals
- Which failures are considered acceptable to rehearse
- Which risks are too politically sensitive to simulate
- How preparedness is signaled internally

### GCS tie-in
- Regime resilience testing
- Adaptive capacity measurement
- Institutional learning speed

## 5. Operational Drift & Entropy Tracking
**Frame:** Slow failure

### Artifacts analyzed
- Alert fatigue
- Runbook staleness
- Latency creep hidden by automation
- Human-system mismatch

### What this reveals
- How institutions tolerate decay
- How labor and cognition are stretched over time
- When maintenance is deprioritized until crisis

### GCS tie-in
- Entropy accumulation
- Maintenance vs. growth tension
- Collapse without a triggering event

## 6. Decision & Policy Retrospectives
**Frame:** Governance under uncertainty

### Artifacts analyzed
- Why was this risk accepted?
- What signals were missing at the time?
- Which tradeoffs were consciously made?

### What this reveals
- Power distribution inside institutions
- How accountability is framed
- How uncertainty is legitimized

### GCS tie-in
- Decision-space modeling
- Governance failure modes
- Post-hoc rationalization detection

---

🧭 Student Interpretive Layer
Purpose: Add a conservative interpretive lens for sociological meaning
Source: Student draft section for SOC1010
Status: Draft / student-authored, not instructor text
Timestamp: 2026-02-10

Compression Lens (Optional)
A familiar cultural narrative (e.g., mythic stories about
authority and legitimacy) can be a useful way to visualize
tensions in real-world cases where institutions retain enforcement
power while public trust erodes. Used this way, the narrative
serves as an illustrative tool to clarify sociological concepts
such as legitimacy, authority, and social coordination under
uncertainty. This phrasing retains sociology as primary.

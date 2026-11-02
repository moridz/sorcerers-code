# EP001 — QA report

**Status: REMOTION RENDER VERIFIED — complete review deliverable.**

| Check | Result |
|---|---|
| Full video | `out/episode001-review.mp4` |
| Format | 1920 × 1080, 30/1 fps, H.264 / AAC |
| Duration | 492.967s; original narration 492.950s |
| Native video frames | 14,789 at 30 fps; picture length 492.966667s |
| Streams | One video and one narration audio stream |
| Full-file decode | PASS; no decode errors |
| Narration integrity | Supplied WAV byte-identical; no replacement or retiming |
| Decoded audio/source correlation | 0.999938 at zero lag |
| AAC round-trip SNR | 38.99 dB (sampled) |
| Visual sampling | 29 final-file frames across all ten sections; no sampled blank demo frames |
| UI actions | Real move button and owner/stage filtering verified in Chromium |
| Project preservation | All 26 source inputs unchanged; Kevin Cookie and root instructions/config untouched |

The complete V1 master and final video were rendered with Remotion Renderer
(`renderFrames` + `stitchFramesToVideo`). Exact still holds reuse image bytes;
all changing frames retain 30 fps. There are no looped filler clips, generated
voices, music/SFX, or burned-in full-sentence subtitles.

**Editorial QA:** Actual source UI states, purposeful crops/scrolling, sparse
transparent rules, and original definition/comparison/checklist panels follow
the narration. The fictional-data label remains visible. Source app gaps—no
calendar-week filter, editable detail view, or saved activity history—are
identified instead of inventing features. No real sales outcomes are claimed.

**Synchronization:** Genuine acoustic alignment plus independent unprompted ASR
supported section/content correspondence; 752 exact four-word cue matches had
0.00s median absolute onset difference. ASR is imperfect, not a verbatim
certification. Final waveform comparison checks the entire narration timeline.
The 16.667ms picture rounding accommodates the half-frame audio duration.

**Review limit:** Representative frames and section filmstrips were inspected;
this runtime cannot provide a full normal-speed human watch/listening pass.
No human creative approval, permanent style lock, or exact reproduction of
external reference motion is claimed. See `QA_DETAILS.md` and the retained
logs, transcripts, frame samples, and interaction evidence for details.

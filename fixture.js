// Fixture v0.1 (TEMPORARY): fake data shaped like the agreed contract (page 9).
// Replace with the real files from BE-A / BE-B when they share contract v0.1.
const FIXTURE_CAMERAS = [
  { camera_id: "CAM-01", location: "Gate 2" },
  { camera_id: "CAM-02", location: "Yard" },
  { camera_id: "CAM-03", location: "Cafeteria" }
];

const FIXTURE_INCIDENTS = [
  {
    incident_id: "INC-001", event_id: "EVT-1001", camera_id: "CAM-01", track_id: "T-17",
    start_time: "2026-10-19T10:42:10Z", end_time: "2026-10-19T10:42:35Z",
    event_type: "vape", event_score: 0.87,
    identity_status: "unknown", participant_id: null, identity_score: null,
    evidence_id: "EV-001", model_version: "fixture-0.1", data_origin: "fixture",
    review_status: "suspected"
  },
  {
    incident_id: "INC-002", event_id: "EVT-1002", camera_id: "CAM-02", track_id: "T-04",
    start_time: "2026-10-19T11:05:00Z", end_time: "2026-10-19T11:05:40Z",
    event_type: "cigarette", event_score: 0.92,
    identity_status: "matched_candidate", participant_id: "P-001", identity_score: 0.74,
    evidence_id: "EV-002", model_version: "fixture-0.1", data_origin: "fixture",
    review_status: "suspected"
  },
  {
    incident_id: "INC-003", event_id: "EVT-1003", camera_id: "CAM-03", track_id: "T-09",
    start_time: "2026-10-19T12:10:20Z", end_time: "2026-10-19T12:10:50Z",
    event_type: "uncertain", event_score: null,
    identity_status: "insufficient_quality", participant_id: null, identity_score: null,
    evidence_id: null, model_version: "fixture-0.1", data_origin: "fixture",
    review_status: "rejected"
  }
];

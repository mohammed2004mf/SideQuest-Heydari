# Traceability-Matrix

Verfolgt jede Anforderung von ihrer Herkunft (Pre-Traceability) bis zu Architektur, Code und Test (Post-Traceability). IDs siehe [`konventionen.md`](konventionen.md).

## Funktionale Anforderungen

| Ziel | Epic | Story | Anforderung | Priorität | Use Case | Architektur | Entwurf | Code | Testfall | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| _G-01_ | _EP-01_ | _US-01_ | _REQ-01_ | _Must_ | _UC-01_ | _COMP-01, ADR-001_ | _CLS-01, SEQ-01_ | _`src/…`_ | _TC-01_ | _offen_ |

## Qualitätsanforderungen

| NFR | Merkmal (ISO/IEC 25010) | Qualitätsszenario | Architekturentscheidung | Testfall | Status |
|---|---|---|---|---|---|
| _NFR-01_ | _Effizienz_ | _QS-01_ | _ADR-002_ | _TC-20_ | _offen_ |

## Abhängigkeiten zwischen Anforderungen

| ID | Abhängig von | Art (Verfeinerung / funktional ↔ nicht-funktional) |
|---|---|---|
| _REQ-02_ | _REQ-01_ | _Verfeinerung_ |

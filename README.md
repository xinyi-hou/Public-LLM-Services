## Paper Overview

Our study conducts the **first large-scale empirical analysis** of public-facing large language model (LLM) deployments in real-world environments.

Specifically, the paper addresses:
- **Background and Motivation**: The increasing trend toward self-hosted LLM deployments and the emerging security risks due to insecure defaults and misconfigurations.
- **Methodology**: An Internet-wide measurement study identifying 320,102 public LLM endpoints across 15 frameworks, followed by API probing and configuration analysis.
- **Results**: Detailed characterization of deployment trends, exposure surfaces, API responsiveness, and systemic security vulnerabilities.
- **Discussion and Recommendations**: Root causes of insecure deployments and practical guidance for developers, users, and the community.

The empirical results are organized into three main parts:
1. **General Statistics** (Section IV-A): Global deployment trends and infrastructure characteristics.
2. **API Responsiveness Analysis** (Section IV-B): Exposure of API functionalities and access control behaviors.
3. **Security and Risk Analysis** (Section IV-C): Identification of vulnerabilities, metadata leakage, and threat models.

This artifact is structured to mirror these three core analysis stages.


## Artifact Structure

### `data_collection/`
- **Purpose**: Contains raw and processed data gathered during the Internet-wide measurement phase.
- **Contents**: 
  - Discovered service endpoints;
  - API metadata;
  - Unified schema for normalization.
- **Related Paper Sections**: Methodology (§ III-B, III-C) and Data Collection overview.


### `step1_general_statistics/`
- **Purpose**: Supports **Section IV-A: General Statistics**.
- **Contents**:
  - Geographic and organizational distributions of LLM deployments.
  - Domain usage patterns, server stack compositions, and TLS security status.
- **Key Findings Supported**:
  - Deployment centralization among cloud providers;
  - Prevalence of insecure communication setups (e.g., lack of TLS).


### `step2_api_responsiveness/`
- **Purpose**: Supports **Section IV-B: API Responsiveness Analysis**.
- **Contents**:
  - Framework-level responsiveness rates to unauthenticated probing;
  - Exposure rates of different API categories (e.g., text generation, model operations);
  - Per-endpoint response statistics.
- **Key Findings Supported**:
  - High exposure rates in frameworks like Ollama and Llamafile;
  - Inconsistent protection across frameworks and endpoints.


### `step3_risk_analysis/`
- **Purpose**: Supports **Section IV-C: Security and Risk Analysis**.
- **Contents**:
  - Analysis of unauthenticated access surfaces;
  - Metadata leakage patterns;
  - Potential abuse scenarios and risk models.
- **Key Findings Supported**:
  - Systemic access control weaknesses;
  - Threats including misuse, model theft, and inference abuse.


## Usage Notes
- All data was collected through non-intrusive, read-only HTTP(S) requests to publicly accessible services.
- No authentication bypass, vulnerability exploitation, or sensitive data exfiltration was conducted.
- Sensitive identifiers (e.g., IP addresses, domains) have been anonymized where appropriate to protect service operators.

---

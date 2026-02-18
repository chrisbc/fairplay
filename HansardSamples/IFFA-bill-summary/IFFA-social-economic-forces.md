# Social and Economic Forces: IFF Amendment Bill 2025

## The Core Tension in One Sentence

> **The Bill transfers decision-making power from democratic institutions to private capital, while transferring financial risk from private capital to the public.**

---

## Force Map: Who Pushes, Who Gets Pushed

```mermaid
graph TD
    subgraph POWER["⚡ POWER — Who shapes the rules"]
        DEV["🏗️ Infrastructure Developers\nFaster approvals\nFewer scrutiny costs\nGuaranteed endorsements"]
        SPV["🏦 SPV Bondholders\nStatutory revenue stream\nForced sale powers\n30-year lock-in"]
        MIN["🏛️ The Minister\nSole decision-maker\nReduced criteria\nNo cross-portfolio checks"]
        BANK["💼 Investment Banks\nArrangement fees\nBond issuance\nZero risk retention"]
    end

    subgraph EXPOSURE["💸 EXPOSURE — Who bears the cost"]
        HO["🏠 Homeowners\nCompulsory levy\nNo affordability check\n30-year commitment"]
        REN["🔑 Renters\nCosts passed through\nNo vote, no voice\nNo protection"]
        MAORI["🌿 Māori Landowners\nConsent removed at scale\nTreaty rights weakened\nRecovery action risk"]
        COUNCIL["🏙️ Councils / Ratepayers\nEndorsement now mandatory\nRates now share recovery\nReduced community control"]
        FUTURE["👶 Future Generations\nInherit 30-year levies\nNo say in the deal\nStranded asset risk"]
    end

    subgraph REMOVED["🚫 SAFEGUARDS REMOVED"]
        CONSULT["❌ Ministerial Consultation\nCommerce · Consumer Finance\nLocal Govt · Rating · Public Finance"]
        AFFORD["❌ Affordability Assessment\nLong-term levypayer interests\nSustainability of payment"]
        DISCRET["❌ Council Discretion\n'May endorse' → 'Must endorse'\nOnly rate-collection test remains"]
        CONSENT["❌ Māori Consent (large projects)\nRemoved for 5,000+ properties\nBiggest projects, least protection"]
    end

    DEV -->|"designs levy proposal"| MIN
    BANK -->|"arranges SPV financing"| SPV
    MIN -->|"issues levy order\n(no consultation required)"| HO
    MIN -->|"issues levy order\n(no consultation required)"| MAORI
    MIN -->|"issues levy order\n(no consultation required)"| COUNCIL
    SPV -->|"collects levy via"| COUNCIL
    SPV -->|"forced sale power over"| HO
    HO -->|"pays levy for 30 years"| SPV
    SPV -->|"services debt to"| BANK
    FUTURE -->|"inherits obligations from"| HO

    CONSULT -.->|"would have checked"| MIN
    AFFORD -.->|"would have protected"| HO
    DISCRET -.->|"would have empowered"| COUNCIL
    CONSENT -.->|"would have protected"| MAORI

    classDef power fill:#1a1a2e,color:#e0e0e0,stroke:#4a4a8a
    classDef exposed fill:#2d1b1b,color:#e0e0e0,stroke:#8a2a2a
    classDef removed fill:#1a2d1a,color:#e0e0e0,stroke:#2a6a2a
    class DEV,SPV,MIN,BANK power
    class HO,REN,MAORI,COUNCIL,FUTURE exposed
    class CONSULT,AFFORD,DISCRET,CONSENT removed
```

---

## The Accountability Gap

```mermaid
graph LR
    subgraph BEFORE["Act 2020: Accountability Chain"]
        direction TB
        P1["Developer proposes levy"] --> P2["Infrastructure authority\n✅ MAY endorse"]
        P2 --> P3["Council\n✅ MAY endorse\n(affordability considered)"]
        P3 --> P4["Recommender\n✅ Assesses long-term interests\n✅ Assesses affordability"]
        P4 --> P5["Minister\n✅ Consults 5 portfolios\n✅ Must consider affordability"]
        P5 --> P6["Governor-General\nLevy order"]
    end

    subgraph AFTER["Bill 2025: Accountability Collapse"]
        direction TB
        Q1["Developer proposes levy"] --> Q2["Infrastructure authority\n❌ MUST endorse\n(if statutory tests met)"]
        Q2 --> Q3["Council\n❌ MUST endorse\n(unless rate collection at risk)"]
        Q3 --> Q4["Recommender\n❌ Affordability excluded\n(if developer owns land)"]
        Q4 --> Q5["Minister\n❌ No consultation required\n❌ Affordability excluded"]
        Q5 --> Q6["Governor-General\nLevy order"]
    end

    classDef good fill:#1a2d1a,color:#90ee90,stroke:#2a6a2a
    classDef bad fill:#2d1b1b,color:#ff9999,stroke:#8a2a2a
    class P1,P2,P3,P4,P5,P6 good
    class Q1,Q2,Q3,Q4,Q5,Q6 bad
```

---

## Who Pays, Who Benefits: The Money Flow

```mermaid
sankey-beta
    "NZ Households" , "SPV Levy Revenue" , 45
    "NZ Businesses" , "SPV Levy Revenue" , 35
    "Industrial Users" , "SPV Levy Revenue" , 20
    "SPV Levy Revenue" , "Bond Debt Service" , 70
    "SPV Levy Revenue" , "Admin / Costs" , 10
    "SPV Levy Revenue" , "Infrastructure Construction" , 20
    "Bond Debt Service" , "International Bondholders" , 50
    "Bond Debt Service" , "NZ Institutional Investors" , 20
    "Infrastructure Construction" , "Developer / Construction Co." , 20
```

---

## Safeguards: What Was There, What Was Removed

```mermaid
timeline
    title Erosion of Public Protections: IFF Act 2020 → Amendment Bill 2025
    section Act 2020
        Passed    : Ministerial consultation required (5 portfolios)
                  : Affordability must be assessed for ALL proposals
                  : Council MAY endorse — discretion retained
                  : Māori consent required for ALL levy areas
                  : Rates rank FIRST in rating sale proceeds
                  : No accelerated forced sale mechanism
    section Amendment Bill 2025
        Proposed  : ❌ Consultation REPEALED entirely
                  : ❌ Affordability EXEMPT if developer owns land
                  : ❌ Council MUST endorse — discretion eliminated
                  : ❌ Māori consent REMOVED for 5,000+ property projects
                  : ❌ Rates and levies now rank EQUALLY
                  : ❌ Forced land sale in 20 working days added
```

---

## The Risk Transfer Diagram

```mermaid
quadrantChart
    title Risk vs Reward: Who Bears What
    x-axis Low Reward --> High Reward
    y-axis Low Risk --> High Risk
    quadrant-1 High reward, high risk
    quadrant-2 Low reward, high risk
    quadrant-3 Low reward, low risk
    quadrant-4 High reward, low risk

    NZ Homeowners: [0.15, 0.85]
    Maori Landowners: [0.10, 0.90]
    Future Generations: [0.05, 0.80]
    Councils / Ratepayers: [0.20, 0.70]
    Renters: [0.10, 0.65]
    The Minister: [0.40, 0.20]
    SPV Bondholders: [0.85, 0.15]
    Infrastructure Developers: [0.90, 0.25]
    Investment Banks: [0.80, 0.05]
```

---

## The 30-Year Lock-In: What Citizens Can't Do

| Situation | Can a citizen... | Answer |
|-----------|-----------------|--------|
| A levy is proposed for their area | ...participate in consultation? | ❌ Consultation repealed |
| The levy is unaffordable | ...require an affordability assessment? | ❌ Exempt if developer owns land |
| The council opposes the levy | ...rely on council to block it? | ❌ Council must endorse |
| Protected Māori land is included | ...require consent for large projects? | ❌ Removed at 5,000+ properties |
| The infrastructure becomes a stranded asset | ...stop paying the levy? | ❌ No early termination mechanism |
| The levy is excessive | ...get a refund mid-period? | ❌ Only at end of 30-year period |
| The SPV fails | ...end the levy? | ❌ A receiver continues it |
| The Minister makes a bad decision | ...trigger a review? | ❌ No review mechanism |
| They can't pay | ...avoid forced sale of their land? | ❌ After 4 months: yes, via SPV |

---

## The Democratic Deficit: One Infographic

```
BEFORE (Act 2020)                    AFTER (Bill 2025)

   PUBLIC INPUT                         PUBLIC INPUT
   ────────────                         ────────────
   ✅ 5 Ministers consulted              ❌ None required
   ✅ Affordability assessed             ❌ Waived for developer land
   ✅ Council can say no                 ❌ Council must say yes
   ✅ Māori consent required             ❌ Bypassed at scale
   ✅ Recommender analyses risks         ❌ Reduced criteria
   ✅ Report fully published             ❌ OIA redactions allowed

         │                                     │
         ▼                                     ▼

   DECISION QUALITY                    DECISION QUALITY
   ────────────────                    ────────────────
   6 independent checks                1 Minister
   Full criteria required              Reduced criteria
   Public information                  Commercially redacted

         │                                     │
         ▼                                     ▼

   WHO BEARS RISK                      WHO BEARS RISK
   ──────────────                      ──────────────
   Developer: shared                   Developer: minimal
   SPV: market risk                    SPV: statutory guarantee
   Levypayers: protected               Levypayers: unprotected
   Māori: consent right                Māori: consent removed
   Council: rate priority              Council: rate parity only
```

---

## Key Messages for Public Audiences

### For homeowners
> *"You could be levied for 30 years for infrastructure you were never asked about, assessed for affordability, or given any say in — and there's no way out."*

### For renters
> *"Your landlord pays the levy. Your rent goes up. You had no voice in the decision."*

### For Māori communities
> *"The bigger the project, the less your consent matters. The 5,000-property threshold means the largest developments — with the greatest impact — require no iwi consent."*

### For voters / citizens
> *"One Minister, with fewer checks than ever, can commit your community to 30 years of compulsory charges — on infrastructure that could be a stranded asset by the time it's half paid off."*

### For the energy/climate context
> *"A mechanism designed for suburban stormwater drains could — with modest amendments — fund a 30-year fossil fuel lock-in, with every household paying via their electricity bill, and no way to stop it when renewables make it redundant."*

---

*Supporting documents: IFFA-public-vs-corporate-interest-analysis.md · IFFA-forced-land-sale-mechanism.md · IFFA-LNG-terminal-energy-levy-scenario.md · IFFA-stranded-asset-scenario.md*

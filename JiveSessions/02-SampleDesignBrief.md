This is a comprehensive brief that addresses both behavioural change (getting people to vote) and transparency (understanding who they are voting for).

Below is a strategic plan for a digital ecosystem designed to meet these goals for the 2026 NZ General Election.

### **Important Strategic Note: The "Special Vote" Constraint**
Before proceeding with the design, it is crucial to address your point regarding the removal of special votes.
*   *Current NZ Law:* As of now, voting on the day (ordinary voting) and special votes (for those not on the roll or voting outside their electorate) are standard parts of the Electoral Act.
*   *The Risk:* If your campaign states "You cannot vote on the day" and this is legally incorrect, the app could be accused of voter suppression or spreading misinformation.
*   *Recommendation:* Frame the messaging as **"Don't Risk It."** Even if special votes *are* available, they require extra paperwork and cause delays. The campaign should focus on the certainty of pre-enrolment rather than the absence of a backup, unless legislation changes between now and 2026 to explicitly confirm your constraint.

---

### **Project Title: "The Ballot Box NZ" (Working Title)**
**Core Concept:** A non-partisan, high-transparency digital platform that functions like a "fitness tracker" for democracy. It gamifies the political process for youth while providing deep-dive transparency tools for seasoned voters.

#### **1. Platform Architecture**
To maximize reach, do not build a standalone app that requires a download (a barrier to entry). Instead, build a **Progressive Web App (PWA)**.
*   **No App Store required:** Users click a link and "install" it to their home screen instantly.
*   **Cross-platform:** Works on desktop for policy deep-dives and mobile for on-the-go engagement.

---

#### **2. Feature Modules (Mapped to Your Goals)**

##### **Module A: "The Pre-Check" (Goal: Pre-Enrolment Urgency)**
*   **The Hook:** A prominent "Am I Ready?" status bar on the home screen.
*   **Functionality:** Integration with the Electoral Commission API (or a simple postcode/selector tool).
*   **The "FOMO" Mechanic:** Since you aim to highlight the removal of special votes, use a countdown timer: *"Days left to secure your vote."*
*   **Viral Element:** A "Ready to Roll" badge users can share on Instagram/TikTok. The badge turns from Red (Not Enrolled) to Green (Enrolled).

##### **Module B: "Policy Playground" (Goal: Engaging Policy Info)**
*   **The Problem:** Manifestos are 50-page PDFs.
*   **The Solution:** AI-summaries and "Tinder-style" matching.
    *   **Blind Match:** Users swipe left/right on policy statements (e.g., "Should tertiary education be free?") without seeing the party name. At the end, the app reveals which party aligns closest to their values.
    *   **Plain English Translator:** A tool where users can paste a complex policy paragraph, and the app translates it into "Gen Z speak" or simple English.
    *   **Budget Simulator:** "You have $100bn of taxpayer money. Allocate it to Health, Education, Defense." The app then shows which party’s spending plan most closely matches the user's allocation.

##### **Module C: "The Candidate Scorecard" (Goal: Ranking & Comparing Candidates)**
*   **Profile Cards:** Every candidate gets a "Player Card" featuring:
    *   **Voting Attendance:** % of parliamentary votes attended (for incumbents).
    *   **Private Member Bills:** How many bills have they introduced?
    *   **Experience Meter:** Years in parliament vs. Community activism.
*   **Persona Meter:** Using sentiment analysis (aggregated from public news archives), display a "Public Sentiment" trend line over time (e.g., "Rising trust" vs "Controversial").
*   **Head-to-Head:** A comparison tool where users select two candidates to see a side-by-side breakdown of their voting records and stated priorities.

##### **Module D: "Follow the Money" (Goal: Transparency on Influences)**
*   **The Visualizer:** An interactive spider-web chart showing party funding sources.
    *   **Data Source:** Pulling data from the Electoral Commission returns and the Register of Pecuniary Interests.
    *   **Lobbyist Watch:** A database of lobbyists and their known client lists. If a candidate suddenly changes stance on a policy, the app highlights if their top donors benefit from that change.
    *   **Global Ties:** A "Foreign Influence" flag. If a lobby group or donor has known affiliations with overseas think tanks or foreign state entities, this is highlighted in a "Global Connections" tab.

---

#### **3. Engagement Strategy for Youth (Goal: Stimulate Interest)**

**Gamification:**
*   **"Democracy XP":** Users earn points for actions: Reading a policy (+10pts), Checking their enrolment (+50pts), Sharing a comparison (+20pts).
*   **Rewards:** Points can be redeemed for digital profile frames or entry into draws for merchandise (generic civic pride gear, not party specific).

**Tone of Voice:**
*   Move away from "bureaucratic" language. Use a tone that is "Witty, Direct, and Unfiltered."
*   Use video content: Short 30-second vertical videos (TikTok/Reels style) embedded in the app explaining complex topics (e.g., "WTF is an electorate vote?").

---

#### **4. Delivery & Communication Tools**

**Phase 1: The "Wake Up" (6 Months Out)**
*   **Tool:** Social Media Filters (Instagram/TikTok).
*   **Content:** "Which party is your soulmate?" filter. Fun, low-stakes engagement to get users to the website.
*   **Message:** Focus on the *change* in voting rules (pre-enrolment urgency).

**Phase 2: The "Deep Dive" (3 Months Out)**
*   **Tool:** The PWA (Web App).
*   **Content:** Launch the "Policy Playground" and "Follow the Money" tools.
*   **Email/SMS Blasts:** "The candidates for your electorate have just been announced. See who is funding them here."

**Phase 3: The "Get Out The Vote" (2 Weeks Out)**
*   **Tool:** Push Notifications (via the Web App).
*   **Content:** Location-based voting booth finder.
*   **Message:** "Voting starts tomorrow. Here is your cheat sheet of who to vote for based on your values."

---

#### **5. Risk Mitigation & Trust**

To ensure the tool is respected and used, you must navigate the "Bias" trap.
1.  **Advisory Board:** Establish a small advisory board with representation from different political leanings (e.g., a former MP from the left and one from the right) to audit the tool for neutrality.
2.  **Source Transparency:** Every claim made about a candidate (e.g., "Voted against this bill") must have a direct link to Hansard (Parliamentary record) or a reputable news source.
3.  **Privacy:** Do not collect user voting preferences. Explicitly state that user data is not sold to political parties.

#### **6. Summary of Tech Stack**
*   **Frontend:** React or Vue.js (for the PWA).
*   **Backend:** Python/Django (excellent for data scraping and handling the "Follow the Money" databases).
*   **Database:** PostgreSQL.
*   **Data Sources:** Parliamentary Counsel Office (legislation), Electoral Commission (donations/enrolment), OpenCorporates (global influence tracking).

This plan moves the election conversation from "boring speeches" to "data-driven decisions," appealing to a younger demographic raised on interactive media while satisfying the need for deep transparency regarding candidates and their influences.
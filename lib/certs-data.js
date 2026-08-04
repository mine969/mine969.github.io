// Cybersecurity certification roadmap — structured data.
// Sourced from the open dataset behind https://certs.pyaeheinnkyaw.com/
// (repo: https://github.com/ph0b14/cert-roadmap by PHK Knowledge Sharing).
// This page reproduces a subset of that dataset (11 of 25 issuing bodies,
// ~144 of 225 certifications) in Hein Htet Zaw's own layout. Difficulty
// scores, cost notes, and structure are the original project's work —
// full credit below and linked throughout.

export const certSourceCredit = {
  label: "Certification data sourced from",
  name: "PHK Knowledge Sharing",
  url: "https://www.pyaeheinnkyaw.com",
  projectName: "Technical Security Certification Roadmap",
  projectUrl: "https://certs.pyaeheinnkyaw.com/",
  repoUrl: "https://github.com/ph0b14/cert-roadmap",
}

export const domainLabels = {
  "pentest": "Penetration Testing",
  "webapp": "Web & API Security",
  "exploitdev": "Exploit Dev & Vuln Research",
  "soc": "SOC & Detection Engineering",
  "incident-response": "Incident Response",
  "forensics": "Digital Forensics",
  "malware-re": "Malware Analysis & RE",
  "threat-intel": "Threat Intel & Hunting",
  "cloud": "Cloud & Container Security",
  "security-engineering": "Security Engineering & Arch",
  "appsec": "Secure Dev & DevSecOps",
  "ot-ics-iot": "OT / ICS / IoT & Hardware",
  "ai-security": "AI / ML Security"
}

export const domainOrder = [
  "pentest",
  "webapp",
  "exploitdev",
  "soc",
  "incident-response",
  "forensics",
  "malware-re",
  "threat-intel",
  "cloud",
  "security-engineering",
  "appsec",
  "ot-ics-iot",
  "ai-security"
]

export const certifications = [
  {
    "id": "osce3",
    "name": "OSCE³",
    "fullName": "OffSec Certified Expert ³",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/certificates/osce3/",
    "domain": "pentest",
    "level": 88,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Awarded free upon earning OSEP+OSWE+OSED (~$5,247 combined); no standalone exam."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/certificates/osce3/"
  },
  {
    "id": "giac-gx-pt",
    "name": "GX-PT",
    "fullName": "GIAC Experienced Penetration Tester",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/experienced-penetration-tester-gxpt",
    "domain": "pentest",
    "level": 85,
    "cost": {
      "amount": 1299,
      "currency": "USD",
      "note": "Portfolio certification; $499 if you hold the prerequisite certification. Excludes SANS training."
    },
    "examFormat": "practical",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "osep",
    "name": "OSEP",
    "fullName": "OffSec Experienced Penetration Tester",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/pen-300/",
    "domain": "pentest",
    "level": 84,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle (90 days lab, 1 attempt)."
    },
    "examFormat": "practical",
    "examHours": 48,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/pen-300/"
  },
  {
    "id": "lpt-master",
    "name": "LPT Master",
    "fullName": "Licensed Penetration Tester Master",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/licensed-penetration-tester-lpt-master/",
    "domain": "pentest",
    "level": 82,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Awarded automatically to CPENT candidates scoring 90%+; no separate purchase."
    },
    "examFormat": "practical",
    "examHours": 24,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/licensed-penetration-tester-lpt-master/"
  },
  {
    "id": "htb-cape",
    "name": "CAPE",
    "fullName": "HTB Certified Active Directory Pentesting Expert",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-active-directory-pentesting-expert",
    "domain": "pentest",
    "level": 82,
    "cost": {
      "amount": 1260,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 240,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "ine-ecptx",
    "name": "eCPTX",
    "fullName": "eLearnSecurity Certified Penetration Tester eXtreme",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know",
    "domain": "pentest",
    "level": 78,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired by INE 1 Oct 2023 with four other eLearnSecurity credentials."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "retired",
    "renewalYears": null,
    "source": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know"
  },
  {
    "id": "giac-grtp",
    "name": "GRTP",
    "fullName": "GIAC Red Team Professional",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/red-team-professional-grtp",
    "domain": "pentest",
    "level": 77,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "cpent",
    "name": "CPENT",
    "fullName": "Certified Penetration Testing Professional",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-penetration-testing-professional-cpent/",
    "domain": "pentest",
    "level": 75,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Exam + 90-day practice range bundle; training bundles from $1,999."
    },
    "examFormat": "practical",
    "examHours": 24,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-penetration-testing-professional-cpent/"
  },
  {
    "id": "htb-cwpe",
    "name": "CWPE",
    "fullName": "HTB Certified Wi-Fi Pentesting Expert",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-wi-fi-pentesting-expert",
    "domain": "pentest",
    "level": 75,
    "cost": {
      "amount": 1260,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 168,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "htb-cpts",
    "name": "CPTS",
    "fullName": "HTB Certified Penetration Testing Specialist",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist",
    "domain": "pentest",
    "level": 71,
    "cost": {
      "amount": 490,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 240,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "oscp",
    "name": "OSCP",
    "fullName": "OffSec Certified Professional",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/pen-200/",
    "domain": "pentest",
    "level": 69,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle. Standalone OSCP+ exam $1,699."
    },
    "examFormat": "practical",
    "examHours": 24,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.offsec.com/courses/pen-200/"
  },
  {
    "id": "giac-gpen",
    "name": "GPEN",
    "fullName": "GIAC Penetration Tester",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/penetration-tester-gpen",
    "domain": "pentest",
    "level": 67,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-ecppt",
    "name": "eCPPT",
    "fullName": "INE Certified Professional Penetration Tester",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/ecppt-certification",
    "domain": "pentest",
    "level": 65,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/ecppt-certification"
  },
  {
    "id": "giac-gawn",
    "name": "GAWN",
    "fullName": "GIAC Assessing and Auditing Wireless Networks",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/assessing-auditing-wireless-networks-gawn",
    "domain": "pentest",
    "level": 64,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcpn",
    "name": "GCPN",
    "fullName": "GIAC Cloud Penetration Tester",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/cloud-penetration-tester-gcpn",
    "domain": "pentest",
    "level": 64,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ceh-practical",
    "name": "CEH Practical",
    "fullName": "Certified Ethical Hacker Practical",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh-practical/",
    "domain": "pentest",
    "level": 62,
    "cost": {
      "amount": 550,
      "currency": "USD",
      "note": "Standalone practical exam voucher."
    },
    "examFormat": "practical",
    "examHours": 6,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh-practical/"
  },
  {
    "id": "ine-emapt",
    "name": "eMAPT",
    "fullName": "INE Mobile Application Penetration Tester",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/emapt-certification",
    "domain": "pentest",
    "level": 59,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/emapt-certification"
  },
  {
    "id": "giac-gmob",
    "name": "GMOB",
    "fullName": "GIAC Mobile Device Security Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/mobile-device-security-analyst-gmob",
    "domain": "pentest",
    "level": 59,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ceh-master",
    "name": "CEH Master",
    "fullName": "Certified Ethical Hacker Master",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh-practical/",
    "domain": "pentest",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Awarded automatically for passing both CEH knowledge + CEH Practical."
    },
    "examFormat": "hybrid",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh-practical/"
  },
  {
    "id": "ceh",
    "name": "CEH",
    "fullName": "Certified Ethical Hacker v13",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
    "domain": "pentest",
    "level": 51,
    "cost": {
      "amount": 1199,
      "currency": "USD",
      "note": "Exam voucher via Pearson VUE; training bundles from $1,699."
    },
    "examFormat": "multiple-choice",
    "examHours": 4,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/"
  },
  {
    "id": "oswp",
    "name": "OSWP",
    "fullName": "OffSec Wireless Professional",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/pen-210/",
    "domain": "pentest",
    "level": 48,
    "cost": {
      "amount": 799,
      "currency": "USD",
      "note": "Learn Fundamentals subscription ($799/yr) includes course + exam."
    },
    "examFormat": "practical",
    "examHours": 4,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/pen-210/"
  },
  {
    "id": "comptia-pentest-plus",
    "name": "PenTest+",
    "fullName": "CompTIA PenTest+",
    "vendor": "CompTIA",
    "vendorUrl": "https://www.comptia.org/en-us/certifications/pentest/",
    "domain": "pentest",
    "level": 48,
    "cost": {
      "amount": 439,
      "currency": "USD",
      "note": "Single-attempt voucher, US pricing."
    },
    "examFormat": "hybrid",
    "examHours": 2.75,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.comptia.org/en-us/certifications/pentest/"
  },
  {
    "id": "ecsa",
    "name": "ECSA",
    "fullName": "EC-Council Certified Security Analyst",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/",
    "domain": "pentest",
    "level": 48,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired 2021; replaced by CPENT."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "retired",
    "renewalYears": 3,
    "source": "https://cert.eccouncil.org/retired-certification.html"
  },
  {
    "id": "giac-geva",
    "name": "GEVA",
    "fullName": "GIAC Enterprise Vulnerability Assessor",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/enterprise-vulnerability-assessor-geva",
    "domain": "pentest",
    "level": 45,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "In abeyance — GIAC no longer sells attempts."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "retired",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-ejpt",
    "name": "eJPT",
    "fullName": "INE Junior Penetration Tester",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/ejpt-certification",
    "domain": "pentest",
    "level": 33,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/ejpt-certification"
  },
  {
    "id": "klcp",
    "name": "KLCP",
    "fullName": "Kali Linux Certified Professional",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/pen-103/",
    "domain": "pentest",
    "level": 31,
    "cost": {
      "amount": 799,
      "currency": "USD",
      "note": "Course free; exam via Learn Fundamentals/Learn One subscription."
    },
    "examFormat": "multiple-choice",
    "examHours": 1.5,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/pen-103/"
  },
  {
    "id": "htb-cwee",
    "name": "CWEE",
    "fullName": "HTB Certified Web Exploitation Expert",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-web-exploitation-expert",
    "domain": "webapp",
    "level": 80,
    "cost": {
      "amount": 1260,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 240,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "oswe",
    "name": "OSWE",
    "fullName": "OffSec Web Expert",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/web-300/",
    "domain": "webapp",
    "level": 79,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle (90 days lab, 1 attempt)."
    },
    "examFormat": "practical",
    "examHours": 48,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/web-300/"
  },
  {
    "id": "ine-ewptxv2",
    "name": "eWPTXv2",
    "fullName": "INE Web Application Penetration Tester eXtreme",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/ewptx-certification",
    "domain": "webapp",
    "level": 77,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/ewptx-certification"
  },
  {
    "id": "htb-cwes",
    "name": "CWES",
    "fullName": "HTB Certified Web Exploitation Specialist",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-web-exploitation-specialist",
    "domain": "webapp",
    "level": 65,
    "cost": {
      "amount": 490,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 168,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "giac-gwapt",
    "name": "GWAPT",
    "fullName": "GIAC Web Application Penetration Tester",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/web-application-penetration-tester-gwapt",
    "domain": "webapp",
    "level": 65,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "oswa",
    "name": "OSWA",
    "fullName": "OffSec Web Assessor",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/web-200/",
    "domain": "webapp",
    "level": 62,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle (90 days lab, 1 attempt)."
    },
    "examFormat": "practical",
    "examHours": 24,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/web-200/"
  },
  {
    "id": "ine-ewpt",
    "name": "eWPT",
    "fullName": "INE Web Application Penetration Tester",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/ewpt-certification",
    "domain": "webapp",
    "level": 59,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/ewpt-certification"
  },
  {
    "id": "htb-cbbh",
    "name": "CBBH",
    "fullName": "HTB Certified Bug Bounty Hunter",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications",
    "domain": "webapp",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Replaced by CWES on 1 Oct 2025; holders migrated automatically."
    },
    "examFormat": "practical",
    "examHours": 168,
    "status": "retired",
    "renewalYears": null,
    "source": "https://www.hackthebox.com/blog/HTB-CWES-announcement"
  },
  {
    "id": "osee",
    "name": "OSEE",
    "fullName": "OffSec Exploitation Expert",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/exp-401/",
    "domain": "exploitdev",
    "level": 93,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Not published; historically ~$5,000-$12,000+ as in-person course."
    },
    "examFormat": "practical",
    "examHours": 72,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/exp-401/"
  },
  {
    "id": "giac-gxpn",
    "name": "GXPN",
    "fullName": "GIAC Exploit Researcher and Advanced Penetration Tester",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/exploit-researcher-advanced-penetration-tester-gxpn",
    "domain": "exploitdev",
    "level": 84,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "osed",
    "name": "OSED",
    "fullName": "OffSec Exploit Developer",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/exp-301/",
    "domain": "exploitdev",
    "level": 80,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle (90 days lab, 1 attempt)."
    },
    "examFormat": "practical",
    "examHours": 48,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/exp-301/"
  },
  {
    "id": "osmr",
    "name": "OSMR",
    "fullName": "OffSec macOS Researcher",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/",
    "domain": "exploitdev",
    "level": 78,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "New issuance on hiatus since Nov 2025; course removed Jan 2026."
    },
    "examFormat": "practical",
    "examHours": 47.75,
    "status": "retired",
    "renewalYears": null,
    "source": "https://help.offsec.com/hc/en-us/articles/41591722499604-OSMR-Certification-Exam-Changes-FAQ"
  },
  {
    "id": "ine-ecxd",
    "name": "eCXD",
    "fullName": "eLearnSecurity Certified eXploit Developer",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know",
    "domain": "exploitdev",
    "level": 74,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired by INE 1 Oct 2023."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "retired",
    "renewalYears": null,
    "source": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know"
  },
  {
    "id": "giac-gx-ia",
    "name": "GX-IA",
    "fullName": "GIAC Experienced Intrusion Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/experienced-intrusion-analyst-gxia",
    "domain": "soc",
    "level": 84,
    "cost": {
      "amount": 1299,
      "currency": "USD",
      "note": "Portfolio certification; $499 if you hold the prerequisite certification. Excludes SANS training."
    },
    "examFormat": "practical",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "htb-cdsa",
    "name": "CDSA",
    "fullName": "HTB Certified Defensive Security Analyst",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-defensive-security-analyst",
    "domain": "soc",
    "level": 67,
    "cost": {
      "amount": 490,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 168,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "giac-gcia",
    "name": "GCIA",
    "fullName": "GIAC Certified Intrusion Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/certified-intrusion-analyst-gcia",
    "domain": "soc",
    "level": 67,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gctd",
    "name": "GCTD",
    "fullName": "GIAC Cloud Threat Detection",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/cloud-threat-detection-gctd",
    "domain": "soc",
    "level": 66,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gmon",
    "name": "GMON",
    "fullName": "GIAC Continuous Monitoring",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/continuous-monitoring-certification-gmon",
    "domain": "soc",
    "level": 65,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gdat",
    "name": "GDAT",
    "fullName": "GIAC Defending Advanced Threats",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/defending-advanced-threats-gdat",
    "domain": "soc",
    "level": 63,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcda",
    "name": "GCDA",
    "fullName": "GIAC Certified Detection Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/certified-detection-analyst-gcda",
    "domain": "soc",
    "level": 61,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "osda",
    "name": "OSDA",
    "fullName": "OffSec Defense Analyst",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/soc-200/",
    "domain": "soc",
    "level": 57,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle (90 days lab, 1 attempt)."
    },
    "examFormat": "practical",
    "examHours": 24,
    "status": "active",
    "renewalYears": null,
    "source": "https://www.offsec.com/courses/soc-200/"
  },
  {
    "id": "cisco-cyberops-professional",
    "name": "CyberOps Professional",
    "fullName": "Cisco Certified CyberOps Professional",
    "vendor": "Cisco",
    "vendorUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/",
    "domain": "soc",
    "level": 55,
    "cost": {
      "amount": 700,
      "currency": "USD",
      "note": "Two exams: core plus a concentration."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/"
  },
  {
    "id": "splunk-splk-5002",
    "name": "SPLK-5002",
    "fullName": "Splunk Certified Cybersecurity Defense Engineer",
    "vendor": "Splunk",
    "vendorUrl": "https://www.splunk.com/en_us/training/certification-track.html",
    "domain": "soc",
    "level": 52,
    "cost": {
      "amount": 130,
      "currency": "USD",
      "note": "Per attempt."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.splunk.com/en_us/training/certification-track.html"
  },
  {
    "id": "comptia-cysa-plus",
    "name": "CySA+",
    "fullName": "CompTIA Cybersecurity Analyst",
    "vendor": "CompTIA",
    "vendorUrl": "https://www.comptia.org/en-us/certifications/cybersecurity-analyst/",
    "domain": "soc",
    "level": 48,
    "cost": {
      "amount": 439,
      "currency": "USD",
      "note": "Single-attempt voucher, US pricing."
    },
    "examFormat": "hybrid",
    "examHours": 2.75,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.comptia.org/en-us/certifications/cybersecurity-analyst/"
  },
  {
    "id": "ms-sc-200",
    "name": "SC-200",
    "fullName": "Microsoft Security Operations Analyst Associate",
    "vendor": "Microsoft",
    "vendorUrl": "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/",
    "domain": "soc",
    "level": 48,
    "cost": {
      "amount": 165,
      "currency": "USD",
      "note": "100-minute exam covering Sentinel, Defender XDR, KQL."
    },
    "examFormat": "multiple-choice",
    "examHours": 1.67,
    "status": "active",
    "renewalYears": 1,
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/"
  },
  {
    "id": "giac-gsoc",
    "name": "GSOC",
    "fullName": "GIAC Security Operations Certified",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/security-operations-certified-gsoc",
    "domain": "soc",
    "level": 48,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "csa",
    "name": "CSA",
    "fullName": "Certified SOC Analyst",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-soc-analyst-csa/",
    "domain": "soc",
    "level": 45,
    "cost": {
      "amount": 450,
      "currency": "USD",
      "note": "CSA v2 RPS exam voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 3,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-soc-analyst-csa/"
  },
  {
    "id": "splunk-splk-5001",
    "name": "SPLK-5001",
    "fullName": "Splunk Certified Cybersecurity Defense Analyst",
    "vendor": "Splunk",
    "vendorUrl": "https://www.splunk.com/en_us/training/certification-track.html",
    "domain": "soc",
    "level": 45,
    "cost": {
      "amount": 130,
      "currency": "USD",
      "note": "Per attempt."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.splunk.com/en_us/training/certification-track.html"
  },
  {
    "id": "splunk-splunk-es-admin",
    "name": "Splunk ES Admin",
    "fullName": "Splunk Enterprise Security Certified Admin",
    "vendor": "Splunk",
    "vendorUrl": "https://www.splunk.com/en_us/training/certification-track.html",
    "domain": "soc",
    "level": 45,
    "cost": {
      "amount": 130,
      "currency": "USD",
      "note": "Per attempt."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.splunk.com/en_us/training/certification-track.html"
  },
  {
    "id": "cisco-ccna-cybersecurity",
    "name": "CCNA Cyber",
    "fullName": "Cisco Certified Network Associate Cybersecurity",
    "vendor": "Cisco",
    "vendorUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/",
    "domain": "soc",
    "level": 40,
    "cost": {
      "amount": 300,
      "currency": "USD",
      "note": "120-minute exam. Renamed from CyberOps Associate Feb 2026."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/"
  },
  {
    "id": "ine-esoc",
    "name": "eSOC",
    "fullName": "INE Security Operations Center Analyst",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/esoc-certification",
    "domain": "soc",
    "level": 31,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/esoc-certification"
  },
  {
    "id": "giac-gx-ih",
    "name": "GX-IH",
    "fullName": "GIAC Experienced Incident Handler",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/experienced-incident-handler-gxih",
    "domain": "incident-response",
    "level": 82,
    "cost": {
      "amount": 1299,
      "currency": "USD",
      "note": "Portfolio certification; $499 if you hold the prerequisite certification. Excludes SANS training."
    },
    "examFormat": "practical",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-geir",
    "name": "GEIR",
    "fullName": "GIAC Enterprise Incident Response",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/enterprise-incident-responder-geir",
    "domain": "incident-response",
    "level": 78,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-glir",
    "name": "GLIR",
    "fullName": "GIAC Linux Incident Responder",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/linux-incident-responder-glir",
    "domain": "incident-response",
    "level": 73,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcih",
    "name": "GCIH",
    "fullName": "GIAC Certified Incident Handler",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/certified-incident-handler-gcih",
    "domain": "incident-response",
    "level": 62,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-ecir",
    "name": "eCIR",
    "fullName": "INE Certified Incident Responder",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/ecir-certification",
    "domain": "incident-response",
    "level": 57,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/ecir-certification"
  },
  {
    "id": "ecih",
    "name": "ECIH",
    "fullName": "EC-Council Certified Incident Handler",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/ec-council-certified-incident-handler-ecih/",
    "domain": "incident-response",
    "level": 53,
    "cost": {
      "amount": 450,
      "currency": "USD",
      "note": "RPS exam voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 3,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/ec-council-certified-incident-handler-ecih/"
  },
  {
    "id": "osir",
    "name": "OSIR",
    "fullName": "OffSec Incident Responder",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/ir-200/",
    "domain": "incident-response",
    "level": 52,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle. Expires 3 years after issuance."
    },
    "examFormat": "hybrid",
    "examHours": 8,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.offsec.com/courses/ir-200/"
  },
  {
    "id": "giac-gx-fa",
    "name": "GX-FA",
    "fullName": "GIAC Experienced Forensics Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/experienced-forensics-analyst-gxfa",
    "domain": "forensics",
    "level": 87,
    "cost": {
      "amount": 1299,
      "currency": "USD",
      "note": "Portfolio certification; $499 if you hold the prerequisite certification. Excludes SANS training."
    },
    "examFormat": "practical",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gx-fe",
    "name": "GX-FE",
    "fullName": "GIAC Experienced Forensics Examiner",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/experienced-forensics-examiner-gxfe",
    "domain": "forensics",
    "level": 85,
    "cost": {
      "amount": 1299,
      "currency": "USD",
      "note": "Portfolio certification; $499 if you hold the prerequisite certification. Excludes SANS training."
    },
    "examFormat": "practical",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcfa",
    "name": "GCFA",
    "fullName": "GIAC Certified Forensic Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/certified-forensic-analyst-gcfa",
    "domain": "forensics",
    "level": 77,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gnfa",
    "name": "GNFA",
    "fullName": "GIAC Network Forensic Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/network-forensic-analyst-gnfa",
    "domain": "forensics",
    "level": 75,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcfr",
    "name": "GCFR",
    "fullName": "GIAC Cloud Forensics Responder",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/cloud-forensics-responder-gcfr",
    "domain": "forensics",
    "level": 73,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gime",
    "name": "GIME",
    "fullName": "GIAC iOS and macOS Examiner",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/ios-macos-examiner-gime",
    "domain": "forensics",
    "level": 71,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcfe",
    "name": "GCFE",
    "fullName": "GIAC Certified Forensic Examiner",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/certified-forensic-examiner-gcfe",
    "domain": "forensics",
    "level": 63,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-ecdfp",
    "name": "eCDFP",
    "fullName": "INE Certified Digital Forensics Professional",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/ecdfp-certification",
    "domain": "forensics",
    "level": 62,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/ecdfp-certification"
  },
  {
    "id": "giac-gasf",
    "name": "GASF",
    "fullName": "GIAC Advanced Smartphone Forensics",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/advanced-smartphone-forensics-gasf",
    "domain": "forensics",
    "level": 60,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "chfi",
    "name": "CHFI",
    "fullName": "Computer Hacking Forensic Investigator",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/computer-hacking-forensic-investigator-chfi/",
    "domain": "forensics",
    "level": 54,
    "cost": {
      "amount": 650,
      "currency": "USD",
      "note": "RPS exam voucher; training bundles from $1,699."
    },
    "examFormat": "multiple-choice",
    "examHours": 4,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/computer-hacking-forensic-investigator-chfi/"
  },
  {
    "id": "giac-gbfa",
    "name": "GBFA",
    "fullName": "GIAC Battlefield Forensics and Acquisition",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/battlefield-forensics-acquisition-gbfa",
    "domain": "forensics",
    "level": 48,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-grem",
    "name": "GREM",
    "fullName": "GIAC Reverse Engineering Malware",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/reverse-engineering-malware-grem",
    "domain": "malware-re",
    "level": 79,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-ecmap",
    "name": "eCMAP",
    "fullName": "eLearnSecurity Certified Malware Analysis Professional",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know",
    "domain": "malware-re",
    "level": 70,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired by INE 1 Oct 2023."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "retired",
    "renewalYears": null,
    "source": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know"
  },
  {
    "id": "ine-ecre",
    "name": "eCRE",
    "fullName": "eLearnSecurity Certified Reverse Engineer",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know",
    "domain": "malware-re",
    "level": 68,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired by INE 1 Oct 2023."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "retired",
    "renewalYears": null,
    "source": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know"
  },
  {
    "id": "giac-gsoa",
    "name": "GSOA",
    "fullName": "GIAC Strategic OSINT Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/strategic-osint-analyst-gsoa",
    "domain": "threat-intel",
    "level": 75,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-ecthp",
    "name": "eCTHP",
    "fullName": "INE Certified Threat Hunting Professional",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/ecthp-certification",
    "domain": "threat-intel",
    "level": 70,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/ecthp-certification"
  },
  {
    "id": "giac-gcti",
    "name": "GCTI",
    "fullName": "GIAC Cyber Threat Intelligence",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/cyber-threat-intelligence-gcti",
    "domain": "threat-intel",
    "level": 69,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "osth",
    "name": "OSTH",
    "fullName": "OffSec Threat Hunter",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/th-200/",
    "domain": "threat-intel",
    "level": 57,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle. Expires 3 years after issuance."
    },
    "examFormat": "hybrid",
    "examHours": 8,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.offsec.com/courses/th-200/"
  },
  {
    "id": "ctia",
    "name": "CTIA",
    "fullName": "Certified Threat Intelligence Analyst",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-threat-intelligence-analyst-ctia/",
    "domain": "threat-intel",
    "level": 52,
    "cost": {
      "amount": 450,
      "currency": "USD",
      "note": "CTIA v2 RPS exam voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-threat-intelligence-analyst-ctia/"
  },
  {
    "id": "giac-gosi",
    "name": "GOSI",
    "fullName": "GIAC Open Source Intelligence",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/open-source-intelligence-gosi",
    "domain": "threat-intel",
    "level": 51,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcad",
    "name": "GCAD",
    "fullName": "GIAC Cloud Security Architecture and Design",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/cloud-security-architecture-design-gcad",
    "domain": "cloud",
    "level": 67,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gpcs",
    "name": "GPCS",
    "fullName": "GIAC Public Cloud Security",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/public-cloud-security-gpcs",
    "domain": "cloud",
    "level": 64,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ccse",
    "name": "CCSE",
    "fullName": "Certified Cloud Security Engineer",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-cloud-security-engineer-course/",
    "domain": "cloud",
    "level": 51,
    "cost": {
      "amount": 550,
      "currency": "USD",
      "note": "CCSE v2 RPS exam voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 4,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-cloud-security-engineer-course/"
  },
  {
    "id": "ms-sc-500",
    "name": "SC-500",
    "fullName": "Microsoft Cloud and AI Security Engineer Associate",
    "vendor": "Microsoft",
    "vendorUrl": "https://learn.microsoft.com/en-us/credentials/certifications/",
    "domain": "cloud",
    "level": 50,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "In beta as of August 2026."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "announced",
    "renewalYears": 1,
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/"
  },
  {
    "id": "aws-security-specialty",
    "name": "AWS Security",
    "fullName": "AWS Certified Security — Specialty",
    "vendor": "AWS",
    "vendorUrl": "https://aws.amazon.com/certification/certified-security-specialty/",
    "domain": "cloud",
    "level": 50,
    "cost": {
      "amount": 300,
      "currency": "USD",
      "note": "65 questions in 170 minutes."
    },
    "examFormat": "multiple-choice",
    "examHours": 2.83,
    "status": "active",
    "renewalYears": 3,
    "source": "https://aws.amazon.com/certification/certified-security-specialty/"
  },
  {
    "id": "ms-az-500",
    "name": "AZ-500",
    "fullName": "Microsoft Azure Security Engineer Associate",
    "vendor": "Microsoft",
    "vendorUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/",
    "domain": "cloud",
    "level": 48,
    "cost": {
      "amount": 165,
      "currency": "USD",
      "note": "Retiring 31 Aug 2026; superseded by SC-500."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 1,
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/"
  },
  {
    "id": "giac-gcld",
    "name": "GCLD",
    "fullName": "GIAC Cloud Security Essentials",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/cloud-security-essentials-gcld",
    "domain": "cloud",
    "level": 42,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "isc2-ccsp",
    "name": "CCSP",
    "fullName": "ISC² Certified Cloud Security Professional",
    "vendor": "ISC²",
    "vendorUrl": "https://www.isc2.org/certifications/ccsp",
    "domain": "cloud",
    "level": 40,
    "cost": {
      "amount": 599,
      "currency": "USD",
      "note": "Exam fee, Americas region, plus annual maintenance fee."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.isc2.org/certifications/ccsp"
  },
  {
    "id": "giac-gse",
    "name": "GSE",
    "fullName": "GIAC Security Expert",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/get-certified/giac-portfolio-certifications",
    "domain": "security-engineering",
    "level": 97,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "No standalone fee — awarded on a portfolio of ten GIAC certifications, so the cost is the sum of those ten."
    },
    "examFormat": "portfolio",
    "examHours": null,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/get-certified/giac-portfolio-certifications"
  },
  {
    "id": "giac-gsp",
    "name": "GSP",
    "fullName": "GIAC Security Professional",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/get-certified/giac-portfolio-certifications",
    "domain": "security-engineering",
    "level": 91,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "No standalone fee — awarded on a portfolio of five GIAC certifications, so the cost is the sum of those five."
    },
    "examFormat": "portfolio",
    "examHours": null,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/get-certified/giac-portfolio-certifications"
  },
  {
    "id": "cisco-ccie-security",
    "name": "CCIE Security",
    "fullName": "Cisco Certified Internetwork Expert Security",
    "vendor": "Cisco",
    "vendorUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/",
    "domain": "security-engineering",
    "level": 88,
    "cost": {
      "amount": 1900,
      "currency": "USD",
      "note": "Eight-hour hands-on lab plus written qualifying exam."
    },
    "examFormat": "practical",
    "examHours": 8,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/"
  },
  {
    "id": "giac-gx-cs",
    "name": "GX-CS",
    "fullName": "GIAC Experienced Cybersecurity Specialist",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/experienced-cyber-security-gxcs",
    "domain": "security-engineering",
    "level": 82,
    "cost": {
      "amount": 1299,
      "currency": "USD",
      "note": "Portfolio certification; $499 if you hold the prerequisite certification. Excludes SANS training."
    },
    "examFormat": "practical",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gdsa",
    "name": "GDSA",
    "fullName": "GIAC Defensible Security Architect",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/defensible-security-architecture-gdsa",
    "domain": "security-engineering",
    "level": 64,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ms-sc-100",
    "name": "SC-100",
    "fullName": "Microsoft Cybersecurity Architect Expert",
    "vendor": "Microsoft",
    "vendorUrl": "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/",
    "domain": "security-engineering",
    "level": 58,
    "cost": {
      "amount": 165,
      "currency": "USD",
      "note": "Price varies by region. Gated on SC-200/SC-300/AZ-500."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 1,
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/"
  },
  {
    "id": "comptia-securityx",
    "name": "SecurityX",
    "fullName": "CompTIA SecurityX",
    "vendor": "CompTIA",
    "vendorUrl": "https://www.comptia.org/en-us/certifications/securityx/",
    "domain": "security-engineering",
    "level": 55,
    "cost": {
      "amount": 417,
      "currency": "USD",
      "note": "Single-attempt voucher. Formerly CASP+, renamed Dec 2024."
    },
    "examFormat": "hybrid",
    "examHours": 2.75,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.comptia.org/en-us/certifications/securityx/"
  },
  {
    "id": "cisco-ccnp-security",
    "name": "CCNP Security",
    "fullName": "Cisco Certified Network Professional Security",
    "vendor": "Cisco",
    "vendorUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/",
    "domain": "security-engineering",
    "level": 55,
    "cost": {
      "amount": 700,
      "currency": "USD",
      "note": "Two exams: core plus a concentration."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/"
  },
  {
    "id": "giac-gcux",
    "name": "GCUX",
    "fullName": "GIAC UNIX Security Administrator",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/retired-certifications",
    "domain": "security-engineering",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired — no longer available for new attempts."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "renewalYears": 4,
    "status": "retired",
    "source": "https://www.giac.org/retired-certifications"
  },
  {
    "id": "giac-gppa",
    "name": "GPPA",
    "fullName": "GIAC Perimeter Protection Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/retired-certifications",
    "domain": "security-engineering",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired — no longer available for new attempts."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "renewalYears": 4,
    "status": "retired",
    "source": "https://www.giac.org/retired-certifications"
  },
  {
    "id": "ecde",
    "name": "ECDE",
    "fullName": "EC-Council Certified DevSecOps Engineer",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-devsecops-engineer-ecde/",
    "domain": "security-engineering",
    "level": 53,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Third-party sources list ~$393 for RPS voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 4,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-devsecops-engineer-ecde/"
  },
  {
    "id": "ine-eiama",
    "name": "eIAMA",
    "fullName": "INE Certified Identity and Access Management Technologist",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/eiama-certification",
    "domain": "security-engineering",
    "level": 53,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "hybrid",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/eiama-certification"
  },
  {
    "id": "giac-gced",
    "name": "GCED",
    "fullName": "GIAC Certified Enterprise Defender",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/certified-enterprise-defender-gced",
    "domain": "security-engineering",
    "level": 53,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "isc2-issap",
    "name": "ISSAP",
    "fullName": "ISC² Information Systems Security Architecture Professional",
    "vendor": "ISC²",
    "vendorUrl": "https://www.isc2.org/certifications/issap",
    "domain": "security-engineering",
    "level": 50,
    "cost": {
      "amount": 599,
      "currency": "USD",
      "note": "Exam fee, Americas region, plus annual maintenance fee."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.isc2.org/certifications/issap"
  },
  {
    "id": "isc2-issep",
    "name": "ISSEP",
    "fullName": "ISC² Information Systems Security Engineering Professional",
    "vendor": "ISC²",
    "vendorUrl": "https://www.isc2.org/certifications/issep",
    "domain": "security-engineering",
    "level": 50,
    "cost": {
      "amount": 599,
      "currency": "USD",
      "note": "Exam fee, Americas region, plus annual maintenance fee."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.isc2.org/certifications/issep"
  },
  {
    "id": "cnd",
    "name": "CND",
    "fullName": "Certified Network Defender",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-network-security-course/",
    "domain": "security-engineering",
    "level": 49,
    "cost": {
      "amount": 550,
      "currency": "USD",
      "note": "RPS exam voucher; VUE exam voucher $650."
    },
    "examFormat": "multiple-choice",
    "examHours": 4,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-network-security-course/"
  },
  {
    "id": "ms-sc-300",
    "name": "SC-300",
    "fullName": "Microsoft Identity and Access Administrator Associate",
    "vendor": "Microsoft",
    "vendorUrl": "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/",
    "domain": "security-engineering",
    "level": 45,
    "cost": {
      "amount": 165,
      "currency": "USD",
      "note": "Price varies by region."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 1,
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/"
  },
  {
    "id": "ms-sc-401",
    "name": "SC-401",
    "fullName": "Microsoft Information Security Administrator Associate",
    "vendor": "Microsoft",
    "vendorUrl": "https://learn.microsoft.com/en-us/credentials/certifications/",
    "domain": "security-engineering",
    "level": 42,
    "cost": {
      "amount": 165,
      "currency": "USD",
      "note": "Replaced retired SC-400."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 1,
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/"
  },
  {
    "id": "eces",
    "name": "ECES",
    "fullName": "EC-Council Certified Encryption Specialist",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/ec-council-certified-encryption-specialist-eces/",
    "domain": "security-engineering",
    "level": 41,
    "cost": {
      "amount": 249,
      "currency": "USD",
      "note": "ECES v3 RPS exam voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/ec-council-certified-encryption-specialist-eces/"
  },
  {
    "id": "htb-cjca",
    "name": "CJCA",
    "fullName": "HTB Certified Junior Cybersecurity Associate",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-junior-cybersecurity-associate",
    "domain": "security-engineering",
    "level": 41,
    "cost": {
      "amount": 490,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 120,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "giac-gsec",
    "name": "GSEC",
    "fullName": "GIAC Security Essentials",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/security-essentials-gsec",
    "domain": "security-engineering",
    "level": 38,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 4,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-eeda",
    "name": "eEDA",
    "fullName": "INE Enterprise Defense Administrator",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/eeda-certification",
    "domain": "security-engineering",
    "level": 35,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "hybrid",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/eeda-certification"
  },
  {
    "id": "comptia-security-plus",
    "name": "Security+",
    "fullName": "CompTIA Security+",
    "vendor": "CompTIA",
    "vendorUrl": "https://www.comptia.org/en-us/certifications/security/",
    "domain": "security-engineering",
    "level": 33,
    "cost": {
      "amount": 439,
      "currency": "USD",
      "note": "Single-attempt voucher, US pricing."
    },
    "examFormat": "hybrid",
    "examHours": 1.5,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.comptia.org/en-us/certifications/security/"
  },
  {
    "id": "isc2-sscp",
    "name": "SSCP",
    "fullName": "ISC² Systems Security Certified Practitioner",
    "vendor": "ISC²",
    "vendorUrl": "https://www.isc2.org/certifications/sscp",
    "domain": "security-engineering",
    "level": 33,
    "cost": {
      "amount": 249,
      "currency": "USD",
      "note": "Exam fee, Americas region, plus annual maintenance fee."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.isc2.org/certifications/sscp"
  },
  {
    "id": "oscc-sec",
    "name": "OSCC-SEC",
    "fullName": "OffSec CyberCore Certified",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/sec-100/",
    "domain": "security-engineering",
    "level": 28,
    "cost": {
      "amount": 899,
      "currency": "USD",
      "note": "CyberCore standalone: $899, 1yr access + 2 exam attempts."
    },
    "examFormat": "hybrid",
    "examHours": 6,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.offsec.com/courses/sec-100/"
  },
  {
    "id": "isc2-cc",
    "name": "CC",
    "fullName": "ISC² Certified in Cybersecurity",
    "vendor": "ISC²",
    "vendorUrl": "https://www.isc2.org/certifications/cc",
    "domain": "security-engineering",
    "level": 22,
    "cost": {
      "amount": 199,
      "currency": "USD",
      "note": "Exam fee, Americas region, plus annual maintenance fee."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.isc2.org/certifications/cc"
  },
  {
    "id": "giac-gfact",
    "name": "GFACT",
    "fullName": "GIAC Foundational Cybersecurity Technologies",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/foundational-cybersecurity-technologies-gfact",
    "domain": "security-engineering",
    "level": 21,
    "cost": {
      "amount": 399,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gisf",
    "name": "GISF",
    "fullName": "GIAC Information Security Fundamentals",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/information-security-fundamentals-gisf",
    "domain": "security-engineering",
    "level": 13,
    "cost": {
      "amount": 499,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ms-sc-900",
    "name": "SC-900",
    "fullName": "Microsoft Security, Compliance and Identity Fundamentals",
    "vendor": "Microsoft",
    "vendorUrl": "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/",
    "domain": "security-engineering",
    "level": 12,
    "cost": {
      "amount": 99,
      "currency": "USD",
      "note": "Price varies by region."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    "id": "giac-gcsa",
    "name": "GCSA",
    "fullName": "GIAC Cloud Security Automation",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/cloud-security-automation-gcsa",
    "domain": "appsec",
    "level": 66,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gweb",
    "name": "GWEB",
    "fullName": "GIAC Certified Web Application Defender",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/certified-web-application-defender-gweb",
    "domain": "appsec",
    "level": 61,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gpyc",
    "name": "GPYC",
    "fullName": "GIAC Python Coder",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/python-coder-gpyc",
    "domain": "appsec",
    "level": 56,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "ine-ewdp",
    "name": "eWDP",
    "fullName": "eLearnSecurity Web Defense Professional",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know",
    "domain": "appsec",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired by INE 1 Oct 2023."
    },
    "examFormat": "practical",
    "examHours": null,
    "status": "retired",
    "renewalYears": null,
    "source": "https://ine.com/blog/els-is-retiring-5-certifications-heres-what-you-need-to-know"
  },
  {
    "id": "giac-gssp-java",
    "name": "GSSP-JAVA",
    "fullName": "GIAC Secure Software Programmer - Java",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/retired-certifications",
    "domain": "appsec",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired — no longer available for new attempts."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "renewalYears": 4,
    "status": "retired",
    "source": "https://www.giac.org/retired-certifications"
  },
  {
    "id": "giac-gssp-net",
    "name": "GSSP-NET",
    "fullName": "GIAC Secure Software Programmer - .NET",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/retired-certifications",
    "domain": "appsec",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Retired — no longer available for new attempts."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "renewalYears": 4,
    "status": "retired",
    "source": "https://www.giac.org/retired-certifications"
  },
  {
    "id": "case-net",
    "name": "CASE .NET",
    "fullName": "Certified Application Security Engineer (.NET)",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-application-security-engineer-case-net/",
    "domain": "appsec",
    "level": 47,
    "cost": {
      "amount": 450,
      "currency": "USD",
      "note": "RPS exam voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-application-security-engineer-case-net/"
  },
  {
    "id": "case-java",
    "name": "CASE Java",
    "fullName": "Certified Application Security Engineer (Java)",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/train-certify/certified-application-security-engineer-case-java/",
    "domain": "appsec",
    "level": 47,
    "cost": {
      "amount": 450,
      "currency": "USD",
      "note": "RPS exam voucher."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/train-certify/certified-application-security-engineer-case-java/"
  },
  {
    "id": "isc2-csslp",
    "name": "CSSLP",
    "fullName": "ISC² Certified Secure Software Lifecycle Professional",
    "vendor": "ISC²",
    "vendorUrl": "https://www.isc2.org/certifications/csslp",
    "domain": "appsec",
    "level": 42,
    "cost": {
      "amount": 599,
      "currency": "USD",
      "note": "Exam fee, Americas region, plus annual maintenance fee."
    },
    "examFormat": "multiple-choice",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.isc2.org/certifications/csslp"
  },
  {
    "id": "oscc-sjd",
    "name": "OSCC-SJD",
    "fullName": "OffSec CyberCore Certified – Secure Java Development",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/sjd-100/",
    "domain": "appsec",
    "level": 30,
    "cost": {
      "amount": 899,
      "currency": "USD",
      "note": "CyberCore standalone: $899, 1yr access + 2 exam attempts."
    },
    "examFormat": "practical",
    "examHours": 6,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.offsec.com/courses/sjd-100/"
  },
  {
    "id": "giac-grid",
    "name": "GRID",
    "fullName": "GIAC Response and Industrial Defense",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/response-industrial-defense-grid",
    "domain": "ot-ics-iot",
    "level": 64,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gicsp",
    "name": "GICSP",
    "fullName": "GIAC Global Industrial Cyber Security Professional",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/global-industrial-cyber-security-professional-gicsp",
    "domain": "ot-ics-iot",
    "level": 57,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gcip",
    "name": "GCIP",
    "fullName": "GIAC Critical Infrastructure Protection",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/critical-infrastructure-protection-gcip",
    "domain": "ot-ics-iot",
    "level": 48,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "comptia-secot-plus",
    "name": "SecOT+",
    "fullName": "CompTIA SecOT+",
    "vendor": "CompTIA",
    "vendorUrl": "https://www.comptia.org/en-us/certifications/",
    "domain": "ot-ics-iot",
    "level": 45,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Announced for December 2026; details not yet published."
    },
    "examFormat": null,
    "examHours": null,
    "status": "announced",
    "renewalYears": 3,
    "source": "https://www.comptia.org/en-us/certifications/"
  },
  {
    "id": "osai",
    "name": "OSAI",
    "fullName": "OffSec AI Red Teamer",
    "vendor": "OffSec",
    "vendorUrl": "https://www.offsec.com/courses/ai-300/",
    "domain": "ai-security",
    "level": 73,
    "cost": {
      "amount": 1749,
      "currency": "USD",
      "note": "Course + Cert Bundle. Passing awards OSAI (no expiry) + OSAI+ (3yr)."
    },
    "examFormat": "practical",
    "examHours": 24,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.offsec.com/courses/ai-300/"
  },
  {
    "id": "htb-coae",
    "name": "COAE",
    "fullName": "HTB Certified Offensive AI Expert",
    "vendor": "Hack The Box",
    "vendorUrl": "https://academy.hackthebox.com/preview/certifications/htb-certified-offensive-ai-expert",
    "domain": "ai-security",
    "level": 70,
    "cost": {
      "amount": 490,
      "currency": "USD",
      "note": "Exam voucher; requires 100% completion of matching Academy path."
    },
    "examFormat": "practical",
    "examHours": 168,
    "status": "active",
    "renewalYears": null,
    "source": "https://academy.hackthebox.com/preview/certifications"
  },
  {
    "id": "giac-gasae",
    "name": "GASAE",
    "fullName": "GIAC AI Security Automation Engineer",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/ai-security-automation-engineer-gasae",
    "domain": "ai-security",
    "level": 65,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gmle",
    "name": "GMLE",
    "fullName": "GIAC Machine Learning Engineer",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/machine-learning-engineer-gmle",
    "domain": "ai-security",
    "level": 63,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "multiple-choice",
    "examHours": 3,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "giac-gaips",
    "name": "GAIPS",
    "fullName": "GIAC AI Platform Security",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/ai-security-platform-security-gaips",
    "domain": "ai-security",
    "level": 58,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "coasp",
    "name": "COASP",
    "fullName": "Certified Offensive AI Security Professional",
    "vendor": "EC-Council",
    "vendorUrl": "https://www.eccouncil.org/ai-courses/certified-offensive-ai-security-professional-coasp/",
    "domain": "ai-security",
    "level": 55,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Training bundles from $1,699; standalone voucher price not verified."
    },
    "examFormat": "hybrid",
    "examHours": null,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.eccouncil.org/ai-courses/certified-offensive-ai-security-professional-coasp/"
  },
  {
    "id": "ine-eais",
    "name": "eAIS",
    "fullName": "INE AI Systems Security Specialist",
    "vendor": "INE Security",
    "vendorUrl": "https://ine.com/security/certifications/eais-certification",
    "domain": "ai-security",
    "level": 50,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Sold via subscription bundle, no published standalone price."
    },
    "examFormat": "hybrid",
    "examHours": null,
    "status": "active",
    "renewalYears": null,
    "source": "https://ine.com/security/certifications/eais-certification"
  },
  {
    "id": "giac-goaa",
    "name": "GOAA",
    "fullName": "GIAC Offensive AI Analyst",
    "vendor": "GIAC",
    "vendorUrl": "https://www.giac.org/certifications/offensive-ai-analyst-goaa",
    "domain": "ai-security",
    "level": 50,
    "cost": {
      "amount": 999,
      "currency": "USD",
      "note": "Certification attempt only. Bundled SANS training costs several thousand more."
    },
    "examFormat": "hybrid",
    "examHours": 2,
    "renewalYears": 4,
    "status": "active",
    "source": "https://www.giac.org/certifications/"
  },
  {
    "id": "comptia-secai-plus",
    "name": "SecAI+",
    "fullName": "CompTIA SecAI+",
    "vendor": "CompTIA",
    "vendorUrl": "https://www.comptia.org/en-us/certifications/secai/",
    "domain": "ai-security",
    "level": 40,
    "cost": {
      "amount": null,
      "currency": "USD",
      "note": "Pricing not published. 60 questions in 60 minutes."
    },
    "examFormat": "hybrid",
    "examHours": 1,
    "status": "active",
    "renewalYears": 3,
    "source": "https://www.comptia.org/en-us/certifications/secai/"
  }
]

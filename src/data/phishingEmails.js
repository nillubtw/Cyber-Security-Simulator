export const phishingEmails = [
  {
    id: 1,
    from: "security@paypa1-secure.com",
    displayFrom: "PayPal Security <security@paypa1-secure.com>",
    to: "you@email.com",
    subject: "URGENT: Your account will be suspended in 24 hours",
    date: "Today, 9:14 AM",
    body: `Dear Valued Customer,

We have detected unusual activity on your PayPal account. Your account access has been temporarily limited.

**IMMEDIATE ACTION REQUIRED** — Verify your identity within 24 hours or your account will be permanently suspended.

Click here to verify now: http://paypa1-secure.com/verify?id=839201

If you do not complete verification, all pending transactions will be cancelled and funds may be frozen.

Thank you for your prompt attention.

PayPal Security Team`,
    isPhishing: true,
    suspiciousAreas: [
      { id: "sender", label: "Spoofed sender domain (paypa1 vs paypal)", start: 0, end: 0 },
      { id: "urgency", label: "Urgency language — '24 hours', 'IMMEDIATE'", start: 0, end: 0 },
      { id: "link", label: "Suspicious link — paypa1-secure.com", start: 0, end: 0 },
      { id: "threat", label: "Threat of account suspension", start: 0, end: 0 },
    ],
    tactics: ["Spoofed domain", "Urgency pressure", "Fake verification link", "Account suspension threat"],
    explanation:
      "This is a classic phishing email. The sender uses 'paypa1' (number 1) instead of 'paypal'. It creates urgency with a 24-hour deadline and threatens account suspension to panic you into clicking the malicious link.",
  },
  {
    id: 2,
    from: "noreply@amazon.com",
    displayFrom: "Amazon <noreply@amazon.com>",
    to: "you@email.com",
    subject: "Your order #112-8493021-9283746 has shipped",
    date: "Yesterday, 2:30 PM",
    body: `Hello,

Your package is on its way!

Order #112-8493021-9283746
Estimated delivery: Thursday, May 22

Track your package: https://www.amazon.com/gp/your-account/order-details

Thank you for shopping with us.

Amazon.com`,
    isPhishing: false,
    suspiciousAreas: [],
    tactics: [],
    explanation:
      "This appears to be a legitimate Amazon shipping notification. The sender domain is correct (amazon.com), there's no urgency pressure, and the link points to the official amazon.com domain.",
  },
  {
    id: 3,
    from: "it-support@micros0ft-update.net",
    displayFrom: "Microsoft IT Support <it-support@micros0ft-update.net>",
    to: "you@email.com",
    subject: "RE: Your computer has been compromised - Action needed",
    date: "Today, 11:47 AM",
    body: `ATTENTION EMPLOYEE,

Our security systems have detected malware on your workstation. This is a CRITICAL security incident.

You must download and run the attached security patch immediately:
→ Download_SecurityPatch.exe

Failure to install within 2 hours will result in:
- Network access revocation
- HR notification
- Potential data breach report

Do NOT contact IT directly — use only this secure channel.

Microsoft Corporate Security`,
    isPhishing: true,
    suspiciousAreas: [
      { id: "sender", label: "Fake domain — micros0ft-update.net", start: 0, end: 0 },
      { id: "attachment", label: "Executable attachment (.exe)", start: 0, end: 0 },
      { id: "urgency", label: "2-hour deadline pressure", start: 0, end: 0 },
      { id: "no-contact", label: "Discourages contacting real IT", start: 0, end: 0 },
    ],
    tactics: ["Typosquatting domain", "Malware attachment", "Fear tactics", "Blocking verification channels"],
    explanation:
      "Legitimate Microsoft IT will never ask you to download .exe files via email or discourage contacting your real IT department. The domain uses '0' instead of 'o' in Microsoft.",
  },
  {
    id: 4,
    from: "prize@lucky-winner-claim.xyz",
    displayFrom: "International Lottery <prize@lucky-winner-claim.xyz>",
    to: "you@email.com",
    subject: "🎉 CONGRATULATIONS! You've won $2,500,000 USD",
    date: "Today, 6:02 AM",
    body: `Dear Winner,

You have been selected as the winner of our International Email Lottery!

Prize Amount: $2,500,000.00 USD

To claim your prize, please provide:
- Full name
- Bank account details
- Copy of passport/ID
- Processing fee: $500 (refundable)

Reply within 48 hours to claim@lucky-winner-claim.xyz

Congratulations!
Dr. James Wilson
Lottery Commission Director`,
    isPhishing: true,
    suspiciousAreas: [
      { id: "unsolicited", label: "Unsolicited lottery win", start: 0, end: 0 },
      { id: "fee", label: "Requests upfront processing fee", start: 0, end: 0 },
      { id: "personal", label: "Requests bank details and ID", start: 0, end: 0 },
      { id: "sender", label: "Unknown .xyz domain", start: 0, end: 0 },
    ],
    tactics: ["Advance-fee fraud", "Too-good-to-be-true prize", "Personal data harvesting", "Fake authority figure"],
    explanation:
      "You cannot win a lottery you never entered. Legitimate prizes never require upfront fees or sensitive personal documents via email.",
  },
];

export const phishingTacticsGuide = [
  { name: "Spoofed Sender", description: "Email appears from a trusted brand but domain is slightly altered" },
  { name: "Urgency", description: "Creates time pressure to act without thinking" },
  { name: "Suspicious Links", description: "URLs that mimic real sites with subtle character changes" },
  { name: "Attachments", description: "Unexpected .exe, .zip, or macro-enabled files" },
  { name: "Personal Data Requests", description: "Asks for passwords, SSN, or bank details via email" },
];

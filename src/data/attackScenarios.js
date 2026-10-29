export const attackScenarios = [
  {
    id: "otp-scam",
    title: "OTP Interception Scam",
    icon: "📱",
    description: "Someone calls claiming to be from your bank and asks for the OTP code you just received.",
    steps: [
      {
        prompt: "You receive a call: 'Hi, this is your bank's fraud department. We detected suspicious activity. I just sent you a verification code — please read it to me so we can secure your account.' An SMS with a 6-digit code arrives.",
        choices: [
          { text: "Read the OTP code to the caller", score: 0, feedback: "Never share OTP codes with anyone. Banks never ask for your OTP over the phone." },
          { text: "Hang up and call your bank using the number on your card", score: 10, feedback: "Correct! Always verify by calling the official number. The caller was impersonating your bank." },
          { text: "Ask them to verify their employee ID first", score: 3, feedback: "Partially correct, but scammers have fake credentials. Always call back using the official number." },
          { text: "Enter the code on your banking app yourself", score: 5, feedback: "Good instinct to use your app, but you should still hang up and verify the call was legitimate." },
        ],
      },
    ],
    bestAction: "Never share OTP codes. Hang up and call your bank using the official number on your card.",
  },
  {
    id: "qr-scam",
    title: "Malicious QR Code",
    icon: "📷",
    description: "You find a QR code sticker placed over a legitimate parking payment QR code.",
    steps: [
      {
        prompt: "At a parking garage, you notice a QR code on the payment machine. It looks slightly newer than the rest of the machine. Your phone is ready to scan.",
        choices: [
          { text: "Scan the QR code to pay quickly", score: 0, feedback: "The sticker was placed by scammers. It redirected to a fake payment page that stole your card details." },
          { text: "Check for a sticker overlay and use the official parking app instead", score: 10, feedback: "Excellent! QR sticker scams are common. Always use official apps or websites for payments." },
          { text: "Scan it but use a prepaid card with limited funds", score: 2, feedback: "Still risky — the fake site may install malware or harvest other personal data beyond payment info." },
          { text: "Ask a stranger nearby if the QR code works", score: 1, feedback: "Others may be victims too. Verify through official channels, not crowd consensus." },
        ],
      },
    ],
    bestAction: "Inspect QR codes for sticker overlays. Use official apps instead of scanning unknown codes.",
  },
  {
    id: "tech-support",
    title: "Fake Tech Support",
    icon: "🖥️",
    description: "A pop-up claims your computer is infected and displays a support phone number.",
    steps: [
      {
        prompt: "While browsing, a full-screen warning appears: 'CRITICAL ALERT: 47 viruses detected! Your personal data is at risk. Call Microsoft Support immediately: 1-800-XXX-XXXX. Do not shut down your computer.'",
        choices: [
          { text: "Call the number immediately", score: 0, feedback: "This is a scareware pop-up. The 'technicians' will ask for remote access and payment to 'fix' a non-existent problem." },
          { text: "Close the browser tab using Task Manager and run a legitimate antivirus scan", score: 10, feedback: "Perfect! Real security warnings don't appear as browser pop-ups with phone numbers. Force-close and scan." },
          { text: "Click 'Remove Viruses Now' on the pop-up", score: 0, feedback: "The button likely downloads actual malware or takes you to a phishing payment page." },
          { text: "Restart your computer and call the number if it appears again", score: 2, feedback: "Restarting may help, but never call numbers from pop-ups. Use official support channels if needed." },
        ],
      },
    ],
    bestAction: "Close scareware pop-ups via Task Manager. Real companies don't display support numbers in browser pop-ups.",
  },
  {
    id: "public-wifi",
    title: "Public WiFi Eavesdropping",
    icon: "📡",
    description: "You connect to free WiFi at a coffee shop to check your email and banking.",
    steps: [
      {
        prompt: "At a café, you see two WiFi networks: 'Cafe_Free_WiFi' and 'Cafe-Free-WiFi-Secure'. You need to check your bank balance urgently.",
        choices: [
          { text: "Connect to either network and log into banking", score: 0, feedback: "One network may be a hacker's hotspot (evil twin attack). Your credentials could be intercepted." },
          { text: "Use mobile data or a VPN, then access banking", score: 10, feedback: "Correct! VPNs encrypt traffic on public networks. Mobile data is safer than unknown WiFi." },
          { text: "Connect to the 'Secure' one since it says secure", score: 2, feedback: "Network names are easily faked. 'Secure' in the name doesn't guarantee it's legitimate." },
          { text: "Connect but only check non-sensitive sites", score: 5, feedback: "Better, but attackers can still intercept session cookies and attempt lateral attacks." },
        ],
      },
    ],
    bestAction: "Avoid sensitive transactions on public WiFi. Use a VPN or mobile data for banking and email.",
  },
  {
    id: "social-engineering",
    title: "Social Engineering — Tailgating",
    icon: "🚪",
    description: "A well-dressed stranger asks you to hold the door to a secure office building.",
    steps: [
      {
        prompt: "You're entering your office building using your badge. A person in a suit carrying coffee says, 'Hey, I forgot my badge in the meeting room. Can you hold the door? I'll just be a minute.'",
        choices: [
          { text: "Hold the door — they look professional", score: 0, feedback: "This is tailgating. Attackers dress professionally to exploit courtesy. They may access restricted areas or plant devices." },
          { text: "Politely decline and let them use the reception guest process", score: 10, feedback: "Correct! Legitimate visitors follow proper check-in procedures. Never bypass security out of politeness." },
          { text: "Hold the door but escort them to reception", score: 7, feedback: "Better than simply letting them in alone, but it's best to direct them to reception without granting access." },
          { text: "Ignore them completely", score: 5, feedback: "Safe, but directing them to reception is more professional and helps maintain security culture." },
        ],
      },
    ],
    bestAction: "Never badge strangers in. Direct visitors to reception for proper verification.",
  },
];

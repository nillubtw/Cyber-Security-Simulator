export const quizQuestions = [
  {
    id: 1,
    question: "What is the safest way to verify a suspicious email from your bank?",
    options: [
      "Click the link in the email to check",
      "Call the number provided in the email",
      "Log in directly through the bank's official website or app",
      "Reply to the email asking if it's legitimate",
    ],
    correct: 2,
    explanation:
      "Always navigate to your bank's website directly or use their official app. Never use links or phone numbers from suspicious emails.",
  },
  {
    id: 2,
    question: "Which URL is most likely a phishing attempt?",
    options: [
      "https://www.google.com",
      "https://www.g00gle-security.com",
      "https://accounts.google.com",
      "https://support.google.com",
    ],
    correct: 1,
    explanation:
      "g00gle-security.com uses character substitution (zeros for o's) and is not an official Google domain.",
  },
  {
    id: 3,
    question: "What does MFA (Multi-Factor Authentication) provide?",
    options: [
      "Faster login times",
      "An extra layer of security beyond just a password",
      "Automatic password generation",
      "Encrypted email storage",
    ],
    correct: 1,
    explanation:
      "MFA requires two or more verification methods, making it much harder for attackers to access your accounts even if they steal your password.",
  },
  {
    id: 4,
    question: "You receive an unexpected OTP code via SMS. What should you do?",
    options: [
      "Enter it on the website that sent it",
      "Share it with the person who called claiming to be from your bank",
      "Ignore it and check if any accounts are being accessed",
      "Reply STOP to cancel",
    ],
    correct: 2,
    explanation:
      "Unexpected OTP codes may mean someone is trying to access your account. Never share OTP codes and check your account security immediately.",
  },
  {
    id: 5,
    question: "Which password is the strongest?",
    options: [
      "P@ssw0rd123",
      "MyDog'sName2020",
      "K9#mX2$vL8@qR4!nW",
      "Summer2024!",
    ],
    correct: 2,
    explanation:
      "Strong passwords are long, random, and include mixed character types. Avoid predictable patterns and personal information.",
  },
  {
    id: 6,
    question: "What is a common sign of a tech support scam?",
    options: [
      "They schedule a callback during business hours",
      "They claim your computer has a virus and demand immediate remote access",
      "They send a follow-up email with a ticket number",
      "They ask you to restart your computer",
    ],
    correct: 1,
    explanation:
      "Legitimate tech companies don't call unsolicited about viruses. Scammers create panic to gain remote access to your computer.",
  },
  {
    id: 7,
    question: "When using public WiFi, you should:",
    options: [
      "Access your banking since the network has a password",
      "Use a VPN for sensitive activities",
      "Share the password with others to be helpful",
      "Disable your firewall for better speed",
    ],
    correct: 1,
    explanation:
      "Public WiFi networks are easily compromised. A VPN encrypts your traffic, protecting sensitive data from eavesdroppers.",
  },
  {
    id: 8,
    question: "What is social engineering?",
    options: [
      "Building secure network infrastructure",
      "Manipulating people into revealing confidential information",
      "Encrypting social media messages",
      "Engineering social media algorithms",
    ],
    correct: 1,
    explanation:
      "Social engineering exploits human psychology rather than technical vulnerabilities. Attackers manipulate trust, fear, or urgency.",
  },
  {
    id: 9,
    question: "A QR code in a parking lot offers free WiFi. You should:",
    options: [
      "Scan it immediately for convenience",
      "Verify the source and consider using mobile data instead",
      "Share it with friends",
      "Scan it only if others are using it too",
    ],
    correct: 1,
    explanation:
      "Malicious QR codes can redirect to phishing sites or trigger malware downloads. Always verify the source before scanning.",
  },
  {
    id: 10,
    question: "What should you do if you suspect your account has been compromised?",
    options: [
      "Wait and see if anything happens",
      "Change your password, enable MFA, and contact the service provider",
      "Post about it on social media",
      "Forward suspicious emails to friends as a warning",
    ],
    correct: 1,
    explanation:
      "Act immediately: change passwords, enable MFA, review account activity, and report to the official service provider.",
  },
];

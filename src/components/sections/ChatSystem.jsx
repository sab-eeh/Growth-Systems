"use client";

import { useState, useEffect } from "react";

const flows = {
  clinic: [
    {
      bot: "Hi 👋 Welcome to City Clinic. What do you need help with?",
      options: ["Book appointment", "Ask a question"],
    },
    {
      bot: "Great 👍 What type of appointment do you need?",
      options: ["General checkup", "Dental", "Skin consultation"],
    },
    {
      bot: "Perfect. You can book instantly here:",
      link: "https://calendly.com/demo",
    },
  ],
  realestate: [
    {
      bot: "Hi 👋 Looking for a property?",
      options: ["Buy", "Rent"],
    },
    {
      bot: "What’s your budget range?",
      options: ["$100k–$200k", "$200k–$500k", "$500k+"],
    },
    {
      bot: "Got it 👍 Here are available options + schedule a visit:",
      link: "https://calendly.com/demo",
    },
  ],
};

export default function SmartDemo() {
  const [industry, setIndustry] = useState("clinic");
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setMessages([{ from: "bot", text: flows[industry][0].bot }]);
    setStep(0);
  }, [industry]);

  const handleOption = (option) => {
    const flow = flows[industry];

    setMessages((prev) => [...prev, { from: "user", text: option }]);

    setTimeout(() => {
      const nextStep = step + 1;
      if (flow[nextStep]) {
        const next = flow[nextStep];

        if (next.link) {
          setMessages((prev) => [
            ...prev,
            { from: "bot", text: next.bot },
            { from: "bot", text: next.link, isLink: true },
          ]);
        } else {
          setMessages((prev) => [...prev, { from: "bot", text: next.bot }]);
        }

        setStep(nextStep);
      }
    }, 700);
  };

  const current = flows[industry][step];

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-4 shadow-xl">
      {/* Industry Switch */}
      <div className="flex gap-2 mb-4">
        {["clinic", "realestate"].map((type) => (
          <button
            key={type}
            onClick={() => setIndustry(type)}
            className={`px-3 py-1 rounded-lg text-xs ${
              industry === type
                ? "bg-emerald-500 text-white"
                : "border border-border"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div className="h-[320px] overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-xl px-3 py-2 text-sm ${
                msg.from === "user"
                  ? "bg-emerald-500 text-white"
                  : "bg-background border border-border"
              }`}
            >
              {msg.isLink ? (
                <a href="#" className="underline text-emerald-400">
                  Book now
                </a>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Options */}
      {current?.options && (
        <div className="flex flex-wrap gap-2">
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleOption(opt)}
              className="rounded-lg border px-3 py-1 text-sm hover:bg-card/70"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

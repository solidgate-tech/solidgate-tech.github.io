import React, { useEffect, useRef } from "react";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handlePlay = (event) => {
      const target = event.target;
      if (!target || target.tagName !== "AUDIO") return;

      const container = sectionRef.current || document;
      const allAudios = container.querySelectorAll("audio");
      allAudios.forEach((audio) => {
        if (audio !== target && !audio.paused) {
          audio.pause();
        }
      });
    };

    document.addEventListener("play", handlePlay, true);
    return () => {
      document.removeEventListener("play", handlePlay, true);
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: 0 }}>
      <h2 className="section-title" style={{ marginBottom: 12, fontSize: "1.4rem" }}>
        Testimonials
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {/* 1. Vlad */}
        <TestimonialCard
          name="Vlad Pavlenko"
          position="Software Engineer (Go)"
          team="Connectivity team"
          linkedinUrl="https://www.linkedin.com/in/vladyslavpavlenko/"
          photoUrl="/testimonials/vlad_pavlenko_profile_pic.jpeg"
          description={
            "Why Solidgate? Vlad shares why he chose us over other offers and gives practical advice on preparing for technical interviews."
          }
          qa={[
            {
              question: "What made you choose Solidgate over other offers?",
              audioSrc: "/testimonials/VladyslavPavlenko_WhySolidgate.mp3",
            },
            {
              question: "Top tips for junior engineers facing a technical interview?",
              audioSrc: "/testimonials/VladyslavPavlenko_InterviewPrep.mp3",
            },
          ]}
        />

        {/* 2. Mykhailo */}
        <TestimonialCard
          name="Mykhailo Kratiuk"
          position="Software Engineer (Kotlin)"
          team="Core Team"
          linkedinUrl="https://www.linkedin.com/in/mykhailo-kratiuk-9864211a7/"
          photoUrl="/testimonials/mykhailo_kratiuk_profile_pic.jpeg"
          description={
            "Mykhailo talks through his technical interview experience and what makes our engineering culture unique."
          }
          qa={[
            {
              question: "Can you share what your technical interview experience was like at Solidgate?",
              audioSrc: "/testimonials/MykhailoKratiuk_TechInterviewExp.m4a",
            },
            {
              question: "What makes Solidgate’s engineering culture stand out from other places you've worked?",
              audioSrc: "/testimonials/MykhailoKratiuk_EngineeringCulture.m4a",
            },
          ]}
        />

        {/* 3. Nikita */}
        <TestimonialCard
          name="Nikita Popov"
          position="Tech Lead"
          team="Web Platform team"
          linkedinUrl="https://www.linkedin.com/in/nckcol/"
          photoUrl="/testimonials/nikita_popov_profile_pic.jpeg"
          description={
            "Nikita explains how the Web Platform team drives impact and supports product velocity across the company."
          }
          qa={[
            {
              question:
                "How does the Web Platform Team contribute to the business success?",
              audioSrc: "/testimonials/NikitaPopov_WhyPlatform.m4a",
            },
          ]}
        />
      </div>
    </section>
  );
}


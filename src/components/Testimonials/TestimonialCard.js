import React from "react";

export function TestimonialCard({
  name,
  position,
  team,
  linkedinUrl,
  photoUrl,
  description,
  qa,
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        padding: 16,
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        background: "#fff",
        marginBottom: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
        }}
      >
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={`${name} avatar`}
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            aria-label={`${name} initials`}
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#E4F0EC",
              color: "#105547",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#181A20" }}>{name}</h3>
            {linkedinUrl ? (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#105547",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                LinkedIn
              </a>
            ) : null}
          </div>
          <div style={{ color: "#475569", fontSize: 14 }}>
            {position}
            {team ? ` • ${team}` : ""}
          </div>
          {description ? (
            <p style={{ margin: "8px 0 0", color: "#475569", fontSize: 14, lineHeight: 1.5 }}>
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {qa.map((item, idx) => (
          <div
            key={idx}
            className="media-block"
            style={{
              padding: 14,
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              background: "#FAFAFA",
            }}
          >
            <div style={{ marginBottom: 8, color: "#0f172a", fontWeight: 600 }}>
              {item.question}
            </div>
            <audio controls style={{ width: "100%" }} src={item.audioSrc}>
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}


"use client";

import React from "react";
import Image from "next/image";
import { TerminalWidget } from "@/components/molecules/terminal-widget";

// SVG Brand and Tech Logos hand-crafted for high-fidelity rendering
const ReactIcon = () => (
  <svg className="w-5 h-5 text-[#00dce5] shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 14.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" />
    <path d="M19.013 9.474a.75.75 0 00-.756.027 10.973 10.973 0 01-12.514 0 .75.75 0 00-.756-.027c-3.136 1.83-4.5 4.542-4.5 7.15 0 3.09 1.93 5.9 5.617 5.9a11.173 11.173 0 014.153-.807V23a.75.75 0 001.5 0v-1.282a11.173 11.173 0 014.153.807c3.687 0 5.617-2.81 5.617-5.9 0-2.608-1.364-5.32-4.5-7.15zM12 20.31a9.664 9.664 0 00-3.329-.583h-.008a9.497 9.497 0 00-3.546.685c-2.316 0-3.617-1.636-3.617-3.912 0-1.854.985-3.929 3.284-5.46a12.44 12.44 0 008.216 0c2.3 1.53 3.284 3.606 3.284 5.46 0 2.276-1.3 3.912-3.617 3.912a9.497 9.497 0 00-3.546-.685h-.008A9.664 9.664 0 0012 20.31z" />
  </svg>
);

const NextIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm5.176 17.518l-5.61-7.234v7.234H10.19V8.67h1.378l5.228 6.74V8.67h1.38v8.848z" />
  </svg>
);

const VueIcon = () => (
  <svg className="w-5 h-5 text-[#10B981] shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24,1.61H17.84L12,11.72,6.16,1.61H0L12,22.39ZM12,14,7.84,6.81H4.16L12,20.39,19.84,6.81H16.16Z" />
  </svg>
);

const TSIcon = () => (
  <svg className="w-5 h-5 text-[#3b82f6] shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0zm21.6 19.2h-2.4V12H16.8V9.6h7.2V12h-2.4v7.2zm-6.6-4.2c-.3-.9-1.2-1.5-2.4-1.5-1.5 0-2.4 1.2-2.4 2.7 0 1.5 1.2 2.7 2.7 2.7.9 0 1.8-.6 2.1-1.5h2.4c-.6 2.1-2.4 3.9-4.5 3.9-3.9 0-5.1-2.7-5.1-5.1 0-3 2.1-5.1 5.1-5.1 2.1 0 3.9 1.8 4.5 3.9h-2.7z" />
  </svg>
);

export default function BentoPortfolio() {
  return (
    <div className="bento-container">
      <div className="bento-wrapper">
        {/* MAIN 24-COLUMN BENTO GRID */}
        <div className="bento-grid">
          {/* ==================== COLUMN 1 ==================== */}
          <div className="bento-col-1">
            {/* CARD 1.1: TECH ARSENAL */}
            <div className="bento-card group">
              <div className="bento-card-title-row">
                <span className="bento-card-icon-wrapper">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </span>
                <span className="bento-card-subtitle">My Stacks</span>
              </div>
              <div>
                <h3 className="bento-card-title">Tech Arsenal</h3>
              </div>
              <div className="bento-tech-grid">
                <div className="bento-stack-item">
                  <ReactIcon />
                  <span className="bento-tech-text">ReactJS</span>
                </div>
                <div className="bento-stack-item">
                  <NextIcon />
                  <span className="bento-tech-text">Next.js 15</span>
                </div>
                <div className="bento-stack-item">
                  <VueIcon />
                  <span className="bento-tech-text">Vue 3</span>
                </div>
                <div className="bento-stack-item">
                  <TSIcon />
                  <span className="bento-tech-text">TypeScript</span>
                </div>
              </div>
            </div>

            {/* CARD 1.3: SOLUTIONS SUITE */}
            <div className="bento-card-interactive group">
              <div className="flex flex-col gap-4">
                <div className="bento-card-title-row">
                  <span className="bento-card-icon-wrapper">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </span>
                  <span className="bento-card-subtitle">Services</span>
                </div>
                <div>
                  <h3 className="bento-card-title">Solutions Suite</h3>
                </div>
              </div>

              <div className="bento-services-container">
                {[
                  "3D Geospatial Map",
                  "Web Performance",
                  "Full-stack APIs",
                  "Desktop WPF",
                  "Agile Leadership",
                  "State Optimization",
                ].map((service) => (
                  <span key={service} className="bento-service-tag">
                    {service}
                  </span>
                ))}
              </div>

              <div className="flex justify-center mt-2">
                <a href="mailto:giavy.it@gmail.com" className="bento-btn-primary">
                  View All Services
                </a>
              </div>
            </div>
          </div>

          {/* ==================== COLUMN 2 ==================== */}
          <div className="bento-col-2">
            {/* ROW 2.1: THREE STAT SQUARE CARDS */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bento-stat-card">
                <div className="bento-stat-num">7+</div>
                <div className="bento-stat-label">
                  <span>🚩</span> Years Exp
                </div>
              </div>

              <div className="bento-stat-card">
                <div className="bento-stat-num">300+</div>
                <div className="bento-stat-label">
                  <span>😊</span> Sensor Apps
                </div>
              </div>

              <div className="bento-stat-card">
                <div className="bento-stat-num">15+</div>
                <div className="bento-stat-label">
                  <span>⭐</span> Spatial Layers
                </div>
              </div>
            </div>

            {/* ROW 2.2: DOAN GIA VY PROFILE CARD */}
            <div className="bento-card-interactive relative overflow-hidden group">
              <div className="flex justify-between items-center z-10">
                <div className="bento-badge-available">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="bento-badge-text">Available To Work</span>
                </div>
                <a href="mailto:giavy.it@gmail.com" className="bento-btn-resume">
                  Resume
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>

              {/* Picture + Name detail */}
              <div className="flex items-center gap-5 z-10">
                <div className="bento-profile-avatar-outer">
                  <div className="bento-profile-avatar-inner">
                    <Image
                      src="/giavy_profile.png"
                      alt="Doan Gia Vy Headshot"
                      fill
                      className="object-cover scale-[1.01]"
                    />
                  </div>
                </div>
                <div className="bento-profile-text">
                  <h2 className="bento-profile-name">Doãn Gia Vỹ</h2>
                  <p className="bento-profile-role">
                    {"I'm a "}
                    <span className="bento-text-highlight">Senior Frontend Engineer</span>
                  </p>
                </div>
              </div>

              {/* Tag matrix */}
              <div className="bento-profile-tags">
                {[
                  { text: "District 9, TPHCM", icon: "📍" },
                  { text: "Vietnamese & English (Reading/Listening)", icon: "🌐" },
                  { text: "Frontend Architect", icon: "💼" },
                  { text: "Industrial Uni (HCMC)", icon: "🎓" },
                  { text: "ICT / UTC+7", icon: "🕒" },
                ].map((tag) => (
                  <span key={tag.text} className="bento-info-tag">
                    <span>{tag.icon}</span>
                    {tag.text}
                  </span>
                ))}
              </div>

              {/* Action row */}
              <div className="bento-profile-actions">
                <a
                  href="https://www.linkedin.com/in/doangiavy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-social-link"
                >
                  <svg
                    className="w-4.5 h-4.5 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/giavyit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-social-link"
                >
                  <svg
                    className="w-4.5 h-4.5 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* ROW 2.3: SATISFIED PARTNERS */}
            <div className="bento-card group">
              <div className="bento-card-title-row">
                <span className="bento-card-icon-wrapper">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <span className="bento-card-subtitle">My Ecosystem &amp; Clients</span>
              </div>
              <div>
                <h3 className="bento-card-title">Satisfied Partners</h3>
              </div>
              <div className="bento-partners-grid">
                {[
                  { name: "C# .NET", color: "hover:text-purple-400" },
                  { name: "ASP.NET Core", color: "hover:text-blue-400" },
                  { name: "SQL Server", color: "hover:text-red-400" },
                  { name: "MySQL", color: "hover:text-amber-500" },
                  { name: "Turbopack", color: "hover:text-[#e4e4e7]" },
                  { name: "Docker", color: "hover:text-sky-400" },
                  { name: "Azure DevOps", color: "hover:text-indigo-400" },
                  { name: "FPT Software", color: "hover:text-orange-400" },
                ].map((partner) => (
                  <div key={partner.name} className={`bento-partner-item ${partner.color}`}>
                    {partner.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================== COLUMN 3 ==================== */}
          <div className="bento-col-3">
            {/* CARD 3.1: PROJECT SHOWCASES */}
            <div className="bento-card group">
              <div className="bento-card-title-row">
                <span className="bento-card-icon-wrapper">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </span>
                <span className="bento-card-subtitle">My Projects</span>
              </div>
              <div>
                <h3 className="bento-card-title">Project Showcases</h3>
              </div>

              <div className="bento-projects-container">
                {[
                  { name: "National Digital Twin 15", slug: "ndt15", tech: "ReactJS, CesiumJS" },
                  { name: "ADB2024 & ePN2025", slug: "adb2024", tech: "Vue 3, ASP.NET Core" },
                  { name: "Woorigene Medical App", slug: "woorien", tech: "C# WPF, MVVM" },
                  { name: "Vinasoy CRM & E-Commerce", slug: "vinasoy", tech: "Vue 3, Pinia" },
                  { name: "Dam Ca Mau & Dien Quang ERP", slug: "erp", tech: "Vue 3, CoreUI" },
                ].map((project, idx) => (
                  <a
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="bento-project-link group/item"
                  >
                    <div className="bento-project-meta">
                      <span className="bento-project-idx">{idx + 1}</span>
                      <div className="min-w-0">
                        <h4 className="bento-project-title">{project.name}</h4>
                        <p className="bento-project-tech">{project.tech}</p>
                      </div>
                    </div>
                    <span className="bento-project-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CARD 3.2: ONLINE PRESENCE */}
            <div className="bento-card group">
              <div className="bento-card-title-row">
                <span className="bento-card-icon-wrapper">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                <span className="bento-card-subtitle">Follow Me</span>
              </div>
              <div>
                <h3 className="bento-card-title">Online Presence</h3>
              </div>

              <div className="bento-presence-container">
                {[
                  {
                    key: "LinkedIn",
                    id: "doangiavy",
                    url: "https://www.linkedin.com/in/doangiavy/",
                  },
                  { key: "GitHub", id: "giavyit", url: "https://github.com/giavyit" },
                  { key: "Email", id: "giavy.it@gmail.com", url: "mailto:giavy.it@gmail.com" },
                  { key: "Phone", id: "0559893935", url: "tel:0559893935" },
                ].map((social) => (
                  <a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-presence-link group/social"
                  >
                    <div className="bento-presence-meta">
                      <span className="bento-presence-badge">{social.key}</span>
                      <span className="bento-presence-id">{social.id}</span>
                    </div>
                    <span className="bento-presence-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ==================== COLUMN 4 ==================== */}
          <div className="bento-col-4">
            {/* CARD 4.1: INTERACTIVE TERMINAL WIDGET */}
            <TerminalWidget className="h-[400px] xl:h-[400px] p-3.5" />

            {/* CARD 4.2: LET'S WORK TOGETHER */}
            <div className="bento-work-card group">
              {/* Background ambient radial highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent opacity-30" />

              {/* Crown Icon */}
              <div className="bento-crown-wrapper">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <div className="bento-profile-text text-center">
                <h3 className="bento-card-title">{"Let's Work Together"}</h3>
                <p className="text-sm text-zinc-400 font-medium">
                  {"Let's Make Magic Happen Together!"}
                </p>
              </div>

              {/* Form buttons */}
              <div className="bento-work-actions">
                <a href="mailto:giavy.it@gmail.com" className="bento-btn-work-primary">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Me
                </a>

                <button className="bento-btn-work-secondary">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

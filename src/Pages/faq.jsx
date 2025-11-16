import React, { useState } from "react";

import "../css/faq.css";

const faqData = [
  // Column 1 - General Questions
  {
    id: "g1",
    category: "General Questions",
    question: "What is CareerHub and how does it work?",
    answer:
      "CareerHub connects job seekers and employers through smart job matching and personalized recommendations.",
    icon: "bi-lightbulb",
  },
  {
    id: "g2",
    category: "General Questions",
    question: "Is CareerHub free to use?",
    answer: "Yes, CareerHub is completely free for job seekers.",
    icon: "bi-display",
  },
  {
    id: "g3",
    category: "General Questions",
    question: "How can I create an account on CareerHub?",
    answer:
      "Simply click “Sign Up”, fill in your details, and verify your email to start using your dashboard.",
    icon: "bi-display",
  },
  {
    id: "g4",
    category: "General Questions",
    question: "Can I edit my profile after registration?",
    answer:
      "Absolutely. You can update your profile, resume, or photo anytime from your account settings.",
    icon: "bi-display",
  },
  {
    id: "g5",
    category: "General Questions",
    question: "How can I contact CareerHub support?",
    answer:
      "You can reach us via the “Contact Us” page or through our email support team.",
    icon: "bi-briefcase",
  },

  // Column 2 - For Job Seekers & Graduates
  {
    id: "s1",
    category: "For Job Seekers & Graduates",
    question: "How can I find jobs that fit my profile?",
    answer:
      "Use our smart filters to search jobs by title, location, or skills.",
    icon: "bi-display",
  },
  {
    id: "s2",
    category: "For Job Seekers & Graduates",
    question: "Can I upload my resume?",
    answer:
      "Yes, you can upload your resume to apply faster and get noticed by employers.",
    icon: "bi-display",
  },
  {
    id: "s3",
    category: "For Job Seekers & Graduates",
    question: "How will I know if my application was viewed?",
    answer:
      "You’ll receive a notification once your application has been reviewed.",
    icon: "bi-person-workspace",
  },
  {
    id: "s4",
    category: "For Job Seekers & Graduates",
    question: "Do I get alerts for new jobs?",
    answer:
      "Yes, you can enable job alerts to receive emails about new matching opportunities.",
    icon: "bi-star",
  },
  {
    id: "s5",
    category: "For Job Seekers & Graduates",
    question: "Does CareerHub offer career tips or interview advice?",
    answer:
      "Yes! Check our “Resources” section for CV writing, interview prep, and more.",
    icon: "bi-lightbulb",
  },

  // Column 3 - For Employers
  {
    id: "e1",
    category: "For Employers",
    question: "How can I post a job on CareerHub?",
    answer:
      "Register as an employer, go to “Post a Job”, and fill in the job details.",
    icon: "bi-display",
  },
  {
    id: "e2",
    category: "For Employers",
    question: "Are there pricing plans for companies?",
    answer:
      "Yes, we offer free and premium plans depending on your hiring needs.",
    icon: "bi-briefcase",
  },
  {
    id: "e3",
    category: "For Employers",
    question: "Can I search for candidates directly?",
    answer:
      "Yes, you can browse candidate profiles using our smart search filters.",
    icon: "bi-people",
  },
  {
    id: "e4",
    category: "For Employers",
    question: "How can I manage applications?",
    answer:
      "You can view, shortlist, and contact applicants directly from your employer dashboard.",
    icon: "bi-graph-up",
  },
];

export default function FAQ() {
  // store set of open ids (array of ids) => supports multiple open items
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // group by category to render in 3 columns (preserve original order)
  const categories = [
    "General Questions",
    "For Job Seekers & Graduates",
    "For Employers",
  ];
  const grouped = categories.map((cat) =>
    faqData.filter((f) => f.category === cat)
  );

  return (
    <section className="container py-5">
      <h2 className="fw-bold text-center mb-2">
        Got Questions? We’ve Got Answers
      </h2>
      <p className="text-center mb-5">
        <a
          href="#"
          className="text-decoration-none fw-medium"
          style={{ color: "#ff5722" }}
        >
          Find quick solutions and detailed information about CareerHub’s
          services...
        </a>
      </p>

      <div className="row g-4">
        {grouped.map((group, colIdx) => (
          <div key={colIdx} className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">{group[0]?.category ?? ""}</h5>

            {group.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`border rounded-3 p-3 mb-3 shadow-sm faq-item bg-white ${
                    isOpen ? "open" : ""
                  }`}
                  onClick={() => toggle(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggle(item.id);
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <span className="faq-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </span>
                      <span className="fw-semibold text-dark">
                        {item.question}
                      </span>
                    </div>
                    <i className={`bi bi-chevron-down faq-arrow`}></i>
                  </div>

                  <div className="faq-answer ps-5 pt-2 text-secondary small">
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

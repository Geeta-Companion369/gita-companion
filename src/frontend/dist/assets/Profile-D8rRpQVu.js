import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, m as motion, a as Link } from "./index-CodWPqWB.js";
import { u as useStreak } from "./use-streak-CqlB--5b.js";
import { u as useUserProfile } from "./use-user-profile-hnqGj4bF.js";
import "./backend-client-DOpXrffV.js";
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function InfoRow({
  icon,
  label,
  value,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-4 py-3 border-b border-dashed",
      style: { borderColor: "oklch(0.70 0.08 52 / 0.35)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-lg",
            style: {
              background: "radial-gradient(circle at 38% 32%, oklch(0.92 0.10 56 / 0.8), oklch(0.86 0.08 52 / 0.6))",
              border: "1px solid oklch(0.72 0.22 54 / 0.4)"
            },
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs uppercase tracking-wider mb-0.5",
              style: { color: "oklch(0.58 0.12 48)" },
              children: label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-sm font-semibold truncate",
              style: {
                color: value ? "oklch(0.22 0.06 36)" : "oklch(0.65 0.06 50)",
                fontStyle: value ? "normal" : "italic"
              },
              children: value || placeholder || "—"
            }
          )
        ] })
      ]
    }
  );
}
function ProfilePage() {
  const { profile, vedicProfile, displayName } = useUserProfile();
  const { streak } = useStreak();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = reactExports.useState(false);
  const [showEditModal, setShowEditModal] = reactExports.useState(false);
  const isSubscribed = (() => {
    try {
      return localStorage.getItem("gita-subscribed") === "true";
    } catch {
      return false;
    }
  })();
  const totalPoints = (() => {
    try {
      return Number(localStorage.getItem("gita-points") || "0");
    } catch {
      return 0;
    }
  })();
  function handleLogout() {
    setLoggingOut(true);
    try {
      localStorage.removeItem("gita-user-profile");
      localStorage.removeItem("gita-vedic-profile");
      localStorage.removeItem("gita-subscribed");
      localStorage.removeItem("gita-first-visit");
    } catch {
    }
    setTimeout(() => {
      navigate({ to: "/" });
    }, 600);
  }
  const parchmentPanel = {
    background: "oklch(0.96 0.07 62 / 0.60)",
    border: "1px solid oklch(0.72 0.08 52 / 0.45)",
    borderRadius: "8px",
    boxShadow: "inset 0 1px 0 rgba(255,248,220,0.3), 0 2px 8px rgba(80,55,30,0.08)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto pb-20 px-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-xs tracking-widest mb-3",
              style: { color: "oklch(0.65 0.24 50 / 0.55)" },
              children: "❀ ✦ ❀ ✦ ❀ ✦ ❀"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs uppercase tracking-[0.18em] mb-1",
              style: { color: "oklch(0.58 0.16 46)" },
              children: "Sacred Record"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display text-3xl font-bold italic",
              style: {
                color: "oklch(0.22 0.06 38)",
                textShadow: "0 4px 20px rgba(180,130,45,0.28)"
              },
              children: "My Profile"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-px mt-4 mx-auto w-48",
              style: {
                background: "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.5), transparent)"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.05 },
        className: "relative p-6 mb-6 overflow-hidden text-center",
        style: {
          background: "linear-gradient(145deg, oklch(0.97 0.09 60 / 0.97), oklch(0.94 0.11 56 / 0.95), oklch(0.92 0.10 52))",
          border: "2.5px solid oklch(0.72 0.30 54 / 0.65)",
          borderRadius: "10px",
          boxShadow: "0 8px 36px rgba(190,140,45,0.25), inset 0 1px 0 rgba(255,252,228,0.65)"
        },
        "data-ocid": "profile.hero.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-[9px]",
              style: {
                background: "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.70 0.28 46), oklch(0.56 0.24 268), oklch(0.70 0.28 46), oklch(0.84 0.38 54))",
                boxShadow: "0 0 12px oklch(0.78 0.34 54 / 0.55)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-2 right-4 select-none pointer-events-none font-display font-bold",
              "aria-hidden": true,
              style: {
                fontSize: "7rem",
                lineHeight: 1,
                color: "oklch(0.52 0.22 50 / 0.05)"
              },
              children: "ॐ"
            }
          ),
          [
            "top-3 left-3",
            "top-3 right-3",
            "bottom-3 left-3",
            "bottom-3 right-3"
          ].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute ${pos} font-display text-xs pointer-events-none`,
              style: { color: "oklch(0.70 0.28 54 / 0.45)" },
              "aria-hidden": true,
              children: "✦"
            },
            pos
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-24 h-24 rounded-full flex items-center justify-center",
              style: {
                background: "radial-gradient(circle at 38% 32%, oklch(0.88 0.16 340 / 0.9), oklch(0.72 0.18 340 / 0.8))",
                border: "3px solid oklch(0.60 0.20 340 / 0.55)",
                boxShadow: "0 6px 24px oklch(0.68 0.20 340 / 0.30), inset 0 1px 0 rgba(255,220,240,0.5)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl leading-none select-none", "aria-hidden": true, children: "🪷" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl font-bold italic mb-1",
              style: { color: "oklch(0.22 0.06 38)" },
              children: displayName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-xs italic",
              style: { color: "oklch(0.52 0.12 44)" },
              children: [
                "Sadhak since ",
                formatDate(profile.joinDate)
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-6 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center px-4 py-2 rounded-lg",
                style: {
                  background: "oklch(0.94 0.10 56 / 0.5)",
                  border: "1px solid oklch(0.72 0.22 52 / 0.35)"
                },
                "data-ocid": "profile.streak.card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-2xl font-bold italic",
                      style: { color: "oklch(0.52 0.22 44)" },
                      children: streak.count
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-[10px] uppercase tracking-wider",
                      style: { color: "oklch(0.58 0.08 48)" },
                      children: "Day Streak 🔥"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center px-4 py-2 rounded-lg",
                style: {
                  background: "oklch(0.94 0.10 56 / 0.5)",
                  border: "1px solid oklch(0.72 0.22 52 / 0.35)"
                },
                "data-ocid": "profile.points.card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-2xl font-bold italic",
                      style: { color: "oklch(0.52 0.22 44)" },
                      children: totalPoints
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-[10px] uppercase tracking-wider",
                      style: { color: "oklch(0.58 0.08 48)" },
                      children: "Points ✦"
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "mb-6",
        "data-ocid": "profile.info.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 px-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs uppercase tracking-[0.16em]",
                style: { color: "oklch(0.58 0.16 46)" },
                children: "✦ Personal Information"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowEditModal(true),
                className: "font-body text-xs px-3 py-1 rounded-full transition-smooth",
                style: {
                  background: "oklch(0.93 0.09 56 / 0.6)",
                  border: "1px solid oklch(0.72 0.22 52 / 0.45)",
                  color: "oklch(0.38 0.16 42)"
                },
                "data-ocid": "profile.edit.button",
                "aria-label": "Edit profile",
                children: "✏️ Edit"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", style: parchmentPanel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: "🙏",
                label: "Full Name",
                value: (vedicProfile == null ? void 0 : vedicProfile.fullName) || profile.name || void 0,
                placeholder: "Not set"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: "📧",
                label: "Email Address",
                value: (vedicProfile == null ? void 0 : vedicProfile.email) || void 0,
                placeholder: "Not provided"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: "📱",
                label: "Phone Number",
                value: (vedicProfile == null ? void 0 : vedicProfile.phone) || void 0,
                placeholder: "Not provided"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 },
        className: "mb-6",
        "data-ocid": "profile.subscription.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs uppercase tracking-[0.16em] mb-3 px-1",
              style: { color: "oklch(0.58 0.16 46)" },
              children: "✦ Membership"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-4 p-5",
              style: {
                ...parchmentPanel,
                background: isSubscribed ? "linear-gradient(135deg, oklch(0.95 0.10 54 / 0.80), oklch(0.92 0.12 50 / 0.70))" : "oklch(0.96 0.07 62 / 0.60)",
                border: isSubscribed ? "1.5px solid oklch(0.72 0.30 54 / 0.6)" : "1px solid oklch(0.72 0.08 52 / 0.45)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl",
                    style: {
                      background: isSubscribed ? "radial-gradient(circle, oklch(0.86 0.38 54), oklch(0.68 0.28 50))" : "oklch(0.88 0.06 52)",
                      border: "2px solid oklch(0.72 0.22 52 / 0.5)"
                    },
                    children: isSubscribed ? "⭐" : "🌸"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-base font-bold italic",
                        style: { color: "oklch(0.22 0.06 38)" },
                        children: isSubscribed ? "Premium Subscriber" : "Free Trial"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-[10px] font-bold px-2 py-0.5 rounded-full",
                        style: isSubscribed ? {
                          background: "linear-gradient(135deg, oklch(0.84 0.36 54), oklch(0.70 0.28 50))",
                          color: "oklch(0.12 0.06 32)",
                          border: "1px solid oklch(0.68 0.28 50 / 0.6)",
                          boxShadow: "0 0 10px oklch(0.78 0.34 54 / 0.35)"
                        } : {
                          background: "oklch(0.88 0.04 60 / 0.7)",
                          color: "oklch(0.46 0.06 50)",
                          border: "1px solid oklch(0.72 0.06 52 / 0.4)"
                        },
                        children: isSubscribed ? "★ PRO" : "FREE"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic mt-0.5",
                      style: { color: "oklch(0.52 0.10 46)" },
                      children: isSubscribed ? "Full access to all 21 Sacred Pathways" : "7-day free access · ₹108/month after"
                    }
                  )
                ] }),
                !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "font-body text-xs px-3 py-2 rounded-md flex-shrink-0 transition-smooth",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.62 0.28 50), oklch(0.52 0.22 44))",
                      color: "oklch(0.96 0.06 72)",
                      border: "1px solid oklch(0.52 0.22 44)",
                      boxShadow: "0 2px 8px oklch(0.52 0.22 44 / 0.30)"
                    },
                    onClick: () => {
                      try {
                        localStorage.setItem("gita-subscribed", "true");
                      } catch {
                      }
                    },
                    "data-ocid": "profile.subscribe.primary_button",
                    children: "Subscribe ✦"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        className: "mb-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/kundali-lite",
            style: { textDecoration: "none" },
            "data-ocid": "profile.kundali.link",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden p-5 transition-smooth group",
                style: {
                  background: "linear-gradient(145deg, oklch(0.97 0.10 58 / 0.98), oklch(0.94 0.13 53 / 0.97), oklch(0.91 0.11 50))",
                  border: "2px solid oklch(0.76 0.32 54 / 0.70)",
                  borderRadius: "10px",
                  boxShadow: "0 8px 36px rgba(190,140,45,0.28), inset 0 1px 0 rgba(255,252,228,0.65)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-[9px]",
                      style: {
                        background: "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.68 0.30 46), oklch(0.56 0.26 268), oklch(0.68 0.30 46), oklch(0.84 0.38 54))",
                        boxShadow: "0 0 12px oklch(0.78 0.34 54 / 0.6)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-1 right-4 select-none pointer-events-none font-display font-bold",
                      "aria-hidden": true,
                      style: {
                        fontSize: "6rem",
                        lineHeight: 1,
                        color: "oklch(0.52 0.22 50 / 0.07)"
                      },
                      children: "♃"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-2xl",
                        style: {
                          background: "radial-gradient(circle at 38% 32%, oklch(0.90 0.22 54), oklch(0.74 0.30 50))",
                          border: "2px solid oklch(0.72 0.28 52 / 0.55)",
                          boxShadow: "0 4px 16px oklch(0.72 0.30 52 / 0.35), inset 0 1px 0 rgba(255,248,220,0.5)"
                        },
                        children: "🔮"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-[10px] uppercase tracking-[0.18em] mb-0.5",
                          style: { color: "oklch(0.52 0.22 48)" },
                          children: "✦ Vedic Astrology"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display text-lg font-bold italic leading-tight",
                          style: {
                            color: "oklch(0.20 0.08 34)",
                            textShadow: "0 1px 8px rgba(180,130,45,0.18)"
                          },
                          children: "View your Kundali"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic mt-0.5",
                          style: { color: "oklch(0.46 0.10 44)" },
                          children: "Lagna chart · Graha · Daily remedies"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth group-hover:translate-x-1",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.64 0.28 50))",
                          border: "1px solid oklch(0.68 0.28 50 / 0.5)",
                          color: "oklch(0.14 0.06 32)",
                          boxShadow: "0 2px 10px oklch(0.72 0.30 52 / 0.30)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base", children: "→" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "mt-3 pt-3 flex items-center justify-center gap-2",
                      style: { borderTop: "1px dashed oklch(0.72 0.22 52 / 0.3)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-body text-[10px] uppercase tracking-wider",
                          style: { color: "oklch(0.52 0.18 46)" },
                          children: "✦ Your Kundali Lite journey awaits ✦"
                        }
                      )
                    }
                  )
                ]
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25 },
        className: "mb-6 space-y-3",
        "data-ocid": "profile.links.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/about",
              className: "flex items-center gap-4 p-4 transition-smooth group",
              style: {
                background: "oklch(0.96 0.07 62 / 0.60)",
                border: "1px solid oklch(0.72 0.08 52 / 0.45)",
                borderRadius: "8px",
                textDecoration: "none"
              },
              "data-ocid": "profile.about.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🙏" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic",
                      style: { color: "oklch(0.22 0.06 38)" },
                      children: "About Gita Companion"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic",
                      style: { color: "oklch(0.52 0.08 46)" },
                      children: "Our story, mission & the Digital Dharma movement"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-base opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-smooth",
                    style: { color: "oklch(0.52 0.18 46)" },
                    children: "→"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/challenges",
              className: "flex items-center gap-4 p-4 transition-smooth group",
              style: {
                background: "oklch(0.96 0.07 62 / 0.60)",
                border: "1px solid oklch(0.72 0.08 52 / 0.45)",
                borderRadius: "8px",
                textDecoration: "none"
              },
              "data-ocid": "profile.achievements.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🏆" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic",
                      style: { color: "oklch(0.22 0.06 38)" },
                      children: "Achievements & Rewards"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic",
                      style: { color: "oklch(0.52 0.08 46)" },
                      children: "Badges, streaks, and your spiritual milestones"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-base opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-smooth",
                    style: { color: "oklch(0.52 0.18 46)" },
                    children: "→"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleLogout,
              disabled: loggingOut,
              className: "font-body text-sm italic px-6 py-3 rounded-lg transition-smooth",
              style: {
                background: loggingOut ? "oklch(0.90 0.04 50)" : "oklch(0.96 0.05 50 / 0.70)",
                border: "1px dashed oklch(0.62 0.08 38 / 0.45)",
                color: loggingOut ? "oklch(0.65 0.06 46)" : "oklch(0.45 0.10 32)"
              },
              "data-ocid": "profile.logout.button",
              children: loggingOut ? "Signing out… 🙏" : "Sign Out"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-[10px] italic mt-2",
              style: { color: "oklch(0.62 0.06 50)" },
              children: "ॐ तत् सत् — The Gita remains with you always"
            }
          )
        ]
      }
    ),
    showEditModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        open: true,
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 w-full h-full max-w-none max-h-none m-0",
        style: {
          background: "oklch(0.14 0.09 32 / 0.75)",
          backdropFilter: "blur(8px)"
        },
        "data-ocid": "profile.edit.dialog",
        "aria-label": "Edit Profile",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 10 },
            animate: { opacity: 1, scale: 1, y: 0 },
            className: "w-full max-w-md relative overflow-hidden",
            style: {
              background: "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.99) 0%, oklch(0.95 0.09 64 / 0.98) 100%)",
              border: "2px solid oklch(0.78 0.34 54 / 0.60)",
              borderRadius: "12px",
              boxShadow: "0 20px 80px rgba(0,0,0,0.38), 0 0 50px oklch(0.78 0.34 54 / 0.35), inset 0 1px 0 rgba(255,248,220,0.65)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 right-0 h-[3px]",
                  style: {
                    background: "linear-gradient(90deg, oklch(0.78 0.34 54 / 0), oklch(0.78 0.34 54 / 0.9), oklch(0.78 0.34 54 / 0))",
                    boxShadow: "0 0 16px oklch(0.78 0.34 54 / 0.5)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 pt-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-lg font-bold italic",
                      style: { color: "oklch(0.22 0.06 38)" },
                      children: "✏️ Edit Profile"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowEditModal(false),
                      className: "w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
                      style: {
                        background: "oklch(0.90 0.06 54 / 0.5)",
                        border: "1px solid oklch(0.72 0.10 52 / 0.4)",
                        color: "oklch(0.38 0.10 40)"
                      },
                      "data-ocid": "profile.edit.close_button",
                      "aria-label": "Close",
                      children: "✕"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm italic text-center py-6",
                    style: { color: "oklch(0.52 0.10 46)" },
                    children: "🙏 To update your name, email, or phone, please complete the onboarding again from the Home screen."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowEditModal(false),
                    className: "w-full py-3 font-display text-sm font-bold italic tracking-wide transition-smooth",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.84 0.36 54), oklch(0.70 0.28 50))",
                      border: "1.5px solid oklch(0.68 0.28 50 / 0.55)",
                      borderRadius: "8px",
                      color: "oklch(0.12 0.06 32)",
                      boxShadow: "0 4px 16px oklch(0.72 0.30 52 / 0.28)"
                    },
                    "data-ocid": "profile.edit.confirm_button",
                    children: "Got it ✦"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
export {
  ProfilePage
};

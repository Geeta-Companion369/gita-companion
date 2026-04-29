import { j as jsxRuntimeExports, r as reactExports, d as useLanguage, g as useTTS, m as motion, h as ue, T as TTS_SPEED_PRESETS, e as LANGUAGE_LABELS } from "./index-vCKiyWhq.js";
import { R as Root$1, T as Trigger, W as WarningProvider, C as Content, c as composeEventHandlers, b as Title, D as Description, a as Close, d as createDialogScope, P as Portal, O as Overlay, e as createSlottable, f as createContextScope } from "./index-CS8xaTxz.js";
import { u as useComposedRefs } from "./index-BknLay4C.js";
import { b as buttonVariants } from "./button-S7Tmk-Xe.js";
import { c as cn } from "./utils-2v2HxlWs.js";
import { B as Badge } from "./badge-DTri8Ot3.js";
import { c as createSlot } from "./index-Di4-AdbR.js";
import { u as useUserProfile } from "./use-user-profile-Ch8fUFbr.js";
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger2, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const LANGUAGES = Object.entries(LANGUAGE_LABELS);
const DAILY_TARGETS = [
  { value: 27, label: "27", desc: "Trinitarian round" },
  { value: 54, label: "54", desc: "Half mala" },
  { value: 108, label: "108", desc: "Full mala" }
];
const DAILY_TARGET_KEY = "gita-daily-target";
const REMINDER_KEY = "gita-reminder-enabled";
function loadDailyTarget() {
  try {
    return Number(localStorage.getItem(DAILY_TARGET_KEY) ?? 27);
  } catch {
    return 27;
  }
}
function loadReminder() {
  try {
    return localStorage.getItem(REMINDER_KEY) === "true";
  } catch {
    return false;
  }
}
function InkToggle({
  checked,
  onCheckedChange,
  id
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      id,
      role: "switch",
      "aria-checked": checked,
      onClick: () => onCheckedChange(!checked),
      className: "relative transition-smooth focus-visible:outline-2 focus-visible:outline-ring",
      style: {
        width: 46,
        height: 24,
        borderRadius: "2px",
        background: checked ? "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))" : "oklch(var(--muted) / 0.7)",
        border: checked ? "1px solid oklch(0.40 0.14 36)" : "1px solid oklch(var(--border))",
        boxShadow: checked ? "inset 0 1px 3px rgba(60,40,20,0.2), 0 1px 4px oklch(0.48 0.16 38 / 0.3)" : "inset 0 1px 3px rgba(60,40,20,0.08)",
        flexShrink: 0
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1 transition-smooth",
          style: {
            width: 16,
            height: 14,
            borderRadius: "1px",
            background: checked ? "oklch(0.94 0.06 60)" : "oklch(var(--muted-foreground))",
            left: checked ? 26 : 4,
            boxShadow: "0 1px 2px rgba(60,40,20,0.2)"
          }
        }
      )
    }
  );
}
function SectionTitle({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: "font-display text-xs font-bold uppercase tracking-widest mb-4",
      style: {
        color: "oklch(var(--accent) / 0.70)",
        borderBottom: "1px solid oklch(var(--accent) / 0.18)",
        paddingBottom: "0.5rem"
      },
      children
    }
  );
}
function SettingsPage() {
  const { language, setLanguage } = useLanguage();
  const { profile, setProfile } = useUserProfile();
  const { ttsSpeed, setTtsSpeed } = useTTS();
  const [nameInput, setNameInput] = reactExports.useState(profile.name);
  const [dailyTarget, setDailyTargetState] = reactExports.useState(loadDailyTarget);
  const [reminderEnabled, setReminderEnabled] = reactExports.useState(loadReminder);
  const handleNameBlur = () => {
    const trimmed = nameInput.trim();
    if (trimmed !== profile.name) {
      setProfile({ name: trimmed });
      ue.success("Name updated", {
        description: `Welcome, ${trimmed || "Seeker"}! 🙏`
      });
    }
  };
  const handleNameKey = (e) => {
    if (e.key === "Enter") e.target.blur();
  };
  const handleDailyTarget = (val) => {
    setDailyTargetState(val);
    try {
      localStorage.setItem(DAILY_TARGET_KEY, String(val));
    } catch {
    }
    ue.success(`Daily target set to ${val} reps`);
  };
  const handleReminder = (checked) => {
    setReminderEnabled(checked);
    try {
      localStorage.setItem(REMINDER_KEY, String(checked));
    } catch {
    }
    if (checked) ue.success("Daily reminders enabled 🙏");
    else ue.info("Reminders disabled");
  };
  const handleExport = () => {
    try {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key == null ? void 0 : key.startsWith("gita-")) {
          const raw = localStorage.getItem(key);
          if (raw) {
            try {
              data[key] = JSON.parse(raw);
            } catch {
              data[key] = raw;
            }
          }
        }
      }
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `gita-sadhana-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      ue.success("Data exported", {
        description: "Your sadhana data has been downloaded."
      });
    } catch {
      ue.error("Export failed");
    }
  };
  const handleReset = () => {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key == null ? void 0 : key.startsWith("gita-")) keys.push(key);
    }
    for (const key of keys) localStorage.removeItem(key);
    ue.success("All data cleared", {
      description: "Your sadhana data has been reset. Jai Shree Krishna 🙏"
    });
    setTimeout(() => window.location.reload(), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "॥" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "Sadhana Preferences" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "chapter-header",
              style: { fontSize: "clamp(2rem, 5vw, 3.2rem)" },
              children: "Settings"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-translation italic", style: { fontSize: "0.88rem" }, children: "Arrange your sacred practice as your heart desires" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ॐ" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.07 },
        className: "mb-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "✦ Your Identity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "settings-name",
                  className: "font-body text-sm italic block mb-2",
                  style: { color: "oklch(var(--foreground))" },
                  children: "Your Sacred Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "settings-name",
                  type: "text",
                  value: nameInput,
                  onChange: (e) => setNameInput(e.target.value),
                  onBlur: handleNameBlur,
                  onKeyDown: handleNameKey,
                  placeholder: "Enter your name (or leave blank for 'Seeker')",
                  className: "w-full font-body italic focus:outline-none",
                  style: {
                    padding: "0.65rem 1rem",
                    fontSize: "0.9rem",
                    background: "oklch(var(--background) / 0.6)",
                    border: "1px solid oklch(var(--accent) / 0.28)",
                    borderBottom: "2px solid oklch(var(--accent) / 0.35)",
                    borderRadius: "1px",
                    color: "oklch(var(--foreground))"
                  },
                  "data-ocid": "settings-name-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mt-1.5",
                  style: { color: "oklch(var(--muted-foreground))" },
                  children: "Inscribed automatically when you leave this field"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { opacity: 0.25 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "arjun-mode",
                    className: "font-display text-sm font-semibold italic block",
                    style: { color: "oklch(var(--foreground))" },
                    children: "Arjun Mode"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-0.5",
                    style: { color: "oklch(var(--muted-foreground))" },
                    children: 'Be addressed as "Arjun" — for immersive reading'
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InkToggle,
                {
                  id: "arjun-mode",
                  checked: profile.arjunMode ?? false,
                  onCheckedChange: (checked) => {
                    setProfile({ arjunMode: checked });
                    ue.success(
                      checked ? "Arjun Mode enabled 🦚" : "Arjun Mode disabled"
                    );
                  },
                  "data-ocid": "arjun-mode-toggle"
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.12 },
        className: "mb-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "✦ Language of the Sacred Text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: LANGUAGES.map(([lang, label]) => {
            const selected = language === lang;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setLanguage(lang);
                  ue.success(`Language set to ${label}`);
                },
                className: "w-full text-left font-body text-sm italic transition-smooth flex items-center justify-between",
                style: {
                  padding: "0.6rem 1rem",
                  borderRadius: "2px",
                  border: selected ? "1px solid oklch(var(--accent) / 0.45)" : "1px solid transparent",
                  background: selected ? "oklch(var(--accent) / 0.08)" : "transparent",
                  color: selected ? "oklch(var(--foreground))" : "oklch(var(--muted-foreground))",
                  fontWeight: selected ? 600 : 400
                },
                "data-ocid": `lang-option-${lang}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    selected ? "❯ " : "  ",
                    label
                  ] }),
                  selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "font-body text-[10px] py-0",
                      children: "Active"
                    }
                  )
                ]
              },
              lang
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.16 },
        className: "mb-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "✦ Voice for Recitation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-sm font-semibold italic",
                    style: { color: "oklch(var(--foreground))" },
                    children: "Voice Preference"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-0.5",
                    style: { color: "oklch(var(--muted-foreground))" },
                    children: profile.voiceGender === "female" ? "Female — gentle, melodic bhakti" : "Male — deep, devotional resonance"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(var(--muted-foreground))" },
                    children: "Male"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InkToggle,
                  {
                    id: "voice-gender",
                    checked: profile.voiceGender === "female",
                    onCheckedChange: (checked) => {
                      setProfile({ voiceGender: checked ? "female" : "male" });
                      ue.success(
                        checked ? "Female voice selected" : "Male voice selected"
                      );
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(var(--muted-foreground))" },
                    children: "Female"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { opacity: 0.25 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-semibold italic mb-1",
                  style: { color: "oklch(var(--foreground))" },
                  children: "Mantra Recitation Speed"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mb-3",
                  style: { color: "oklch(var(--muted-foreground))" },
                  children: "Adjust how fast mantras and verses are spoken aloud"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: TTS_SPEED_PRESETS.map((preset) => {
                const active = ttsSpeed === preset.value;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setTtsSpeed(preset.value);
                      ue.success(`Speed set to ${preset.label}`);
                    },
                    className: "flex flex-col items-center justify-center gap-0.5 py-3 transition-smooth",
                    style: {
                      borderRadius: "2px",
                      border: active ? "1px solid oklch(var(--accent) / 0.5)" : "1px solid oklch(var(--border) / 0.55)",
                      background: active ? "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))" : "transparent",
                      color: active ? "oklch(0.94 0.06 60)" : "oklch(var(--muted-foreground))",
                      boxShadow: active ? "0 2px 10px rgba(120,80,30,0.22)" : "none"
                    },
                    "data-ocid": `tts-speed-${preset.value}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl leading-none", children: preset.emoji }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] italic mt-1 opacity-80", children: preset.label.replace(`${preset.emoji} `, "") })
                    ]
                  },
                  preset.value
                );
              }) })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        className: "mb-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "✦ Daily Practice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm italic mb-3",
                  style: { color: "oklch(var(--foreground))" },
                  children: "Default Naam Writing Target"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: DAILY_TARGETS.map(({ value, label, desc }) => {
                const active = dailyTarget === value;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleDailyTarget(value),
                    className: "flex flex-col items-center justify-center gap-0.5 py-3.5 transition-smooth",
                    style: {
                      borderRadius: "2px",
                      border: active ? "1px solid oklch(var(--accent) / 0.5)" : "1px solid oklch(var(--border) / 0.55)",
                      background: active ? "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))" : "transparent",
                      color: active ? "oklch(0.94 0.06 60)" : "oklch(var(--muted-foreground))",
                      boxShadow: active ? "0 2px 10px rgba(120,80,30,0.22)" : "none"
                    },
                    "data-ocid": `daily-target-${value}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold italic leading-none", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] italic mt-0.5 opacity-80", children: desc })
                    ]
                  },
                  value
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { opacity: 0.25 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "reminder-toggle",
                    className: "font-display text-sm font-semibold italic block",
                    style: { color: "oklch(var(--foreground))" },
                    children: "Daily Practice Reminder"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-0.5",
                    style: { color: "oklch(var(--muted-foreground))" },
                    children: "Show a reminder banner when you open the app"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InkToggle,
                {
                  id: "reminder-toggle",
                  checked: reminderEnabled,
                  onCheckedChange: handleReminder,
                  "data-ocid": "reminder-toggle"
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.24 },
        className: "mb-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "✦ Your Sadhana Data" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic mb-4 leading-relaxed",
              style: { color: "oklch(var(--muted-foreground))" },
              children: "All your sacred data — practice history, points, streaks, and settings — is preserved locally on your device. Export it as a backup at any time."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleExport,
                className: "w-full font-body italic transition-smooth hover:opacity-90",
                style: {
                  padding: "0.7rem",
                  background: "transparent",
                  color: "oklch(var(--foreground))",
                  border: "1px solid oklch(var(--accent) / 0.35)",
                  borderRadius: "2px",
                  fontSize: "0.875rem"
                },
                "data-ocid": "export-data-btn",
                children: "↓ Export Sadhana Data"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "w-full font-body italic transition-smooth hover:opacity-90",
                  style: {
                    padding: "0.7rem",
                    background: "oklch(0.50 0.18 22 / 0.10)",
                    color: "oklch(0.50 0.18 22)",
                    border: "1px solid oklch(0.50 0.18 22 / 0.35)",
                    borderRadius: "2px",
                    fontSize: "0.875rem"
                  },
                  "data-ocid": "reset-data-btn",
                  children: "↺ Reset All Data"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display italic", children: "Reset All Sadhana Data?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "font-body italic", children: "This will permanently erase all your practice history, points, streaks, badges, and settings. This cannot be undone." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "font-body italic rounded-sm", children: "Cancel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDialogAction,
                    {
                      onClick: handleReset,
                      className: "font-body italic rounded-sm",
                      "data-ocid": "confirm-reset-btn",
                      children: "Yes, Reset Everything"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.28 },
        className: "mb-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "✦ About This App" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "space-y-3 font-body text-sm italic leading-relaxed",
              style: { color: "oklch(var(--muted-foreground))" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs not-italic", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: { color: "oklch(var(--foreground))" },
                      className: "font-semibold",
                      children: "Version"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-body text-[10px]", children: "1.0.0" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { opacity: 0.25 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "The",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: { color: "oklch(var(--foreground))" },
                      className: "font-semibold",
                      children: "Bhagavad Gita"
                    }
                  ),
                  " ",
                  "is a sacred dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra. Its 700 verses across 18 chapters reveal the eternal wisdom of dharma, karma, jnana, and bhakti."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This companion offers chapter reading, naam writing, mala counting, mantra listening, and AI-powered guidance rooted exclusively in the Gita's teachings." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs mt-4", style: { opacity: 0.65 }, children: "🪷 Jai Shree Krishna · ✨ Raaadhe Raaadhe" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-center font-body text-xs italic pb-4",
        style: { color: "oklch(var(--muted-foreground))" },
        children: "🙏 All data stays on your device — no accounts, no tracking"
      }
    )
  ] });
}
export {
  SettingsPage
};

"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type ChatMessage = {
  id: string
  sender: "user" | "bot"
  text: string
  createdAt: Date
}

const CALLTOCHEF_BRAND = {
  primary: "#00B578",
  secondary: "#A8E5D0",
  background: "#FFFFFF",
  text: "#1E1E1E",
}

const WEBHOOK_ROUTE = "general"

const createUUID = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }

  return Math.random().toString(36).slice(2)
}

const sanitizeResponse = (raw: unknown): string => {
  if (!raw) {
    return ""
  }

  if (typeof raw === "string") {
    return raw
  }

  if (Array.isArray(raw)) {
    return raw
      .map((entry) =>
        typeof entry === "object" && entry !== null
          ? sanitizeResponse((entry as { output?: unknown; message?: unknown }).output ?? entry)
          : sanitizeResponse(entry),
      )
      .join("\n\n")
  }

  if (typeof raw === "object") {
    const object = raw as Record<string, unknown>
    if (typeof object.output === "string") {
      return object.output
    }
    if (object.output) {
      return sanitizeResponse(object.output)
    }
    if (typeof object.message === "string") {
      return object.message
    }
  }

  return ""
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isInitializing, setIsInitializing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null)
  const sessionId = useMemo(createUUID, [])
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (isOpen) {
      scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  const appendMessage = useCallback((message: ChatMessage) => {
    setMessages((previous) => [...previous, message])
  }, [])

  const startConversation = useCallback(async () => {
    setIsInitializing(true)
    setError(null)
    try {
      const payload = [
        {
          action: "loadPreviousSession",
          sessionId,
          route: WEBHOOK_ROUTE,
          metadata: {
            userId: "",
          },
        },
      ]

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      const botText = sanitizeResponse(data)

      if (botText) {
        appendMessage({
          id: createUUID(),
          sender: "bot",
          text: botText,
          createdAt: new Date(),
        })
      }

      hasStartedRef.current = true
    } catch (startError) {
      console.error("[ChatWidget] Unable to start conversation", startError)
      setError("Impossible de démarrer la conversation. Réessayez dans quelques instants.")
    } finally {
      setIsInitializing(false)
    }
  }, [appendMessage, sessionId])

  const handleToggle = () => {
    setIsOpen((value) => {
      const next = !value
      if (next) {
        setError(null)
      }
      return next
    })
  }

  const handleSend = async () => {
    const trimmed = inputValue.trim()
    if (!trimmed || isSending || isInitializing) {
      return
    }

    const userMessage: ChatMessage = {
      id: createUUID(),
      sender: "user",
      text: trimmed,
      createdAt: new Date(),
    }

    appendMessage(userMessage)
    setInputValue("")
    setIsSending(true)
    setError(null)

    try {
      const messagePayload = {
        action: "sendMessage",
        sessionId,
        route: WEBHOOK_ROUTE,
        chatInput: trimmed,
        metadata: {
          userId: "",
        },
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messagePayload),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      const botText = sanitizeResponse(data)

      if (botText) {
        appendMessage({
          id: createUUID(),
          sender: "bot",
          text: botText,
          createdAt: new Date(),
        })
      }
    } catch (sendError) {
      console.error("[ChatWidget] Unable to send message", sendError)
      setError(
        "Impossible de contacter l'assistant pour le moment. Réessayez dans quelques instants.",
      )
    } finally {
      setIsSending(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    if (isOpen && !hasStartedRef.current && !isInitializing) {
      startConversation()
    }
  }, [isOpen, isInitializing, startConversation])

  const formattedMessages = messages.length
    ? messages
    : [
        {
          id: "welcome",
          sender: "bot" as const,
          text: "👋 Bonjour ! Je suis votre assistant CallToChef. Comment puis-je vous aider aujourd’hui ?",
          createdAt: new Date(),
        },
      ]

  return (
    <>
      <div className="ctc-widget-root">
        {isOpen && (
          <div className="ctc-panel">
            <header className="ctc-header">
              <div className="ctc-header__info">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.postimg.cc/8kW6PTSX/logo-2-00000.jpg"
                  alt="Assistant IA CallToChef"
                  className="ctc-avatar"
                />
                <div>
                  <p className="ctc-header__title">Assistant IA CallToChef</p>
                  <p className="ctc-header__subtitle">Disponible 24h/24</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleToggle}
                className="ctc-close"
                aria-label="Fermer le chat"
              >
                ✕
              </button>
            </header>

            <section className="ctc-body">
              <div className="ctc-messages">
                {formattedMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`ctc-bubble ${message.sender === "user" ? "ctc-bubble--user" : "ctc-bubble--bot"}`}
                  >
                    {message.text}
                  </div>
                ))}
                <div ref={scrollAnchorRef} />
              </div>
            </section>

            <footer className="ctc-footer">
              {isInitializing && (
                <p className="ctc-status">Connexion à l’assistant CallToChef…</p>
              )}
              {error && <p className="ctc-error">{error}</p>}
              <div className="ctc-input">
                <textarea
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="Écrivez votre message…"
                  aria-label="Saisir un message"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={isSending || isInitializing || !inputValue.trim()}
                >
                  {isSending ? "Envoi…" : "Envoyer"}
                </button>
              </div>
            </footer>
          </div>
        )}

        <button
          type="button"
          onClick={handleToggle}
          className="ctc-toggle"
          aria-label={isOpen ? "Fermer le widget de chat" : "Ouvrir le widget de chat"}
        >
          <span className="ctc-toggle__bubble" />
        </button>
      </div>

      <style jsx global>{`
        :root {
          --ctc-brand: ${CALLTOCHEF_BRAND.primary};
          --ctc-brand-soft: ${CALLTOCHEF_BRAND.secondary};
          --ctc-text: ${CALLTOCHEF_BRAND.text};
        }

        .ctc-widget-root {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
          pointer-events: none;
        }

        .ctc-widget-root * {
          font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        .ctc-toggle {
          pointer-events: auto;
          width: 64px;
          height: 64px;
          border: none;
          border-radius: 50%;
          background: radial-gradient(120% 120% at 70% 30%, var(--ctc-brand) 0%, #06d696 60%, #06c089 100%);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          position: relative;
          display: grid;
          place-items: center;
          transition: transform 0.18s ease, filter 0.2s ease;
        }

        .ctc-toggle::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(120% 120% at 30% 70%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0) 60%);
          pointer-events: none;
        }

        .ctc-toggle:hover {
          transform: translateY(-2px) scale(1.03);
          filter: saturate(1.05);
        }

        @media (prefers-reduced-motion: no-preference) {
          .ctc-toggle {
            animation: ctc-pulse 2.8s infinite;
          }

          @keyframes ctc-pulse {
            0%,
            100% {
              box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24), 0 0 0 0 rgba(0, 181, 120, 0.35);
            }
            50% {
              box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24), 0 0 0 14px rgba(0, 181, 120, 0);
            }
          }
        }

        .ctc-toggle__bubble {
          width: 26px;
          height: 20px;
          border-radius: 10px;
          background: #fff;
          position: relative;
          box-shadow: inset 0 -2px 6px rgba(0, 0, 0, 0.12);
        }

        .ctc-toggle__bubble::after {
          content: "";
          position: absolute;
          right: -6px;
          top: 7px;
          width: 0;
          height: 0;
          border-left: 8px solid #fff;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));
        }

        .ctc-panel {
          pointer-events: auto;
          width: 380px;
          max-width: calc(100vw - 48px);
          height: 560px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.22);
          backdrop-filter: blur(18px);
          transform-origin: 100% 100%;
          transform: scale(0.94) translateY(12px);
          opacity: 0;
          animation: ctc-pop 0.35s ease forwards;
        }

        @keyframes ctc-pop {
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .ctc-header {
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(0, 181, 120, 0.18), rgba(168, 229, 208, 0.18));
        }

        .ctc-header__info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ctc-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.85);
          object-fit: cover;
          background: #fff;
        }

        .ctc-header__title {
          font-weight: 600;
          font-size: 0.95rem;
          color: #0f172a;
        }

        .ctc-header__subtitle {
          font-size: 0.8rem;
          color: rgba(15, 23, 42, 0.65);
        }

        .ctc-close {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          color: #0f172a;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ctc-close:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .ctc-body {
          flex: 1;
          padding: 18px 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ctc-messages {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ctc-bubble {
          max-width: 78%;
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 0.92rem;
          line-height: 1.5;
          position: relative;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
          align-self: flex-start;
        }

        .ctc-bubble::before {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 18px;
          width: 12px;
          height: 12px;
          background: inherit;
          border-left: inherit;
          border-bottom: inherit;
          transform: rotate(45deg);
          border-top: none;
          border-right: none;
        }

        .ctc-bubble--user {
          align-self: flex-end;
          background: linear-gradient(135deg, var(--ctc-brand) 0%, #06c089 100%);
          color: #fff;
          border: none;
        }

        .ctc-bubble--user::before {
          right: 18px;
          left: auto;
          background: inherit;
        }

        .ctc-footer {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(168, 229, 208, 0.22));
          border-top: 1px solid rgba(255, 255, 255, 0.35);
        }

        .ctc-status {
          font-size: 0.75rem;
          color: rgba(15, 23, 42, 0.6);
        }

        .ctc-error {
          font-size: 0.75rem;
          color: #dc2626;
        }

        .ctc-input {
          display: flex;
          gap: 12px;
          padding: 12px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.5);
          align-items: flex-end;
        }

        .ctc-input textarea {
          flex: 1;
          resize: none;
          border: none;
          background: transparent;
          font-size: 0.9rem;
          color: #0f172a;
          max-height: 120px;
        }

        .ctc-input textarea:focus {
          outline: none;
        }

        .ctc-input button {
          min-width: 92px;
          border: none;
          border-radius: 14px;
          padding: 10px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, var(--ctc-brand) 0%, #06c089 100%);
          box-shadow: 0 8px 18px rgba(0, 181, 120, 0.35);
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.2s ease;
        }

        .ctc-input button:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0, 181, 120, 0.4);
        }

        .ctc-input button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
          transform: none;
          box-shadow: none;
        }

        @media (max-width: 640px) {
          .ctc-panel {
            height: 520px;
            width: calc(100vw - 32px);
          }

          .ctc-widget-root {
            bottom: 16px;
            right: 16px;
          }
        }
      `}</style>
    </>
  )
}



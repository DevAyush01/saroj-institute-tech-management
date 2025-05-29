"use client"

import { useState, useEffect, useRef, useCallback } from "react"

// Simple icons as SVG components
const MessageCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const BotIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const GraduationCapIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  options?: string[]
  isTyping?: boolean
}

interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  response: string
  followUp?: string[]
}

const quickActions: QuickAction[] = [
  {
    id: "admission",
    label: "Admission Process",
    icon: <GraduationCapIcon />,
    response:
      "Here's the admission process at Saroj Educational Group:\n\n• Application forms available online at https://seglko.org/\n• Required documents: Academic transcripts, ID proof, passport-size photos\n• Entrance test may be required for some programs\n• Personal interview for certain courses\n• Admission decision within 2 weeks of application\n\nWould you like more details about any specific step?",
    followUp: ["Application Form", "Required Documents", "Entrance Test", "Fee Structure", "Scholarships"],
  },
  {
    id: "courses",
    label: "Our Courses",
    icon: <BookOpenIcon />,
    response:
      "Saroj Educational Group offers:\n\n📚 School Programs (Nursery to Class 12)\n📊 Professional Courses (CA, CS, CMA)\n🔬 Skill Development Programs\n🎓 Higher Education Guidance\n\nOur focus is on quality education with modern teaching methodologies. Which program interests you?",
    followUp: ["School Programs", "Professional Courses", "Skill Development", "Higher Education", "All Programs"],
  },
  {
    id: "contact",
    label: "Contact Us",
    icon: <PhoneIcon />,
    response:
      "Reach Saroj Educational Group at:\n\n📞 Phone: +977-1-4781964, 4781965\n📧 Email: info@seglko.org\n📍 Address: New Baneshwor, Kathmandu, Nepal\n🕒 Office Hours: Sun-Fri 9AM-5PM\n\nVisit our website: https://seglko.org/ for more details.",
    followUp: ["Location Map", "Email Inquiry", "Phone Support", "Social Media", "Visit Campus"],
  },
  {
    id: "about",
    label: "About SEGL",
    icon: <InfoIcon />,
    response:
      "Saroj Educational Group (SEGL) is a leading educational institution in Nepal established in 2058 B.S.\n\nOur mission: To provide quality education and create responsible citizens\n\nKey features:\n• Experienced faculty\n• Modern facilities\n• Student-centered approach\n• Career-focused programs\n• Strong alumni network",
    followUp: ["History", "Mission & Vision", "Facilities", "Achievements", "Testimonials"],
  },
  {
    id: "facilities",
    label: "Facilities",
    icon: <UsersIcon />,
    response:
      "SEGL provides excellent facilities:\n\n🏫 Well-equipped classrooms\n📚 Library with extensive resources\n💻 Computer lab with modern technology\n🎯 Career counseling services\n🚌 Transportation facilities (for some programs)\n🍲 Cafeteria with healthy food options\n\nWould you like details about any specific facility?",
    followUp: ["Library", "Computer Lab", "Transportation", "Cafeteria", "Sports"],
  },
  {
    id: "faq",
    label: "FAQs",
    icon: <InfoIcon />,
    response:
      "Frequently Asked Questions:\n\n❓ What are the school hours?\n→ Typically 9:30 AM to 4:00 PM (varies by program)\n\n❓ Is transportation available?\n→ Yes, for certain programs (contact for routes)\n\n❓ Are scholarships available?\n→ Yes, based on merit and need\n\nWhich question would you like more details about?",
    followUp: ["School Hours", "Fee Payment", "Uniform Policy", "Exam Schedule", "More Questions"],
  },
]

const predefinedResponses: Record<string, string> = {
  hello: "Namaste! Welcome to Saroj Educational Group's chatbot. How can I assist you today?",
  hi: "Namaste! How can I help you with information about SEGL?",
  help: "I can help with:\n• Admission process\n• Our courses\n• Contact information\n• About SEGL\n• Facilities\n• Frequently asked questions\n\nWhat would you like to know?",
  hours: "Our office hours are:\n🕒 Sunday - Friday: 9:00 AM - 5:00 PM\n🕒 Saturday: Closed\n\nSchool hours may vary by program.",
  location: "📍 We're located at:\nNew Baneshwor, Kathmandu, Nepal\n\nYou can find us near the Baneshwor intersection. Would you like a map link?",
  thanks: "You're welcome! Feel free to ask if you have more questions.",
  "thank you": "You're welcome! Feel free to ask if you have more questions.",
  bye: "Dhanyabad for contacting Saroj Educational Group! Have a great day!",
  goodbye: "Dhanyabad! We're always here to support your educational journey.",
  "how are you": "I'm doing well, thank you! Ready to help you with information about SEGL.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Namaste! 🙏 Welcome to Saroj Educational Group (SEGL). I'm here to help you with:\n\n• Admissions & Enrollment\n• Our Programs & Courses\n• Campus Facilities\n• General Information\n\nHow may I assist you today?",
          ["Admission Process", "Our Courses", "Contact Us", "About SEGL"],
        )
      }, 500)
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const addBotMessage = (text: string, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
      options,
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickAction = (actionId: string) => {
    const action = quickActions.find((a) => a.id === actionId)
    if (action) {
      addUserMessage(action.label)
      simulateTyping()
      setTimeout(() => {
        addBotMessage(action.response, action.followUp)
      }, 1500)
    }
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)
    simulateTyping()

    setTimeout(() => {
      const lowerOption = option.toLowerCase()

      if (lowerOption.includes("admission") || lowerOption.includes("application")) {
        handleQuickAction("admission")
      } else if (
        lowerOption.includes("course") ||
        lowerOption.includes("program") ||
        lowerOption.includes("school")
      ) {
        handleQuickAction("courses")
      } else if (
        lowerOption.includes("contact") ||
        lowerOption.includes("phone") ||
        lowerOption.includes("email") ||
        lowerOption.includes("location")
      ) {
        handleQuickAction("contact")
      } else if (lowerOption.includes("about") || lowerOption.includes("segl")) {
        handleQuickAction("about")
      } else if (lowerOption.includes("facilit") || lowerOption.includes("lab") || lowerOption.includes("library")) {
        handleQuickAction("facilities")
      } else if (lowerOption.includes("faq") || lowerOption.includes("question")) {
        handleQuickAction("faq")
      } else {
        addBotMessage(
          `For more information about "${option}", please visit our website https://seglko.org/ or contact us directly. Is there anything specific you'd like to know?`,
          ["Contact Information", "Website", "More Help"],
        )
      }
    }, 1500)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() && !isSending) {
      setIsSending(true)
      addUserMessage(inputValue)
      const userInput = inputValue.toLowerCase().trim()
      setInputValue("")

      simulateTyping()

      setTimeout(() => {
        const response = predefinedResponses[userInput]
        if (response) {
          addBotMessage(response, ["Admission Process", "Our Courses", "Contact Us"])
        } else if (userInput.includes("admission") || userInput.includes("apply")) {
          handleQuickAction("admission")
        } else if (
          userInput.includes("course") ||
          userInput.includes("program") ||
          userInput.includes("school")
        ) {
          handleQuickAction("courses")
        } else if (
          userInput.includes("contact") ||
          userInput.includes("phone") ||
          userInput.includes("email") ||
          userInput.includes("address") ||
          userInput.includes("location")
        ) {
          handleQuickAction("contact")
        } else if (userInput.includes("about") || userInput.includes("segl")) {
          handleQuickAction("about")
        } else if (userInput.includes("facilit") || userInput.includes("lab") || userInput.includes("library")) {
          handleQuickAction("facilities")
        } else if (userInput.includes("faq") || userInput.includes("question")) {
          handleQuickAction("faq")
        } else {
          addBotMessage(
            "I want to make sure I understand your question. Could you rephrase it or choose from these common topics?",
            ["Admission Process", "Our Courses", "Contact Us", "About SEGL", "FAQs"],
          )
        }
        setIsSending(false)
      }, 1500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-[#2c5c9c] hover:bg-[#1e3f6f] shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center text-white animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircleIcon />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-96 h-[32rem] shadow-xl border-0 bg-white rounded-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2c5c9c] to-[#1e3f6f] text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <BotIcon />
                </div>
                <div>
                  <h3 className="text-md font-bold">SEGL Assistant</h3>
                  <p className="text-xs opacity-90 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <XIcon />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-sm mt-8">
                <div className="w-10 h-10 mx-auto mb-2 text-[#2c5c9c] rounded-full bg-blue-100 flex items-center justify-center">
                  <BotIcon />
                </div>
                <p>Starting conversation...</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[85%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                  <div
                    className={`flex items-start space-x-2 ${
                      message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        message.sender === "user" ? "bg-[#2c5c9c]" : "bg-gray-300"
                      }`}
                    >
                      {message.sender === "user" ? <UserIcon /> : <BotIcon />}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-[#2c5c9c] text-white"
                          : "bg-white text-gray-800 border border-gray-200"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>

                  {message.sender === "bot" && message.options && (
                    <div className="mt-2 flex flex-wrap">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="text-xs mr-2 mb-2 px-3 py-1 border border-blue-200 text-[#2c5c9c] hover:bg-blue-50 rounded-full transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <BotIcon />
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 0 && (
            <div className="p-4 border-t bg-gray-50">
              <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleQuickAction(action.id)}
                    className="text-xs h-8 flex items-center justify-center space-x-1 border border-blue-200 text-[#2c5c9c] hover:bg-blue-50 rounded px-2 transition-colors"
                  >
                    {action.icon}
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 border-t bg-white">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2c5c9c] focus:border-transparent"
                aria-label="Type your message"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isSending}
                className={`${
                  inputValue.trim() ? "bg-[#2c5c9c] hover:bg-[#1e3f6f]" : "bg-gray-300 cursor-not-allowed"
                } text-white px-4 py-2 rounded-full transition-colors flex items-center justify-center`}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
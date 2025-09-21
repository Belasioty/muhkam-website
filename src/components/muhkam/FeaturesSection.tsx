import React from 'react';
import { FeatureCard } from './FeatureCard';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Control Assessment",
      description: "Traditional audits are slow and fragmented. With Muhkam, control assessments become instant and intelligent. Our AI agents use LLM-powered contextual reasoning guided by predefined instructions to deliver real-time insights and reports — helping you spot risks faster, prioritize actions, and stay compliant with ease.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/7fa2275f19e704fe398a6e60a3ae8e1ab65ac2d6?placeholderIfAbsent=true",
      checklistItems: [
        {
          text: "LLM-Based Contextual Reasoning",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/ba8b4a22fbbde08183bfcf66efa99d461e4d5244?placeholderIfAbsent=true"
        },
        {
          text: "Real-Time Findings & Agile Actions.",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/ba8b4a22fbbde08183bfcf66efa99d461e4d5244?placeholderIfAbsent=true"
        },
        {
          text: "Regulator Ready Reports.",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/ba8b4a22fbbde08183bfcf66efa99d461e4d5244?placeholderIfAbsent=true"
        }
      ],
      buttonText: undefined,
      imagePosition: 'right' as const
    },
    {
      title: "Prompt-Visualize-Act",
      description: "Move beyond periodic checks with continuous compliance intelligence. Muhkam combines AI and knowledge graphs to dynamically map policies, controls, and risks — empowering you to instantly detect gaps, visualize impact, and act before issues escalate.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/16164842fc05d89de9bf0daad2fb7d49549e5a4b?placeholderIfAbsent=true",
      checklistItems: [
        {
          text: "AI GRC Assistant",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/fd28192a8c5952b9a2516b057fd14485d2eab74f?placeholderIfAbsent=true"
        },
        {
          text: "Not only answer, visualize the context of your prompt",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/fd28192a8c5952b9a2516b057fd14485d2eab74f?placeholderIfAbsent=true"
        },
        {
          text: "Comprehensive coverage and continuous monitoring",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/fd28192a8c5952b9a2516b057fd14485d2eab74f?placeholderIfAbsent=true"
        }
      ],
      buttonText: undefined,
      imagePosition: 'left' as const
    },
    {
      title: "AI-Powered Audit Planning",
      description: "Traditional audits are time-consuming and fragmented. With Muhkam, you can start your audit planning instantly, leverage intelligent AI agents, and get real-time insights and reports to quickly identify risks, prioritize actions, and ensure compliance.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/f3a528899484805201169634fe9345e3d99d59e8?placeholderIfAbsent=true",
      checklistItems: [
        {
          text: "Faster Preparation",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/ba8b4a22fbbde08183bfcf66efa99d461e4d5244?placeholderIfAbsent=true"
        },
        {
          text: "Real-Time Findings & Agile Actions",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/ba8b4a22fbbde08183bfcf66efa99d461e4d5244?placeholderIfAbsent=true"
        },
        {
          text: "Dynamic & Adaptive",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/ba8b4a22fbbde08183bfcf66efa99d461e4d5244?placeholderIfAbsent=true"
        }
      ],
      buttonText: undefined,
      imagePosition: 'right' as const
    },
    {
      title: "AI-Powered GRC",
      description: "Our AI-Powered GRC modules transforms GRC from a static checklist into a dynamic, intelligent framework. By centralizing policies, procedures, authorization matrices, and committee decisions into one platform, it enables organizations to streamline decision-making, ensure accountability, and maintain full transparency. AI insights link governance data to risks, controls, and regulations within the Universe, giving leaders real-time visibility into how governance choices impact compliance and business performance. This turns governance into a living program—actionable, explainable, and future-ready.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/5538dab781983fa76db2060f5f8f98627eb23f7c?placeholderIfAbsent=true",
      checklistItems: [
        {
          text: "Efficiency & Cost Savings",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/fd28192a8c5952b9a2516b057fd14485d2eab74f?placeholderIfAbsent=true"
        },
        {
          text: "Accuracy & Consistency",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/fd28192a8c5952b9a2516b057fd14485d2eab74f?placeholderIfAbsent=true"
        },
        {
          text: "Comprehensive Coverage",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/a118cdfc75dc760b10c99582291ca32fb3579e66?placeholderIfAbsent=true"
        }
      ],
      buttonText: undefined,
      imagePosition: 'left' as const
    },
    {
      title: "AI-Powered GRC Universe",
      description: "Bridge the communication gap between different teams and departments with our AI-Powered GRC Universe. Our intelligent system extracts, populates, and links entities across your organization into a unified knowledge graph, creating a common language for governance, risk, compliance and audit teams. AI automatically identifies relationships between policies, controls, risks, and processes, ensuring every team speaks the same GRC language and works from the same source of truth.",
      imageSrc: "/src/assets/grc-universe-interface.png",
      checklistItems: [
        {
          text: "Unified Language Across Teams",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/fd28192a8c5952b9a2516b057fd14485d2eab74f?placeholderIfAbsent=true"
        },
        {
          text: "AI-Powered Entity Extraction & Linking",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/fd28192a8c5952b9a2516b057fd14485d2eab74f?placeholderIfAbsent=true"
        },
        {
          text: "Knowledge Graph Universe",
          iconSrc: "https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/a118cdfc75dc760b10c99582291ca32fb3579e66?placeholderIfAbsent=true"
        }
      ],
      buttonText: undefined,
      imagePosition: 'right' as const
    }
  ];

  return (
    <section id="overview" className="bg-background flex w-full flex-col overflow-hidden items-center py-24 max-md:max-w-full">
      <div className="w-[1280px] max-w-full text-center px-8 max-md:px-5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="w-[768px] max-w-full">
            <div className="flex w-full flex-col font-semibold max-md:max-w-full">
              <div className="text-base bg-clip-text max-md:max-w-full">
                Overview
              </div>
              <div className="text-blue-600 text-4xl leading-[44px] tracking-[-0.72px] mt-3 max-md:max-w-full">
                Streamlining Audit, Governance, and Compliance with Intelligence
              </div>
            </div>
            <div className="text-[#535862] text-xl font-normal leading-[30px] mt-5 max-md:max-w-full">
              Stop juggling disconnected tools and data sources.
              <br />
              Our AI-native platform unifies Audit, Governance, Compliance, and Risk into one intelligent system — giving you continuous compliance, trusted audits, and regulator-ready reporting.
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-4 animate-fade-in hover-scale transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10"></div>
        <img
          src="https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/48fa52a493ac4a98d2802c00b947739a6ac81f59?placeholderIfAbsent=true"
          className="relative z-10 aspect-[1.77] object-contain w-[714px] max-w-full rounded-2xl"
          alt="Muhkam Platform Dashboard"
        />
      </div>
      
      <div className="w-[1280px] max-w-full text-center mt-16 px-8 max-md:mt-10 max-md:px-5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="w-[768px] max-w-full">
            <div className="flex w-full flex-col text-4xl font-semibold tracking-[-0.72px] leading-none max-md:max-w-full">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 max-md:max-w-full">
                <span style={{ fontWeight: 400 }}>
                  Prompt → Visualize → Act
                </span>
              </div>
            </div>
            <div className="text-[#333333] text-xl font-normal leading-[30px] mt-5 max-md:max-w-full">
              "In governance, compliance, and audit, an answer alone is never enough. What matters is the context — how that answer relates to policies, risks, and systems. That's what{" "}
              <span style={{ fontWeight: 700, color: "rgba(37,99,235,1)" }}>
                MUHKAM AI
              </span>{" "}
              Models generate and visualize"
            </div>
          </div>
        </div>
      </div>

      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          checklistItems={feature.checklistItems}
          buttonText={feature.buttonText}
          imagePosition={feature.imagePosition}
        />
      ))}
    </section>
  );
};

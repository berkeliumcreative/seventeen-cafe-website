// @ts-nocheck
"use client";

import content from "../data/content.json";
import { HeroImageBg } from "@/components/ui/hero-image-bg";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { IconCard } from "@/components/ui/icon-card";
import { PhotoStrip } from "@/components/ui/photo-strip";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { StatsSection } from "@/components/ui/stats-section";
import { PhoneCTA } from "@/components/ui/phone-cta";
import { FooterMinimal } from "@/components/ui/footer-minimal";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Coffee, GlassWater, Croissant, Sparkles } from "lucide-react";

const iconMap: Record<string, any> = { Coffee, GlassWater, Croissant, Sparkles };

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroImageBg
        heading={content.hero.heading}
        subheading={content.hero.subheading}
        ctaText={content.hero.ctaText}
        ctaLink={content.hero.ctaLink}
        backgroundImage={content.hero.backgroundImage}
      />

      <StatsSection
        stats={[
          { label: "Rating", value: 4.6 },
          { label: "Happy Customers", value: 53 },
          { label: "Coffee Drinks", value: 20 },
          { label: "Years Brewing", value: 3 },
        ]}
      />

      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <BlurFade delay={0.1}>
          <SectionHeading title={content.about.heading} />
          {content.about.paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </BlurFade>
      </section>

      <WaveDivider />

      <section id="menu" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading title="What We Serve" subtitle="Crafted with care, served with a smile" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {content.services.map((item: any, i: number) => {
            const Icon = iconMap[item.icon] || Coffee;
            return (
              <BlurFade key={i} delay={0.1 * i}>
                <IconCard
                  icon={<Icon className="w-6 h-6" />}
                  title={item.title}
                  description={item.description}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>

      <PhotoStrip images={[
        "/images/photo-1.jpg",
        "/images/photo-2.jpg",
        "/images/photo-3.jpg",
        "/images/photo-4.jpg",
      ]} />

      <section className="py-20 md:py-28">
        <SectionHeading title="What People Are Saying" />
        <TestimonialMarquee
          testimonials={content.reviews?.map((r: any) => ({
            quote: r.text,
            author: r.name,
            rating: r.rating,
          })) || []}
        />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading title="Visit Us" />
          <HoursTable hours={content.contact.hours} />
          <p className="text-muted-foreground mt-4">{content.contact.address}</p>
        </div>
        <MapEmbed query={content.contact.mapEmbedQuery} />
      </section>

      <PhoneCTA
        heading="Ready for Great Coffee?"
        subheading="Call ahead or just walk in — we would love to see you."
        phone={content.contact.phone}
      />

      <FooterMinimal businessName={content.businessName} />
    </main>
  );
}

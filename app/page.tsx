// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { HeroImageBg } from "@/components/ui/hero-image-bg";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { StatsSection } from "@/components/ui/stats-section";
import { PhoneCTA } from "@/components/ui/phone-cta";
import { FooterMinimal } from "@/components/ui/footer-minimal";
import { Coffee, GlassWater, Croissant, Sparkles } from "lucide-react";

const iconMap: Record<string, any> = { Coffee, GlassWater, Croissant, Sparkles };

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MinimalNav
        logo={<span><span style={{ color: "var(--theme-accent)" }}>Seventeen</span> Cafe</span>}
        items={[
          { label: "About", href: "#about" },
          { label: "Menu", href: "#menu" },
          { label: "Gallery", href: "#gallery" },
          { label: "Reviews", href: "#reviews" },
          { label: "Hours", href: "#hours" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="📞 Call Now"
        ctaHref={"tel:" + content.contact.phone}
      />

      <HeroImageBg heading={content.hero.heading} subheading={content.hero.subheading} ctaText={content.hero.ctaText} ctaHref={content.hero.ctaLink} imageSrc={content.hero.backgroundImage} />

      <StatsSection
        stats={[
          { label: "Rating", value: 4.6 },
          { label: "Customers", value: 53 },
          { label: "Drinks on Menu", value: 20 },
          { label: "Years Open", value: 3 },
        ]}
      />

      <section id="about" className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <BlurFade delay={0.1}>
          <SectionHeading title={content.about.heading} />
          {content.about.paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </BlurFade>
      </section>

      <section id="menu" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading title="What We Serve" subtitle="Handcrafted drinks and fresh bites" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {content.services.map((item: any, i: number) => {
            const Icon = iconMap[item.icon] || Coffee;
            return (
              <BlurFade key={i} delay={0.1 * i}>
                <Card className="bg-card border-border">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "var(--theme-accent)", opacity: 0.15 }}>
                      <Icon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {content.gallery && (
        <section id="gallery" className="py-16">
          <SectionHeading title={content.gallery.heading} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 mt-8">
            {content.gallery.images.map((img: any, i: number) => (
              <BlurFade key={i} delay={0.1 * i}>
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover rounded-lg" />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      <section id="reviews" className="py-20 md:py-28 max-w-6xl mx-auto px-6">
        <SectionHeading title="What Our Customers Say" />
        <TestimonialGrid
          testimonials={content.reviews?.map((r: any) => ({
            quote: r.text,
            author: r.name,
            role: "Coffee Lover",
            rating: r.rating,
          })) || []}
          columns={3}
        />
      </section>

      <PhoneCTA phone={content.contact.phone} heading="Questions? Give Us a Call" />

      <section id="hours" className="max-w-5xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div id="contact">
          <SectionHeading title="Visit Us" />
          <HoursTable hours={content.contact.hours} />
          <p className="text-muted-foreground mt-6">{content.contact.address}</p>
          <p className="mt-1">
            <a href={"tel:" + content.contact.phone} style={{ color: "var(--theme-accent)" }}>
              {content.contact.phone}
            </a>
          </p>
        </div>
        <MapEmbed query={content.contact.mapEmbedQuery} />
      </section>

      <FooterMinimal businessName={content.businessName} />
    </main>
  );
}

import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container max-w-3xl mx-auto px-6 py-6">
          <h2 className="text-xl font-serif font-bold text-foreground">Announcement</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-3xl mx-auto px-6 py-12">
        <article className="space-y-8">
          {/* Date */}
          <time className="text-sm text-muted-foreground uppercase tracking-wider">
            November 6, 2025
          </time>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
            Important Announcement
          </h1>

          <Separator className="my-8" />

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              We're excited to share some significant news with our community. After careful consideration 
              and planning, we're making changes that will help us better serve you and achieve our shared goals.
            </p>

            <p className="text-foreground leading-relaxed">
              This announcement marks an important milestone in our journey. We've listened to your feedback, 
              analyzed our progress, and made thoughtful decisions about the path forward.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">
              What This Means
            </h2>

            <p className="text-foreground leading-relaxed">
              The changes we're implementing will take effect immediately. We're committed to ensuring 
              a smooth transition and maintaining the quality of service you've come to expect from us.
            </p>

            <ul className="space-y-3 text-foreground list-disc pl-6">
              <li>Enhanced focus on core features and improvements</li>
              <li>Streamlined processes for better efficiency</li>
              <li>Continued commitment to our community values</li>
              <li>Clear communication throughout the transition</li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">
              Next Steps
            </h2>

            <p className="text-foreground leading-relaxed">
              We understand you may have questions, and we're here to address them. Our team is available 
              to provide additional information and support as needed.
            </p>

            <p className="text-foreground leading-relaxed">
              Thank you for your continued trust and support. Together, we're building something meaningful, 
              and this announcement is an important part of that journey.
            </p>
          </div>

          <Separator className="my-12" />

          {/* Footer note */}
          <div className="bg-muted/50 p-6 rounded border border-border">
            <p className="text-sm text-muted-foreground">
              For questions or additional information, please reach out to our team. 
              We're committed to transparency and open communication.
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container max-w-3xl mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 — Built with care and attention to detail
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

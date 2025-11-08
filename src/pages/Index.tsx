import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container max-w-4xl mx-auto py-12 px-6">
        <article className="space-y-8">
          {/* Title */}
          <h1 className="text-xl md:text-4xl font-bold text-foreground leading-tight">
            Applications Open for a Weekend Exploring Civilisational Sanity
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="bg-stone-700 text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="container max-w-4xl mx-auto px-6 py-6 flex gap-6">
                <p className="text-lg leading-relaxed">
                  <img
                    src="We shall overcome, 1966, orage.jpg"
                    alt="Descriptive alt text"
                    className="w-96 h-auto float-right ml-6 mb-2"
                  />

                  <b><a href="https://docs.google.com/forms/d/e/1FAIpQLSc-up74WXFTDATzNXbvT80VyjQAHxRFwPrIIzhq4xgtZV_3FQ/viewform">Apply</a></b> by <b>November 15th</b> to 
                  explore civilizational sanity with us! 
                  We'll tackle questions like: How can we make the social structures 
                  around us more human-friendly? What plays into low-sanity structures? 
                  How can we protect ourselves from corrosive dynamics or mitigate their damage? 
                  The event takes place in <b>Mittelhof</b>, Rhineland-Palatinate, Germany, from <b>December 12th to 15th</b>, 2025.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              What is the event about?
            </h2>

            <p className="text-foreground leading-relaxed">
              Many of us have experiences with friendships, romantic partnerships, friend groups and communities 
              that are mutually supportive, nourishing and empowering. At the same time, we also live with broken-up 
              friendships or families, bad experiences in educational and professional contexts, and communities 
              that split up or fell apart. On a macro level, most of humanity is embedded in private institutions, 
              governing structures and international networks that often don't adequately address human needs.
            </p>
              
            <p className="text-foreground leading-relaxed">
              These observations are important to us because we care about social environments that support cooperation, 
              truth-seeking and well-being. We want event participants to gain a clearer understanding of how 
              dynamics leading to dysfunction show up in our lives and how to raise the civilisational sanity of 
              the social structures we're part of.
            </p>

            <p className="text-foreground leading-relaxed">
              We use the term <i>civilisational sanity</i> here to refer to human-friendly societal designs. 
              That might include physical structures, shared narratives and values, norms, customs, laws and 
              other mechanisms supporting cooperation and high-quality decision-making that enable human (and non-human) 
              flourishing. A sane society is one in which humans are happy to partake. What exactly characterises sane structures 
              is up for debate, but we'd like to suggest the following heuristics: <sup><a href="#footnote-1">[1]</a></sup>
            </p>

            <ul className="space-y-1 text-foreground list-disc pl-6">
              <li><b>Benefit</b> – Members benefit appropriately from the social structure</li>
              <li><b>Freedom</b> – Members want to be part of the structure and are free to leave</li>
              <li><b>Resilience</b> – The structure's existence is stable for as long as it provides value to its members</li>
              <li><b>Responsiveness</b> – The structure is responsive to feedback loops, like new information, and to how members want to shape it</li>
              <li><b>Peacefulness</b> – Does generally not harm outsiders</li>
            </ul>

            <p className="text-foreground leading-relaxed">
              Using these heuristics, we can analyse dynamics that support sanity. Some possible examples are a search for fair compromises 
              and Pareto improvements, accountability mechanisms, establishing feedback loops, transmission of tacit knowledge, 
              and increasing members' option space. 
              We can also examine corrosive dynamics that lead to intellectual or physical isolation, deteriorating epistemics 
              and well-being. That can include groupthink, <a href="https://www.lesswrong.com/posts/ZQG9cwKbct2LtmL3p/evaporative-cooling-of-group-beliefs">evaporative cooling</a>, 
              gatekeeping resources, cult of personality, 
              controlling information flow, diffusion of responsibility, <a href="https://www.lesswrong.com/posts/bQ6zpf6buWgP939ov/frame-control">frame control</a> and status games.
            </p>

            <p className="text-foreground leading-relaxed">
              The three central themes that we'll be exploring during the event are:
            </p>

            <ul className="space-y-1 text-foreground list-decimal pl-6">
              <li>How can we analyse the civilisational sanity of structures we're embedded in?</li>
              <li>How do social structures develop sanity and stay sane? How can we influence that? 
                What guardrails can protect from corrosive effects?</li>
              <li>Sometimes, increasing the sanity of a structure is not feasible. 
                Is it possible to behave in ways that can partially insulate you from the damage and 
                mitigate the negative effects on your own well-being and epistemics?</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              What will the activities look like?
            </h2>

            <p className="text-foreground leading-relaxed">
              This event focuses on pragmatic approaches. We will look at case studies that display how civilisational sanity 
              as well as civilisational insanity are proliferating, and share our experiences in small group discussions. 
              For example, we might discuss our successful (and less successful) attempts to increase sanity. 
              We will experiment with elements like games and role play.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Who are we?
            </h2>

            <p className="text-foreground leading-relaxed">
              This is an independently run event, partially funded by <a href="https://epistea.org/">Epistea</a>. 
              Team members work on this event in their personal capacity.
            </p>

            <p className="text-foreground leading-relaxed">
              <b>Yulia Ponomarenko</b> is the main organiser of the event. 
              A programmer by day and an anthropologist by night, she has previously worked as an instructor for youth camps on rationality and epistemics. 
              She did <a href="https://www.lesswrong.com/posts/yXLEcd9eixWucKGHg/the-seeker-s-game-vignettes-from-the-bay">research</a> on community dynamics 
              in the Bay and has since extended her work, 
              among other things as an <a href="https://www.lesswrong.com/posts/qHxW26uouWxk6SK4e/update-deadline-extended-to-july-24-new-wind-in-rationality">Epistea resident</a> in 2023.
            </p>

            <p className="text-foreground leading-relaxed">
              <b>Jonte Hünerbein</b> designed a social deduction game about group rationality failures. 
              He is deeply interested in the ideological failures of the totalitarian mass 
              movements of the 20th century and the manipulation tactics of religious and political cults. 
              He investigates fringe ideological online groups for fun. 
            </p>

            <p className="text-foreground leading-relaxed">
              <b>Ashe Vazquez</b> has a background in math and plays Go competitively at the top European level. 
              Their <a href="https://tuesdaybornwhale.github.io/posts/">other work</a> includes thinking about the culture 
              and philosophy of mathematicians and Go players. 
              They are interested in abstractly modelling real things, card games, and learning about deception.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Who are you?
            </h2>

            <p className="text-foreground leading-relaxed">
              You'll be a good fit for this event if you have opinions about the social environments you 
              are part of and want to impact them. You may have observed local examples of low civilisational sanity 
              and have ideas about what differentiates these structures from others that are more sane. 
              Ideally, you are looking to experiment with influencing your social surroundings for the better. 
              You could be thinking about these problems in a professional capacity, for example as a sociologist, 
              but you could also be engaging with them on a personal level. 
              In fact, we are looking for people with diverse backgrounds, 
              so we can exchange experiences relating to civilisational sanity from a wide range of perspectives.
            </p>

            <p className="text-foreground leading-relaxed">
              While there will be plenty of time to rest and sleep, 
              the event will still demand your full attention, so you shouldn't 
              expect to be able to work on other things for its duration.
            </p>

            <p className="text-foreground leading-relaxed">
              We don't accept applicants under the age of 18.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Logistics
            </h2>

            <h2 className="text-xl font-bold text-foreground mt-12">
              When?
            </h2>

            <p className="text-foreground leading-relaxed">
              Arrival starting afternoon 12th December 2025, departure on 15th December 2025 in the morning
            </p>

            <h2 className="text-xl font-bold text-foreground mt-12">
              Where?
            </h2>

            <p className="text-foreground leading-relaxed">
              In an idyllic villa in Mittelhof, Rhineland-Palatinate, Germany. 
              Depending on participants' preferences, there'll be a 
              meeting point in either Cologne or Düsseldorf from which a shuttle leaves for the venue.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-12">
              How many participants? 
            </h2>

            <p className="text-foreground leading-relaxed">
              We expect to accept 10-12 participants.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-12">
              What is the cost of the event?
            </h2>

            <p className="text-foreground leading-relaxed">
             There's a participation fee of 100 euros per participant.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-12">
              What do we cover?
            </h2>

            <p className="text-foreground leading-relaxed">
              We will provide <b>vegan</b> meals for the duration of the event and cover 
              accommodation as well as a shuttle from a meeting point to the venue and back. 
              We will not cover insurance or other travel expenses.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-12">
              How to apply?
            </h2>

            <p className="text-foreground leading-relaxed">
              Fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-up74WXFTDATzNXbvT80VyjQAHxRFwPrIIzhq4xgtZV_3FQ/viewform?usp=dialog">application form</a> by November 15th, 2025. 
              We may reach out to some applicants for a follow-up interview. 
              Applications will be evaluated on a rolling basis.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-12">
              More questions?
            </h2>

            <p className="text-foreground leading-relaxed">
              If you have any questions or suggestions about the application, 
              the venue or our weekend plans, you can reach us at
              at <a href="mailto:sanity.weekend.info@gmail.com">sanity.weekend.info@gmail.com</a>
            </p>
          </div>


          {/* Footer note */}
          <div className="bg-muted/50 p-6">
            <p id="footnote-1" className="text-sm text-muted-foreground">
              [1] Caveats apply for all of our heuristics, e.g. peacefulness would be limited by self-defence
            </p>
          </div>

        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container max-w-3xl mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center">
            Easter Egg!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import aws from "@/assets/1.png";
import oracle from "@/assets/2.png";
import ibm from "@/assets/3.png";
import google from "@/assets/4.png";

const badges = [
  {
    title: "AWS Cloud Foundations",
    platform: "Amazon Web Services",
    image: aws,
  },
  {
    title: "Oracle Cloud Infrastructure",
    platform: "Oracle",
    image: oracle,
  },
  {
    title: "Generative AI Fundamentals",
    platform: "IBM SkillsBuild",
    image: ibm,
  },
  {
    title: "Google Cloud Digital Leader",
    platform: "Google Cloud",
    image: google,
  },
];

const BadgesSection = () => {
  return (
    <section id="badges" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Badges</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* BADGES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="w-[200px] bg-card border border-border rounded-xl p-5 text-center hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />

              <h3 className="font-semibold text-sm">
                {badge.title}
              </h3>

              <p className="text-xs text-muted-foreground mt-1">
                {badge.platform}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;

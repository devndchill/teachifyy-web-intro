import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCarousel from "@/components/resources/ResourceCarousel";
import QuickBrowse from "@/components/resources/QuickBrowse";
import { Resource } from "@/components/resources/ResourceCarousel";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

// ─── Trending ────────────────────────────────────────────────────────────────
const trendingResources: Resource[] = [
  {
    id: "t1",
    title: "Warli Art on Black Paper",
    description:
      "Let them paint their own scene using only these basic shapes.",
    ageGroup: "4-7",
    thumbnail:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "t2",
    title: "Textured Wall Rubbing",
    description:
      "Press paper onto rough walls, woven mats (khatal), tree bark, brick surfaces, and fabric.",
    ageGroup: "2-4",
    thumbnail:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "t3",
    title: "Warli Art on Black Paper",
    description:
      "Let them paint their own scene using only these basic shapes.",
    ageGroup: "4-7",
    thumbnail:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "t4",
    title: "Textured Wall Rubbing",
    description:
      "Press paper onto rough walls, woven mats (khatal), tree bark, brick surfaces, and fabric.",
    ageGroup: "2-4",
    thumbnail:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "t5",
    title: "Leaf Print Collage",
    description:
      "Collect leaves from the garden and create beautiful nature print art.",
    ageGroup: "3-6",
    thumbnail:
      "https://images.unsplash.com/photo-1490750967868-88df5691166a?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "t6",
    title: "Origami Animals",
    description:
      "Step-by-step folding instructions for popular origami animals.",
    ageGroup: "6-9",
    thumbnail:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
];

// ─── Quick Browse resources (all categories) ─────────────────────────────────
const allResources: Resource[] = [
  // Sensory and Application
  {
    id: "s1",
    title: "Textured Wall Rubbing",
    description:
      "Press paper onto rough walls, woven mats (khatal), tree bark, brick surfaces, and fabric.",
    ageGroup: "2-4",
    thumbnail:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "s2",
    title: "Sand Tracing Letters",
    description:
      "Trace letters and shapes in a tray of fine sand to build sensory memory.",
    ageGroup: "3-5",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "s3",
    title: "Water Bead Play",
    description:
      "Explore textures and fine motor skills with colourful water beads.",
    ageGroup: "2-5",
    thumbnail:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "s4",
    title: "Clay Pinch Pots",
    description:
      "Simple hand-building technique to create functional pottery pieces.",
    ageGroup: "4-7",
    thumbnail:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "s5",
    title: "Scented Playdough",
    description:
      "Make homemade playdough with natural scents like lavender and lemon.",
    ageGroup: "3-6",
    thumbnail:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "s6",
    title: "Ice Excavation",
    description:
      "Freeze small toys in ice and have children 'excavate' them using warm water.",
    ageGroup: "4-6",
    thumbnail:
      "https://images.unsplash.com/photo-1551609189-eba79b369ec2?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "s7",
    title: "Color Sorting Rice",
    description:
      "Dry rice dyed with food coloring for sorting and scooping activities.",
    ageGroup: "2-5",
    thumbnail:
      "https://images.unsplash.com/photo-1584285418504-0055d2183fa9?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  {
    id: "s8",
    title: "Bubble Foam Bath",
    description:
      "Whisk soap and water to create thick, mountain-like bubble foam.",
    ageGroup: "3-7",
    thumbnail:
      "https://images.unsplash.com/photo-1532635042-a6f6bd475f30?w=400&q=80",
    pdfUrl: "#",
    category: "Sensory and Application",
  },
  // Art and Creativity
  {
    id: "a1",
    title: "Warli Art on Black Paper",
    description:
      "Let them paint their own scene using only these basic shapes.",
    ageGroup: "4-7",
    thumbnail:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "a2",
    title: "Finger Painting Fun",
    description:
      "Explore colours and creativity with hands directly on the canvas.",
    ageGroup: "2-5",
    thumbnail:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "a3",
    title: "Leaf Print Collage",
    description:
      "Collect leaves from the garden and create beautiful nature print art.",
    ageGroup: "3-6",
    thumbnail:
      "https://images.unsplash.com/photo-1490750967868-88df5691166a?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "a4",
    title: "Tie & Dye Scarves",
    description:
      "Learn the traditional Indian tie & dye technique on small fabric squares.",
    ageGroup: "5-8",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "a5",
    title: "Mandalas with Pulses",
    description:
      "Create intricate patterns using different types of lentils and beans.",
    ageGroup: "6-9",
    thumbnail:
      "https://images.unsplash.com/photo-1620912189855-ee5e0e2489e8?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "a6",
    title: "Upcycled Robot Craft",
    description:
      "Build robots using cardboard boxes, bottle caps, and aluminum foil.",
    ageGroup: "5-10",
    thumbnail:
      "https://images.unsplash.com/photo-1535813540-d1823ed4ca8b?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "a7",
    title: "Nature Weaving",
    description: "Weave twigs, grass, and flowers into a cardboard frame loom.",
    ageGroup: "4-8",
    thumbnail:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  {
    id: "a8",
    title: "Drip Painting Art",
    description:
      "Create abstract masterpieces by dripping watery paint onto tilted paper.",
    ageGroup: "3-9",
    thumbnail:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80",
    pdfUrl: "#",
    category: "Art and Creativity",
  },
  // Language and Literacy
  {
    id: "l1",
    title: "Alphabet Flash Cards",
    description:
      "Colourful illustrated cards to introduce letters and phonics sounds.",
    ageGroup: "3-5",
    thumbnail:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
    pdfUrl: "#",
    category: "Language and Literacy",
  },
  {
    id: "l2",
    title: "Rhyming Word Pairs",
    description:
      "Match-the-pair activity sheets to reinforce phonological awareness.",
    ageGroup: "4-6",
    thumbnail:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
    pdfUrl: "#",
    category: "Language and Literacy",
  },
  {
    id: "l3",
    title: "Story Sequence Cards",
    description:
      "Four-panel picture cards that help children narrate stories in order.",
    ageGroup: "4-7",
    thumbnail:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    pdfUrl: "#",
    category: "Language and Literacy",
  },
  {
    id: "l4",
    title: "My Feelings Journal",
    description:
      "Simple drawing & writing prompts to help children express emotions.",
    ageGroup: "4-8",
    thumbnail:
      "https://images.unsplash.com/photo-1518726476-e3c3f6d02609?w=400&q=80",
    pdfUrl: "#",
    category: "Language and Literacy",
  },
  // Maths and logical Thinking
  {
    id: "m1",
    title: "Number Bond Mats",
    description: "Hands-on mats for exploring number bonds up to 10 and 20.",
    ageGroup: "4-6",
    thumbnail:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
    pdfUrl: "#",
    category: "Maths and logical Thinking",
  },
  {
    id: "m2",
    title: "Pattern Block Cards",
    description:
      "Design prompt cards to encourage logical and spatial thinking.",
    ageGroup: "3-6",
    thumbnail:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80",
    pdfUrl: "#",
    category: "Maths and logical Thinking",
  },
  {
    id: "m3",
    title: "Sorting & Classifying",
    description:
      "Object sorting worksheets to build early logic and reasoning.",
    ageGroup: "3-5",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    pdfUrl: "#",
    category: "Maths and logical Thinking",
  },
  // Movement and Gross Motor
  {
    id: "g1",
    title: "Obstacle Course Cards",
    description:
      "Printable activity cards to set up indoor/outdoor obstacle courses.",
    ageGroup: "3-7",
    thumbnail:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80",
    pdfUrl: "#",
    category: "Movement and Gross Motor",
  },
  {
    id: "g2",
    title: "Yoga for Kids",
    description:
      "Simple yoga poses illustrated with child-friendly characters.",
    ageGroup: "4-8",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    pdfUrl: "#",
    category: "Movement and Gross Motor",
  },
  {
    id: "g3",
    title: "Balance Beam Games",
    description: "Guided games using a balance beam to develop coordination.",
    ageGroup: "2-5",
    thumbnail:
      "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&q=80",
    pdfUrl: "#",
    category: "Movement and Gross Motor",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <ResourceHero />

      {/* New and Trending horizontal carousel */}
      <div className="pt-10">
        <ResourceCarousel
          title="New and Trending"
          resources={trendingResources}
        />
      </div>

      {/* Quick Browse with category filter + grouped sections */}
      <QuickBrowse resources={allResources} />
    </div>
  );
}

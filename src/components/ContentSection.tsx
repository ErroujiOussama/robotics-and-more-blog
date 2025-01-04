import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Cpu, 
  Users, 
  Video, 
  GraduationCap, 
  Newspaper 
} from "lucide-react";

const contents = [
  {
    title: "Courses",
    description: "Learn about robotics and AI through detailed courses on microcontrollers, AI applications, and essential software tools.",
    icon: BookOpen,
  },
  {
    title: "Projects",
    description: "Follow along as we build robots from scratch, covering all stages from mechanical design to final testing.",
    icon: Cpu,
  },
  {
    title: "Special Interviews",
    description: "Hear from experts and engineers as they share their academic and professional journeys.",
    icon: Users,
  },
  {
    title: "Vlogs",
    description: "Get a glimpse into the daily lives of our team members and their experiences at major seminars and forums.",
    icon: Video,
  },
  {
    title: "Opportunities",
    description: "Discover study abroad scholarships and internships in Europe and the USA.",
    icon: GraduationCap,
  },
  {
    title: "Latest Updates",
    description: "Stay informed about the newest advancements in robotics and AI.",
    icon: Newspaper,
  },
];

export const ContentSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Channel Content 🔥</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.map((content) => (
          <Card key={content.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <content.icon className="h-6 w-6 text-primary" />
                <CardTitle>{content.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{content.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
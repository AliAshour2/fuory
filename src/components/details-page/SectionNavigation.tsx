import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface Section {
  id: string;
  label: string;
  show: boolean;
}

interface SectionNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  sticky?: boolean;
}

export const SectionNavigation = ({
  sections,
  activeSection,
  onSectionChange,
  sticky = true
}: SectionNavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onSectionChange(sectionId);
    }
  };

  return (
    <nav className={cn(
      "bg-white border-b shadow-sm z-50",
      sticky && "sticky top-0"
    )}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          {sections.map((section, index) => (
            <div key={section.id} className="flex items-center">
              <Button
                variant={activeSection === section.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "whitespace-nowrap transition-colors",
                  activeSection === section.id
                    ? "bg-natures-teal text-white hover:bg-natures-teal/90"
                    : "hover:bg-natures-cream"
                )}
              >
                {section.label}
              </Button>
              {index < sections.length - 1 && (
                <ChevronDown className="h-4 w-4 mx-1 text-gray-400 rotate-[-90deg]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

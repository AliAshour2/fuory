
import { Card, CardContent } from "@/components/ui/card";
import type { StorageAdvice } from "@/types/product";
import { Thermometer, Store } from "lucide-react";

interface StorageAdviceSectionProps {
  storageAdvice: StorageAdvice;
}

export const StorageAdviceSection = ({ storageAdvice }: StorageAdviceSectionProps) => {
  return (
    <div className="bg-natures-purple py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Thermometer className="h-8 w-8 text-natures-purple" />
          </div>
          <h2 className="text-4xl font-bold text-white uppercase tracking-wide">
            Storage Advice
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Thermometer className="h-6 w-6 text-natures-lime" />
                <h3 className="text-xl font-semibold text-white">
                  Transport and Storage
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                {storageAdvice.transport}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Store className="h-6 w-6 text-natures-lime" />
                <h3 className="text-xl font-semibold text-white">
                  Shop Storage
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                {storageAdvice.shop}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

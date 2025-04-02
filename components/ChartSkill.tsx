"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "HTML", desktop: 90 },
  { month: "CSS", desktop: 92 },
  { month: "JAVASCRIPT", desktop: 86 },
  { month: "REACT", desktop: 80 },
  { month: "NEXT.JS", desktop: 89 },
  { month: "TAILWIND", desktop: 83 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(200, 100%, 60%)", // Biru terang
  },
} satisfies ChartConfig;

export default function ChartSkill() {
  return (
    <Card className="w-full h-full flex flex-col card-project">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-secondary">
          Skill Proficiency Overview
        </CardTitle>
        <CardDescription>
          A visual representation of my core programming competencies.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto w-full h-full">
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" radialLines={false} />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
                fill: "var(--color-desktop)",
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Continuously enhancing my expertise.{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Updated as of April 2025
        </div>
      </CardFooter>
    </Card>
  );
}

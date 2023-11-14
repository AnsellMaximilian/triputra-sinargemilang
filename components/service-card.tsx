import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  image: StaticImageData;
};

export default function ServiceCard({
  title,
  subtitle,
  description,
  image,
}: Props) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-0">
        <Image src={image} alt={title} className="w-full object-contain" />
      </CardContent>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end mt-auto">
        <Button>View</Button>
      </CardFooter>
    </Card>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex justify-center items-center h-screen">
    <Button
      onClick={handleNavigation}
      className="flex justify-center items-center"
    >
      Start
    </Button>
  </div>
  );
}

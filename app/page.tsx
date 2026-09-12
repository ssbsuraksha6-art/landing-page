import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { SystemArchitecture } from "@/components/sections/SystemArchitecture";
import { DocumentVerification } from "@/components/sections/DocumentVerification";
import { FaceVerification } from "@/components/sections/FaceVerification";
import { DocumentForensics } from "@/components/sections/DocumentForensics";
import { AnomalyDetection } from "@/components/sections/AnomalyDetection";
import { EvidenceFusion } from "@/components/sections/EvidenceFusion";
import { DataFlow } from "@/components/sections/DataFlow";
import { Deployment } from "@/components/sections/Deployment";
import { ImplementationStatus } from "@/components/sections/ImplementationStatus";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { WhyThisApproach } from "@/components/sections/WhyThisApproach";
import { Feasibility } from "@/components/sections/Feasibility";
import { Impact } from "@/components/sections/Impact";
import { MissionContext } from "@/components/sections/MissionContext";
import { ExploreQr } from "@/components/sections/ExploreQr";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SystemArchitecture />
        <DocumentVerification />
        <FaceVerification />
        <DocumentForensics />
        <AnomalyDetection />
        <EvidenceFusion />
        <DataFlow />
        <Deployment />
        <ImplementationStatus />
        <TechnologyStack />
        <WhyThisApproach />
        <Feasibility />
        <Impact />
        <MissionContext />
        <ExploreQr />
      </main>
      <Footer />
    </>
  );
}

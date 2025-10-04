import InteractiveDemo from "@/components/InteractiveDemo";

const InteractiveDemoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex pt-16">
        <div className="flex-1 p-6 lg:p-12">
          <InteractiveDemo />
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemoPage;

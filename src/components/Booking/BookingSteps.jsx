import { CheckCircle } from "lucide-react";

export function BookingSteps({ currentStep, steps }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded bg-primary/10">
          {/* <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jJgA0FsJK2bd2jB7jPXanRGWgeb49l.png"
            alt="Service Logo"
            className="h-10 w-10 rounded object-cover"
          /> */}
        </div>
        <div>
          <h2 className="font-semibold">Sppech Services</h2>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span className="text-yellow-400">★</span>
            <span>4.9 (255 reviews)</span>
          </div>
        </div>
      </div>

      <div className="relative space-y-4 pt-4">
        <div className="absolute left-[11px] top-[26px] h-[calc(100%-30px)] w-0.5 bg-border" />
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-3" ${
              currentStep !== step.id &&
              !step.completed &&
              "text-muted-foreground"
            }`}
          >
            <div
              className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border text-xs 
               ${
                 currentStep === step.id
                   ? "border-primary bg-primary text-primary-foreground"
                   : step.completed
                   ? "border-primary bg-primary text-primary-foreground"
                   : "border-border bg-background"
               }`}
            >
              {step.completed ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <span className="font-medium">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

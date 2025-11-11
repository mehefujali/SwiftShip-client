import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ArrowRight,
    CheckCircle,
    Globe,
    MapPin,
    PackagePlus,
    ShieldCheck,
    Truck,
    User,
} from "lucide-react";

import { Link } from "react-router-dom";
import { toast } from "sonner";
import logo from "@/assets/images/logo.png"; //
import type { FormEvent } from "react";

const HeroSection = () => {
    const handleTrackParcel = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trackingId = (
            e.currentTarget.elements.namedItem("trackingId") as HTMLInputElement
        ).value;
        if (!trackingId) {
            toast.error("Please enter a Tracking ID.");
            return;
        }

        toast.info(`Searching for parcel: ${trackingId}`);
    };

    return (
        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center py-20 md:py-32">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Reliable, Fast, Secure.
                    <br />
                    <span className="text-primary">Swift Ship</span> Delivers.
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                    Your most trusted partner for parcel delivery. Experience seamless
                    shipping, real-time tracking, and dedicated support, all in one place.
                </p>
                <form
                    onSubmit={handleTrackParcel}
                    className="flex w-full max-w-md items-center space-x-2"
                >
                    <Input
                        name="trackingId"
                        type="text"
                        placeholder="Enter Your Tracking ID"
                        className="h-12 text-base"
                    />
                    <Button type="submit" size="icon" className="h-12 w-12 shrink-0">
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src={logo}
                    alt="Swift Ship Hero"
                    className="w-full max-w-sm md:max-w-md"
                    style={{
                        filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.5))",
                    }}
                />
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const steps = [
        {
            icon: PackagePlus,
            title: "1. Book Your Parcel",
            description:
                "Easily create a new shipment request using our simple online form.",
        },
        {
            icon: Truck,
            title: "2. We Collect & Ship",
            description:
                "Our team collects the parcel from your location and ships it with care.",
        },
        {
            icon: CheckCircle,
            title: "3. Delivered & Confirmed",
            description:
                "Get real-time updates and a final confirmation upon successful delivery.",
        },
    ];

    return (
        <section className="bg-muted/50 py-20 md:py-28">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
                    We've simplified the entire process. Get your parcels delivered in
                    just 3 easy steps.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <Card key={step.title} className="text-left shadow-lg">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                <step.icon className="w-10 h-10 text-primary" />
                                <CardTitle>{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: MapPin,
            title: "Real-Time Tracking",
            description:
                "Monitor your parcel's journey from pickup to delivery with our live tracking system.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Handling",
            description:
                "We treat every parcel with the utmost care, ensuring it arrives safely and intact.",
        },
        {
            icon: Globe,
            title: "Nationwide Coverage",
            description:
                "From the busiest cities to the remotest areas, we deliver everywhere.",
        },
    ];

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose Swift Ship?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Our features are designed to give you peace of mind and a seamless
                        delivery experience.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah K.",
            role: "Small Business Owner",
            quote:
                "Swift Ship has revolutionized my e-commerce business. Their reliability and real-time tracking are game-changers. I can finally focus on my products!",
        },
        {
            name: "Ahmed R.",
            role: "Receiver",
            quote:
                "I always know exactly when my package will arrive. The 'Confirm Delivery' feature is so simple and gives me peace of mind. Highly recommended.",
        },
        {
            name: "Admin Pro Logistics",
            role: "Logistics Manager",
            quote:
                "As an admin, the dashboard is a dream. Managing users and tracking all parcels from one place has saved us countless hours of work.",
        },
    ];

    return (
        <section className="bg-muted/50 py-20 md:py-28">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our users think about
                        Swift Ship.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="flex flex-col shadow-lg">
                            <CardContent className="pt-6 flex-1">
                                <p className="italic text-muted-foreground">
                                    "{testimonial.quote}"
                                </p>
                            </CardContent>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-muted rounded-full">
                                        <User className="w-5 h-5 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaSection = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto">
                <div className="bg-card border rounded-lg shadow-xl p-10 md:p-16 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Ship with Swift Ship?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Join thousands of satisfied senders and receivers. Create your
                        account today and get started in minutes.
                    </p>

                    <img
                        src={logo}
                        alt="Swift Ship CTA"
                        className="w-full max-w-xs md:max-w-sm mx-auto"
                    />
                    <Button asChild size="lg" className="text-base mt-8">
                        <Link to="/register">Get Started Now</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

function Home() {
    return (
        <div className="flex flex-col">
            
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CtaSection />
        </div>
    );
}

export default Home
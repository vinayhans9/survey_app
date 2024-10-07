import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MessageIcon, StarIcon } from "@/components/icons";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import tailwindStyles from '../index.css?inline';

export const Widget: React.FC = (): JSX.Element => {
    const [rating, setRating] = useState<number>(3);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onSelectStar = (index: number) => {
        setRating(index + 1);
    }

    const submit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            feedback: form.feedback.value,
            rating,
        }
        setSubmitted(true);
        console.log(data)
    }

    return (
    <>
        <style>{tailwindStyles}</style>
        <div className="widget fixed bottom-4 right-4 z-50">
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="rounded-full shadow-lg hover:scale-105">
                        <MessageIcon className="mr-2 h-5 w-5" />
                        Feedback
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md">
                    <style>{tailwindStyles}</style>
                    {
                        submitted ? (<div>
                            <h3 className="text-lg font-bold">Thank you for your feedback!</h3>
                            <p className="mt-4">We appreciate your feedback. It helps us improve our product and provide better service to our customers</p>
                        </div>)
                            :
                            <div>
                                <h3 className="text-lg font-bold">Send us your feedback</h3>
                                <form className="space-y-2" onSubmit={submit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="feedback">Feedback</Label>
                                        <Textarea
                                            id="feedback"
                                            placeholder="Tell us what you think"
                                            className="min-h=[100px]"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            {[...Array(5)]?.map((_, index: number) => (
                                                <StarIcon
                                                    key={index}
                                                    onClick={() => onSelectStar(index)}
                                                    className={`h-5 w-5 cursor-pointer ${rating > index ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
                                                />
                                            ))}
                                        </div>
                                        <Button type="submit">Submit</Button>
                                    </div>
                                </form>
                            </div>
                    }

                </PopoverContent>
            </Popover>
        </div>
    </>
    )
}
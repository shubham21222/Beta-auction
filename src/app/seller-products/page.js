'use client';

import { useState } from "react";
import StepperForm from "./components/StepperForm";
import ItemForm from "./components/ItemForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UploadPhotosDocuments from "./components/UploadPhotosDocuments";
import ContactLogisticsForm from "./components/ContactLogisticsForm";
import ReviewInformation from "./components/ReviewInformation";
import ItemForm2 from "./Watches/ItemForm";

export default function Home() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-3xl mx-auto p-6">
                    {currentStep === 1 && (
                        <StepperForm
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 2 && selectedCategory === "Fine Art" && (
                        <ItemForm
                            setCurrentStep={setCurrentStep}
                            selectedCategory={selectedCategory}
                        />
                    )}

                    {currentStep === 3 && selectedCategory === "Fine Art" && (
                        <UploadPhotosDocuments
                            setCurrentStep={setCurrentStep}
                            selectedCategory={selectedCategory}
                        />
                    )}

                    {currentStep === 4 && selectedCategory === "Fine Art" && (
                        <ContactLogisticsForm
                            setCurrentStep={setCurrentStep}
                            selectedCategory={selectedCategory}
                        />
                    )}

                    {currentStep === 5 && selectedCategory === "Fine Art" && (
                        <ReviewInformation
                            setCurrentStep={setCurrentStep}
                            selectedCategory={selectedCategory}
                        />
                    )}

                    {currentStep === 2 && selectedCategory === "Watches" && (
                        <ItemForm2
                            setCurrentStep={setCurrentStep}
                            selectedCategory={selectedCategory}
                        />
                    )}

                    {currentStep === 3 && selectedCategory === "Watches" && (
                        <UploadPhotosDocuments
                            setCurrentStep={setCurrentStep}
                            selectedCategory={selectedCategory}
                        />
                    )}

                    {currentStep === 4 && selectedCategory === "Watches" && (
                        <ContactLogisticsForm
                            setCurrentStep={setCurrentStep}
                            selectedCategory={selectedCategory}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

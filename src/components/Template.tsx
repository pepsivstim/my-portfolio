'use client';
import { useState } from 'react';
import Header from "@/components/Header";

interface TemplateProps {
    children: React.ReactNode;
}

const Template = ( { children } : TemplateProps) => {

    // State for the current page
    const [currentPage, setCurrentPage] = useState<string>("/");

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-8 bg-sky-400'>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {children}
        </main>
    )
}

export default Template;
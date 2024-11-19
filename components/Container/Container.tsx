import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const ContainerProject: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <section
            className={`max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </section>
    );
};

export default ContainerProject;
